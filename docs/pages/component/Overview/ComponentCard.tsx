import { useNavigate } from 'react-router-dom'
import './ComponentCard.scss'

function ComponentCard(props) {
  const { title, path, svg } = props
  const navigate = useNavigate()

  function goPage() {
    if (path) {
      navigate(path)
    }
  }

  return (
    <>
      <div className="el-card is-hover-shadow" onClick={goPage}>
        <div className="el-card__header">
          <span className="el-text is-truncated">{title}</span>
        </div>
        <div className="el-card__body">
          {svg}
        </div>
      </div>
    </>
  )
}

export default ComponentCard