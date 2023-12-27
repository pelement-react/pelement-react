import { forwardRef, useState } from 'react'
import { Loading } from 'pelement-react'
import clsx from 'clsx'
import { SwitchProps } from './interface'
import './style'

const Switch: React.ForwardRefRenderFunction<HTMLDivElement, SwitchProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    defaultChecked = false,
    size,
    inactiveText,
    activeText,
    inlinePrompt = false,
    width,
    activeIcon,
    inactiveIcon,
    disabled = false,
    loading = false,
    beforeChange,
    activeActionIcon,
    inactiveActionIcon,
  } = props

  const [val, setVal] = useState(defaultChecked)

  function changeVal() {
    // 禁用或加载中时，不可切换
    if (disabled || loading) {
      return
    }

    // 状态改变前没有钩子
    if (!beforeChange) {
      handleChange()
      return
    }

    // 状态改变前的钩子
    const shouldChange = beforeChange!()
    // 判断是否是Promise
    if (shouldChange instanceof Promise) {
      shouldChange
        .then((result) => {
          // Promise返回resolve
          if (result) {
            handleChange()
          }
        })
    } else {
      // 返回true
      if (shouldChange) {
        handleChange
      }
    }
  }

  // 改变val值
  function handleChange() {
    setVal(!val)
  }

  // 左侧内容（文本 | 图标）
  function LeftSpan() {
    if (inactiveIcon) {
      return (
        <>{inactiveIcon}</>
      )
    } else {
      return (
        <><span>{inactiveText}</span></>
      )
    }
  }

  // 左侧inactive内容（文本 | 图标）
  function LeftLabel() {
    if ((inactiveText || inactiveIcon) && !inlinePrompt) {
      return (
        <>
          <span
            className={
              clsx(
                'el-switch__label el-switch__label--left',
                (!val ? 'is-active' : '')
              )
            }
          >
            <LeftSpan />
          </span>
        </>
      )
    } else {
      return (
        <></>
      )
    }
  }

  // 右侧内容（文本 | 图标）
  function RightSpan() {
    if (activeIcon) {
      return (
        <>{activeIcon}</>
      )
    } else {
      return (
        <><span>{activeIcon}</span></>
      )
    }
  }

  // 右侧active内容（文本 | 图标）
  function RightLabel() {
    if ((activeText || activeIcon) && !inlinePrompt) {
      return (
        <>
          <span
            className={
              clsx(
                'el-switch__label el-switch__label--right',
                (val ? 'is-active' : '')
              )
            }>
            <RightSpan />
          </span>
        </>
      )
    } else {
      return (
        <></>
      )
    }
  }

  // 点内文本
  function InnerLabel() {
    // 点内图标
    if (inlinePrompt && (activeIcon || inactiveIcon)) {
      return (
        <>
          <div className="el-switch__inner">
            {val ? activeIcon : inactiveIcon}
          </div>
        </>
      )
    } else if (inlinePrompt) {
      return (
        <>
          <div className="el-switch__inner">
            <span className="is-text" >{val ? activeText : inactiveText}</span>
          </div>
        </>
      )
    } else {
      return (
        <></>
      )
    }
  }

  // on状态下的图标
  function ActionIcon() {
    // 是否显示加载中
    if (loading) {
      return (
        <>
          <Loading className="is-loading" />
        </>
      )
    } else if (activeActionIcon && val) {
      // on状态下的图标
      return (
        <>{activeActionIcon}</>
      )
    } else if (inactiveActionIcon && !val) {
      return (
        <>{inactiveActionIcon}</>
      )
    } else {
      return <></>
    }
  }

  return (
    <div
      ref={ref}
      style={style}
      className={
        clsx(
          className,
          'el-switch',
          (val ? 'is-checked' : ''),
          (size ? `el-switch--${size}` : ''),
          { 'is-disabled': disabled || loading }
        )
      }
      onClick={changeVal}
    >
      <input className="el-switch__input" type="checkbox" role="switch" name="" true-value="true" false-value="false" disabled={disabled || loading} />
      <LeftLabel />
      <span className="el-switch__core" style={{ width: `${width}px` }}>
        <InnerLabel />
        <div className="el-switch__action">
          <ActionIcon />
        </div>
      </span>
      <RightLabel />
    </div>
  )
}

const SwitchComponent = forwardRef<HTMLDivElement, SwitchProps>(Switch)

SwitchComponent.displayName = 'Switch'

export default SwitchComponent