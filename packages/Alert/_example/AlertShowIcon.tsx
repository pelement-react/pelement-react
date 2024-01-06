import { Alert } from 'pelement-react'

function AlertIcon() {
  return (
    <>
      <Alert title="success alert" type="success" showIcon />
      <Alert title="info alert" type="info" showIcon />
      <Alert title="warning alert" type="warning" showIcon />
      <Alert title="error alert" type="error" showIcon />
    </>
  )
}

export default AlertIcon