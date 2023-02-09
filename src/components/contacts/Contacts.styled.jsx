import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const ContactsBacground = styled.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 45px;
    background-color: #77777724;
    min-height: 150px;
    padding: 10px;
    padding-bottom: 30px;
`;

export const TitleBlock = styled.h2`
    background-color: transparent;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 600;
`;

export const GeneralBlockInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 15px;
    padding-right: 15px;
`;
export const NameInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const AboutNameInfo = styled.p`
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
export const InfoLink = styled(Link)`
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
