import React, { useState } from 'react';
import {
    AboutMeBacground,
    TextBlock,
    Title,
    MyPrevie,
    BtnModal,
    TextSkils,
    Title2,
    Title3,
    TextMe,
    BoxSkills,
} from './AboutMe.styled';
import Modal from '../modal/Modal';
import ModalAvatar from '../modalAvatar/ModalAvatar';
import avatar from '../../images/my-previe.png';

const AboutMe = () => {
    const [modal, setModal] = useState(null);

    const onModalClose = () => {
        setModal(prev => !prev);
    };
    const onModalOpen = () => {
        setModal(prev => !prev);
    };

    return (
        <AboutMeBacground>
            <Title>JS DEVELOPER</Title>
            <BoxSkills>
                <TextBlock>
                    <TextSkils>
                        <Title2>Hard skills: </Title2>
                        <Title3>Frontend: </Title3>
                        <TextMe>HTML, CSS/SASS, Web-socets, Figma, React, Redux, axios, Three.js, Webgl...</TextMe>
                        <Title3>Backend: </Title3>
                        <TextMe>Cli, Node.JS, Express, MongoDB, CRUD…</TextMe>
                        <Title3>Mobile: </Title3>
                        <TextMe>React-native, Expo, EAS, Google Play-console, Google maps, AdMob...</TextMe>
                    </TextSkils>
                </TextBlock>
                <BtnModal onClick={onModalOpen}>
                    <MyPrevie src={avatar} alt="ava" />
                </BtnModal>
            </BoxSkills>

            {modal && (
                <Modal onModalClose={onModalClose}>
                    <ModalAvatar />
                </Modal>
            )}
        </AboutMeBacground>
    );
};

export default AboutMe;
