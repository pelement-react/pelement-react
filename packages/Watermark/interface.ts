import { CSSProperties, HTMLAttributes } from 'react'

export interface WatermarkProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'content'> {
  style?: CSSProperties
  className?: string | string[]
  image?: string
  // 水印的宽度， content 的默认值是它自己的宽度
  width?: number
  // 水印的高度， content 的默认值是它自己的高度
  height?: number
  // 水印的旋转角度, 单位 °
  rotate?: number
  // 水印之间的间距
  gap?: [number, number]
  // 水印从容器左上角的偏移 默认值为 gap/2
  offset?: [number, number]
  // 水印元素的z-index值
  zIndex?: number
  // Font
  font?: Font
  // 水印文本内容
  content?: string | string[]
}

export type Font = {
  // 字体颜色
  color?: string
  // 字体大小
  fontSize?: number
  // 字重
  fontWeight?: 'normal' | 'light' | 'weight' | number
  // 字体
  fontFamily?: string
  // 字体样式
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
  // 文本对齐
  textAlign?: 'left' | 'right' | 'center' | 'start' | 'end'
  // 文本基线
  textBaseline?: 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom'
}