import styled from "styled-components"
import { mobile } from "../responsive"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { login } from "../Redux/apiCalls" 
import axios from "axios"

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

    &:disabled{
      color: green;
      cursor: not-allowed;
    }

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
const Error = styled.span`
  color:red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const dispatch = useDispatch();
  const {isFetching , error} = useSelector((state) => state.user);
  //const [error, setError] = useState(false);


  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  // const handleClick2 = async (e) => {
  //   e.preventDefault();
  //   try{
  //     const res = await axios.post("http://localhost:5002/api/auth/login" , { username, password });
  //     console.log(res);
      
  //   }catch(err){
  //     console.log("login failed" ,err);
  //     setError(true);
  //   }
  // }


  
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder = "Username" onChange={(e) => setUsername(e.target.value)}/>
            <Input type = "password" placeholder = "Password" onChange={(e) => setPassword(e.target.value)}/>
           
            <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
            {error && <Error>Something Went wrong..</Error>}
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login

//hodt mathk thiygnna meke login unain passe aphu page eka refresh krhama login una eka ain wela aphu log wenna puluwan thathweta web application eka pathwenwa
//eka nwattagnna thami redux persist one , redux persist balagnna mathk krla
//TODO: exercise ekk widiyt meke persist wenna one than tika hdnna
