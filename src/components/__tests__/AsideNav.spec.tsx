import React from 'react';
import { shallow } from 'enzyme';

import { AsideNav } from 'components';

it('renders the span sqlgate.com', () => {
  const result = shallow(<AsideNav />).contains(
    <span className={'label'}>SQLGate.com</span>,
  );
  expect(result).toBeTruthy();
});
