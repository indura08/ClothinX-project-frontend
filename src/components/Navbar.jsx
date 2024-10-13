
import styled from 'styled-components'
import { Badge } from '@material-ui/core'
import { Search , ShoppingCartOutlined } from '@material-ui/icons'
import { mobile } from '../responsive'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const Container = styled.div` 
    height: 60px;
    margin-bottom: 33px;
    ${mobile( {height: "50px"} )}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "10px 0px"})}
    
`;
const Langugae = styled.span`
    font-size:14px;
    cursor: pointer;
    ${mobile({display: "none"})}

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items:center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})}
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;     
  align-items:center;
`;
const Center = styled.div`
  flex: 1 ;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight:bold;
  ${mobile({fontSize: "24px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({justifyContent: "center" , flex:2 })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  texrt-decoration: none;
  ${mobile({fontSize: "12px" , marginLeft: "10px"})};

`;
const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Langugae>EN</Langugae>
          <SearchContainer>
            <Input placeholder =  "search"/>
            <Search style={{color: "gray", fontSize: 20}}/>
          </SearchContainer>
        </Left>
        <Center><Logo><a href='/' style={{color:'inherit', textDecoration:'none'}}>ClothinX.</a></Logo></Center>
        <Right>

            <Link to = "/register">
            <MenuItem>REGISTER</MenuItem>
            </Link>
            
            <Link to = "/login">
            <MenuItem>SIGN IN</MenuItem>
            </Link>
            
            <Link to = "/cart"> 
            
            <MenuItem>
            <Badge badgeContent={quantity} color="primary"> {/* methna me thiyna badgtecontect eka warhan ahule thiyna agaya thami icon ekt udin watena number eka */}
                <ShoppingCartOutlined/>
            </Badge>
            </MenuItem>

            </Link>
            
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar 
