import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  return (
    <header>
      <h1>Welcome to Salmon Cookies</h1>
      <div id="moving-salmon">
        <Image
          src="/salmon.png"
          alt="Picture of a salmon cookie cutter"
          width={250}
          height={100}
        />
      </div>
      <nav>
        <Link href="/SalesData">Sales Data</Link>

      </nav>
    </header>
  );
}

export default Header;