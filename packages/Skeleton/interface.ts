import { CSSProperties, HTMLAttributes } from 'react'

export interface SkeletonProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 骨架屏段落数量
   */
  rows?: number
  /**
   * 是否使用动画
   */
  animated?: boolean
  /**
   * 是否显示加载结束后的 DOM 结构
   */
  loading?: boolean
  /**
   * 自定义骨架屏
   */
  custom?: string | React.ReactNode
  /**
   * 渲染多少个 custom, 建议使用尽可能小的数字
   */
  count?: number
  /**
   * 渲染延迟（以毫秒为单位）
   */
  throttle?: number
}

export interface SkeletonItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 当前渲染 skeleton 类型
   */
  variant?: 'p' | 'text' | 'h1' | 'h3' | 'caption' | 'button' | 'image' | 'circle' | 'rect'
}