import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Pagination from "./Pagination";

import { ReactComponent as ArrowLeft } from '../../assets/svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg';

import classes from './Pagination.module.scss';

configure({adapter: new Adapter()});

describe('<Pagination />', () => {
    let wrapper;

    const props = {
        itensPerPage: 2,
        totalItens: 10,
        currentPage: 1
    };

    beforeEach(() => {
        wrapper = shallow(<Pagination {...props} /> );
    });

    it('should render <Pagination /> component', () => {

        const DEFAULT_TOTAL_ITENS = 10;

        wrapper.setState({
            totalItens: DEFAULT_TOTAL_ITENS,
            itensPerPage: 2,
            currentPage: 1
        });

        const setTotalPages = wrapper.instance();
        setTotalPages.setTotalPages(DEFAULT_TOTAL_ITENS);

        expect(wrapper.exists(`nav.${classes.Pagination}`)).toBe(true);
        expect(wrapper.find(`ul.${classes.Pagination__list}`)).toHaveLength(1);

        expect(wrapper.exists(`.${classes.BtnPrev}`)).toBe(true);
        expect(wrapper.find(ArrowLeft)).toHaveLength(1);
        expect(wrapper.find(ArrowRight)).toHaveLength(1);

        //Check amount itens pagination 5 numbers + 2 arrow
        expect(wrapper.find(`li.${classes.PaginationItem}`)).toHaveLength(7);
        
        const CurrentPage = wrapper.find(`a.${classes.PageCurrent}`);
        expect(CurrentPage).toHaveLength(1);
        expect(CurrentPage.text()).toBe("1");

        const ButtonNextDisable = wrapper.find(`a.${classes.Disabled}`);
        expect(ButtonNextDisable).toHaveLength(1);
        expect(ButtonNextDisable.find(ArrowLeft)).toHaveLength(1);
        
    });

    it('should render <Pagination /> with arrow next is disable', () => {

        const DEFAULT_TOTAL_ITENS = 10;

        wrapper.setState({
            totalItens: DEFAULT_TOTAL_ITENS,
            itensPerPage: 2,
            currentPage: 5
        });

        const setTotalPages = wrapper.instance();
        setTotalPages.setTotalPages(DEFAULT_TOTAL_ITENS);
        
        const CurrentPage = wrapper.find(`a.${classes.PageCurrent}`);
        expect(CurrentPage).toHaveLength(1);
        expect(CurrentPage.text()).toBe("5");

        const ButtonNextDisable = wrapper.find(`a.${classes.Disabled}`);
        expect(ButtonNextDisable).toHaveLength(1);
        expect(ButtonNextDisable.find(ArrowRight)).toHaveLength(1);
        
    });
});

