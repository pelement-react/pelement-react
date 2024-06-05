import { Descriptions, Tag } from 'pelement-react'

function DescriptionsBasic() {
  const items = [
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
        title="User Info"
        items={items}
      />
    </>
  )
}

export default DescriptionsBasic