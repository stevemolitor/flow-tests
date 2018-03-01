// @flow
import React from 'react';

import Connect from '../Connect';
import Foo from './Foo';

const mapStateToProps = state => ({
  name: 42
});

const WithId = ({children}) => children({id: 'not-an-id'});

const FooContainer = () => (
  <Connect mapStateToProps={mapStateToProps}>
    {({name}) => (
      <WithId>
        {({id}) => (
          // Expect two flow errors here:
          //   - name is number not a string
          //   - id is a string not a number
          <Foo name={name} id={id} />
        )}
      </WithId>
    )}
  </Connect>
);

export default FooContainer;

