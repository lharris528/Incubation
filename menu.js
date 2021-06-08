import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: green;
  color: darkblue;
  padding: 5px;
  border-radius: 25px;
  align-self: center;
  cursor: pointer;
`

const QuantityInput = styled.input`
width: 10%;
  background-color: ${props => props.color};
  border-radius: 25px;
  outline: none;
  cursor: pointer;
`
const MenuDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.backgroundColor};
  padding: 10px;
`
const SingleMenuItem = styled.div`
  color: ${props => props.color};
`
const InputBtnSection = styled.div`
  min-width: 35%;
  color: ${props => props.color};
`

const MenuItem = ({ name, price, order, setOrder, styles }) => {
  const [value, setValue] = useState("");

  return (
  <MenuDiv>
    <SingleMenuItem color={styles.tertiaryColor}>
      {name}: ${price}
    </SingleMenuItem>
    <InputBtnSection color={styles.tertiaryColor}>
      Quantity: 
      <QuantityInput color={styles.secondaryColor} backgroundColor={styles.tertiaryColor} type="number" value={value} onChange={(event) => setValue(event.target.value)} />
      <Button onClick={() => setOrder([{name, price, value}, ...order])}>Add to Cart</Button>
    </InputBtnSection>
  </MenuDiv>
)};

export default MenuItem;