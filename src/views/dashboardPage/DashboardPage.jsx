// import { useEffect } from 'react';

import { Container } from '../../components/container/Container';
import BackgroundMainPage from '../../components/backgroundMainPage/BackgroundMainPage';
// import Navigation from 'components/navigation/Navigation';
import Portfolio from '../../components/portfolio/Portfolio';
import AppBar from '../../components/appBar/AppBar';
import AboutMe from '../../components/aboutMe/AboutMe';
import Contacts from '../../components/contacts/Contacts';
import { MainWrap } from './DashboardPage.styled';

const DashboardPage = () => {
    return (
        <BackgroundMainPage>
            <AppBar />
            <Container>
                <MainWrap>
                    <AboutMe />
                    <Portfolio />
                    <Contacts />
                </MainWrap>
            </Container>
        </BackgroundMainPage>
    );
};

export default DashboardPage;
