import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"
import { mobile } from "../responsive"

const Container = styled.div`
  display:flex;
  padding: 20px;
  justify-content: space-between;
  margin-top: 45px;
  ${mobile({padding: "0px" , flexDirection: "column"})}
`

const Categories = () => {
  return (
    <div>
      <Container>
        {categories.map(item => (
            <CategoryItem item = {item} key={item.id}/>
        ))}
    </Container>
    </div>
  )
}

export default Categories

