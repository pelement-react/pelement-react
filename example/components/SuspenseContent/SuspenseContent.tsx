import { Suspense } from "react"

function SuspenseContent(props) {
  const { children } = props

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </>
  )
}

export default SuspenseContent