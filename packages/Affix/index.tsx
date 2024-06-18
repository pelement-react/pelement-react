import { MutableRefObject, forwardRef, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { AffixProps } from './interface'
import './style'

const Affix: React.ForwardRefRenderFunction<HTMLDivElement, AffixProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    offset = 0,
    position = 'top',
    target,
    zIndex = 100,
    children,
  } = props

  const [fixed, setFixed] = useState(false)
  const [width, setWidth] = useState<number | null>(null)
  const [height, setHeight] = useState<number | null>(null)
  const [transform, setTransform] = useState<number | null>(null)
  let refDom = useRef<HTMLDivElement>(null)
  if (ref) {
    refDom = (ref as MutableRefObject<HTMLDivElement>)
  }

  useEffect(() => {
    // 记录dom的高度
    let heightDom = 0
    if (refDom?.current) {
      const { height, width } = refDom.current.getBoundingClientRect()
      heightDom = height
      setHeight(height)
      setWidth(width)

    }

    const handleScroll = () => {
      if (refDom?.current) {
        const { top, bottom } = refDom.current.getBoundingClientRect()
        if (offset !== null && position === 'top' && top <= offset) {
          setFixed(true)
        } else if (offset !== null && position === 'bottom' && document.documentElement.clientHeight - bottom <= offset) {
          setFixed(true)
        } else {
          setFixed(false)
        }

        if (target) {
          const targetDom = document.querySelector(target)
          // TODO
          if (targetDom) {
            const { bottom: targetBottom } = targetDom.getBoundingClientRect()
            if (heightDom) {
              const difference = targetBottom - offset - heightDom;
              if (difference < 0) {
                setTransform(difference)
              } else {
                setTransform(null)
              }
            }
          }
        }
      } else {
        setFixed(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return (
    <>
      <div
        ref={refDom}
        style={
          {
            ...style,
            height: height ? `${height}px` : '',
            width: width ? `${width}px` : '',
          }
        }
        className={
          clsx(
            'el-affix',
            className
          )
        }
      >
        <div
          style={
            fixed ? {
              height: height ? `${height}px` : '',
              width: width ? `${width}px` : '',
              [position]: `${offset}px`,
              zIndex: zIndex,
              transform: transform ? `translateY(${transform}px)` : '',
            } : {}
          }
          className={
            clsx(
              {
                'el-affix--fixed': fixed
              }
            )
          }
        >
          {children}
        </div>
      </div>
    </>
  )
}

const AffixComponent = forwardRef<HTMLDivElement, AffixProps>(Affix)

AffixComponent.displayName = 'Affix'

export default AffixComponent