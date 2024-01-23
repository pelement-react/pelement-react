import { cloneElement, forwardRef } from 'react'
import { PopconfirmPopperProps } from './interface'
import clsx from 'clsx'
import { Button } from 'pelement-react'

const PopconfirmPopper: React.ForwardRefRenderFunction<HTMLDivElement, PopconfirmPopperProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    placement,
    title,
    width,
    icon,
    iconColor,
    hideIcon,
    confirmButtonText,
    cancelButtonText,
    onConfirm,
    onCancel,
    getFloatingProps,
    children,
  } = props

  const divStyle: React.CSSProperties = {
    width: width ? (typeof width === 'string' ? width : `${width}px`) : '150px',
    ...style,
  }

  // 图标
  function NewIcon() {
    if (hideIcon) {
      return <></>
    } else {
      return cloneElement(
        icon as React.ReactElement,
        {
          className: clsx(
            (icon as any)?.props.className,
            'el-popconfirm__icon'
          ),
          style: { color: iconColor }
        }
      )
    }
  }

  // 点击取消
  function handlerCancel(event: React.MouseEvent<{}, MouseEvent>) {
    if (onCancel) {
      console.log(event)
      onCancel(event)
    }
  }

  // 点击确认
  function handlerConfirm(event: React.MouseEvent<{}, MouseEvent>) {
    if (onConfirm) {
      onConfirm(event)
    }
  }

  return (
    <>
      <div
        ref={ref}
        style={divStyle}
        className={
          clsx(
            'el-popper is-light el-popover',
            className,
          )
        }
        data-popper-placement={placement}
        {...getFloatingProps()}
      >
        <div className="el-popconfirm">
          <div className="el-popconfirm__main">
            <NewIcon />
            {title}
          </div>
          <div className="el-popconfirm__action">
            <Button onClick={handlerCancel}>{cancelButtonText}</Button>
            <Button type="primary" onClick={handlerConfirm}>{confirmButtonText}</Button>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

const PopconfirmPopperComponent = forwardRef<HTMLDivElement, PopconfirmPopperProps>(PopconfirmPopper)

PopconfirmPopperComponent.displayName = 'PopconfirmPopper'

export default PopconfirmPopperComponent