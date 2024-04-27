import lineHgitht from '../../../../assets/line-height.png'

function TypographyLineHeight() {
  return (
    <>
      <img
        className="lineH-left"
        src={lineHgitht}
      />
      <ul className="lineH-right">
        <li>line-height:1 <span>No line height</span></li>
        <li>line-height:1.3 <span>Compact</span></li>
        <li>line-height:1.5 <span>Regular</span></li>
        <li>line-height:1.7 <span>Loose</span></li>
      </ul>
    </>
  )
}

export default TypographyLineHeight