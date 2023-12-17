
import { Link } from 'react-router-dom'
import './Home.scss'

function HomePage() {
  return (
    <>
      <div className="home-content">
        <div className="description">
          <h1>pelement react</h1>
          <p>基于Element Plus 和 react，面向设计师和开发者的组件库</p>
          <Link to="/component/button">快速开始</Link>
        </div>
        <div className="join-us">
          <h3>加入我们</h3>
          <div>
            <label>Email: </label>
            <span>llkui241569@163.com</span>
          </div>
          <div>
            <label>QQ: </label>
            <span>1728366431</span>
          </div>
        </div>
        <div className="footer-main text-xs">
          <p>Released under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferer">MIT License</a>.</p>
          <p>Made with ❤️ by <a href="https://github.com/llkui" target="_blank" rel="noopener noreferer">llkui</a></p>
        </div>
      </div>
    </>
  )
}

export default HomePage