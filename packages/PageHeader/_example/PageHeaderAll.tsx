import { Avatar, Breadcrumb, Button, Descriptions, PageHeader, Tag } from 'pelement-react'

function PageHeaderAll() {
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

  function onBack() {
    console.log('Back')
  }

  return (
    <>
      <div aria-label="A complete example of page header">
        <PageHeader
          breadcrumb={
            <Breadcrumb
              items={[
                {
                  title: 'homepage',
                  isLink: true,
                },
                {
                  title: <a href="/">route 1</a>,
                  isLink: true,
                },
                {
                  title: 'route 2'
                },
              ]}
            />
          }
          content={
            <div className="flex items-center">
              <Avatar
                className="mr-3"
                size={32}
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              <span className="text-large font-600 mr-3"> Title </span>
              <span
                className="text-sm mr-2"
                style={{ color: 'var(--el-text-color-regular)' }}
              >
                Sub title
              </span>
              <Tag>Default</Tag>
            </div>
          }
          extra={
            <div className="flex items-center">
              <Button>Print</Button>
              <Button type="primary" className="ml-2">Edit</Button>
            </div>
          }
          onBack={onBack}
        >
          <Descriptions
            title="User Info"
            items={items}
          />
          <p className="mt-4 text-sm">
            Element Plus team uses <b>weekly</b> release strategy under normal
            circumstance, but critical bug fixes would require hotfix so the actual
            release number <b>could be</b> more than 1 per week.
          </p>
        </PageHeader>
      </div>
    </>
  )
}

export default PageHeaderAll