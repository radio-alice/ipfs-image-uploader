import React from 'react'

// takes in url/cid and displays image/cid
class ImageUpload extends React.Component {
  render(){
    return (
      <div className="imageContainer">
        <img src={this.props.url}
        onLoad={() => {window.URL.revokeObjectURL(this.props.url)}}
        alt="Your Upload"
        />
        <p>CID: {this.props.hash}</p>
      </div>
    );
  }
}
export default ImageUpload;