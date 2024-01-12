import { Button, Result } from 'pelement-react'

function ResultIcon() {
  return (
    <>
      <Result
        icon={<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />}
        mainTitle="404"
        subTitle="Sorry, request error"
        extra={<Button type="primary">Back</Button>}
      ></Result>
    </>
  )
}

export default ResultIcon