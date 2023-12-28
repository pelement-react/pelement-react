import { Alert } from 'pelement-react'
import './AlertBasic.scss'

function AlertBasic() {
  return (
    <>
      <Alert title="success alert" type="success" />
      <Alert title="info alert" type="info" />
      <Alert title="warning alert" type="warning" />
      <Alert title="error alert" type="error" />
    </>
  )
}

export default AlertBasic