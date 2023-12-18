import { Button } from '../../../../../packages'

function ButtonBasic() {
  return (
    <>
      <h3>使用 type、plain、round 和 circle 来定义按钮的样式。</h3>
      <div className="mb-4">
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="info">Info</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </div>
      <div className="mb-4">
        <Button plain>Plain</Button>
        <Button type="primary" plain>Primary</Button>
        <Button type="success" plain>Success</Button>
        <Button type="info" plain>Info</Button>
        <Button type="warning" plain>Warning</Button>
        <Button type="danger" plain>Danger</Button>
      </div>
      <div className="mb-4">
        <Button round>Round</Button>
        <Button type="primary" round>Primary</Button>
        <Button type="success" round>Success</Button>
        <Button type="info" round>Info</Button>
        <Button type="warning" round>Warning</Button>
        <Button type="danger" round>Danger</Button>
      </div>
      <div className="mb-4">
        <Button circle>1</Button>
        <Button type="primary" circle>2</Button>
        <Button type="success" circle>3</Button>
        <Button type="info" circle>4</Button>
        <Button type="warning" circle>5</Button>
        <Button type="danger" circle>6</Button>
      </div>
    </>
  )
}

export default ButtonBasic