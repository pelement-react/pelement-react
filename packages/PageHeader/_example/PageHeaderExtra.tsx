import { Avatar, Button, PageHeader, Tag } from 'pelement-react'

function PageHeaderExtra() {
  function onBack() {
    console.log('Back')
  }

  return (
    <>
      <div aria-label="A complete example of page header">
        <PageHeader
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
        </PageHeader>
      </div>
    </>
  )
}

export default PageHeaderExtra