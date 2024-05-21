import { Breadcrumb } from 'pelement-react'

function BreadcrumbBasic() {
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: 'homepage',
            isLink: true,
          },
          {
            title: <a href="/">promotion management</a>,
            isLink: true,
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

export default BreadcrumbBasic