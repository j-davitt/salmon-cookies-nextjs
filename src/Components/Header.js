import Link from 'next/link';


const Header = () => {
  return (
    <header>
      <h1>Welcome to Salmon Cookies</h1>
      <nav>
      <Link href="/SalesData">Sales Data</Link>

      </nav>
    </header>
  );
}

export default Header;