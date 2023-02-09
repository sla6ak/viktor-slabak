import styled from '@emotion/styled';

export const AboutMeBacground = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
`;
export const Title = styled.p`
    font-size: 2rem;
    font-weight: 700;
    margin: 0 auto;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;
export const MyPrevie = styled.img`
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export const BtnModal = styled.button`
    background-color: #3a3a3a;
    border-width: 5px;
    border-radius: 5px;
    border-color: #4e4e4e;
    height: 200px;
    max-width: 200px;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    padding: 0;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        transform: scale(1.1);
    }
    @media (max-width: 768px) {
        flex-direction: column;
        margin: auto auto;
        height: 300px;
        max-width: 300px;
    }
`;
export const TextSkils = styled.div`
    font-size: 1.1rem;
    font-weight: 400;
    flex-direction: column;
    margin: 0 auto;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;
export const Title3 = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    margin: 10px 30px;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;
export const TextMe = styled.p`
    font-size: 1rem;
    font-weight: 400;
    font-family: caption;
    margin: 10px 30px;
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;
export const BoxSkills = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
// export const BoxSkills = styled.div`
//     display: flex;
//     flex-direction: row;
//     @media (max-width: 768px) {
//         flex-direction: column;
//     }
// `;
export const TitleBlock = styled.h2`
    background-color: transparent;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 600;
`;
