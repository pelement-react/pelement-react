import { Container, Header, Main } from 'pelement-react'
import './ContainerBasic.scss'

function ContainerBasic() {

  return (
    <>
      <div className="common-layout">
        <Container>
          <Header>Header</Header>
          <Main>Main</Main>
        </Container>
      </div>
    </>
  )
}

export default ContainerBasic