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