import { Alert } from 'pelement-react'

function AlertClose() {
  function hello() {
    alert('Hello World!')
  }

  return (
    <>
      <Alert title="unclosable alert" type="success" closable={false} />
      <Alert title="customized close-text" type="info" closeText="Gotcha" />
      <Alert title="alert with callback" type="warning" close={hello} />
    </>
  )
}

export default AlertClose