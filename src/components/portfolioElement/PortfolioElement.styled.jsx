import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const PortfolioElStyle = styled.div`
    flex-basis: calc(100% / 3 - 30px);
    margin-left: 30px;
    margin-top: 30px;
    box-sizing: border-box;
    border: 1px solid #a7a7a7;
    min-height: 150px;
    padding: 15px 10px;
`;
export const TitleLink = styled(Link)`
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
`;
