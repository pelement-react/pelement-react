import { forwardRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { SkeletonProps } from './interface'
import './style'

const Skeleton: React.ForwardRefRenderFunction<HTMLDivElement, SkeletonProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    rows = 3,
    animated = false,
    loading = false,
    count = 1,
    throttle = 0,
    custom,
    children,
  } = props

  // 段落列表
  const [rowList, setRowList] = useState<number[]>([])
  // 渲染骨架屏的数量
  const [countList, setCountList] = useState<number[]>([])
  // 是否显示加载结束后的 DOM 结构
  const [loadingDom, setLoadingDom] = useState(false)
  let loadingSetTimeout;

  useEffect(() => {
    const list: number[] = []
    for (let i = 0; i < rows + 1; i++) {
      list.push(i)
    }
    setRowList(list)
  }, [rows])

  useEffect(() => {
    const list: number[] = []
    for (let i = 0; i < count; i++) {
      list.push(i)
    }
    setCountList(list)
  }, [count])

  useEffect(() => {
    if (loadingSetTimeout) {
      clearTimeout(loadingSetTimeout)
    }
    if (!loading && throttle !== 0) {
      loadingSetTimeout = setTimeout(() => {
        setLoadingDom(loading)
      }, throttle)
    } else {
      setLoadingDom(loading)
    }
  }, [loading])

  // count组件
  function Custom() {
    return <>{custom}</>
  }

  // default组件
  function Default() {
    return <>
      {
        rowList.map((item, index) =>
          <div
            key={item}
            className={
              clsx(
                'el-skeleton__item el-skeleton__p',
                {
                  'is-first': index === 0,
                  'el-skeleton__paragraph': index !== 0,
                  'is-last': index === rowList.length - 1
                }
              )
            }
          ></div>
        )
      }
    </>
  }

  function NewChildren() {
    if (custom) {
      return <>
        {countList.map((count) =>
          <Custom key={count} />
        )}
      </>
    } else {
      return <>
        {countList.map((count) =>
          <Default key={count} />
        )}
      </>
    }
  }

  return (
    <>
      {/* 骨架屏 */}
      {!loadingDom &&
        <div
          ref={ref}
          style={style}
          className={
            clsx(
              'el-skeleton',
              className,
              {
                'is-animated': animated
              }
            )
          }
        >
          <NewChildren />
        </div>
      }
      {loadingDom &&
        <>{children}</>
      }
    </>
  )
}

const SkeletonComponent = forwardRef<HTMLDivElement, SkeletonProps>(Skeleton)

SkeletonComponent.displayName = 'Skeleton'

export default SkeletonComponent