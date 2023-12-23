import { Aside, Container, Main } from 'pelement-react'

function ContainerBasic2() {
  return (
    <>
      <div className="common-layout">
        <Container>
          <Aside width="200px">Aside</Aside>
          <Main>Main</Main>
        </Container>
      </div>
    </>
  )
}

export default ContainerBasic2