import { forwardRef } from 'react'
import clsx from 'clsx'
import { LoadingProps } from './interface'
import './style'

const Loading: React.ForwardRefRenderFunction<HTMLDivElement, LoadingProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    loading = true,
    fullscreen = false,
    text,
    children,
  } = props

  return (
    <div
      ref={ref}
      style={style}
      className={
        clsx(
          'el-loading-parent--relative',
          className
        )
      }
    >
      {children}
      {loading &&
        <div
          className={
            clsx(
              {
                'el-loading-mask': true,
                'is-fullscreen': fullscreen
              }
            )
          }
        >
          <div className="el-loading-spinner">
            <svg className="circular" viewBox="0 0 50 50">
              <circle className="path" cx="25" cy="25" r="20" fill="none"></circle>
              {text &&
                <p className="el-loading-text">{text}</p>
              }
            </svg>
          </div>
        </div>
      }
    </div>
  )
}

const LoadingComponent = forwardRef<HTMLDivElement, LoadingProps>(Loading)

LoadingComponent.displayName = 'Loading'

export default LoadingComponent