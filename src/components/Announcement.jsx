import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #F586FF ;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weigth: 500;
`

const Announcement = () => {
  return (
    <div>
      <Container>
        Todays best seller Ranking - check it out : click here!
      </Container>
    </div>
  )
}

export default Announcement
