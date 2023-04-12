import Form from '@/Components/Form';
import Table from '@/Components/Table';
import Link from 'next/link';

const SalesData = () => {

  let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


  return (
    <>
      <div>
        This is the sales data page!
      </div>
      <Link href="/">Home</Link>
      <Table />
      {/* <Form /> */}
    </>
  )
}

export default SalesData