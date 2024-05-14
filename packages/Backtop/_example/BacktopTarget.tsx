import { createRef } from 'react'
import { Backtop } from 'pelement-react'

function BacktopTarget() {
  const targetRef = createRef<HTMLDivElement>()

  return (
    <>
      <div style={{ height: '200px', overflow: 'auto' }} ref={targetRef}>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
        <div style={{ height: '100px', border: '1px solid #efefef' }}>target</div>
      </div>
      <Backtop target={targetRef} right={160} bottom={100} />
    </>
  )
}

export default BacktopTarget