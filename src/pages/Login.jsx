import styled from "styled-components"
import { mobile } from "../responsive"

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
    width: 25%;
    background-color: white;
    ${mobile({width: "75%"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 12px 10px 0px 0px;
    padding:  10px;
    margin-bottom: 20px;
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

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder = "Username"/>
            <Input placeholder = "Password"/>
           
            <Button>LOGIN</Button>
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
