import React from 'react';
import DefaultItemClassPage from '@riboseinc/react-static-plugin-paneron-registry/DefaultItemClassPage';
import { itemClassConfiguration } from '@riboseinc/paneron-extension-glossarist/registryConfig';


export default () => (
  <DefaultItemClassPage itemClassConfiguration={itemClassConfiguration} />
)
