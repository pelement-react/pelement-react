import { forwardRef } from 'react'
import clsx from 'clsx'
import { LinkProps } from './interface'
import './style'

const Link: React.ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    children,
    type,
    href,
    target,
    disabled = false,
    underline = true,
    icon
  } = props

  // 图标
  const IconNode = icon ? <>{icon}</> : <></>

  return (
    <a
      ref={ref}
      style={style}
      className={
        clsx(
          className,
          'el-link',
          (type ? `el-link--${type}` : 'el-link--default'),
          (disabled ? 'is-disabled' : ''),
          (underline ? 'is-underline' : '')
        )
      }
      href={disabled || !href ? undefined : href}
      target={!target ? undefined : target}
    >
      {IconNode}
      <span className="el-link__inner">
        {children}
      </span>
    </a>
  )
}

const LinkComponent = forwardRef<HTMLAnchorElement, LinkProps>(Link)

LinkComponent.displayName = 'Link'

export default LinkComponent