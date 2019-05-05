import React from 'react';
import ipfsClient from 'ipfs-http-client'
import DropArea from './DropArea'
import ImageUpload from './ImageUpload'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hashes: [],
    }
  }

  onImageDrop(files) {
    this.filesToBuffer(files)
  }

  async filesToBuffer(files) {
    for (let i = 0; i < files.length; i++) {
      let fileReader = new FileReader()
      fileReader.onload = (file) => {
        this.bufferToIpfs(file)
      }
      fileReader.readAsArrayBuffer(files[i])
    }
  }

  async bufferToIpfs(file) {
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
      hashes: this.state.hashes.concat(hash),
    })
  }

  render() {
    const hashes = Array.from(this.state.hashes)
    const images = hashes.map((hash) => {
      return <ImageUpload key={hash} hash={hash}></ImageUpload>
    })
    return (
      <main>
        <header>{ DropArea(this.onImageDrop.bind(this)) }</header>
        <section>{ images }</section>
      </main>
    )
  }
}

export default Gallery