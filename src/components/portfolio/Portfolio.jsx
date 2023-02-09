import React, { useState } from 'react';
import { PortfolioHigth, TitleBlock, FilterBlok, ButtonsBlok, ButtonFilter, PortfolioList } from './Portfolio.styled';
import { allPortfolio } from '../../helpers/portfolio';
import PortfolioElement from '../portfolioElement/PortfolioElement';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState(allPortfolio);
    const onClickFilter = number => {
        if (number === 0) setPortfolio(allPortfolio);
        if (number === 1) setPortfolio(allPortfolio.filter(el => el.code === 1));
        if (number === 2) setPortfolio(allPortfolio.filter(el => el.code === 2));
        if (number === 3) setPortfolio(allPortfolio.filter(el => el.code === 3));
        return;
    };
    return (
        <PortfolioHigth>
            <TitleBlock>Portfolio:</TitleBlock>
            <FilterBlok>
                <p>Filter:</p>
                <ButtonsBlok>
                    <ButtonFilter onClick={() => onClickFilter(0)}>All</ButtonFilter>
                    <ButtonFilter onClick={() => onClickFilter(1)}>Mobile</ButtonFilter>
                    <ButtonFilter onClick={() => onClickFilter(2)}>Web App</ButtonFilter>
                    <ButtonFilter onClick={() => onClickFilter(3)}>Site Layout</ButtonFilter>
                </ButtonsBlok>
            </FilterBlok>
            <PortfolioList>
                {portfolio.length > 0 && portfolio.map(el => <PortfolioElement key={el.title + 'ghfgfg'} info={el} />)}
            </PortfolioList>
        </PortfolioHigth>
    );
};

export default Portfolio;
