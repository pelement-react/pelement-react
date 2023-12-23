import { Aside, Container, Header, Main } from 'pelement-react'

function ContainerBasic3() {
  return (
    <>
      <div className="common-layout">
        <Container>
          <Header>Header</Header>
          <Container>
            <Aside width="200px">Aside</Aside>
            <Main>Main</Main>
          </Container>
        </Container>
      </div>
    </>
  )
}

export default ContainerBasic3