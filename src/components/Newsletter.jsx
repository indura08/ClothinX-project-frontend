import { Send } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 60vh;
    background-color: #FBF4F8;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;

`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom:20px;
    ${mobile({ textAlign: "center" })} 
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color:white;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "80%"})}
`
const Input = styled.input`
    border: none;
    flex: 10;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #2F3DFF;
    color: white;
    cursor: pointer;
    transition: 1s ease-out;

    &:hover{
      opacity:0.8;
    }
`

function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Dont worry! there is a way to get timely updates of your favourite items and categories.</Desc>
      <InputContainer>
        <Input placeholder="your email"/>
        <Button>
            <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
