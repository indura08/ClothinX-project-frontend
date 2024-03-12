// this is the inteface for a single product please keep hat in mid when making changes 

import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, CheckBoxOutlined, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px" , flexDirection: "column" })}
`
const ImgContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center bottom; 
    ${mobile({height: "40vh"})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}
`


const Title = styled.h1`
    font-size: 50px;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 300;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})} 
`

const Filter = styled.div`
    display:flex;
    align-items:center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;

`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left:10px;
    padding: 5px;

`

const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
    width: 50%
    display: flex;
    align-items: center; 
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-bottom: 20px;
`
const Amount = styled.span`
    width:30px;
    height: 30px;
    display: flex;
    border-radius: 10px;
    border: 1px solid gray;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    margin-left: 20px;
`
const Button = styled.button`
    padding: 15px;
    font-size: 20px;
    width : 100%;
    background-color: transparent;
    cursor: pointer;
    transition: 0.5s;
    color: #E900FF;
    cursor: pointer;
    margin-top: 20px;
    font-weight: 500;

    &:hover {
    background-color: #E900FF;
    color: white;
    }
`
const AboutPharagraph =  styled.div`
    display: flex;
    margin-top: 50px;
    align-items: center;
    justify-content: space-between;

`

const Text = styled.p``;

const Product = () => {
  return (
    <Container>
      <Navbar/> 
      <Announcement/>
      <Wrapper>

        <ImgContainer>
            <Image src = "shirt2.png"/>
        </ImgContainer>

        <InfoContainer>
            <Title>Long sleeve shirt</Title>
            <Desc>Introducing Anationz Printed Linen Shirt Range - the epitome of style and comfort. Crafted with utmost care and attention to detail, these shirts are designed to elevate your wardrobe and make a lasting impression.
</Desc>
            <Price>Rs.4499.20/=</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color = "black"/>
                    <FilterColor color = "darkblue"/> 
                    <FilterColor color = "grey"/>
                </Filter>

                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>X</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>

            </FilterContainer>
            <AddContainer>
                <AmountContainer> 
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
                <Button>BUY IT NOW</Button>

                <AboutPharagraph>
                   <CheckBoxOutlined/>
                   <Text>Pickup available al ClothinX. show Rooms. Usually ready in 24 Hours <br/> product code: 822RDC</Text>
                </AboutPharagraph>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
