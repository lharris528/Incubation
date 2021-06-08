import { useState } from "react";
import data from "./restaurantdata.js";
import styled from "styled-components";
import Business from "./Business";
import Select from 'react-select';

const AppBody = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  overflow: hidden;
`

const AppHeader = styled.header`
  background-color: #282c34;
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const SelectDiv = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 30%;
`

function App() {
  const [currentStore, setCurrentStore] = useState("Space Taco Place")
  const businesses = data
  const actions = [
    { label: "Space Taco Place"},
    { label: "Burger Emperor"},
    { label: "Mynock Cuisine"}
  ];

  const handleSelect = (e) => {
    setCurrentStore(e.label)
  }

  const business = businesses.find(value => value.name === currentStore)

  return (
    <AppBody>
      <AppHeader>
        <SelectDiv>
          <Select options={ actions } onChange={handleSelect}/>
        </SelectDiv>
          <Business
            {...business}
          />
      </AppHeader>
    </AppBody>
  );
}

export default App;