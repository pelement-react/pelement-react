import { Suspense, lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Markdown from '../components/Markdown/Markdown'
import HomePage from '../pages/home/Home'
const GuidePage = lazy(() => import('../pages/guide/Guide'))
const InstallationMdx = lazy(() => import('../pages/guide/installation.zh-CN.mdx'))
const ChangelogMdx = lazy(() => import('../pages/guide/changelog.zh-CN.mdx'))
const RecommendationMdx = lazy(() => import('../pages/guide/recommendation.zh-CN.mdx'))
const ComponentPage = lazy(() => import('../pages/component/Component'))
const Overview = lazy(() => import('../pages/component/Overview/Overview'))
const BorderPage = lazy(() => import('../pages/component/border/Border'))
const BlogPage = lazy(() => import('../pages/blog/Blog'))
const BuildError = lazy(() => import('../pages/blog/build-error.zh-CN.mdx'))
const CannotFindModule = lazy(() => import('../pages/blog/cannot-find-module.zh-CN.mdx'))

function SuspensePage(props) {
  const { children } = props;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </>
  )
}

const DefineRoute = () => {
  return useRoutes(
    [
      { path: '/', element: <Navigate to="/component/button" /> },
      { path: '/home', element: <HomePage /> },
      { path: '/guide', element: <Navigate to="changelog" /> },
      {
        path: '/guide/*',
        element: <SuspensePage><GuidePage /></SuspensePage>,
        children: [
          { path: 'installation', element: <SuspensePage><InstallationMdx /></SuspensePage> },
          { path: 'changelog', element: <SuspensePage><ChangelogMdx /></SuspensePage> },
          { path: 'recommendation', element: <SuspensePage><RecommendationMdx /></SuspensePage> },
        ]
      },
      { path: '/component', element: <Navigate to="overview" /> },
      {
        path: '/component/*',
        element: <SuspensePage><ComponentPage /></SuspensePage>,
        children: [
          { path: 'overview', element: <SuspensePage><Overview /></SuspensePage> },
          { path: 'button', element: <Markdown name="button" /> },
          { path: 'border', element: <SuspensePage><BorderPage /></SuspensePage> },
          { path: 'container', element: <Markdown name="container" /> },
          { path: 'icon', element: <Markdown name="icon" /> },
          { path: 'layout', element: <Markdown name="layout" /> },
          { path: 'link', element: <Markdown name="link" /> },
          { path: 'text', element: <Markdown name="text" /> },
          { path: 'scrollbar', element: <Markdown name="scrollbar" /> },
          { path: 'switch', element: <Markdown name="switch" /> },
          { path: 'rate', element: <Markdown name="rate" /> },
          { path: 'avatar', element: <Markdown name="avatar" /> },
          { path: 'badge', element: <Markdown name="badge" /> },
          { path: 'collapse', element: <Markdown name="collapse" /> },
          { path: 'progress', element: <Markdown name="progress" /> },
          { path: 'result', element: <Markdown name="result" /> },
          { path: 'table', element: <Markdown name="table" /> },
          { path: 'tag', element: <Markdown name="tag" /> },
          { path: 'alert', element: <Markdown name="alert" /> },
          { path: 'dialog', element: <Markdown name="dialog" /> },
          { path: 'drawer', element: <Markdown name="drawer" /> },
          { path: 'popconfirm', element: <Markdown name="popconfirm" /> },
          { path: 'popover', element: <Markdown name="popover" /> },
          { path: 'tooltip', element: <Markdown name="tooltip" /> },
          { path: 'divider', element: <Markdown name="divider" /> },
        ]
      },
      { path: '/blog', element: <Navigate to="build-error" /> },
      {
        path: '/blog',
        element: <SuspensePage><BlogPage /></SuspensePage>,
        children: [
          { path: 'build-error', element: <SuspensePage><BuildError /></SuspensePage> },
          { path: 'cannot-find-module', element: <SuspensePage><CannotFindModule /></SuspensePage> },
        ]
      }
    ]
  )
}

export default DefineRoute