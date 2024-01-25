import { forwardRef } from 'react'
import clsx from 'clsx'
import { TagProps } from './interface'
import './style'
import { Close } from 'pelement-react'

const Tag: React.ForwardRefRenderFunction<HTMLDivElement, TagProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    type = '',
    closable = false,
    size = '',
    effect = 'light',
    round = false,
    children,
  } = props

  function CloseContent() {
    if (closable) {
      return <Close className="el-tag__close" />
    } else {
      return <></>
    }
  }

  return (
    <span
      ref={ref}
      style={style}
      className={
        clsx(
          'el-tag el-tag--light',
          (type ? `el-tag--${type}` : ''),
          (size ? `el-tag--${size}` : ''),
          (effect ? `el-tag--${effect}` : ''),
          (round ? 'is-round' : ''),
          className
        )
      }
    >
      <span className="el-tag__content">
        {children}
      </span>
      <CloseContent />
    </span>
  )
}

const TagComponent = forwardRef<HTMLDivElement, TagProps>(Tag)

TagComponent.displayName = 'Tag'

export default TagComponent