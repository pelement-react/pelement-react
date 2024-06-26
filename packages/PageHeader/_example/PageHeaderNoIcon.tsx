import { PageHeader } from 'pelement-react'

function PageHeaderNoIcon() {
  return (
    <>
      <PageHeader icon={null}
        content={
          <span className="text-large font-600 mr-3"> Title </span>
        }
      >
      </PageHeader>
    </>
  )
}

export default PageHeaderNoIcon