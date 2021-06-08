import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import PurchaseItems from "./orderConfirmation.js"
import MenuItem from "./menu.js"

const Button = styled.button`
  ${props => props.noDisplay ? "display: none;" : "display: flex;"}
  background-color: black;
  color: red;
  padding: .5rem 1rem;
  border-radius: 25px;
  opacity: 1;
  ${props => props.warning ? `
    background-color: red;
  ` : ""}
  align-self: center;
  cursor: pointer;
`

const BusinessPage = styled.div`
  height: 97vh;
  width: 100%;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(${props => props.backgroundImage});

  div h2 {
    font-size: 2rem;
    color: ${props => props.color};
  }
`

const ActionArea = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
  min-height: 50%;
  border-radius: 70%;
  background-color: ${props => props.backgroundColor};
  `
  const RestaurantTitle = styled.h2`
    color: ${props => props.color};
    opacity: 1;
  `
  const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
  `

  const PayMsg = styled.div`
    color: ${props => props.color};
    max-width: 100%;
  `


const Business = ({ name, primaryColor, secondaryColor, tertiaryColor, image, menu }) => {

  const styles = {name, primaryColor, secondaryColor, tertiaryColor, image};
  const [checkout, setCheckout] = useState(false);
  const [order, setOrder] = useState([]);
  const [payWindow, setPayWindow] = useState(false);
  const [total, setTotal] = useState(0);
  
  const resetOrder = () => {
    if (checkout === true) {
      setOrder([]);
      setTotal(0);
      setPayWindow(false);
      console.log("resetting order...")
    }
    else if (order == false) {
      return;
    }
  }

  const calcTotal = () => {
    order.forEach(item => {
    let newTotal = total + (item.price * item.value)
    setTotal(newTotal)  
    })
}

  const checkTotal = () => {
    if (total === 0) {
      setPayWindow(false);
    }
    else {
      setPayWindow(true);
    }
  }

  return (
  <BusinessPage backgroundImage={image}>
    <ActionArea backgroundColor={primaryColor}>
      <RestaurantTitle color={tertiaryColor}>{name}</RestaurantTitle>
      <div>
        {checkout ? 
          <FlexDiv>
            <div>
              {payWindow ? <PayMsg color={tertiaryColor}>Your total is ${total}. Thank you for choosing {name}!</PayMsg> 
                         : <PurchaseItems order={order} setOrder={setOrder} setTotal={setTotal} styles={styles}/>}
            </div>
            <Button noDisplay={payWindow} onClick={() => {
              calcTotal();
              checkTotal();
            }}>Pay Now</Button>
          </FlexDiv>

        : menu.map((item, i) => (
            <MenuItem order={order} setOrder={setOrder} styles={styles}
              key={`${i}-item`}
              {...item}
            />
          ))}
      </div>
      <Button onClick={() => {
        setCheckout(!checkout)
        resetOrder();
      }}
        >{checkout ? "Return to Menu" : "Finish and Pay"}</Button>
    </ActionArea>
  </BusinessPage>
)};

export default Business;