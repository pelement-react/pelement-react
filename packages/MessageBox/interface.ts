import { CSSProperties, HTMLAttributes, MouseEvent } from 'react'

export interface MessageBoxProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'ref' | 'title'> {
  style?: CSSProperties
  className?: string | string[]
  trigger: 'alert' | 'confirm'
  title?: string
  message?: string | React.ReactNode
  type?: 'success' | 'error' | 'info' | 'warning'
  confirmButtonText?: string
  cancelButtonText?: string
  onCallback?: (action: string) => void
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void
  onCancel?: (event: MouseEvent<HTMLButtonElement>) => void
  onConfirm?: (event: MouseEvent<HTMLButtonElement>) => void
}

export interface MessageBoxContainerProps {
  type?: 'success' | 'error' | 'info' | 'warning'
  confirmButtonText?: string
  cancelButtonText?: string
  callback?: (action: string) => void
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void
  onCancel?: (event: MouseEvent<HTMLButtonElement>) => void
  onConfirm?: (event: MouseEvent<HTMLButtonElement>) => void
}