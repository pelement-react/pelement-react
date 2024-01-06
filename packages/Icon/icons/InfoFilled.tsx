import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import InfoFilledSvg from '@element-plus/icons-svg/info-filled.svg?react'

const InfoFilled: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
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
      <InfoFilledSvg />
    </i>
  )
}

const InfoFilledComponent = forwardRef<HTMLDivElement, IconProps>(InfoFilled)

InfoFilledComponent.displayName = 'InfoFilled'

export default InfoFilledComponent