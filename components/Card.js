import styled from 'styled-components';

const Card = ({ header, children, contentImage }) => {
  return (
    <CardContainer>
      {header && <CardHeader>{header}</CardHeader>}
      {children && (
        <CardContent>
          <ImageContainer>
            <CardContentImage src={contentImage} />
          </ImageContainer>
          <CardContentText>{children}</CardContentText>
        </CardContent>
      )}
    </CardContainer>
  );
};

export { Card };

const contentBackground = '#fff';
const contentTextColor = '#000';

const CardContainer = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  max-height: 400px;
`;

const CardHeader = styled(CardContainer)`
  background: ${contentTextColor};
  color: ${contentBackground};
  margin: 0px;
  padding: 15px;
  border-radius: 0px;
  font-weight: bolder;
  font-size: 1.1em;
  text-align: center;
`;

const CardContent = styled.div`
  width: 100%;
  max-height: 400px;
  background: ${contentBackground};
  overflow: hidden;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr;
`;

const CardContentText = styled.div`
  padding: 10px;
  color: ${contentTextColor};
  overflow: scroll;
  padding-bottom: 200px;
`;

const CardContentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`;
