import ComponentCard from './ComponentCard'
import ButtonSvg from '../../../assets/overview/button.svg?react'
import BorderSvg from '../../../assets/overview/border.svg?react'
import ColorSvg from '../../../assets/overview/color.svg?react'
import ContainerSvg from '../../../assets/overview/container.svg?react'
import IconSvg from '../../../assets/overview/icon.svg?react'
import LayoutSvg from '../../../assets/overview/layout.svg?react'
import LinkSvg from '../../../assets/overview/link.svg?react'
import TextSvg from '../../../assets/overview/text.svg?react'
import ScrollbarSvg from '../../../assets/overview/scrollbar.svg?react'
import SpaceSvg from '../../../assets/overview/space.svg?react'
import TypograpySvg from '../../../assets/overview/typograpy.svg?react'
import ConfigProviderSvg from '../../../assets/overview/config-provider.svg?react'
import AutocompleteSvg from '../../../assets/overview/autocomplete.svg?react'
import CascaderSvg from '../../../assets/overview/cascader.svg?react'
import CheckboxSvg from '../../../assets/overview/checkbox.svg?react'
import ColorPickerSvg from '../../../assets/overview/color-picker.svg?react'
import DatePickerSvg from '../../../assets/overview/date-picker.svg?react'
import DateTimePickerSvg from '../../../assets/overview/date-time-picker.svg?react'
import FormSvg from '../../../assets/overview/form.svg?react'
import InputSvg from '../../../assets/overview/input.svg?react'
import InputNumberSvg from '../../../assets/overview/input-number.svg?react'
import RadioSvg from '../../../assets/overview/radio.svg?react'
import RateSvg from '../../../assets/overview/rate.svg?react'
import SelectSvg from '../../../assets/overview/select.svg?react'
import VirtualizedSelectSvg from '../../../assets/overview/virtualized-select.svg?react'
import SliderSvg from '../../../assets/overview/slider.svg?react'
import SwitchSvg from '../../../assets/overview/switch.svg?react'
import TimePickerSvg from '../../../assets/overview/time-picker.svg?react'
import TimeSelectSvg from '../../../assets/overview/time-select.svg?react'
import TransferSvg from '../../../assets/overview/transfer.svg?react'
import UploadSvg from '../../../assets/overview/upload.svg?react'
import AvatarSvg from '../../../assets/overview/avatar.svg?react'
import BadgeSvg from '../../../assets/overview/badge.svg?react'
import CalendarSvg from '../../../assets/overview/calendar.svg?react'
import CardSvg from '../../../assets/overview/card.svg?react'
import CarouselSvg from '../../../assets/overview/carousel.svg?react'
import CollapseSvg from '../../../assets/overview/collapse.svg?react'
import DescriptionsSvg from '../../../assets/overview/descriptions.svg?react'
import EmptySvg from '../../../assets/overview/empty.svg?react'
import ImageSvg from '../../../assets/overview/image.svg?react'
import InfiniteScrollSvg from '../../../assets/overview/infinite-scroll.svg?react'
import PaginationSvg from '../../../assets/overview/pagination.svg?react'
import ProgressSvg from '../../../assets/overview/progress.svg?react'
import ResultSvg from '../../../assets/overview/result.svg?react'
import SkeletonSvg from '../../../assets/overview/skeleton.svg?react'
import TableSvg from '../../../assets/overview/table.svg?react'
import VirtualizedTableSvg from '../../../assets/overview/virtualized-table.svg?react'
import TagSvg from '../../../assets/overview/tag.svg?react'
import TimelineSvg from '../../../assets/overview/timeline.svg?react'
import TourSvg from '../../../assets/overview/tour.svg?react'
import TreeSvg from '../../../assets/overview/tree.svg?react'
import TreeSelectSvg from '../../../assets/overview/tree-select.svg?react'
import VirtualizedTreeSvg from '../../../assets/overview/virtualized-tree.svg?react'
import StatisticSvg from '../../../assets/overview/statistic.svg?react'
import SegmentedSvg from '../../../assets/overview/segmented.svg?react'
import AffixSvg from '../../../assets/overview/affix.svg?react'
import AnchorSvg from '../../../assets/overview/anchor.svg?react'
import BacktopSvg from '../../../assets/overview/backtop.svg?react'
import BreadcrumbSvg from '../../../assets/overview/breadcrumb.svg?react'
import DropdownSvg from '../../../assets/overview/dropdown.svg?react'
import MenuSvg from '../../../assets/overview/menu.svg?react'
import PageHeaderSvg from '../../../assets/overview/page-header.svg?react'
import StepsSvg from '../../../assets/overview/steps.svg?react'
import TabsSvg from '../../../assets/overview/tabs.svg?react'
import AlertSvg from '../../../assets/overview/alert.svg?react'
import DialogSvg from '../../../assets/overview/dialog.svg?react'
import DrawerSvg from '../../../assets/overview/drawer.svg?react'
import LoadingSvg from '../../../assets/overview/loading.svg?react'
import MessageSvg from '../../../assets/overview/message.svg?react'
import MessageBoxSvg from '../../../assets/overview/message-box.svg?react'
import NotificationSvg from '../../../assets/overview/notification.svg?react'
import PopconfirmSvg from '../../../assets/overview/popconfirm.svg?react'
import PopoverSvg from '../../../assets/overview/popover.svg?react'
import TooltipSvg from '../../../assets/overview/tooltip.svg?react'
import DividerSvg from '../../../assets/overview/divider.svg?react'
import WatermarkSvg from '../../../assets/overview/watermark.svg?react'

