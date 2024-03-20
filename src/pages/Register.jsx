import { ErrorOutline } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"
import axios from "axios"
import { useState } from "react"
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


const SuccessText = styled.p`
    color: green;
    font-size: 15px;
    font-weight: 500;
    margin-top: 10px;
`

const UnSucessText = styled.p`
    color: red;
    font-size: 15px;
    font-weight: 400;
    margin-top: 20px;
`

const Register = () => {

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error , setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5002/api/auth/register" , { username, email, password } )
            console.log(res.data);
            setSuccess(true);
            setError(false);
            
        }catch(err){
            console.log(err);
            setError(true);
            setSuccess(false);

        }
    }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
            <Input name="name" placeholder = "firstname"/>
            <Input name = "lname"placeholder = "lastname"/>
            <Input name = "username" placeholder = "select a username" onChange={(e) => setUsername(e.target.value)} />
            <Input name = "email" placeholder = "email" onChange={(e) => setEmail(e.target.value)}/>
            <Input name = "password" placeholder = "password" onChange={(e) => setPassword(e.target.value)}/>
            <Input name = "cpassword" placeholder = "confirm password"/>
            <Agreement>
                <ErrorOutline/> By creating an account, I consent to the processing of my personal data in accordance with the
                    PRIVACY POLICY
               
            </Agreement>
            <Button>CREATE</Button>
            <Button type = "reset">RESET</Button>

            {success && <SuccessText>Successfully created Your account</SuccessText> }
            {error && <UnSucessText>An error Happened, Try again later</UnSucessText>}
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
