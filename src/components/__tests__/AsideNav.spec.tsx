import React from 'react';
import { shallow } from 'enzyme';

import { AsideNav } from 'components';

describe('AsideNav', () => {
  let component = null;

  it('renders correctly', () => {
    component = shallow(<AsideNav />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders the span sqlgate.com', () => {
    const result = shallow(<AsideNav />).contains(
      <span className={'label'}>SQLGate.com</span>,
    );
    expect(result).toBeTruthy();
  });
});
