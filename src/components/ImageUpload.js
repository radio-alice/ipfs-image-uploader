import React from 'react'

class ImageUpload extends React.Component {
  render(){
    return (
      <div class="imageContainer">
        <img src={this.props.url}
        onLoad={() => {window.URL.revokeObjectURL(this.props.url)}}
        alt="Your Upload"
        />
        <p>Hash: {this.props.hash}</p>
      </div>
    );
  }
}
export default ImageUpload;