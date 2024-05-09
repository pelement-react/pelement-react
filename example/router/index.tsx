import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Markdown from '../components/Markdown/Markdown'
import HomePage from '../pages/home/Home'
import SuspenseContent from '../components/SuspenseContent/SuspenseContent'
const GuidePage = lazy(() => import('../pages/guide/Guide'))
const InstallationMdx = lazy(() => import('../pages/guide/installation.zh-CN.mdx'))
const ChangelogMdx = lazy(() => import('../pages/guide/changelog.zh-CN.mdx'))
const RecommendationMdx = lazy(() => import('../pages/guide/recommendation.zh-CN.mdx'))
const ComponentPage = lazy(() => import('../pages/component/Component'))
const Overview = lazy(() => import('../pages/component/Overview/Overview'))
const BlogPage = lazy(() => import('../pages/blog/Blog'))
const BuildError = lazy(() => import('../pages/blog/build-error.zh-CN.mdx'))
const CannotFindModule = lazy(() => import('../pages/blog/cannot-find-module.zh-CN.mdx'))
const NotFound = lazy(() => import('../pages/home/NotFound'))

const DefineRoute = () => {
  return useRoutes(
    [
      { path: '/', element: <Navigate to="/component/button" /> },
      { path: 'home', element: <HomePage /> },
      { path: 'guide', element: <Navigate to="changelog" /> },
      {
        path: 'guide',
        element: <SuspenseContent><GuidePage /></SuspenseContent>,
        children: [
          { path: 'installation', element: <SuspenseContent><InstallationMdx /></SuspenseContent> },
          { path: 'changelog', element: <SuspenseContent><ChangelogMdx /></SuspenseContent> },
          { path: 'recommendation', element: <SuspenseContent><RecommendationMdx /></SuspenseContent> },
        ]
      },
      { path: 'component', element: <Navigate to="overview" /> },
      {
        path: 'component',
        element: <SuspenseContent><ComponentPage /></SuspenseContent>,
        children: [
          { path: 'overview', element: <SuspenseContent><Overview /></SuspenseContent> },
          { path: 'button', element: <Markdown name="button" /> },
          { path: 'border', element: <Markdown name="border" /> },
          { path: 'color', element: <Markdown name="color" /> },
          { path: 'container', element: <Markdown name="container" /> },
          { path: 'icon', element: <Markdown name="icon" /> },
          { path: 'layout', element: <Markdown name="layout" /> },
          { path: 'link', element: <Markdown name="link" /> },
          { path: 'text', element: <Markdown name="text" /> },
          { path: 'scrollbar', element: <Markdown name="scrollbar" /> },
          { path: 'space', element: <Markdown name="space" /> },
          { path: 'typography', element: <Markdown name="typography" /> },
          { path: 'switch', element: <Markdown name="switch" /> },
          { path: 'input', element: <Markdown name="input" /> },
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
          { path: 'message', element: <Markdown name="message" /> },
          { path: 'message-box', element: <Markdown name="message-box" /> },
          { path: 'popconfirm', element: <Markdown name="popconfirm" /> },
          { path: 'popover', element: <Markdown name="popover" /> },
          { path: 'tooltip', element: <Markdown name="tooltip" /> },
          { path: 'divider', element: <Markdown name="divider" /> },
        ]
      },
      { path: 'blog', element: <Navigate to="build-error" /> },
      {
        path: 'blog',
        element: <SuspenseContent><BlogPage /></SuspenseContent>,
        children: [
          { path: 'build-error', element: <SuspenseContent><BuildError /></SuspenseContent> },
          { path: 'cannot-find-module', element: <SuspenseContent><CannotFindModule /></SuspenseContent> },
        ]
      },
      { path: '*', element: <SuspenseContent><NotFound /></SuspenseContent> }
    ]
  )
}

export default DefineRoute