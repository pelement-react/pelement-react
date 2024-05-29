import { Watermark } from 'pelement-react'

function WatermarkImage() {
  return (
    <>
      <Watermark
        width={30}
        height={30}
        image="https://pelement-react.github.io/pelement-react/pelement-react.svg"
      >
        <div style={{ height: '500px' }} />
      </Watermark>
    </>
  )
}

export default WatermarkImage