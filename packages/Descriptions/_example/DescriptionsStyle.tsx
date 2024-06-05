import { Descriptions, Tag } from 'pelement-react'
import './DescriptionsStyle.scss'

function DescriptionsStyle() {
  const items = [
    {
      label: 'Username',
      content: 'kooriookami',
      labelClassName: 'my-label',
      className: 'my-content',
      labelAlign: 'right',
      align: 'center'
    },
    {
      label: 'Telephone',
      content: '18100000000',
      labelAlign: 'right',
      align: 'center'
    },
    {
      label: 'Place',
      content: 'Suzhou',
      labelAlign: 'right',
      align: 'center'
    },
    {
      label: 'Remarks',
      content: <Tag size="small">School</Tag>,
      labelAlign: 'right',
      align: 'center'
    },
    {
      label: 'Address',
      content: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province',
      labelAlign: 'right',
      align: 'center'
    },
  ]

  return (
    <>
      <Descriptions
        title="User Info"
        border
        items={items}
      />
    </>
  )
}

export default DescriptionsStyle