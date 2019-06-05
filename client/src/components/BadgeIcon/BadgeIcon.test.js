import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import BadgeIcon from "./BadgeIcon";
import { ReactComponent as BagIcon } from '../../assets/svg/bag.svg';

import classes from './BadgeIcon.module.scss';

configure({adapter: new Adapter()});

describe('<BadgeIcon />', () => {
    let wrapper;

    const props = {
        price: 10,
        counter: 5,
        renderIcon: () => (
            <BagIcon />
        )
    };

    beforeEach(() => {
        wrapper = shallow(<BadgeIcon {...props} /> );
    });

    it('should render <BadgeIcon /> component', () => {

        expect(wrapper.exists(`div.${classes.BadgeIcon__item}`)).toBe(true);

        const Price = wrapper.find(`div.${classes.HeaderBag__price}`);
        expect(Price).toHaveLength(1);
        expect(Price.text()).toBe("£ 10");

        expect(wrapper.find(BagIcon)).toHaveLength(1);

        const Counter = wrapper.find(`span.${classes.Bag__itemCounter}`);
        expect(Counter).toHaveLength(1);
        expect(Counter.text()).toBe("5");
        
    });

    it('should render <BadgeIcon /> without Price and Counter', () => {

            wrapper.setProps({
                price: null,
                counter: 0
            });

        expect(wrapper.exists(`div.${classes.BadgeIcon__item}`)).toBe(true);

        const Price = wrapper.find(`div.${classes.HeaderBag__price}`);
        expect(Price).toHaveLength(0);

        expect(wrapper.find(BagIcon)).toHaveLength(1);

        const Counter = wrapper.find(`span.${classes.Bag__itemCounter}`);
        expect(Counter).toHaveLength(1);
        expect(Counter.text()).toBe("0");
        
    });

});

