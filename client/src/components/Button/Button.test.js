import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Button from './Button';
import classes from 'Button.module.scss';

configure({adapter: new Adapter()});

describe('<Button />', () => {
    let wrapper;
    const onClickFn = jest.fn();
    beforeEach(() => {
        const props = {
            children: "Content",
            onClick: onClickFn
        }
        wrapper = shallow(<Button {...props} />);
    });

    it('should render a <Button />', () => {
        const button = wrapper.find("button");
        expect(button).toBeDefined();
        expect(button.hasClass(classes.Button)).toBe(true);
    });

    it('should add a custom css class from props.className', () => {
        wrapper.setProps({
            className: "my-class"
        })
        const button = wrapper.find("button");
        expect(button.hasClass(classes.Button)).toBe(true);
        expect(button.hasClass("my-class")).toBe(true);
    });


    it('should trigger action received in props.onClick', () => {
        wrapper.simulate('click');
        expect(onClickFn).toHaveBeenCalled();
    });

    it('should disabled the button disabled=true', () => {
        wrapper.setProps({
            disabled: true
        })
        const button = wrapper.find("button");
    });

});