import React from 'react';
import DefaultSubregisterPage from '@riboseinc/react-static-plugin-paneron-registry/DefaultSubregisterPage';
import { itemClassConfiguration } from '@riboseinc/paneron-extension-glossarist/registryConfig';


export default () => (
  <DefaultSubregisterPage itemClassConfiguration={itemClassConfiguration} />
)
