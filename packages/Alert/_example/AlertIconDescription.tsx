import { Alert } from 'pelement-react'

function AlertIconDescription() {
  return (
    <>
      <Alert
        title="success alert"
        type="success"
        description="more text description"
        showIcon
      />
      <Alert
        title="info alert"
        type="info"
        description="more text description"
        showIcon
      />
      <Alert
        title="warning alert"
        type="warning"
        description="more text description"
        showIcon
      />
      <Alert
        title="error alert"
        type="error"
        description="more text description"
        showIcon
      />
    </>
  )
}

export default AlertIconDescription