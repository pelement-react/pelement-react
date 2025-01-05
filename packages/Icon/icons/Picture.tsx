import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import PictureSvg from '@element-plus/icons-svg/picture.svg?react'

const Picture: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    onClick,
  } = props

  return (
    <i
      ref={ref}
      style={style}
      className={
        clsx(
          className,
          'el-icon'
        )
      }
      onClick={onClick}
    >
      <PictureSvg />
    </i>
  )
}

const PictureComponent = forwardRef<HTMLDivElement, IconProps>(Picture)

PictureComponent.displayName = 'Picture'

export default PictureComponent