import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import ShareSvg from '@element-plus/icons-svg/share.svg?react'

const Share: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
  } = props

  return (
    <i
      ref={ref}
      style={style}
      className={
        clsx(
          'el-icon',
          className,
        )
      }
    >
      <ShareSvg />
    </i>
  )
}

const ShareComponent = forwardRef<HTMLDivElement, IconProps>(Share)

ShareComponent.displayName = 'Share'

export default ShareComponent