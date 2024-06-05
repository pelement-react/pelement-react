import { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface DescriptionsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'title'> {
  style?: CSSProperties
  className?: string | string[]
  // 是否带有边框
  border?: boolean
  // 一行 Descriptions Item 的数量
  column?: number
  // 排列的方向
  direction?: 'vertical' | 'horizontal'
  // 列表的尺寸
  size?: '' | 'large' | 'default' | 'small'
  // 标题文本，显示在左上方
  title?: string | ReactNode
  // 操作区文本，显示在右上方
  extra?: string | ReactNode
  items: Items[]
}

export interface DescriptionsItemProps
  extends Omit<HTMLAttributes<HTMLTableCellElement>, 'className' | 'ref' | 'content'> {
  style?: CSSProperties
  className?: string | string[]
  labelClassName?: string | string[]
  label?: string | ReactNode
  content?: string | ReactNode
  colSpan: number
  border?: boolean
  type?: 'label' | 'content'
  direction?: 'vertical' | 'horizontal'
  labelAlign?: string | 'left' | 'center' | 'right'
  align?: string | 'left' | 'center' | 'right'
}

export type Items = {
  labelClassName?: string | string[]
  className?: string | string[]
  label?: string | ReactNode
  content?: string | ReactNode
  labelAlign?: string | 'left' | 'center' | 'right'
  align?: string | 'left' | 'center' | 'right'
}