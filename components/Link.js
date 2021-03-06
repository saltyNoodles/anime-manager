import styled from 'styled-components';
import NextLink from 'next/link';

const Link = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
};
export { Link };
