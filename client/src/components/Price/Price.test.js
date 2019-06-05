import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Price from "./Price";

import classes from './Price.module.scss';

configure({adapter: new Adapter()});

describe('<Price />', () => {
    let wrapper;

    const props = {
        regularPrice: '10',
        discountPrice: '5',
    };

    beforeEach(() => {
        wrapper = shallow(<Price {...props} /> );
    });

    it('should render <Price /> with discount price', () => {

        const RegularPrice = wrapper.find(`span.${classes.Strike}`);
        expect(RegularPrice).toHaveLength(1);
        expect(RegularPrice.text()).toBe("£10");

        const DisccountPrice = wrapper.find(`span.${classes.Discounted}`);
        expect(DisccountPrice).toHaveLength(1);
        expect(DisccountPrice.text()).toBe("£5");

        const Price = wrapper.find(`span.${classes.Price}`);
        expect(Price).toHaveLength(0);
        
    });

    it('should render <BadgeIcon />  with regular price only', () => {

        wrapper.setProps({
            regularPrice: '100',
            discountPrice: null
        });

        const RegularPrice = wrapper.find(`span.${classes.Strike}`);
        expect(RegularPrice).toHaveLength(0);

        const DisccountPrice = wrapper.find(`span.${classes.Discounted}`);
        expect(DisccountPrice).toHaveLength(0);

        const Price = wrapper.find(`span.${classes.Price}`);
        expect(Price).toHaveLength(1);
        expect(Price.text()).toBe("£100");

    });

});

