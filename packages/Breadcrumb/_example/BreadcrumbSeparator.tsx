import { ArrowRight, Breadcrumb } from 'pelement-react'

function BreadcrumbSeparator() {
  return (
    <>
      <Breadcrumb
        separator={<ArrowRight className="el-breadcrumb__separator" />}
        items={[
          {
            title: 'homepage',
            isLink: true,
          },
          {
            title: 'promotion management',
          },
          {
            title: 'promotion list'
          },
          {
            title: 'promotion detail'
          },
        ]}
      />
    </>
  )
}

export default BreadcrumbSeparator