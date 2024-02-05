import { Scrollbar } from 'pelement-react'
import './ScrollbarBasic.css'

function ScrollbarBasic() {
  return (
    <>
      <Scrollbar height="400px">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) =>

            <p key={index} className="scrollbar-demo-item">{item}</p>
          )
        }
      </Scrollbar>
    </>
  )
}

export default ScrollbarBasic