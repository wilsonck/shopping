import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Footer from "./Footer";

import classes from './Footer.module.scss';

configure({adapter: new Adapter()});

describe('<Footer />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer  /> );
    });

    it('should render <Footer />', () => {

        const Footer = wrapper.find(`footer.container`);
        expect(Footer).toHaveLength(1);

        const Paragraph = wrapper.find(`p.${classes.Footer__sidenote}`);
        expect(Paragraph).toHaveLength(1);
        expect(Paragraph.text()).toBe("Footer");
        
    });

});

