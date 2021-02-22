import React from 'react';
import DefaultHomePage from '@riboseinc/react-static-plugin-paneron-registry/DefaultHomePage';
import { itemClassConfiguration } from '@riboseinc/paneron-extension-glossarist/registryConfig';


export default () => (
  <DefaultHomePage itemClassConfiguration={itemClassConfiguration} />
)
