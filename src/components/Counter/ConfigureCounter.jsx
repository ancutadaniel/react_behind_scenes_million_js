import { useState } from "react";
import { log } from "../../log";

const ConfigureCounter = ({ onSet }) => {
  log("<ConfigureCounter /> rendered", 1);
  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  function handleOnSetClick() {
    onSet(enteredNumber);
  }  
  

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleOnSetClick}>Set</button>
    </section>
  );
};

export default ConfigureCounter;
