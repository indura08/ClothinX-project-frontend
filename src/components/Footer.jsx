import { CallOutlined, EmailOutlined, Facebook, Instagram, LocationOnOutlined, Pinterest, Twitter } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex:1;
    displya:flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`

  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${prop => prop.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
`


const Right = styled.div`
    flex:1;
    padding: 20px;
    padding-left: 40px;
    ${mobile({backgroundColor: "lightpink"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items:center;
`

const Payment = styled.img`
  width: 40px;
  height:40px;
  margin-right: 15px;
`

const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({display: "none"})}
`

const Title = styled.h3`
  margin-bottom: 20px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display:flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`


const Footer = () => {
  return (
    <Container>
        <Left><b>ClothinX.</b>

        <Desc>
          This is just a description to test the whole content 
        </Desc>

        <SocialContainer>
          <SocialIcon color = "3B5999">
            <Facebook/>
          </SocialIcon>

          <SocialIcon color = "E4405F">
            <Instagram/>
          </SocialIcon>

          <SocialIcon color = "55ACEE">
            <Twitter/>
          </SocialIcon>

          <SocialIcon color = "E60023">
            <Pinterest/>
          </SocialIcon >

        </SocialContainer>

        </Left>

        <Center>
          <Title>Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms and conditions</ListItem>
          </List>
        </Center>

        <Right>

          <Title>Contact Us!!</Title>
          <ContactItem><LocationOnOutlined/>455/5B, Makola south, Kiribathgoda</ContactItem>
          <ContactItem><CallOutlined/> +94 770267931, +94 0112963234</ContactItem>
          <ContactItem><EmailOutlined/>Contact@Clothinx.com</ContactItem>

          <Payment src = "master.png"/>
          <Payment src = "visa.jpg"/>
          <Payment src = "paypal.png"/>
          <Payment src = "americanexpress.jpg"/>

        </Right>

    </Container> 

  )
}

export default Footer
