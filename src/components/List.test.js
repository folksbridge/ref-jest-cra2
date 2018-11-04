import React from 'react';
//import { shallow } from '../enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from './List';
import { wrap } from 'module';


enzyme.configure({ adapter: new Adapter() });

describe('List tests', () => {

  it('renders list-items', () => {
  //   const items = ['one', 'two', 'three'];
  //   const wrapper = enzyme.shallow(<List items={items} />);

  //   // Expect the wrapper object to be defined
  //   expect(wrapper.find('.list-items')).toBeDefined();
  //   expect(wrapper.find('.item')).toHaveLength(items.length);
  // });
    const items = ['one', 'two', 'three'];
    const wrapper = enzyme.render(<List items={items} />);
    wrapper.addClass('foo');
    // Expect the wrapper object to be defined
    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(items.length);
  });

  it('renders a list item', () => {
    const items = ['Thor', 'Loki'];
    const wrapper = enzyme.shallow(<List items={items} />);

    // Check if an element in the Component exists
    expect(wrapper.contains(<li key='Thor' className="item">Thor</li >)).toBeTruthy();
  });

  it('renders correct text in item', () => {
    const items = ['John', 'James', 'Luke'];
    const wrapper = enzyme.shallow(<List items={items} />);

    //Expect the child of the first item to be an array
    expect(wrapper.find('.item').get(0).props.children).toEqual('John');
  });
});