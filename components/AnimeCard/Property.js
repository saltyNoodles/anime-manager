import styled from 'styled-components';

import { PropertyKey } from './PropertyKey';
import { PropertyValue } from './PropertyValue';

const Property = ({ name, value, defaultValue, show = true }) => {
  if (!show || (!value && !defaultValue)) {
    return <div />;
  } else if (name == 'tags') {
    console.log('value:', value, !!value);
    console.log('defaultValue:', defaultValue, !!defaultValue);
    console.log('show:', show, !!show);
  }
  return (
    <PropertyStyle>
      <PropertyKey>{name}:</PropertyKey> <PropertyValue>{value}</PropertyValue>
    </PropertyStyle>
  );
};

export { Property };

const PropertyStyle = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;
