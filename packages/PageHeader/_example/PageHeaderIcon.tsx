import { Edit, PageHeader } from 'pelement-react'

function PageHeaderIcon() {
  return (
    <>
      <PageHeader
        icon={
          <Edit />
        }
        content={
          <span className="text-large font-600 mr-3"> Title </span>
        }
      >
      </PageHeader >
    </>
  )
}

export default PageHeaderIcon