import { CSSProperties, HTMLAttributes } from 'react'

export interface SegmentedProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  // 选项的数据
  options: string[] | SegmentedType[] | React.ReactNode[]
  // 组件大小
  size?: 'large' | 'default' | 'small'
  // 是否禁用
  disabled?: boolean
  // 撑满父元素宽度
  block?: boolean
}

export interface SegmentedItemProps
  extends Omit<HTMLAttributes<HTMLLabelElement>, 'className' | 'ref' | 'onSelect'> {
  style?: CSSProperties
  className?: string | string[]
  _id: number
  index: number
  selectedIndex: number
  option: SegmentedType
  onSelect: (index: number, labelLeft: number, labelWidth: number) => void
}

export type SegmentedType = {
  label: string | React.ReactNode,
  value?: string,
  disabled?: boolean
}