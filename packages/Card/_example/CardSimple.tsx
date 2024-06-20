import { Card } from 'pelement-react'

function CardSimple() {
  const list = [1, 2, 3, 4]

  return (
    <>
      <Card
        style={{ maxWidth: '480px' }}
      >
        {list.map((item, index) =>
          <p key={index} className="text item">{'List item ' + item}</p>
        )}
      </Card>
    </>
  )
}

export default CardSimple