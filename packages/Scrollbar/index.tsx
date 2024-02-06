import { forwardRef, MouseEvent, useEffect, useRef, useState } from 'react'
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
    minSize = 20,
    children,
  } = props

  const containerRef = useRef(null)
  const wrapRef = useRef(null)
  const viewRef = useRef(null)
  const barRef = useRef(null)
  // 鼠标移入移出
  const [isEnter, setIsEnter] = useState(false)
  // 是否展示滚动条
  const [showBar, setShowBar] = useState(false)
  // 滚动条高度
  const [thumbHeight, setThumbHeight] = useState(0)
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
      setThumbHeight(Math.max(wrapHeight / viewHeight * wrapHeight, minSize))
    }
  }, [children])

  // 滚动事件
  function handlerScroll() {
    if (wrapRef.current && viewRef.current && barRef.current) {
      // 窗口高度
      const wrapHeight = (wrapRef.current as HTMLElement).offsetHeight
      // 滚动高度
      const wrapScrollHeight = (wrapRef.current as HTMLElement).scrollHeight
      const scrollTop = (wrapRef.current as HTMLElement).scrollTop
      // 滚动条高度
      const barHeight = (barRef.current as HTMLElement).offsetHeight

      // 滚动位置
      setThumbTransform(`translateY(${(scrollTop) / (wrapScrollHeight - wrapHeight) * ((barHeight - thumbHeight) / thumbHeight) * 100}%)`)
    }
  }

  // 点击滚动条
  function handlerBar(e: MouseEvent<HTMLDivElement>) {
    console.log(e)
  }

  // 阻止点击事件冒泡
  function handlerThumb(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
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
        <div
          ref={barRef}
          className="el-scrollbar__bar is-vertical"
          style={{ display: showBar && isEnter ? '' : 'none' }}
          onClick={handlerBar}
        >
          <div onClick={handlerThumb} className="el-scrollbar__thumb" style={{ height: `${thumbHeight}px`, transform: thumbTransform }}></div>
        </div>
      </div>
    </>
  )
}

const ScrollbarComponent = forwardRef<HTMLDivElement, ScrollbarProps>(Scrollbar)

ScrollbarComponent.displayName = 'ScrollbarComponent'

export default ScrollbarComponent