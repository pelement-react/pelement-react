import { CSSProperties, forwardRef } from 'react'
import clsx from 'clsx'
import { DrawerProps } from './interface'
import './style'
import { Close } from 'pelement-react'

const Drawer: React.ForwardRefRenderFunction<HTMLDivElement, DrawerProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    open = false,
    direction = 'rtl',
    title,
    onClose,
    header,
    footer,
    withHeader = true,
    size = '30%',
    showClose = true,
    children,
  } = props

  const divStyle: CSSProperties = {
    ...style,
    display: open ? '' : 'none'
  }

  function Header() {
    if (header) {
      return <>{header}</>
    } else {
      return <>
        <span role="heading" className="el-drawer__title">
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
      <div
        className={
          clsx(
            'el-drawer open',
            direction
          )
        }
        role="dialog"
        style={{
          width: ['ltr', 'rtl'].includes(direction) ? size : '',
          height: ['ttb', 'btt'].includes(direction) ? size : '',
        }}
      >
        <span className="el-drawer__sr-focus"></span>
        {/* header */}
        {
          withHeader &&
          <header className="el-drawer__header">
            <Header />
            {/* 右上角叉 */}
            {
              showClose &&
              <button className="el-drawer__close-btn" type="button" onClick={onClose}>
                <Close className="el-drawer__close" />
              </button>
            }
          </header>
        }
        {/* body */}
        <div className="el-drawer__body">
          {children}
        </div>
        {/* footer */}
        {
          footer &&
          <div className="el-drawer__footer">
            {footer}
          </div>
        }
      </div>
    </div>
  )
}

const DrawerComponent = forwardRef<HTMLDivElement, DrawerProps>(Drawer)

DrawerComponent.displayName = 'DrawerComponent'

export default DrawerComponent