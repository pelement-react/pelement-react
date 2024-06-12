import { forwardRef } from 'react'
import clsx from 'clsx'
import { SkeletonItemProps } from './interface'

const SkeletonItem: React.ForwardRefRenderFunction<HTMLDivElement, SkeletonItemProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    variant = 'text',
  } = props

  return (
    <>
      <div
        ref={ref}
        style={style}
        className={
          clsx(
            'el-skeleton__item',
            className,
            {
              'el-skeleton__circle': variant === 'circle',
              'el-skeleton__image': variant === 'image',
              'el-skeleton__p': variant === 'p',
              'el-skeleton__text': variant === 'text',
            }
          )
        }
      >
        {variant === 'image' &&
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"></path></svg>
        }
      </div>
    </>
  )
}

const SkeletonItemComponent = forwardRef<HTMLDivElement, SkeletonItemProps>(SkeletonItem)

SkeletonItemComponent.displayName = 'SkeletonItem'

export default SkeletonItemComponent