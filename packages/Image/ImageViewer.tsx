import { forwardRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { ArrowLeft, ArrowRight, Close, FullScreen, RefreshLeft, RefreshRight, ScaleToOriginal, ZoomIn, ZoomOut } from 'pelement-react'
import { ImageViewerProps } from './interface'

const ImageViewer: React.ForwardRefRenderFunction<HTMLDivElement, ImageViewerProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    previewSrcList = [],
    initialIndex = 0,
    zoomRate = 1.2,
    maxScale = 7,
    minScale = 0.2,
    hideOnClickModal,
    zIndex = 2022,
    infinite = true,
    closeOnPressEscape = true,
    onClose,
    onSwitch,
  } = props

  // 当前预览的index
  const [previewIndex, setPreviewIndex] = useState(initialIndex)
  // 当前比例
  const [scale, setScale] = useState(1)
  // 是否等比缩放
  const [scaleToOriginal, setScaleToOriginal] = useState(false)
  // 旋转角度
  const [rotate, setRotate] = useState(0)

  // 监听鼠标滑轮事件
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY || e.deltaX
      // 放大图片
      if (delta < 0) {
        zoomIn()
      } else {
        // 缩小图片
        zoomOut()
      }
    }

    window.addEventListener('wheel', handleWheel)
    return () => window.removeEventListener('wheel', handleWheel)
  }, [scale])

  // 监听键盘事件
  useEffect(() => {
    if (closeOnPressEscape) {
      const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }

      window.addEventListener('keydown', handleKeydown)
      return () => window.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  // 查看上一张图片
  function prevImg() {
    if (previewIndex === 0 && !infinite) {
      return
    }
    const prevIndex = previewIndex - 1
    const currentIndex = prevIndex < 0 ? previewSrcList.length - 1 : prevIndex
    setPreviewIndex(currentIndex)
    onSwitch && onSwitch(currentIndex)
  }

  // 查看下一张图片
  function nextImg() {
    if (previewIndex === previewSrcList.length - 1 && !infinite) {
      return
    }
    const prevIndex = previewIndex + 1
    const currentIndex = prevIndex >= previewSrcList.length ? 0 : prevIndex
    setPreviewIndex(currentIndex)
    onSwitch && onSwitch(currentIndex)
  }

  // 缩小图片
  function zoomOut() {
    if (scale > minScale) {
      setScale(Number.parseFloat(
        (scale / zoomRate).toFixed(3)
      ))
    }
  }

  // 放大图片
  function zoomIn() {
    if (scale < maxScale) {
      setScale(Number.parseFloat(
        (scale * zoomRate).toFixed(3)
      ))
    }
  }

  // 切换等比缩放
  function changeScaleToOrigin() {
    setScaleToOriginal(!scaleToOriginal)
  }

  // 顺时针旋转
  function clockwise() {
    setRotate(rotate + 90)
  }

  // 逆时针旋转
  function anticlockwise() {
    setRotate(rotate - 90)
  }

  // 点击遮罩层
  function handleClickMask() {
    hideOnClickModal && onClose()
  }

  return (
    <>
      <div
        ref={ref}
        style={{ ...style, zIndex: zIndex }}
        className={
          clsx(
            'el-image-viewer__wrapper',
            className
          )
        }
        tabIndex={-1}>
        <div className="el-image-viewer__mask" onClick={handleClickMask}></div>
        <span className="el-image-viewer__btn el-image-viewer__close">
          <Close onClick={onClose} />
        </span>
        <span className="el-image-viewer__btn el-image-viewer__prev">
          <ArrowLeft onClick={prevImg} />
        </span>
        <span className="el-image-viewer__btn el-image-viewer__next">
          <ArrowRight onClick={nextImg} />
        </span>
        <div className="el-image-viewer__btn el-image-viewer__actions">
          <div className="el-image-viewer__actions__inner">
            <ZoomOut onClick={zoomOut} />
            <ZoomIn onClick={zoomIn} />
            <i className="el-image-viewer__actions__divider"></i>
            {!scaleToOriginal && <FullScreen onClick={changeScaleToOrigin} />}
            {scaleToOriginal && <ScaleToOriginal onClick={changeScaleToOrigin} />}
            <i className="el-image-viewer__actions__divider"></i>
            <RefreshLeft onClick={anticlockwise} />
            <RefreshRight onClick={clockwise} />
          </div>
        </div>
        <div className="el-image-viewer__canvas">
          {previewSrcList.map((item: string, index: number) =>
            <img
              key={index}
              src={item}
              className="el-image-viewer__img"
              style={{
                transform: `scale(${scale}) rotate(${rotate}deg) translate(0px, 0px)`,
                maxHeight: scaleToOriginal ? '' : '100%',
                maxWidth: scaleToOriginal ? '' : '100%',
                display: previewIndex === index ? '' : 'none'
              }}
            />
          )}
        </div>
      </div>
    </>
  )
}

const ImageViewerComponent = forwardRef<HTMLDivElement, ImageViewerProps>(ImageViewer)

ImageViewerComponent.displayName = 'ImageViewer'

export default ImageViewerComponent