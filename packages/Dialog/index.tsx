import { CSSProperties, forwardRef } from 'react'
import clsx from 'clsx'
import { DialogProps } from './interface'
import './style'
import { Close } from 'pelement-react'

const Dialog: React.ForwardRefRenderFunction<HTMLDivElement, DialogProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    open = false,
    width = '50%',
    title,
    footer,
    onClose,
    showClose = true,
    header,
    children,
  } = props

  const divStyle: CSSProperties = {
    zIndex: 2015,
    ...style,
    display: open ? '' : 'none',
  }

  function Header() {
    if (header) {
      return <>{header}</>
    } else {
      return <>
        <span role="heading" className="el-dialog__title">
          {title}
        </span>
      </>
    }
  }

  return (
    <div
      ref={ref}
      style={divStyle}
      className={
        clsx(
          'el-overlay',
          className
        )
      }
    >
      <div role="dialog" className="el-overlay-dialog">
        <div className="el-dialog" style={{ ['--el-dialog-width' as string]: width }}>
          <header className="el-dialog__header">
            <Header />
            {/* 右上角叉 */}
            {
              showClose &&
              <button aria-label="Close this dialog" className="el-dialog__headerbtn" type="button" onClick={onClose}>
                <Close className="el-dialog__close" />
              </button>
            }
          </header>
          <div id="el-id-9273-97" className="el-dialog__body">
            {children}
          </div>
          <footer className="el-dialog__footer">
            {footer}
          </footer>
        </div>
      </div>
    </div>
  )
}

const DialogComponent = forwardRef<HTMLDivElement, DialogProps>(Dialog)

DialogComponent.displayName = 'Dialog'

export default DialogComponent