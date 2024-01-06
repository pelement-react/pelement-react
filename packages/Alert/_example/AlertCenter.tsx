import { Alert } from 'pelement-react'

function AlertCenter() {
  return (
    <>
      <Alert title="success alert" type="success" center showIcon />
      <Alert title="info alert" type="info" center showIcon />
      <Alert title="warning alert" type="warning" center showIcon />
      <Alert title="error alert" type="error" center showIcon />
    </>
  )
}

export default AlertCenter