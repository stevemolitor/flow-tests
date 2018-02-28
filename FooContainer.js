// @flow
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

type Props = {
  name: string,
  id: number,
};
const Foo = (props: Props) => <div className={props.name} key={props.id} />;

function mapStateToProps() {
  return {
    name: 'Vitor',
  };
}

function addID(Component) {
  return props => <Component {...props} id={'not-an-id'} />;
}

const FooContainer = _.flowRight(addID, connect(mapStateToProps, null))(Foo);

export default FooContainer;
