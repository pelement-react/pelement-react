import { Button, Space } from 'pelement-react'

function SpaceWrap() {
  return (
    <>
      <Space wrap>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) =>
            <div key={index}>
              <Button text> Text button {item} </Button>
            </div>
          )
        }
      </Space >
    </>
  )
}

export default SpaceWrap