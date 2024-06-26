import { forwardRef } from 'react'
import clsx from 'clsx'
import { PageHeaderProps } from './interface'
import './style'

const PageHeader: React.ForwardRefRenderFunction<HTMLDivElement, PageHeaderProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    icon,
    title = 'Back',
    breadcrumb,
    content,
    extra,
    onBack,
    children,
  } = props

  function handleBack() {
    if (onBack) {
      onBack()
    }
  }

  function Icon() {
    if (icon) {
      return <>
        <div aria-label="Back" className="el-page-header__icon">
          {icon}
        </div>
      </>
    } else if (icon === null) {
      return <></>
    } else {
      return <>
        <div aria-label="Back" className="el-page-header__icon">
          <i className="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"></path>
              <path fill="currentColor" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"></path>
            </svg>
          </i>
        </div>
      </>
    }
  }

  return (
    <>
      <div
        ref={ref}
        style={style}
        className={
          clsx(
            'el-page-header el-page-header--has-breadcrumb el-page-header--has-extra is-contentful',
            className
          )
        }
      >
        {breadcrumb &&
          <div className="el-page-header__breadcrumb">
            {breadcrumb}
          </div>
        }
        <div className="el-page-header__header">
          <div className="el-page-header__left">
            <div
              className="el-page-header__back"
              role="button"
              tabIndex={0}
              onClick={handleBack}
            >
              <Icon />
              <div className="el-page-header__title">{title}</div>
            </div>
            <div className="el-divider el-divider--vertical" role="separator" style={{ ['--el-border-style' as string]: 'solid' }}>
            </div>
            {content &&
              <div className="el-page-header__content">
                {content}
              </div>
            }
          </div>
          {extra &&
            <div className="el-page-header__extra">
              {extra}
            </div>
          }
        </div>
        {children &&
          <div className="el-page-header__main">
            {children}
          </div>
        }
      </div>
    </>
  )
}

const PageHeaderComponent = forwardRef<HTMLDivElement, PageHeaderProps>(PageHeader)

PageHeaderComponent.displayName = 'PageHeader'

export default PageHeaderComponent