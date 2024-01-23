import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import QuestionFilledSvg from '@element-plus/icons-svg/question-filled.svg?react'

const QuestionFilled: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
  } = props

  return (
    <i
      ref={ref}
      style={style}
      className={
        clsx(
          'el-icon',
          className,
        )
      }
    >
      <QuestionFilledSvg />
    </i>
  )
}

const QuestionFilledComponent = forwardRef<HTMLDivElement, IconProps>(QuestionFilled)

QuestionFilledComponent.displayName = 'QuestionFilled'

export default QuestionFilledComponent