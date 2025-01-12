import { CSSProperties, HTMLAttributes } from 'react'

export interface ColorPickerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'onChange'> {
  style?: CSSProperties
  className?: string | string[]
  value?: string
  /**
   * 是否支持透明度选择
   */
  showAlpha?: boolean
  /**
   * 写入 value 的颜色的格式
   */
  colorFormat?: 'hsl' | 'hsv' | 'hex' | 'rgb' | 'hex' | 'rgb'
  onChange?: (value: string) => void
}

export interface ColorPickerPopperProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref'> {
  style?: CSSProperties
  className?: string | string[]
  /**
   * floating的属性
   */
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement> | undefined) => Record<string, unknown>
  value?: string
  /**
   * 是否支持透明度选择
   */
  showAlpha?: boolean
  /**
   * 写入 value 的颜色的格式
   */
  colorFormat?: 'hsl' | 'hsv' | 'hex' | 'rgb' | 'hex' | 'rgb'
  handleChange: (value: string) => void
}