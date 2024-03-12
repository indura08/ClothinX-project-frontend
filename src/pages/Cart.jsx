import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px; 
    ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    font-size: 20px;
    background-color: transparent;
    transition: 1s;
    color: #E900FF;
    border-radius: 50px;

    &:hover {
        background-color: #E900FF;
        color: white;
    }
    
`

const TopTexts = styled.div`
    ${mobile({display: "none"})}
 
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
` 

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
` 

const Image = styled.img`
    width: 200px;
` 

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
` 

const ProductName = styled.span`

` 

const ProductId = styled.span`

` 

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
` 

const ProductSize = styled.span`

`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const TopText = styled.span`
    text-decoration: underlined;
    font-weight: 600;
    cursor: pointer;
    margin: 0px 10px;
`
 
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}

`

const Info = styled.div`
    flex: 3;

`
const Summery = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 20px;
    padding: 10px;
    height: 60vh;
    
`

const Hr = styled.hr`
    background-color: #eee;
    height: 1px;
`;

const ProductAmountContainer = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`


const SummeryTitle = styled.h1`
    font-weight: 200;

`

const SummeryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "800"};
    font-size: ${props => props.types === "total" && "24px"};
`

const SummeryItemText = styled.span`

`

const SummeryItemPrice = styled.span`

`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: transparent;
    color: #E900FF;
    font-weight: 600;
    transition: 0.5s ease-out;

    &:hover{
        background-color: #E900FF;
        color: white;
    }
`


const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>

            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your wishlist(0)</TopText> 
            </TopTexts>
            <TopButton>CHECKOUT NOW!</TopButton>
        </Top>
        <Bottom>

            <Info>
                <Product>

                    <ProductDetails>
                        <Image src = "shoe1.png"/>

                        <Details>
                            <ProductName><b>Product: </b>Nike shoe sneakers</ProductName>
                            <ProductId><b>Id: </b>998rt4</ProductId>
                            <ProductColor color = "Black"/>
                            <ProductSize><b>Size: </b>37.5</ProductSize>
                        </Details>

                    </ProductDetails>

                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>Rs.9750.50/=</ProductPrice>
                    </PriceDetail>

                </Product>
                <Hr/>
                <Product>

                    <ProductDetails>
                        <Image src = "shoe2.png"/>

                        <Details>
                            <ProductName><b>Product: </b>Nike Air force</ProductName>
                            <ProductId><b>Id: </b>223PAWG22</ProductId>
                            <ProductColor color = "brown"/>
                            <ProductSize><b>Size: </b>37.5</ProductSize>
                        </Details>

                    </ProductDetails>

                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>Rs.9750.50/=</ProductPrice>
                    </PriceDetail>

                </Product>

            </Info>
            <Summery>
                <SummeryTitle>ORDER SUMMERY</SummeryTitle>
                <SummeryItem>
                    <SummeryItemText>SubTotal</SummeryItemText>
                    <SummeryItemPrice>Rs.19501.00/=</SummeryItemPrice>
                </SummeryItem>

                <SummeryItem>
                    <SummeryItemText>Estimated shipping</SummeryItemText>
                    <SummeryItemPrice>Rs.230.00/=</SummeryItemPrice>
                </SummeryItem>

                <SummeryItem>
                    <SummeryItemText>Shipping Discount</SummeryItemText>
                    <SummeryItemPrice>- Rs.90.00/=</SummeryItemPrice>
                </SummeryItem>

                <SummeryItem type="total">
                    <SummeryItemText>Total</SummeryItemText>
                    <SummeryItemPrice>Rs.19641.00</SummeryItemPrice>
                </SummeryItem>

                <Button>CHECKOUT NOW!!</Button>
            </Summery>
        </Bottom>
      </Wrapper>
      <Newsletter/>
      <Footer/>
      
    </Container>
  )
}

export default Cart
