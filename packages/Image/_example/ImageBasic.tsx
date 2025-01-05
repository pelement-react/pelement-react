import { Image, ImageProps } from 'pelement-react'
import './ImageBasic.scss'

function ImageBasic() {
  const fits = [
    'fill',
    'contain',
    'cover',
    'none',
    'scale-down',
  ] as ImageProps['fit'][]
  const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

  return (
    <>
      <div className="demo-basic-image">
        {
          fits.map((fit: any, index: number) =>
            <div key={index} className="block">
              <span className="demonstration">{fit}</span>
              <Image style={{ width: '100px', height: '100px' }} src={url} fit={fit} />
            </div>
          )}
      </div>
    </>
  )
}

export default ImageBasic