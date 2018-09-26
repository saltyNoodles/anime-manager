import styled from 'styled-components';
import NextLink from 'next/link';

const Link = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <A>{children}</A>
    </NextLink>
  );
};
export { Link };

const A = styled.a``;
