import { CSSProperties, forwardRef, useState } from 'react'
import clsx from 'clsx'
import { AvatarProps } from './interface'
import './style'

const Avatar: React.ForwardRefRenderFunction<HTMLDivElement, AvatarProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    shape = 'circle',
    size,
    src,
    icon,
    fit = 'cover',
    onError,
    children,
  } = props

  const spanStyle: CSSProperties = {
    ...style,
    ['--el-avatar-size' as string]: (size && typeof size === 'number') ? `${size}px` : ''
  }

  const [isImgExist, setIsImgExist] = useState(true)

  function onloadImg() {
    const img = new Image(0, 0);
    if (src) {
      img.src = src;
    }
    img.onload = () => {
      setIsImgExist(true)
    };
    img.onerror = (e) => {
      if (e instanceof Event) {
        e.preventDefault();
        e.stopPropagation();
      }
      setIsImgExist(false)
      if (onError) {
        onError()
      }
    };
  }

  // src加载内容
  function SrcContent() {
    if (isImgExist) {
      return <img src={src} style={{ objectFit: fit }} />
    } else {
      return <>{children}</>
    }
  }

  // 内容
  function AvatarContent() {
    if (icon) {
      return <>{icon}</>
    } else if (src) {
      onloadImg()
      return <><SrcContent></SrcContent></>
    } else {
      return <>{children}</>
    }
  }

  return (
    <span
      ref={ref}
      style={spanStyle}
      className={
        clsx(
          className,
          'el-avatar',
          `el-avatar--${shape}`,
          (size ? `el-avatar--${size}` : ''),
          { 'el-avatar--icon': icon },
        )
      }
    >
      <AvatarContent />
    </span>
  )
}

const AvatarComponent = forwardRef<HTMLDivElement, AvatarProps>(Avatar)

AvatarComponent.displayName = 'Avatar'

export default AvatarComponent