import { PageHeader } from 'pelement-react'

function PageHeaderBasic() {
  function goBack() {
    console.log('go back')
  }

  return (
    <>
      <PageHeader
        content={
          <span className="text-large font-600 mr-3"> Title </span>
        }
        onBack={goBack}
      >
      </PageHeader >
    </>
  )
}

export default PageHeaderBasic