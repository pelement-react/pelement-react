import { Aside, Container, Footer, Header, Main } from 'pelement-react'

function ContainerBasic4() {
  return (
    <>
      <div className="common-layout">
        <Container>
          <Header>Header</Header>
          <Container>
            <Aside width="200px">Aside</Aside>
            <Container>
              <Main>Main</Main>
              <Footer>Footer</Footer>
            </Container>
          </Container>
        </Container>
      </div>
    </>
  )
}

export default ContainerBasic4