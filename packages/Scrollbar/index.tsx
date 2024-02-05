import { forwardRef, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { ScrollbarProps } from './interface'
import './style'
import { useOnMouseEvent } from '../_util/hooks/useOnMouseEvent'

const Scrollbar: React.ForwardRefRenderFunction<HTMLDivElement, ScrollbarProps> = (
  props,
) => {
  const {
    style,
    className,
    children,
  } = props

  const containerRef = useRef(null)
  const wrapRef = useRef(null)
  const viewRef = useRef(null)
  // 鼠标移入移出
  const [isEnter, setIsEnter] = useState(false)
  // 是否展示滚动条
  const [showBar, setShowBar] = useState(false)
  // 滚动条高度
  const [thumbHeight, setThumbHeight] = useState('')
  const [thumbTransform, setThumbTransform] = useState('translateY(0%)')

  useOnMouseEvent(containerRef, (_e, type) => {
    setIsEnter(type === 'mouseenter' ? true : false)
  })

  useEffect(() => {
    if (containerRef.current && wrapRef.current && viewRef.current) {
      // 窗口高度
      const wrapHeight = (wrapRef.current as HTMLElement).offsetHeight
      // 滚动高度
      const viewHeight = (viewRef.current as HTMLElement).scrollHeight
      const showBarResult = viewHeight > wrapHeight ? true : false
      setShowBar(showBarResult)

      // 获取滚动条的高度
      setThumbHeight(wrapHeight / viewHeight * wrapHeight + 'px')
    }
  }, [children])

  // 滚动事件
  function handlerScroll() {
    if (wrapRef.current && viewRef.current) {
      // 窗口高度
      const wrapHeight = (wrapRef.current as HTMLElement).offsetHeight
      // 滚动高度
      const viewHeight = (viewRef.current as HTMLElement).scrollHeight
      const scrollTop = (wrapRef.current as HTMLElement).scrollTop
      setThumbTransform(`translateY(${scrollTop / (viewHeight - wrapHeight) * 100}%)`)
    }
  }

  return (
    <>
      <div
        ref={containerRef}
        style={style}
        className={
          clsx(
            'el-scrollbar',
            className,
          )
        }
      >
        <div
          ref={wrapRef}
          className="el-scrollbar__wrap el-scrollbar__wrap--hidden-default"
          style={{ height: '400px' }}
          onScroll={handlerScroll}
        >
          <div
            ref={viewRef}
            className="el-scrollbar__view"
          >
            {children}
          </div>
        </div>
        <div className="el-scrollbar__bar is-horizontal" style={{ display: 'none' }}>
          <div className="el-scrollbar__thumb" style={{ transform: 'translateX(0%)' }}></div>
        </div>
        <div className="el-scrollbar__bar is-vertical" style={{ display: showBar && isEnter ? '' : 'none' }}>
          <div className="el-scrollbar__thumb" style={{ height: thumbHeight, transform: thumbTransform }}></div>
        </div>
      </div>
    </>
  )
}

const ScrollbarComponent = forwardRef<HTMLDivElement, ScrollbarProps>(Scrollbar)

ScrollbarComponent.displayName = 'ScrollbarComponent'

export default ScrollbarComponent