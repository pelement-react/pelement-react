import pingfang from '../../../../assets/term-pingfang.png'
import hiragino from '../../../../assets/term-hiragino.png'
import microsoft from '../../../../assets/term-microsoft.png'
import helvetica from '../../../../assets/term-helvetica.png'
import arial from '../../../../assets/term-arial.png'
import './TypographyFont.scss'

function TypographyFont() {
  return (
    <>
      <div className="demo-term-box">
        <img src={pingfang} alt="" />
        <img src={hiragino} alt="" />
        <img src={microsoft} alt="" />
        <img src={helvetica} alt="" />
        <img src={arial} alt="" />
      </div>
    </>
  )
}

export default TypographyFont