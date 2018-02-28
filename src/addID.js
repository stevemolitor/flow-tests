// @flow
import React from 'react';
import { type ComponentType, type ElementConfig } from 'react';

function addID<Props: {}, BaseComponent: ComponentType<Props>>(
  Component: BaseComponent
): ComponentType<$Diff<ElementConfig<BaseComponent>, { id: string | void }>> {
  return (props: Props) => <Component {...props} id="string" />;
}

export default addID;
