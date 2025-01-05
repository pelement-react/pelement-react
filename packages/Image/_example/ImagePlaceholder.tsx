import { Image } from 'pelement-react'
import './ImagePlaceholder.scss'

function ImagePlaceholder() {
  const src = 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'

  return (
    <>
      <div className="demo-image__placeholder">
        <div className="block">
          <span className="demonstration">Default</span>
          <Image src={src} />
        </div>
        <div className="block">
          <span className="demonstration">Custom</span>
          <Image src={src} placeholder={<div className="image-slot">Loading<span className="dot">...</span></div>} />
        </div>
      </div >
    </>
  )
}

export default ImagePlaceholder