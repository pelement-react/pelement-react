import { forwardRef } from 'react'
import clsx from 'clsx'
import { IconProps } from '../interface'
import SearchSvg from '@element-plus/icons-svg/search.svg?react'

const Search: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style,
    className,
    onClick,
  } = props

  return (
    <i
      ref={ref}
      style={style}
      className={
        clsx(
          className,
          'el-icon'
        )
      }
      onClick={onClick}
    >
      <SearchSvg />
    </i>
  )
}

const SearchComponent = forwardRef<HTMLDivElement, IconProps>(Search)

SearchComponent.displayName = 'Search'

export default SearchComponent