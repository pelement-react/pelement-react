import { CSSProperties, forwardRef } from 'react'
import clsx from 'clsx'
import { TableProps } from './interface'
import './style'

const Table: React.ForwardRefRenderFunction<HTMLDivElement, TableProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    columns,
    data,
    stripe = false,
    border = false,
  } = props

  const divStyle: CSSProperties = {
    ...style,
    width: '100%'
  }

  // colgroup
  const colgroup = columns?.map(column =>
    <col width={column.width} />
  )

  // th表头
  const theadTh = columns?.map(column =>
    <th className="is-leaf el-table__cell" colSpan={1} rowSpan={1}>
      <div className="cell">{column.label}</div>
    </th>
  )

  // td表格
  const tbodyTr = data?.map((item, index) =>
    <tr className={
      clsx(
        'el-table__row',
        {
          'el-table__row--striped': index % 2 === 1
        }
      )
    }>
      {
        columns?.map(column =>
          <td className="el-table__cell" rowSpan={1} colSpan={1}>
            <div className="cell">{item[column.dataIndex]}</div>
          </td>
        )
      }
    </tr>
  )

  return (
    <>
      <div
        ref={ref}
        style={divStyle}
        className={
          clsx(
            'el-table--fit el-table--enable-row-hover el-table--enable-row-transition el-table el-table--layout-fixed is-scrolling-none',
            className,
            {
              'el-table--striped': stripe,
              'el-table--border': border,
            }
          )
        }
      >
        <div className="el-table__inner-wrapper">
          <div className="hidden-columns">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="el-table__header-wrapper">
            <table className="el-table__header" border={0} cellPadding="0" cellSpacing="0" style={{ width: '749px' }}>
              <colgroup>
                {colgroup}
              </colgroup>
              <thead className="">
                <tr className="">
                  {/* th表头 */}
                  {theadTh}
                </tr>
              </thead>
            </table>
          </div>
          <div className="el-table__body-wrapper">
            <div className="el-scrollbar">
              <div className="el-scrollbar__wrap el-scrollbar__wrap--hidden-default">
                <div className="el-scrollbar__view" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <table className="el-table__body" cellSpacing="0" cellPadding="0" border={0} style={{ tableLayout: 'fixed', width: '749px' }}>
                    <colgroup>
                      {colgroup}
                    </colgroup>
                    <tbody>
                      {/* td表格 */}
                      {tbodyTr}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="el-scrollbar__bar is-horizontal" style={{ display: 'none' }}>
                <div className="el-scrollbar__thumb" style={{ transform: 'translateX(0%)' }}></div>
              </div>
              <div className="el-scrollbar__bar is-vertical" style={{ display: 'none' }}>
                <div className="el-scrollbar__thumb" style={{ transform: 'translateY(0%)' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="el-table__column-resize-proxy" style={{ display: 'none' }}></div>
      </div>
    </>
  )
}

const TableComponent = forwardRef<HTMLDivElement, TableProps>(Table)

TableComponent.displayName = 'TableComponent'

export default TableComponent