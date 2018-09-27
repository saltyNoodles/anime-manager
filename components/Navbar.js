import Link from 'next/link';
import styled from 'styled-components';

const Navbar = ({ items = [] }) => {
  return (
    <Bar id="navbar">
      <Brand>Anime List</Brand>
      <Nav role="navigation" className="nav-list">
        {items.map((item, i) => (
          <NavItem key={`nav-item-${i}`}>
            <Link href={item.href}>
              <A href={item.href}>{item.text}</A>
            </Link>
          </NavItem>
        ))}
      </Nav>
    </Bar>
  );
};

export { Navbar };

const Brand = styled.h3`
  vertical-align: top;
  background: 'red';
  padding: 0px;
  margin: 0px;
`;
const Bar = styled.section`
  background: black;
  padding: 25px;
  display: grid;
  color: white;
  grid-template-columns: 200px 1fr;
  justify-content: space-between;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  * {
    display: inline;
  }
`;

const Nav = styled.nav`
  text-align: right;
`;

const NavItem = styled.div`
  padding: 10px;
`;

const NavLink = styled(Link)``;

const A = styled.a`
  text-decoration: none;
  color: #c0ffee;
  &:hover {
    opacity: 0.5;
  }
`;
// const A = ({ children, ...props }) => <a {...props}>{children}</a>;
