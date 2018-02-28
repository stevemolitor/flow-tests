// @flow
import React from 'react';
import { connect } from 'react-redux';

type Props = { name: string };
const Foo = (props: Props) => <div className={props.name} />;

function mapStateToProps() {
  return {
    name: true,
  };
}
const FooContainer = connect(mapStateToProps, null)(Foo);

export default FooContainer;
