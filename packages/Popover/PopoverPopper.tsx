import clsx from 'clsx'
import { PopoverPopperProp } from './interface'
import { forwardRef } from 'react'

const PopoverPopper: React.ForwardRefRenderFunction<HTMLDivElement, PopoverPopperProp> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    placement,
    title,
    content,
    getFloatingProps,
    children,
  } = props

  function PopoverContent() {
    if (typeof content === 'string') {
      return <>
        <span>{content}</span>
      </>
    } else {
      return <>{content}</>
    }
  }

  const divStyle: React.CSSProperties = {
    width: '200px',
    ...style,
  }

  return (
    <>
      <div
        ref={ref}
        style={divStyle}
        className={
          clsx(
            'el-popper is-light el-popover el-popover--plain',
            className,
          )
        }
        data-popper-placement={placement}
        {...getFloatingProps()}
      >
        <div
          className="el-popover__title"
          role="title"
        >{title}</div>
        <PopoverContent />
        {children}
      </div>
    </>
  )
}

const PopoverPopperComponent = forwardRef<HTMLDivElement, PopoverPopperProp>(PopoverPopper)

PopoverPopperComponent.displayName = 'PopoverPopper'

export default PopoverPopperComponent