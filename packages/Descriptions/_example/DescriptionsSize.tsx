import { Descriptions, Edit, Tag } from 'pelement-react'

function DescriptionsSize() {
  const items1 = [
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Username
      </div>,
      content: 'kooriookami'
    },
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Telephone
      </div>,
      content: '18100000000'
    },
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Place
      </div>,
      content: 'Suzhou'
    },
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Remarks
      </div>,
      content: <Tag size="small">School</Tag>
    },
    {
      label: <div className="cell-item">
        <Edit style={{ marginRight: '6px' }} />
        Address
      </div>,
      content: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province'
    },
  ]
  const items2 = [
    {
      label: 'Username',
      content: 'kooriookami'
    },
    {
      label: 'Telephone',
      content: '18100000000'
    },
    {
      label: 'Place',
      content: 'Suzhou'
    },
    {
      label: 'Remarks',
      content: <Tag size="small">School</Tag>
    },
    {
      label: 'Address',
      content: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province'
    },
  ]

  return (
    <>
      <Descriptions
        title="With border large"
        border
        size="large"
        items={items1}
      />
      <Descriptions
        style={{ marginTop: '24px' }}
        title="With border default"
        border
        size="default"
        items={items1}
      />
      <Descriptions
        style={{ marginTop: '24px' }}
        title="Without border small"
        size="small"
        items={items2}
      />
    </>
  )
}

export default DescriptionsSize