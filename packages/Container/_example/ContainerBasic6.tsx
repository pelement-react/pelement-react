import { Aside, Container, Footer, Header, Main } from 'pelement-react'

function ContainerBasic6() {
  return (
    <>
      <div className="common-layout">
        <Container>
          <Aside width="200px">Aside</Aside>
          <Container>
            <Header>Header</Header>
            <Main>Main</Main>
            <Footer>Footer</Footer>
          </Container>
        </Container>
      </div>
    </>
  )
}

export default ContainerBasic6