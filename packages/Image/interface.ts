import { CSSProperties, HTMLAttributes } from "react";

export interface ImageProps
  extends Omit<HTMLAttributes<HTMLImageElement>, 'className' | 'ref' | 'onLoad' | 'onError'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 确定图片如何适应容器框，同原生 object-fit
   */
  fit?: '' | 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | any
  /**
   * 图片源地址，同原生属性一致
   */
  src?: string
  /**
   * 当图像尚未加载时，自定义的占位符内容
   */
  placeholder?: string | React.ReactNode
  /**
   * 自定义图像加载失败的内容
   */
  error?: string | React.ReactNode
  /**
   * 是否使用懒加载
   */
  lazy?: boolean
  /**
   * 开启图片预览功能
   */
  previewSrcList?: Array<string>
  /**
   * 图像查看器缩放事件的缩放速率
   */
  zoomRate?: number
  /**
   * 图像查看器缩放事件的最大缩放比例
   */
  maxScale?: number
  /**
   * 图像查看器缩放事件的最小缩放比例
   */
  minScale?: number
  /**
   * 初始预览图像索引，小于 url-list 的长度
   */
  initialIndex?: number
  /**
   * 当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview
   */
  hideOnClickModal?: boolean
  /**
   * 浏览器加载图像的策略，和 浏览器原生能力一致
   */
  loading?: 'eager' | 'lazy' | undefined
  /**
   * 原生属性 alt
   */
  alt?: string
  /**
   * 设置图片预览的 z-index
   */
  zIndex?: number
  /**
   * 是否可以无限循环预览
   */
  infinite?: boolean
  /**
   * 是否可以通过按下 ESC 关闭 Image Viewer
   */
  closeOnPressEscape?: boolean
  /**
   * 图片加载成功触发
   */
  onLoad?: (e: Event) => void
  /**
   * 图片加载失败触发
   */
  onError?: (e: string | Event) => void
  /**
   * 切换图像时触发
   */
  onSwitch?: (index: number) => void
  /**
   * 当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发
   */
  onClose?: () => void
  /**
   * 当 Viewer 显示时触发
   */
  onShow?: () => void
}

export interface ImageViewerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * 开启图片预览功能
   */
  previewSrcList?: Array<string>
  /**
   * 初始预览图像索引，小于 url-list 的长度
   */
  initialIndex?: number
  /**
   * 图像查看器缩放事件的缩放速率
   */
  zoomRate?: number
  /**
   * 图像查看器缩放事件的最大缩放比例
   */
  maxScale?: number
  /**
   * 图像查看器缩放事件的最小缩放比例
   */
  minScale?: number
  /**
   * 当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview
   */
  hideOnClickModal?: boolean
  /**
   * 设置图片预览的 z-index
   */
  zIndex?: number
  /**
   * 是否可以无限循环预览
   */
  infinite?: Boolean
  /**
   * 是否可以通过按下 ESC 关闭 Image Viewer
   */
  closeOnPressEscape?: boolean
  /**
   * 切换图像时触发
   */
  onSwitch?: (index: number) => void
  /**
   * 当点击 X 按钮或者在hide-on-click-modal为 true 时点击遮罩层时触发
   */
  onClose: () => void
}