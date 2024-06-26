import { Breadcrumb, PageHeader } from 'pelement-react'

function PageHeaderBreadcrumb() {
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
            <span className="text-large font-600 mr-3"> Title </span>
          }
        >
        </PageHeader>
      </div>
    </>
  )
}

export default PageHeaderBreadcrumb