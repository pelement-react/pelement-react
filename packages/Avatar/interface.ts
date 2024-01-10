import { CSSProperties, HTMLAttributes } from 'react'

export interface AvatarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  // Avatar 形状
  shape?: 'circle' | 'square'
  // Avatar 大小
  size?: Sizes
  // Avatar 图片的源地址
  src?: string
  // 设置 Avatar 的图标类型，具体参考 Icon 组件
  icon?: React.ReactNode
  // 当展示类型为图片的时候，设置图片如何适应容器
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  // 图片加载失败时触发
  onError?: () => void
}

type Sizes = number | 'large' | 'small'