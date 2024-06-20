import { Card } from 'pelement-react'

function CardShadow() {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Card style={{ width: '480px' }} shadow="always">Always</Card>
        <Card style={{ width: '480px' }} shadow="hover">Hover</Card>
        <Card style={{ width: '480px' }} shadow="never">Never</Card>
      </div>
    </>
  )
}

export default CardShadow