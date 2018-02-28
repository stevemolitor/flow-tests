// @flow
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

type Props = {
  name: string,
  id: number,
};
const Foo = (props: Props) => <div className={props.name} key={props.id} />;

const mapStateToProps = () => ({
  name: true,
});

const addID = Component => props => <Component {...props} id={'not-an-id'} />;

const FooContainer = _.flowRight(connect(mapStateToProps, null), addID)(Foo);

export default FooContainer;
