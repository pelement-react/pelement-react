import { PageHeader } from 'pelement-react'

function PageHeaderContent() {

  function onBack() {
    console.log('Back')
  }

  return (
    <>
      <div aria-label="A complete example of page header">
        <PageHeader
          content={
            <div className="flex items-center">
              <span className="text-large font-600 mr-3"> Title </span>
            </div>
          }
          onBack={onBack}
        >
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

export default PageHeaderContent