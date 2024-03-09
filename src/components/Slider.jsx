import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { useState } from "react"

const Container = styled.div`
    width: 100%;
    height : 100vh;
    display: flex;
    background-color: white;
    position: relative;
    overflow: hidden;

`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;

`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0)
`

const Slide =styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  align-items: center;
  background-color: #${props => props.bg};
`

const ImgContainer =styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 100%;
  width: 140vh

`
const InfoContainer =styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 50px, 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: 1s;
  color: #E900FF;
  border-radius: 50px;

  &:hover {
    background-color: #E900FF;
    color: white;
  }
`


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    
  }
  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
             <ArrowLeftOutlined/>
        </Arrow>
        
        <Wrapper>
          <Slide bg="white">

          <ImgContainer>
            <Image src = "sliderimg1.jpg" />
          </ImgContainer>

          <InfoContainer>
            <Title>Take 80% off With Summer sale</Title>
            <Desc>Dont wait, Grab your favourite 5 items once and get the 80% off discount</Desc>
            <Button>SHOP NOW.</Button>
          </InfoContainer>

          </Slide>

          <Slide bg="F5D9FE">

          <ImgContainer>
            <Image src = "sliderimg1.jpg" />
          </ImgContainer>

          <InfoContainer>
            <Title>Take 80% off With Summer sale</Title>
            <Desc>Dont wait, Grab your favourite 5 items once and get the 80% off discount</Desc>
            <Button>SHOP NOW.</Button>
          </InfoContainer>

          </Slide>

          <Slide bg="FAF0FD">

          <ImgContainer>
            <Image src = "sliderimg1.jpg" />
          </ImgContainer>

          <InfoContainer>
            <Title>Take 80% off With Summer sale</Title>
            <Desc>Dont wait, Grab your favourite 5 items once and get the 80% off discount</Desc>
            <Button>SHOP NOW.</Button>
          </InfoContainer>

          </Slide>

        </Wrapper>

        <Arrow direction="right" onClick={() => handleClick("right")}>
             <ArrowRightOutlined/>
        </Arrow>
      </Container>
    </div>
  )
}

export default Slider //nawattuwe 44:30
