import { NavLink, Outlet } from 'react-router-dom'

function ComponentPage() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-groups">
          <section className="sidebar-group">
            <p className="sidebar-group__title">Overview 组件总览</p>
            <NavLink to="overview">Overview 组件总览</NavLink>
            <p className="sidebar-group__title">Basic 基础组件</p>
            <NavLink to="button">Button 按钮</NavLink>
            <NavLink to="border">Border 边框</NavLink>
            <NavLink to="color">Color 色彩</NavLink>
            <NavLink to="container">Container 布局容器</NavLink>
            <NavLink to="icon">Icon 图标</NavLink>
            <NavLink to="layout">Layout 布局</NavLink>
            <NavLink to="link">Link 链接</NavLink>
            <NavLink to="text">Text 文本</NavLink>
            <NavLink to="scrollbar">Scrollbar 滚动条</NavLink>
            <NavLink to="space">Space 间距</NavLink>
            <NavLink to="typography">Typography 排版</NavLink>
            <p className="sidebar-group__title">Form 表单组件</p>
            <NavLink to="switch">Switch 开关</NavLink>
            <NavLink to="input">Input 输入框</NavLink>
            <NavLink to="rate">Rate 评分</NavLink>
            <p className="sidebar-group__title">Data 数据展示</p>
            <NavLink to="avatar">Avatar 头像</NavLink>
            <NavLink to="badge">Badge 徽章</NavLink>
            <NavLink to="collapse">Collapse 折叠面板</NavLink>
            <NavLink to="progress">Progress 进度条</NavLink>
            <NavLink to="result">Result 结果</NavLink>
            <NavLink to="table">Table 表格</NavLink>
            <NavLink to="tag">Tag 标签</NavLink>
            <NavLink to="segmented">Segmented 分段控制器</NavLink>
            <p className="sidebar-group__title">Navigation 导航</p>
            <NavLink to="backtop">Backtop 回到顶部</NavLink>
            <NavLink to="breadcrumb">Breadcrumb 面包屑</NavLink>
            <p className="sidebar-group__title">Feedback 反馈组件</p>
            <NavLink to="alert">Alert 提示</NavLink>
            <NavLink to="dialog">Dialog 对话框</NavLink>
            <NavLink to="drawer">Drawer 抽屉</NavLink>
            <NavLink to="message">Message 消息提示</NavLink>
            <NavLink to="message-box">MessageBox 消息弹框</NavLink>
            <NavLink to="notification">Notification 通知</NavLink>
            <NavLink to="popconfirm">Popconfirm 气泡确认框</NavLink>
            <NavLink to="popover">Popover 气泡卡片</NavLink>
            <NavLink to="tooltip">Tooltip 文字提示</NavLink>
            <p className="sidebar-group__title">Others 其他</p>
            <NavLink to="divider">Divider 分割线</NavLink>
            <NavLink to="watermark">Watermark 水印</NavLink>
          </section>
        </div>
      </aside>
      <main className="page-content">
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default ComponentPage