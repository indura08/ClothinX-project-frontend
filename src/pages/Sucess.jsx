import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`

const LogoContainer = styled.h1``

const Status =styled.div`
  height: 60px;
  width: 150px;
  display:flex;
  align-items: center;
  padding-left: 60px;
  justify-content: space-between;
  font-size: 20px;
  border-radius:10px;
  color: white;
  background-color: #64FF22 ;
`

const Desc = styled.p`

  margin-top: 20px; 

`

const Sucess = () => {
  return (
    <Container>
      <LogoContainer>
        ClothinX
      </LogoContainer>

      <Status>
        Sucessfull
      </Status>

      <Desc>
        Your order is being prepared. Thanks for cjoosing ClothinX. comeback soon!
      </Desc>
    </Container>
  )
}

export default Sucess

 