import { forwardRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { DescriptionsItemProps, DescriptionsProps } from './interface'
import './style'
import DescriptionsItemComponent from './DescriptionsItem'

const Descriptions: React.ForwardRefRenderFunction<HTMLDivElement, DescriptionsProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    border = false,
    column = 3,
    direction = 'horizontal',
    size,
    title = '',
    extra = '',
    items,
  } = props
  const [list, setList] = useState<DescriptionsItemProps[][]>([])

  useEffect(() => {
    const trlist: DescriptionsItemProps[][] = [];
    if (items.length > 0) {
      // 获取行数
      const trNum = Math.ceil(items.length / column)
      for (let i = 0; i < trNum; i++) {
        const thList: DescriptionsItemProps[] = [];
        const tdList: DescriptionsItemProps[] = [];
        for (let j = 0; j < column; j++) {
          // 获取items的下标
          const index = i * column + j
          if (index < items.length) {
            /**
             * 设置colSpan
             * 最后一个item占据剩余的空间
             */
            let colSpan = 1
            if (index === items.length - 1) {
              colSpan = column - j
            }
            thList.push({
              ...items[index],
              colSpan: colSpan,
              type: 'label'
            })
            tdList.push({
              ...items[index],
              colSpan: colSpan,
              type: 'content'
            })
          }
        }
        // 垂直列表
        if (direction === 'vertical') {
          trlist.push(thList)
        }
        trlist.push(tdList)
      }
    }
    setList(trlist)
  }, [items, column, border])

  return (
    <>
      <div
        ref={ref}
        style={style}
        className={
          clsx(
            'el-descriptions',
            className,
            {
              'el-descriptions--large': size === 'large',
              'el-descriptions--small': size === 'small'
            }
          )
        }
      >
        <div className="el-descriptions__header">
          <div className="el-descriptions__title">{title}</div>
          <div className="el-descriptions__extra">{extra}</div>
        </div>
        <div className="el-descriptions__body">
          <table
            className={
              clsx(
                'el-descriptions__table',
                {
                  'is-bordered': border
                }
              )
            }
          >
            <tbody>
              {list.map((trItem, trIndex) =>
                <tr key={trIndex}>
                  {trItem.map((tdItem, tdIndex) =>
                    <DescriptionsItemComponent
                      key={tdIndex}
                      labelClassName={tdItem.labelClassName}
                      className={tdItem.className}
                      label={tdItem.label}
                      content={tdItem.content}
                      colSpan={tdItem.colSpan}
                      type={tdItem.type}
                      labelAlign={tdItem.labelAlign}
                      align={tdItem.align}
                      border={border}
                      direction={direction}
                    />
                  )}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

const DescriptionsComponent = forwardRef<HTMLDivElement, DescriptionsProps>(Descriptions)

DescriptionsComponent.displayName = 'Descriptions'

export default DescriptionsComponent