// @flow
import React from 'react';

type Props = {
  name: string,
  id: number,
};

const Foo = (props: Props) => <div className={props.name} key={props.id} />;

export default Foo;
