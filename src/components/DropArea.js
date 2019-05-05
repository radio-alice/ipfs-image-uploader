import React from 'react'
import Dropzone from 'react-dropzone'

// collects files from user
function DropArea (onImageDrop) {
  return (
    <Dropzone onDrop={onImageDrop}
      accept="image/*" multiple={true}>
      {({getRootProps, getInputProps}) => (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
        </div>
      )}
    </Dropzone>
  )
}

export default DropArea