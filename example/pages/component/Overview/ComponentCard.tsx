import './ComponentCard.scss'

function ComponentCard(props) {
  const { title, svg } = props

  return (
    <>
      <div className="el-card is-hover-shadow">
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