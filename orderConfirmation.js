import { useState } from "react";
import styled from "styled-components";

const DeleteButton = styled.button`
  background-color: black;
  color: red;
  padding: .5rem 1rem;
  border-radius: 25px;
  ${props => props.warning ? `
    background-color: red;
  ` : ""}
  ${props => props.warning ? `
  color: black;
  ` : "red"}
`

const ToBuy = styled.div`
  color: ${props => props.color};
`


const SinglePurchaseItem = ({name, value, price, order, setOrder, styles}) => {
  const [deleteItem, setDeleteItem] = useState(false);
  const [warning, setWarning] = useState(false);

  const HandleDelete = (name) => {
    if (deleteItem === true) {
      let newOrder = order.map((item) => name !== item.name ? item : null).filter(Boolean);
      setOrder(newOrder);
    }
    else if (deleteItem === false) {
      setDeleteItem(true);
      setWarning(true);
    }
  }

  return (
    <div>
      <ToBuy color={styles.tertiaryColor}>
        {value} {name} for {price} each. <DeleteButton warning={warning} onClick={() => HandleDelete(name)}>Delete Item</DeleteButton>
      </ToBuy>
    </div>
  )
}

const PurchaseItems = (props) => {
  return (
    props.order.map((item) => (
      <SinglePurchaseItem key={item.name} name={item.name} value={item.value} price={item.price} order={props.order} setOrder={props.setOrder} styles={props.styles}/>
    ))
  )
}

export default PurchaseItems;