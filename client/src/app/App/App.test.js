import React from 'react';
import App from './App';
import AppLayout from './AppLayout/AppLayout';

describe('<App />', () => {
    it('renders without crashing', () => {
        let wrapper = shallow(<App />);
        expect(wrapper.find(AppLayout)).toHaveLength(1);
    });
});

