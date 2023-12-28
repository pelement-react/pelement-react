import { Alert } from 'pelement-react'

function AlertEffect() {
  return (
    <>
      <Alert title="success alert" type="success" effect="dark" />
      <Alert title="info alert" type="info" effect="dark" />
      <Alert title="warning alert" type="warning" effect="dark" />
      <Alert title="error alert" type="error" effect="dark" />
    </>
  )
}

export default AlertEffect