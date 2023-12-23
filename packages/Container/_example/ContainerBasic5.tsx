import { Aside, Container, Header, Main } from 'pelement-react'

function ContainerBasic5() {
  return (
    <>
      <div className="common-layout">
        <Container>
          <Aside width="200px">Aside</Aside>
          <Container>
            <Header>Header</Header>
            <Main>Main</Main>
          </Container>
        </Container>
      </div>
    </>
  )
}

export default ContainerBasic5