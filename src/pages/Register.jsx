import { ErrorOutline } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"
// background: linear-gradient(
//     rgba(255,255,255,0.5),
//      rgba(255, 255,255,0.5)
//  ), me widiytath background color eka gradient color walin daannath puluwan
// url("registerbackground.jpg") center;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("registerbackground.jpg") center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({width: "75%"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 12px 10px 0px 0px;
    padding:  10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    
`

const Button = styled.button`
    padding: 10px 10px;
    width: 100%;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    transition: 1s;
    color: #E900FF;
    border-radius: 50px;
    margin-bottom: 20px;

    &:hover {
    background-color: #E900FF;
    color: white;
}
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder = "firstname"/>
            <Input placeholder = "lastname"/>
            <Input placeholder = "select a username"/>
            <Input placeholder = "email"/>
            <Input placeholder = "password"/>
            <Input placeholder = "confirm password"/>
            <Agreement>
                <ErrorOutline/> By creating an account, I consent to the processing of my personal data in accordance with the
                    PRIVACY POLICY
               
            </Agreement>
            <Button>CREATE</Button>
            <Button type = "reset">RESET</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
