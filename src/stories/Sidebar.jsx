// @flow
import 'normalize.css';
import I from 'seamless-immutable';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { storiesOf } from '@kadira/storybook';

import 'fonts/proxima-nova.css';
import Sidebar from 'components/Sidebar';
import reducer from 'reducer';


const mockState = I.from({
  activeTab: 1,
  editors: [
    { patient: { firstName: 'Patient', lastName: 'One' } },
    { patient: { firstName: 'Patient', lastName: 'Two' } },
    { patient: { firstName: 'Patient', lastName: 'Three' } },
  ],
});

const mockStore = createStore(
  reducer,
  mockState
);

storiesOf('Sidebar', module)
  .add('multi-tab', (): React.Element<any> => (
    <Provider store={mockStore}>
      <div style={{ height: '200px' }}>
        <Sidebar />
      </div>
    </Provider>
  ));
