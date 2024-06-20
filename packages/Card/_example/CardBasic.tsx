import { Card } from 'pelement-react'

function CardBasic() {
  const list = [1, 2, 3, 4]

  return (
    <>
      <Card
        style={{ maxWidth: '480px' }}
        header={

          <div className="card-header">
            <span>Card name</span>
          </div>
        }
        footer="Footer content"
      >
        {list.map((item, index) =>
          <p key={index} className="text item">{'List item ' + item}</p>
        )}
      </Card>
    </>
  )
}

export default CardBasic