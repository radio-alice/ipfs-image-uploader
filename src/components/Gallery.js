import React from 'react';
import ipfsClient from 'ipfs-http-client'
import DropArea from './DropArea'
import ImageUpload from './ImageUpload'

// handles uploading, searching and passing results to image containers
// pulls img and search data from DropArea and input elements
class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      search: "",
    }
  }

  async filesToBuffer(files) {
    window.URL = window.URL || window.webkitURL
    for (let i = 0; i < files.length; i++) {
      let url = window.URL.createObjectURL(files[i]);
      let fileReader = new FileReader()
      fileReader.onload = (file) => {
        this.bufferToIpfs(file, url)
      }
      fileReader.readAsArrayBuffer(files[i])
    }
  }

  async bufferToIpfs(file, url) {
    const buffer = Buffer.from(file.target.result)

    // create a new ipfs client pointing to infura
    const ipfs = ipfsClient({
      host: 'ipfs.infura.io',
      port: '5001',
      protocol: 'https',
    })

    // use the ipfs.add method to pin files
    try {
      const result = await ipfs.add(buffer)
      const hash = result[0].hash
      this.setState({
        images: this.state.images.concat({
          hash: hash,
          url: url,
        }),
      })
    } catch(err) {
      alert(err)
    }
  }

  handleSearchChange(e){
    this.setState({search: e.target.value})
  }

  async searchHash(){
    const hash = this.state.search
    const ipfs = ipfsClient({
      host: 'ipfs.infura.io',
      port: '5001',
      protocol: 'https',
    })

    try {
      const result = await ipfs.cat(hash)
      const blob = new Blob([result], {type:"image/*"})
      const url = window.URL.createObjectURL(blob)
      this.setState({
        images: this.state.images.concat({
          hash: hash,
          url: url,
        }),
      })
    }
    catch(e) {
      alert(e)
    }
  }

  render() {
    const images = Array.from(this.state.images)
    const imageUploads = images.map(image => {
      return (<ImageUpload key={image.hash}
                          hash={image.hash}
                          url={image.url}></ImageUpload>)
    })
    return (
      <main>
        <div className="left">
          <section className="searchbar">
            <input type="text" placeholder="Enter IPFS Content ID here"
              onChange={this.handleSearchChange.bind(this)}/>
            <input type="submit" value="Search IPFS"
              onClick={this.searchHash.bind(this)}/>
          </section>
          <section className="dropzone">
            { DropArea(this.filesToBuffer.bind(this)) }
          </section>
        </div>
        <section className="gallery">{ imageUploads }</section>
      </main>
    )
  }
}

export default Gallery