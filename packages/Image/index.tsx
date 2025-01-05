import { forwardRef, MutableRefObject, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { ImageProps } from './interface'
import './style'
import ImageViewer from './ImageViewer'

const ImageCmp: React.ForwardRefRenderFunction<HTMLImageElement, ImageProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    src,
    fit = '',
    placeholder,
    error,
    lazy = false,
    previewSrcList = [],
    zoomRate,
    maxScale,
    minScale,
    initialIndex,
    hideOnClickModal,
    loading = undefined,
    alt,
    zIndex,
    infinite,
    closeOnPressEscape,
    onLoad,
    onError,
    onSwitch,
    onClose,
    onShow,
  } = props

  // 图片加载状态
  const [loadingStatus, setLoadingStatus] = useState(false)
  // 图片加载失败
  const [errorStatus, setErrorStatus] = useState(false)
  const [imageSrc, setImageSrc] = useState('')
  // 是否展示预览列表
  const [showPreview, setShowPreview] = useState(false)
  let refDom = useRef<HTMLDivElement>(null)
  if (ref) {
    refDom = (ref as MutableRefObject<HTMLDivElement>)
  }

  useEffect(() => {
    if (src) {
      // 调用加载图片
      if (!lazy) {
        loadImage()
      }
    } else {
      handlerError({} as Event)
    }
  }, [src, lazy])

  // 去懒加载图片
  useEffect(() => {
    if (lazy) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            loadImage()
            // 图片加载后停止观察
            observer.disconnect()
          }
        },
        { threshold: 0.1 } // 10% 进入视口时触发
      )

      if (refDom.current) {
        observer.observe(refDom.current)
      }

      return () => {
        if (observer && refDom.current) {
          observer.unobserve(refDom.current)
        }
      }
    }
  }, [lazy])

  // 去加载图片
  function loadImage() {
    if (src) {
      // 加载图片
      setLoadingStatus(true)
      const img = new Image()
      img.src = src
      img.onload = (e: Event) => {
        setLoadingStatus(false)
        setImageSrc(src)
        // 图片加载成功触发
        onLoad && onLoad(e)
      }
      img.onerror = (e: string | Event) => {
        handlerError(e)
      }
    }
  }

  // 处理图片加载失败
  function handlerError(e: string | Event) {
    setLoadingStatus(false)
    setErrorStatus(true)
    // 图片加载失败触发
    onError && onError(e)
  }

  // 预览图片
  function previewImg() {
    if (previewSrcList?.length > 0) {
      setShowPreview(true)
      onShow && onShow()
    }
  }

  // 关闭预览图片
  function handleClosePreview() {
    setShowPreview(false)
    onClose && onClose()
  }

  // image实例
  function ImageInstance() {
    if (loadingStatus) {
      return <>{placeholder}</>
    } else if (errorStatus) {
      if (error) {
        return <>{error}</>
      } else {
        return <><div className="el-image__error">FAILED</div></>
      }
    } else {
      return <>
        <img
          style={{ objectFit: fit }}
          className={
            clsx(
              'el-image__inner',
              {
                'el-image__preview': previewSrcList?.length > 0
              }
            )
          }
          src={imageSrc}
          alt={alt}
          loading={loading}
          onClick={previewImg}
        />
        {showPreview &&
          <ImageViewer
            previewSrcList={previewSrcList}
            initialIndex={initialIndex}
            zoomRate={zoomRate}
            maxScale={maxScale}
            minScale={minScale}
            hideOnClickModal={hideOnClickModal}
            zIndex={zIndex}
            infinite={infinite}
            closeOnPressEscape={closeOnPressEscape}
            onSwitch={onSwitch}
            onClose={handleClosePreview}
          />
        }
      </>
    }
  }

  return (
    <>
      <div
        ref={refDom}
        style={style}
        className={
          clsx(
            'el-image',
            className
          )
        }>
        <ImageInstance />
      </div>
    </>
  )
}

const ImageComponent = forwardRef<HTMLImageElement, ImageProps>(ImageCmp)

ImageComponent.displayName = 'Image'

export default ImageComponent