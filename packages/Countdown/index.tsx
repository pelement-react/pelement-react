import { forwardRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { Statistic } from 'pelement-react'
import { CountdownProps } from './interface'
import { formatTime, getTime } from '../_util/formatTime'
import { cAF, rAF } from '../_util/raf'

const Countdown: React.ForwardRefRenderFunction<HTMLDivElement, CountdownProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    title,
    value,
    prefix,
    suffix,
    format = 'HH:mm:ss',
    valueStyle,
    onChange,
    onFinish,
  } = props

  const [rawValue, setRawValue] = useState(0)
  let timer: ReturnType<typeof rAF> | undefined
  const formatter = (val: number) => formatTime(val, format)

  const stopTimer = () => {
    if (timer) {
      cAF(timer)
      timer = undefined
    }
  }

  const startTimer = () => {
    if (value) {
      const timestamp = getTime(value)
      const frameFunc = () => {
        let diff = timestamp - Date.now()
        onChange && onChange(diff)
        if (diff <= 0) {
          diff = 0
          stopTimer()
          onFinish && onFinish()
        } else {
          timer = rAF(frameFunc)
        }
        setRawValue(diff)
      }
      timer = rAF(frameFunc)
    }
  }

  useEffect(() => {
    setRawValue(getTime(value!) - Date.now())
    stopTimer()
    startTimer()

    return () => {
      stopTimer()
    }
  }, [value, format])

  return (
    <>
      <Statistic
        ref={ref}
        style={style}
        className={
          clsx(
            className
          )
        }
        value={rawValue}
        title={title}
        prefix={prefix}
        suffix={suffix}
        valueStyle={valueStyle}
        formatter={formatter}
      />
    </>
  )
}

const CountdownComponent = forwardRef<HTMLDivElement, CountdownProps>(Countdown)

CountdownComponent.displayName = 'Countdown'

export default CountdownComponent