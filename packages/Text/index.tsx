import { forwardRef } from 'react'
import clsx from 'clsx'
import { TextProps } from './interface'
import './style'

const Text: React.ForwardRefRenderFunction<HTMLSpanElement, TextProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    children,
    type,
    size,
    truncated = false,
    lineClamp,
  } = props

  const spanStyle: React.CSSProperties = {
    WebkitLineClamp: lineClamp,
    ...style,
  }

  return (
    <span
      ref={ref}
      style={spanStyle}
      className={
        clsx(
          className,
          'el-text',
          (type ? `el-text--${type}` : ''),
          (size ? `el-text--${size}` : ''),
          (truncated ? 'is-truncated' : ''),
          (lineClamp ? 'is-line-clamp' : '')
        )
      }
    >
      {children}
    </span>
  )
}

const TextComponent = forwardRef<HTMLSpanElement, TextProps>(Text)

TextComponent.displayName = 'Text'

export default TextComponent