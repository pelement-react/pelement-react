import { Image, Picture } from 'pelement-react'
import './ImageError.scss'

function ImageError() {
  return (
    <>
      <div className="demo-image__error">
        <div className="block">
          <span className="demonstration">Default</span>
          <Image />
        </div>
        <div className="block">
          <span className="demonstration">Custom</span>
          <Image error={<div className="image-slot">
            <Picture />
          </div>}>
          </Image>
        </div>
      </div>
    </>
  )
}

export default ImageError