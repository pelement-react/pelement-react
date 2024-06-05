import { forwardRef } from 'react'
import clsx from 'clsx'
import { DescriptionsItemProps } from './interface'

const DescriptionsItem: React.ForwardRefRenderFunction<HTMLTableCellElement, DescriptionsItemProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    labelClassName,
    label,
    content,
    colSpan,
    type,
    border,
    direction,
    labelAlign,
    align = 'left',
  } = props

  function Cell() {
    if (direction === 'horizontal') {
      if (border) {
        return <>
          <td
            className={
              clsx(
                'el-descriptions__cell el-descriptions__label is-bordered-label',
                labelClassName,
                {
                  'is-left': labelAlign === 'left',
                  'is-center': labelAlign === 'center',
                  'is-right': labelAlign === 'right',
                },
              )
            }
            colSpan={1}
          >
            {label}
          </td>
          <td
            className={
              clsx(
                'el-descriptions__cell el-descriptions__content is-bordered-content',
                className,
                {
                  'is-left': align === 'left',
                  'is-center': align === 'center',
                  'is-right': align === 'right',
                },
              )
            }
            colSpan={colSpan * 2 - 1}
          >
            {content}
          </td>
        </>
      } else {
        return <>
          <td
            ref={ref}
            style={style}
            className={
              clsx(
                'el-descriptions__cell',
                className,
              )
            }
            colSpan={colSpan}
          >
            <span
              className={
                clsx(
                  'el-descriptions__label',
                  labelClassName,
                  {
                    'is-left': labelAlign === 'left',
                    'is-center': labelAlign === 'center',
                    'is-right': labelAlign === 'right',
                  },
                )
              }
            >
              {label}
            </span>
            <span
              className={
                clsx(
                  'el-descriptions__content',
                  className,
                  {
                    'is-left': align === 'left',
                    'is-center': align === 'center',
                    'is-right': align === 'right',
                  },
                )
              }
            >
              {content}
            </span>
          </td>
        </>
      }
    } else {
      if (type === 'label') {
        return <>
          <th
            className={
              clsx(
                'el-descriptions__cell el-descriptions__label  is-vertical-label',
                {
                  'is-bordered-label': border
                },
                labelClassName,
                {
                  'is-left': labelAlign === 'left',
                  'is-center': labelAlign === 'center',
                  'is-right': labelAlign === 'right',
                },
              )
            }
            colSpan={colSpan}
          >
            {label}
          </th>
        </>
      } else {
        return <>
          <td
            className={
              clsx(
                'el-descriptions__cell el-descriptions__content is-vertical-content',
                {
                  'is-bordered-content': border
                },
                className,
                {
                  'is-left': align === 'left',
                  'is-center': align === 'center',
                  'is-right': align === 'right',
                },
              )
            }
            colSpan={colSpan}
          >
            {content}
          </td>
        </>
      }

    }
  }

  return (
    <>
      <Cell />
    </>
  )
}

const DescriptionsItemComponent = forwardRef<HTMLTableCellElement, DescriptionsItemProps>(DescriptionsItem)

DescriptionsItemComponent.displayName = 'DescriptionsItem'

export default DescriptionsItemComponent