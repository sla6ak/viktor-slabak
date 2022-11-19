import { Container } from '../container/Container';
import { Header, HeaderBox, Link } from './AppBar.styled';
import LogoSlabak from '../LogoSlabak/LogoSlabak';

const AppBar = () => {
    return (
        <>
            <Header>
                <Container>
                    <HeaderBox>
                        <Link to="/home">
                            <LogoSlabak />
                        </Link>
                        <div>settings</div>
                    </HeaderBox>
                </Container>
            </Header>
        </>
    );
};

export default AppBar;
