import React from 'react';
import ipfsClient from 'ipfs-http-client'
import DropArea from './DropArea'
import ImageUpload from './ImageUpload'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      search: "",
    }
  }

  onImageDrop(files) {
    window.URL = window.URL || window.webkitURL

    this.filesToBuffer(files)
  }

  async filesToBuffer(files) {
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
    const result = await ipfs.add(buffer)
    const hash = result[0].hash
    this.setState({
      images: this.state.images.concat({
        hash: hash,
        url: url,
      }),
    })
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

  render() {
    const images = Array.from(this.state.images)
    const imageUploads = images.map(image => {
      return (<ImageUpload key={image.hash}
                          hash={image.hash}
                          url={image.url}></ImageUpload>)
    })
    return (
      <main>
        <section className="dropzone">
          { DropArea(this.onImageDrop.bind(this)) }
        </section>
        <section className="searchbar">
          <input type="text" placeholder="enter hash here"
            onChange={this.handleSearchChange.bind(this)}/>
          <input type="submit" value="Search IPFS"
            onClick={this.searchHash.bind(this)}/>
        </section>
        <section className="gallery">{ imageUploads }</section>
      </main>
    )
  }
}

export default Gallery