function Overview() {
  const menuList = [
    {
      title: 'Basic 基础组件（11）',
      componentList: [
        { title: 'Button 按钮', path: '/component/button', svg: <ButtonSvg /> },
        { title: 'Border 边框', path: '/component/border', svg: <BorderSvg /> },
        { title: 'Color 色彩', path: '/component/color', svg: <ColorSvg /> },
        { title: 'Container 布局容器', path: '/component/container', svg: <ContainerSvg /> },
        { title: 'Icon 图标', path: '/component/icon', svg: <IconSvg /> },
        { title: 'Layout 布局', path: '/component/layout', svg: <LayoutSvg /> },
        { title: 'Link 链接', path: '/component/link', svg: <LinkSvg /> },
        { title: 'Text 文本', path: '/component/text', svg: <TextSvg /> },
        { title: 'Scrollbar 滚动条', path: '/component/scrollbar', svg: <ScrollbarSvg /> },
        { title: 'Space 间距', path: '/component/space', svg: <SpaceSvg /> },
        { title: 'Typography 排版', path: '/component/space', svg: <TypograpySvg /> },
      ]
    },
    {
      title: '配置组件（1）',
      componentList: [
        { title: 'Config Provider 全局配置', path: '/component/config-provider', svg: <ConfigProviderSvg /> }
      ]
    },
    {
      title: 'Form 表单组件（19）',
      componentList: [
        { title: 'Autocomplete 自动补全输入框', path: '/component/autocomplete', svg: <AutocompleteSvg /> },
        { title: 'Cascader 级联选择器', path: '/component/cascader', svg: <CascaderSvg /> },
        { title: 'Checkbox 多选框', path: '/component/checkbox', svg: <CheckboxSvg /> },
        { title: 'Color Picker 取色器', path: '/component/color-picker', svg: <ColorPickerSvg /> },
        { title: 'Date Picker 日期选择器', path: '/component/date-picker', svg: <DatePickerSvg /> },
        { title: 'DateTime Picker 日期时间选择器', path: '/component/date-time-picker', svg: <DateTimePickerSvg /> },
        { title: 'Form 表单', path: '/component/form', svg: <FormSvg /> },
        { title: 'Input 输入框', path: '/component/input', svg: <InputSvg /> },
        { title: 'Input Number 数字输入框', path: '/component/input-number', svg: <InputNumberSvg /> },
        { title: 'Radio 单选框', path: '/component/radio', svg: <RadioSvg /> },
        { title: 'Rate 评分', path: '/component/rate', svg: <RateSvg /> },
        { title: 'Select 选择器', path: '/component/select', svg: <SelectSvg /> },
        { title: 'Virtualized Select 虚拟化选择器', path: '/component/virtualized-select', svg: <VirtualizedSelectSvg /> },
        { title: 'Slider 滑块', path: '/component/slider', svg: <SliderSvg /> },
        { title: 'Switch 开关', path: '/component/switch', svg: <SwitchSvg /> },
        { title: 'Time Picker 时间选择器', path: '/component/time-picker', svg: <TimePickerSvg /> },
        { title: 'Time Select 时间选择', path: '/component/time-select', svg: <TimeSelectSvg /> },
        { title: 'Transfer 穿梭框', path: '/component/transfer', svg: <TransferSvg /> },
        { title: 'Upload 上传', path: '/component/upload', svg: <UploadSvg /> },
      ]
    },
    {
      title: 'Data 数据展示（24）',
      componentList: [
        { title: 'Avatar 头像', path: '/component/avatar', svg: <AvatarSvg /> },
        { title: 'Badge 徽章', path: '/component/badge', svg: <BadgeSvg /> },
        { title: 'Calendar 日历', path: '/component/calendar', svg: <CalendarSvg /> },
        { title: 'Card 卡片', path: '/component/card', svg: <CardSvg /> },
        { title: 'Carousel 走马灯', path: '/component/carousel', svg: <CarouselSvg /> },
        { title: 'Collapse 折叠面板', path: '/component/collapse', svg: <CollapseSvg /> },
        { title: 'Descriptions 描述列表', path: '/component/descriptions', svg: <DescriptionsSvg /> },
        { title: 'Empty 空状态', path: '/component/empty', svg: <EmptySvg /> },
        { title: 'Image 图片', path: '/component/image', svg: <ImageSvg /> },
        { title: 'Infinite Scroll 无限滚动', path: '/component/infinite-scroll', svg: <InfiniteScrollSvg /> },
        { title: 'Pagination 分页', path: '/component/pagination', svg: <PaginationSvg /> },
        { title: 'Progress 进度条', path: '/component/progress', svg: <ProgressSvg /> },
        { title: 'Result 结果', path: '/component/result', svg: <ResultSvg /> },
        { title: 'Skeleton 骨架屏', path: '/component/skeleton', svg: <SkeletonSvg /> },
        { title: 'Table 表格', path: '/component/table', svg: <TableSvg /> },
        { title: 'Virtualized Table 虚拟化表格', path: '/component/virtualized-table', svg: <VirtualizedTableSvg /> },
        { title: 'Tag 标签', path: '/component/tag', svg: <TagSvg /> },
        { title: 'Timeline 时间线', path: '/component/timeline', svg: <TimelineSvg /> },
        { title: 'Tour 漫游式引导', path: '/component/tour', svg: <TourSvg /> },
        { title: 'Tree 树形控件', path: '/component/tree', svg: <TreeSvg /> },
        { title: 'TreeSelect 树形选择', path: '/component/tree-select', svg: <TreeSelectSvg /> },
        { title: 'Virtualized Tree 虚拟化树形控件', path: '/component/virtualized-tree', svg: <VirtualizedTreeSvg /> },
        { title: 'Statistic 统计组件', path: '/component/statistic', svg: <StatisticSvg /> },
        { title: 'Segmented 分段控制器', path: '/component/segmented', svg: <SegmentedSvg /> },
      ]
    },
    {
      title: 'Navigation 导航（9）',
      componentList: [
        { title: 'Affix 固钉', path: '/component/affix', svg: <AffixSvg /> },
        { title: 'Anchor 锚点', path: '/component/anchor', svg: <AnchorSvg /> },
        { title: 'Backtop 回到顶部', path: '/component/backtop', svg: <BacktopSvg /> },
        { title: 'Breadcrumb 面包屑', path: '/component/breadcrumb', svg: <BreadcrumbSvg /> },
        { title: 'Dropdown 下拉菜单', path: '/component/dropdown', svg: <DropdownSvg /> },
        { title: 'Menu 菜单', path: '/component/menu', svg: <MenuSvg /> },
        { title: 'Page Header 页头', path: '/component/page-header', svg: <PageHeaderSvg /> },
        { title: 'Steps 步骤条', path: '/component/steps', svg: <StepsSvg /> },
        { title: 'Tabs 标签页', path: '/component/tabs', svg: <TabsSvg /> },
      ]
    },
    {
      title: 'Feedback 反馈组件（10）',
      componentList: [
        { title: 'Alert 提示', path: '/component/alert', svg: <AlertSvg /> },
        { title: 'Dialog 对话框', path: '/component/dialog', svg: <DialogSvg /> },
        { title: 'Drawer 抽屉', path: '/component/drawer', svg: <DrawerSvg /> },
        { title: 'Loading 加载', path: '/component/loading', svg: <LoadingSvg /> },
        { title: 'Message 消息提示', path: '/component/message', svg: <MessageSvg /> },
        { title: 'Message Box 消息弹出框', path: '/component/message-box', svg: <MessageBoxSvg /> },
        { title: 'Notification 通知', path: '/component/notification', svg: <NotificationSvg /> },
        { title: 'Popconfirm 气泡确认框', path: '/component/popconfirm', svg: <PopconfirmSvg /> },
        { title: 'Popover 弹出框', path: '/component/popover', svg: <PopoverSvg /> },
        { title: 'Tooltip 文字提示', path: '/component/tooltip', svg: <TooltipSvg /> },
      ]
    },
    {
      title: 'Others 其他（2）',
      componentList: [
        { title: 'Divider 分割线', path: '/component/divider', svg: <DividerSvg /> },
        { title: 'Watermark 水印', path: '/component/watermark', svg: <WatermarkSvg /> },
      ]
    }
  ]

  return (
    <>
      <div className="markdown-body">
        <h1>Overview 组件总览</h1>
        <p>以下是 pelement-react 提供的所有组件。</p>
        {
          menuList.map((item, index) =>
            <div key={index}>
              <h2>{item.title}</h2>
              <div className="card-content">
                {
                  item.componentList.map((item, index) =>
                    <ComponentCard title={item.title} path={item.path} svg={item.svg} key={index} />
                  )
                }
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Overview