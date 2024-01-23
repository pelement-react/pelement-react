import { Routes, Route, NavLink } from 'react-router-dom'
import Markdown from '../../components/Markdown/Markdown'
import BorderPage from './border/Border'

function ComponentPage() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-groups">
          <section className="sidebar-group">
            <p className="sidebar-group__title">Basic 基础组件</p>
            <NavLink to="button">Button 按钮</NavLink>
            <NavLink to="border">Border 边框</NavLink>
            <NavLink to="container">Container 布局容器</NavLink>
            <NavLink to="icon">Icon 图标</NavLink>
            <NavLink to="layout">Layout 布局</NavLink>
            <NavLink to="link">Link 链接</NavLink>
            <NavLink to="text">Text 文本</NavLink>
            <p className="sidebar-group__title">Form 表单组件</p>
            <NavLink to="switch">Switch 开关</NavLink>
            <p className="sidebar-group__title">Data 数据展示</p>
            <NavLink to="avatar">Avatar 头像</NavLink>
            <NavLink to="collapse">Collapse 折叠面板</NavLink>
            <NavLink to="progress">Progress 进度条</NavLink>
            <NavLink to="result">Result 结果</NavLink>
            <p className="sidebar-group__title">Feedback 反馈组件</p>
            <NavLink to="alert">Alert 提示</NavLink>
            <NavLink to="popconfirm">Popconfirm 气泡确认框</NavLink>
            <NavLink to="popover">Popover 气泡卡片</NavLink>
            <NavLink to="tooltip">Tooltip 文字提示</NavLink>
            <p className="sidebar-group__title">Others 其他</p>
            <NavLink to="divider">Divider 分割线</NavLink>
          </section>
        </div>
      </aside>
      <main className="page-content">
        <Routes>
          <Route path="button" element={<Markdown name="button" />}></Route>
          <Route path="border" element={<BorderPage />}></Route>
          <Route path="container" element={<Markdown name="container" />}></Route>
          <Route path="icon" element={<Markdown name="icon" />}></Route>
          <Route path="layout" element={<Markdown name="layout" />}></Route>
          <Route path="link" element={<Markdown name="link" />}></Route>
          <Route path="text" element={<Markdown name="text" />}></Route>
          <Route path="switch" element={<Markdown name="switch" />}></Route>
          <Route path="avatar" element={<Markdown name="avatar" />}></Route>
          <Route path="collapse" element={<Markdown name="collapse" />}></Route>
          <Route path="progress" element={<Markdown name="progress" />}></Route>
          <Route path="result" element={<Markdown name="result" />}></Route>
          <Route path="alert" element={<Markdown name="alert" />}></Route>
          <Route path="popconfirm" element={<Markdown name="popconfirm" />}></Route>
          <Route path="popover" element={<Markdown name="popover" />}></Route>
          <Route path="tooltip" element={<Markdown name="tooltip" />}></Route>
          <Route path="divider" element={<Markdown name="divider" />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default ComponentPage