// @flow
import { connect } from 'react-redux';
import _ from 'lodash';

import Foo from './Foo';
import addID from '../addID';

const mapStateToProps = () => ({
  name: 'Vitor',
});

const FooContainer = _.flowRight(addID, connect(mapStateToProps))(Foo);

export default FooContainer;
