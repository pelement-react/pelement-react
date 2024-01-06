import { Alert } from 'pelement-react'

function AlertDescription() {
  return (
    <>
      <Alert
        title="with description"
        type="success"
        description="This is a description."
      />
    </>
  )
}

export default AlertDescription