import styled from 'styled-components';

import { PropertyKey } from './PropertyKey';
import { PropertyValue } from './PropertyValue';

const Property = ({ name, value, defaultValue, show = true }) => {
  if (!show || (!value && !defaultValue)) {
    return <div />;
  }

  return (
    <PropertyStyle>
      <PropertyKey>{name}:</PropertyKey>{' '}
      <PropertyValue>{value || defaultValue}</PropertyValue>
    </PropertyStyle>
  );
};

export { Property };

const PropertyStyle = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;
