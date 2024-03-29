import { forwardRef } from 'react'
import clsx from 'clsx'
import { ResultProps } from './interface'
import './style'

const Result: React.ForwardRefRenderFunction<HTMLDivElement, ResultProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    icon = 'info',
    title,
    subTitle,
    extra,
  } = props

  // 图标内容
  function Icon() {
    if (typeof icon === 'string') {
      let iconContent = <></>
      switch (icon) {
        case 'success':
          iconContent = <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="icon-success"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"></path></svg>
          </>
          break
        case 'warning':
          iconContent = <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="icon-warning"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"></path></svg>
          </>
          break
        case 'info':
          iconContent = <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="icon-error"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"></path></svg>
          </>
          break
        case 'error':
          iconContent = <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="icon-info"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"></path></svg>
          </>
          break
      }
      return iconContent
    } else {
      return <>{icon}</>
    }
  }

  return (
    <div
      ref={ref}
      style={style}
      className={
        clsx(
          'el-result',
          className,
        )
      }
    >
      <div className="el-result__icon">
        <Icon />
      </div>
      <div className="el-result__title">
        <p>
          {title}
        </p>
      </div>
      <div className="el-result__subtitle">
        <p>
          {subTitle}
        </p>
      </div>
      <div className="el-result__extra">
        {extra}
      </div>
    </div>
  )
}

const ResultComponent = forwardRef<HTMLDivElement, ResultProps>(Result)

ResultComponent.displayName = 'Result'

export default ResultComponent