// @flow
import React from "react";

import Connect from "../Connect";
import Foo from "./Foo";

const mapStateToProps = state => ({
  name: 42
});

const WithName = ({ children }) => (
  <Connect mapStateToProps={mapStateToProps}>
    {({ name }) => children({ name })}
  </Connect>
);

const WithId = ({ children }) => children({ id: "not-an-id" });

const WithFooData = ({children}) => (
  <WithName>
    {({ name }) => <WithId>{({ id }) => children({ name, id })}</WithId>}
  </WithName>
);

const FooContainer = () => (
  <WithFooData>
    {({name, id}) => <Foo name={name} id={id} />}
  </WithFooData>
);

export default FooContainer;
