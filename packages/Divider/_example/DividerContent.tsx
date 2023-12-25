import { Divider, StarFilled } from 'pelement-react'

function DividerContent() {
  return (
    <>
      <div>
        <span>What you are you do not see, what you see is your shadow. </span>
        <Divider contentPosition="left">Rabindranath Tagore</Divider>
        <span>
          My wishes are fools, they shout across thy song, my Master. Let me but
          listen.
        </span>
        <Divider>
          <StarFilled />
        </Divider>
        <span>I cannot choose the best. The best chooses me.</span>
        <Divider contentPosition="right">Rabindranath Tagore</Divider>
      </div>
    </>
  )
}

export default DividerContent