import { useState } from "react";
import Store from "./storeModel";

const Form = (props) => {

  const [name, setName] = useState('');
  const [minCust, setMinCust] = useState(0);
  const [maxCust, setMaxCust] = useState(0);
  const [avgCookie, setAvgCookie] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();
    props.setStores([...props.stores, new Store(name, minCust, maxCust, avgCookie)]);
  }

  return (
    <>
      <form id="my-form">
        <fieldset>
          <legend>Store Info</legend>

          <label>Name: </label>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)}/>

          <label>Min Customers: </label>
          <input type="number" id="minCust" name="minCust" onChange={(e) => setMinCust(+e.target.value)}/>

          <label>Max Customers: </label>
          <input type="number" id="maxCust" name="maxCust" onChange={(e) => setMaxCust(+e.target.value)} />

          <label>Avg Cookies Sold: </label>
          <input type="number" id="avgCookie" name="avgCookie" onChange={(e) => setAvgCookie(+e.target.value)}/>

        </fieldset>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>

    </>
  )

}

export default Form