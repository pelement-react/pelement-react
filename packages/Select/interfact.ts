import { CSSProperties, HTMLAttributes } from 'react'

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'onChange'> {
  style?: CSSProperties
  className?: string | string[]
  options: SelectOption[]
  value?: SelectOption
  size?: '' | 'large' | 'default' | 'small'
  onChange?: (value: SelectOption) => void
}

export interface SelectContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'onClick'> {
  style?: CSSProperties
  className?: string | string[]
  options: SelectOption[]
  value?: SelectOption
  onClick: (value: SelectOption) => void
  /**
   * floating的属性
   */
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>
}

export interface SelectOptionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'onClick'> {
  style?: CSSProperties
  className?: string | string[]
  option: SelectOption
  onClick: (value: SelectOption) => void
}

export type SelectOption = { label: string | React.ReactNode, value: any }