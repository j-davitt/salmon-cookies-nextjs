import Form from '@/Components/Form';
import Table from '@/Components/Table';
import Link from 'next/link';
import Store from '@/Components/storeModel';
import { useState } from 'react';

const SalesData = () => {

  const [stores, setStores] = useState([
    new Store('Seattle', 23, 65, 6.3),
    new Store('Tokyo', 3, 24, 1.2),
    new Store('Dubai', 11, 38, 3.7),
    new Store('Paris', 20, 38, 2.3),
    new Store('Lima', 2, 16, 4.6)
  ]);

  return (
    <>
      <div>
        This is the sales data page!
      </div>
      <Link href="/">Home</Link>
      <Table 
        stores={stores}
        setStores={setStores}
      />
      <Form 
        stores={stores}
        setStores={setStores}
      />
    </>
  )
}

export default SalesData