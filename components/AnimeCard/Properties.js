import styled from 'styled-components';

import { Property } from './Property';

const Properties = ({ data }) => (
  <PropertyList>
    {Object.entries(data).map((kvpair, i) => {
      const [name] = kvpair;

      const value = data[name].value;
      const defaultValue = data[name].defaultValue || null;
      let show;
      if (data[name].show === false) {
        show = data[name].show;
      } else {
        show = true;
      }
      return (
        <Property
          key={`anime-property-${i}`}
          name={name}
          value={value}
          show={show}
        />
      );
    })}
  </PropertyList>
);

export { Properties };

const PropertyList = styled.ul`
  padding: 0px;
  margin: 0px;
`;
