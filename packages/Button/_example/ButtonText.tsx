import { Button } from 'pelement-react'

function ButtonText() {
  const buttons = [
    { type: '', text: 'plain' },
    { type: 'primary', text: 'primary' },
    { type: 'success', text: 'success' },
    { type: 'info', text: 'info' },
    { type: 'warning', text: 'warning' },
    { type: 'danger', text: 'danger' },
  ]

  const textList = buttons.map((button, index) =>
    <Button
      key={index}
      type={button.type as any}
      text
    >
      {button.text}
    </Button>
  )

  const bgList = buttons.map((button, index) =>
    <Button
      key={index}
      type={button.type as any}
      text
      bg
    >
      {button.text}
    </Button>
  )

  const disabledList = buttons.map((button, index) =>
    <Button
      key={index}
      type={button.type as any}
      text
      disabled
    >
      {button.text}
    </Button>
  )

  return (
    <>
      <p>Basic text button</p>
      <div className="flex justify-space-between mb-4 flex-wrap gap-4">
        {textList}
      </div>

      <p>Background color always on</p>
      <div className="flex justify-space-between mb-4 flex-wrap gap-4">
        {bgList}
      </div>

      <p>Disabled text button</p>
      <div className="flex justify-space-between flex-wrap gap-4">
        {disabledList}
      </div>
    </>
  )
}

export default ButtonText