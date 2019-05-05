import React from 'react'

class ImageUpload extends React.Component {
  constructor (props) {
    super(props)
  }
  render(){
    return (
      <div class="imageContainer">
        <p>Image Here</p>
        <p>{this.props.hash}</p>
      </div>
    );
  }
}
export default ImageUpload;