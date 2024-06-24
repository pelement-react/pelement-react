import { CSSProperties, HTMLAttributes } from "react";

export interface EmptyProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  // empty 组件的描述信息
  description?: string | React.ReactNode
  // empty 组件的图像地址
  image?: string
  // empty 组件的图像尺寸（宽度）
  imageSize?: number
}