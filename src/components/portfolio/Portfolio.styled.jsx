import styled from '@emotion/styled';

export const PortfolioHigth = styled.div`
    background-color: transparent;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    padding-bottom: 30px;
    padding-top: 30px;
`;
export const TitleBlock = styled.h2`
    background-color: transparent;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const FilterBlok = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 30px;
`;

export const ButtonsBlok = styled.div`
    display: flex;
    background-color: transparent;
    margin-left: 15px;
`;
export const ButtonFilter = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #c9c9c9;
    font-size: 1rem;
    font-weight: 500;
    margin: 0px 4px 0px 4px;
    padding: 6px 20px;
    border: 0px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    color: var(--streng-black);
    cursor: pointer;
    transition-property: box-shadow, background-color, color;
    transition-duration: 400ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.12);
        color: #ffffff;
        background-color: #2196f3;
    }
`;
export const PortfolioList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    margin-top: -30px;
`;
