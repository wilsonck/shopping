import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import CardProduct from './CardProduct';
import Price from "../Price/Price";
import Button from "../Button/Button";

import classes from './CardProduct.module.scss';

configure({adapter: new Adapter()});

describe('<CardProduct />', () => {
    let wrapper;

    const props = {
        brandName: "Brand Name",
        productName: "Product Name",
        isIntheCart: false,
        isInWishList: false,
    };

    beforeEach(() => {
        wrapper = shallow(<CardProduct {...props} /> );
    });

    it('should render <CardProduct /> component', () => {

        expect(wrapper.exists(`article.${classes.Product}`)).toBe(true);

        expect(wrapper.find(Button)).toHaveLength(2);
        expect(wrapper.find(Price)).toHaveLength(1);

        const BrandName = wrapper.find(`h1.${classes.Product__title}`);
        expect(BrandName).toHaveLength(1);
        expect(BrandName.text()).toBe("Brand Name");

        const ProductName = wrapper.find(`p.${classes.Product__subtitle}`);
        expect(ProductName).toHaveLength(1);
        expect(ProductName.text()).toBe("Product Name");

        //Check the name button
        expect(wrapper.find(Button).last().children().text()).toBe("Add to Cart");
        
    });

    it('should render <CardProduct /> component with Add Cart and Add Wish disabled', () => {

        wrapper.setProps({
            isIntheCart: true,
            isInWishList: true
        });

        const WishListButton = wrapper.find(`Button.${classes.ButtonInWishList}`);
        expect(WishListButton).toHaveLength(1);

        const CartButton = wrapper.find(`Button.${classes.ButtonInCart}`);
        expect(CartButton).toHaveLength(1);
        expect(CartButton.children().text()).toBe("In Cart");
       
    });

    
});

