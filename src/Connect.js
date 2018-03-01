// @flow
import React, { createElement, PureComponent, type Node } from "react";
import { connect } from "react-redux";

type ConnectProps<State, Props> = {
  mapStateToProps: (state: State) => Props,
  children: (props: Props) => Node,
};

//  Render prop version of connect.
class Connect extends PureComponent<ConnectProps<*, *>> {
  render() {
    const { mapStateToProps, children } = this.props;
    // connecting every render is probably very naive! ;)
    return createElement(connect(mapStateToProps)(props => children(props)));
  }
}

export default Connect;
