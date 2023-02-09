import React from 'react';
import { PortfolioElStyle, TitleLink } from './PortfolioElement.styled';

const PortfolioElement = ({ info }) => {
    return (
        <PortfolioElStyle>
            <TitleLink target="blank" href={info.link}>
                {info.title}
            </TitleLink>
            <div>Technologies: {info.tehnology}</div>
        </PortfolioElStyle>
    );
};

export default PortfolioElement;
