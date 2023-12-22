import { forwardRef } from 'react'
import { IconProps } from '../interface'
import SearchSvg from '@element-plus/icons-svg/search.svg?react'

const Search: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  props,
  ref,
) => {
  const {
    style
  } = props

  return (
    <i
      ref={ref}
      style={style}
      className="el-icon"
    >
      <SearchSvg />
    </i>
  )
}

const SearchComponent = forwardRef<HTMLDivElement, IconProps>(Search)

SearchComponent.displayName = 'Search'

export default SearchComponent