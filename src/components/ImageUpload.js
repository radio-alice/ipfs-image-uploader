import React from 'react'

class ImageUpload extends React.Component {
  constructor (props) {
    super(props)
  }
  render(){
    return (
      <div class="imageContainer">
        <img src={this.props.url} onLoad={() => {
          window.URL.revokeObjectURL(this.props.url)
        }}/>
        <p>Hash: {this.props.hash}</p>
      </div>
    );
  }
}
export default ImageUpload;