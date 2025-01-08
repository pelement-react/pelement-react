import { forwardRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { StatisticProps } from './interface'
import './style'

const Statistic: React.ForwardRefRenderFunction<HTMLDivElement, StatisticProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    title,
    value = 0,
    prefix,
    suffix,
    decimalSeparator = '.',
    formatter,
    groupSeparator = ',',
    precision = 0,
    valueStyle,
  } = props

  // 格式化数字内容
  const [displayValue, setDisplayValue] = useState<string | number>('')

  useEffect(() => {
    if (value) {
      if (typeof formatter === 'function') {
        setDisplayValue(formatter(value))
        return
      }

      if (typeof value !== 'number' || Number.isNaN(value)) {
        setDisplayValue(value as any)
        return
      }

      let [integer, decimal = ''] = String(value).split('.')
      decimal = decimal
        .padEnd(precision, '0')
        .slice(0, precision > 0 ? precision : 0)
      integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator)
      setDisplayValue([integer, decimal].join(decimal ? decimalSeparator : ''))
    }

  }, [value, formatter, precision, decimalSeparator, groupSeparator])

  return (
    <>
      <div
        ref={ref}
        style={style}
        className={
          clsx(
            'el-statistic',
            className
          )
        }
      >
        <div className="el-statistic__head">
          {title}
        </div>
        <div className="el-statistic__content">
          {prefix && <div className="el-statistic__prefix">{prefix}</div>}
          <span className="el-statistic__number" style={valueStyle}>{displayValue}</span>
          {suffix && <div className="el-statistic__suffix">{suffix}</div>}
        </div>
      </div>
    </>
  )
}

const StatisticComponent = forwardRef<HTMLDivElement, StatisticProps>(Statistic)

StatisticComponent.displayName = 'Statistic'

export default StatisticComponent