import React from 'react';

import Attribute from './attribute';

const SchemaAttributes = ({ forPath, attributes, type, includesEnabled }) =>
  attributes.length > 0 ? (
    <div>
      <h3>Attributes</h3>
      <ul>
        {attributes.map((attr, index) => (
          <li key={`schema-attribute-${index}`}>
            <Attribute
              forPath={forPath}
              attribute={attr}
              type={type}
              includeEnabled={includesEnabled}
            />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div />
  );

export default SchemaAttributes;
