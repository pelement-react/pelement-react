import { CSSProperties, forwardRef, MouseEvent, useEffect, useState } from 'react'
import { BacktopProps } from './interface'
import './style'
import clsx from 'clsx'

const Backtop: React.ForwardRefRenderFunction<HTMLDivElement, BacktopProps> = (
  props,
  ref
) => {
  const {
    style,
    className,
    visibilityHeight = 200,
    right = 40,
    bottom = 40,
    target,
    children,
    onClick,
  } = props

  const divStyle: CSSProperties = {
    ...style,
    right: `${right}px`,
    bottom: `${bottom}px`,
  }
  const [visible, setVisible] = useState(false)

  // 滚动到顶部
  function scrollToTop(event: MouseEvent<HTMLDivElement>) {
    if (target?.current) {
      target.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    if (onClick) {
      onClick(event)
    }
  }

  // 监听滚动事件
  function handleScroll() {
    // 获取滚动的高度
    let scrollTop = 0
    if (target?.current) {
      scrollTop = target.current.scrollTop
    } else {
      scrollTop = window.scrollY
    }
    setVisible(scrollTop > visibilityHeight)
  }

  // 组件卸载时移除监听事件
  useEffect(() => {
    if (target?.current) {
      target.current.addEventListener('scroll', handleScroll)
      return () => target.current?.removeEventListener('scroll', handleScroll)
    } else {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [visibilityHeight, target])

  function NewChildren() {
    if (children) {
      return <>{children}</>
    } else {
      return <i className="el-icon el-backtop__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path fill="currentColor" d="M512 320 192 704h639.936z"></path>
        </svg>
      </i>
    }
  }

  return (
    <>
      {visible &&
        <div
          ref={ref}
          className={
            clsx(
              'el-backtop',
              className
            )
          }
          style={divStyle}
          onClick={scrollToTop}
        >
          <NewChildren />
        </div>
      }
    </>
  )
}

const BacktopComponent = forwardRef<HTMLDivElement, BacktopProps>(Backtop)

BacktopComponent.displayName = 'Backtop'

export default BacktopComponent