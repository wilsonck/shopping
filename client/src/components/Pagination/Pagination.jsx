import React, { Component } from 'react';

import classes from './Pagination.module.scss';

import { ReactComponent as ArrowLeft } from '../../assets/svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg';

import { getClassesToApply } from '../../helpers/formatter/Classes';
class Pagination  extends Component{

    state = { 
        itensPerPage: this.props.itensPerPage,
        totalItens: this.props.totalItens,
        currentPage: 1,
        pages: 0
    };

    componentDidUpdate(prevProps){
        if(prevProps.totalItens !== this.props.totalItens){
            this.setTotalPages(this.props.totalItens);
        }

    }

    setTotalPages = (totalItens) => {
        const pages = Math.ceil(totalItens / this.state.itensPerPage);
        this.setState({
            pages: pages
        })
    }

    isDisabledNextPage = () => {
        return this.state.currentPage === this.state.pages;
    }

    isDisabledPrevPage = () => {
        return this.state.currentPage === 1;
    }

    prevNextPage = ( typeAction ) =>{
        const newPage = typeAction === "next" ? this.state.currentPage + 1 : this.state.currentPage - 1;
        this.setCurrentPage(newPage);
        this.props.changePage(newPage);
    }

    setCurrentPage = (newPage) => {
        this.setState({
            currentPage: newPage
        })
    }

    changePage = (newPage) => {
        this.setCurrentPage(newPage);
        this.props.changePage(newPage);
    }

    buildArrayPages = (amountPages) => {
        let pageNumbers = [];
        for (let i = 1; i <= amountPages; i++) {
          pageNumbers.push(i);
        }
        return pageNumbers;
    }

    renderPages = () => {
        const arrayPages = this.buildArrayPages(this.state.pages);
        return arrayPages.map((page, index) => (<li key={`pg-${index}`} className={classes.PaginationItem}>
                    <a onClick={() => this.changePage(index+1)} href="#" className={classes.PaginationLink}>{page}</a>
                </li>));
    }

    
    render(){

        const classBtnPrev = this.isDisabledPrevPage() ? getClassesToApply(classes.Disabled, classes.PaginationLink) : classes.PaginationLink;
        const classBtnNext = this.isDisabledNextPage() ? getClassesToApply(classes.Disabled, classes.PaginationLink) : classes.PaginationLink;

        return (
            <nav className={classes.Pagination}>
                <ul className={classes.Pagination__list}>
                    
                    <li className={classes.PaginationItem}>
                        <a onClick={() => this.prevNextPage("prev")} href="#" className={classBtnPrev}>
                            <ArrowLeft className="icon" />
                        </a>
                    </li>

                    {this.renderPages(this.state.pages)}

                    <li className={classes.PaginationItem}>
                        <a onClick={() => this.prevNextPage("next")} className={classBtnNext}>
                            <ArrowRight className="icon" />
                        </a>
                    </li>



                </ul>
            </nav>
        );
    }
    
}

export default Pagination;