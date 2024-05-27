import { Watermark } from 'pelement-react'

function WatermarkContent() {
  return (
    <>
      <Watermark content={['Element Plus', 'pelement-plus']}>
        <div style={{ height: '500px' }} />
      </Watermark>
    </>
  )
}

export default WatermarkContent