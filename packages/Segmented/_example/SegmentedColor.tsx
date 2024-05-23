import { Segmented } from 'pelement-react'
import './SegmentedBasic.scss'

function SegmentedColor() {
  const options = ['Delicacy', 'Desserts&Drinks', 'Fresh foods', 'Supermarket']

  return (
    <>
      <div className="custom-style">
        <Segmented options={options} />
      </div>
    </>
  )
}

export default SegmentedColor