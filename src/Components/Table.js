import { useEffect, useState } from "react";
import Store from "./storeModel";
import Form from "./Form";

const Table = () => {
  
  const [stores, setStores] = useState([
    new Store('Seattle', 23, 65, 6.3),
    new Store('Tokyo', 3, 24, 1.2),
    new Store('Dubai', 11, 38, 3.7),
    new Store('Paris', 20, 38, 2.3),
    new Store('Lima', 2, 16, 4.6)
  ]);

  const [isLoaded, setIsLoaded] = useState(false);

  const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  useEffect(() => {
    stores.forEach(store => store.cookiesBought = [] );
    stores.forEach(store => store.getCookiesBought());
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Form 
        stores={stores}
        setStores={setStores}
      />
      <table>
        <thead>
          <tr>
            <th>Location</th>
            {hours.map((hour, idx) => <th key={`hours-${idx}`}>{hour}</th>)}
            <th>Daily Location Total</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store, idx) => (
            <tr key={`store-${idx}`}>
              <td>{store.name}</td>
              {store.cookiesBought.map((cookies, idx) => <td key={`${store}-cookie-${idx}`}>{cookies}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table