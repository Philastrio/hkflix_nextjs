import Link from 'next/link';

const headerStyles = {
  backgroundColor: 'yellow'
};

export default () => (
  <header style={headerStyles}>
    <nav>
      <ul>
        <li>
          <Link href={'/'}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      ul {
        display: flex;
      }
      ul li {
        margin-right: 20px;
      }
      header {
        background-color: peru;
      }
    `}</style>
  </header>
);
