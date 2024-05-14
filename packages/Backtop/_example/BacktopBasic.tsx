import { Backtop } from 'pelement-react'

function BacktopBasic() {
  return (
    <>
      Scroll down to see the bottom-right button.
      <Backtop right={100} bottom={100} />
    </>
  )
}

export default BacktopBasic