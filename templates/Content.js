import styled from 'styled-components';

const Content = ({ children }) => {
  return <ContentArea>{children}</ContentArea>;
};

export { Content };
const ContentArea = styled.div`
  padding: 25px;
`;
