import { CSSProperties, forwardRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { WatermarkProps } from './interface'
import './style'
import useClips, { FontGap } from './useClips'
import { getPixelRatio } from './utils'

const Watermark: React.ForwardRefRenderFunction<HTMLDivElement, WatermarkProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    image,
    width = 120,
    height = 64,
    rotate = -22,
    gap = [100, 100],
    offset,
    zIndex = 9,
    font,
    content,
    children,
  } = props

  const [watermarkStyle, setWatermarkStyle] = useState({})
  const color = font?.color ?? 'rgba(0,0,0,.15)'
  const fontSize = font?.fontSize ?? 16
  const fontWeight = font?.fontSize ?? 'normal'
  const fontStyle = font?.fontStyle ?? 'normal'
  const fontFamily = font?.fontFamily ?? 'sans-serif'
  const textAlign = font?.textAlign ?? 'center'
  const textBaseline = font?.textBaseline ?? 'top'
  const gapX = gap[0]
  const gapY = gap[1]
  const gapXCenter = gapX / 2
  const gapYCenter = gapY / 2
  const offsetLeft = offset?.[0] ?? gapXCenter
  const offsetTop = offset?.[1] ?? gapYCenter

  // 获取水印大小
  const getMarkSize = (ctx: CanvasRenderingContext2D) => {
    let defaultWidth = 120
    let defaultHeight = 64
    if (!image && ctx.measureText) {
      ctx.font = `${Number(fontSize)}px ${fontFamily}`
      const contents = Array.isArray(content) ? content : [content]
      const sizes = contents.map((item) => {
        const metrics = ctx.measureText(item!)

        return [
          metrics.width,
          // Using `actualBoundingBoxAscent` to be compatible with lower version browsers (eg: Firefox < 116)
          metrics.fontBoundingBoxAscent !== undefined
            ? metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
            : metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent,
        ]
      })
      defaultWidth = Math.ceil(Math.max(...sizes.map((size) => size[0])))
      defaultHeight =
        Math.ceil(Math.max(...sizes.map((size) => size[1]))) * contents.length +
        (contents.length - 1) * FontGap
    }
    return [width ?? defaultWidth, height ?? defaultHeight] as const
  }

  // 获取水印样式
  const getMarkStyle = () => {
    const markStyle: CSSProperties = {
      zIndex: zIndex,
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      backgroundRepeat: 'repeat',
    }

    /** Calculate the style of the offset */
    let positionLeft = offsetLeft - gapXCenter
    let positionTop = offsetTop - gapYCenter
    if (positionLeft > 0) {
      markStyle.left = `${positionLeft}px`
      markStyle.width = `calc(100% - ${positionLeft}px)`
      positionLeft = 0
    }
    if (positionTop > 0) {
      markStyle.top = `${positionTop}px`
      markStyle.height = `calc(100% - ${positionTop}px)`
      positionTop = 0
    }
    markStyle.backgroundPosition = `${positionLeft}px ${positionTop}px`

    return markStyle
  }

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const [markWidth, markHeight,] = getMarkSize(ctx)
      const ratio = getPixelRatio()
      const getClips = useClips()

      // 画canvas
      const drawCanvas = (
        drawContent?: NonNullable<WatermarkProps['content']> | HTMLImageElement
      ) => {
        const [textClips, clipWidth] = getClips(
          drawContent || '',
          rotate,
          ratio,
          markWidth,
          markHeight,
          {
            color: color,
            fontSize: fontSize,
            fontStyle: fontStyle,
            fontWeight: fontWeight,
            fontFamily: fontFamily,
            textAlign: textAlign,
            textBaseline: textBaseline,
          },
          gapX,
          gapY
        )

        setWatermarkStyle({
          ...getMarkStyle(),
          backgroundImage: `url('${textClips}')`,
          backgroundSize: `${Math.floor(clipWidth)}px`,
        })
      }

      if (image) {
        const img = new Image()
        img.onload = () => {
          drawCanvas(img)
        }
        img.onerror = () => {
          drawCanvas(content)
        }
        img.crossOrigin = 'anonymous'
        img.referrerPolicy = 'no-referrer'
        img.src = image
      } else {
        drawCanvas(content)
      }
    }
  }, [])

  const divStyle: CSSProperties = {
    ...style,
    position: 'relative'
  }

  return (
    <div
      ref={ref}
      style={divStyle}
      className={
        clsx(
          className
        )
      }
    >
      {children}
      <div style={watermarkStyle}></div>
    </div>
  )
}

const WatermarkComponent = forwardRef<HTMLDivElement, WatermarkProps>(Watermark)

WatermarkComponent.displayName = 'Watermark'

export default WatermarkComponent