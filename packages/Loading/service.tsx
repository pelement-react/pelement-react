import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Root, createRoot } from 'react-dom/client'
import LoadingComponent from './index'
import { LoadingType } from './interface'

let el
let root: Root
// 打开全屏loading
let open: (loading: LoadingType) => void
// 关闭loading
let close: () => void

function LoadingContainer() {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState<LoadingType>({})

  // 添加loading
  open = (loading: LoadingType) => {
    setLoading(loading)
    setShow(true)
  }

  // 移除loading
  close = () => {
    setShow(false)
  }

  return (
    <>
      {show && createPortal(
        <LoadingComponent
          fullscreen={true}
          text={loading.text}
        />,
        el
      )}
    </>
  )
}

const loading = {
  open: (loading: LoadingType) => {
    open(loading)
  },
  close: () => {
    close()
  }
}

// 挂载容器到页面
const createLoading = () => {
  el = document.createElement('div')
  el.id = 'el-loading-container'
  document.body.append(el)
  root = createRoot(el)
  root.render(<LoadingContainer />)
}
createLoading()

export default loading
