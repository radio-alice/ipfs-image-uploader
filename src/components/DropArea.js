import React from 'react'
import Dropzone from 'react-dropzone'

function DropArea (onImageDrop) {
  return (
    <Dropzone onDrop={onImageDrop}
      accept="image/*" multiple={true}>
      {({getRootProps, getInputProps}) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  )
}

export default DropArea