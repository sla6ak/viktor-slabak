import React from 'react';
import { ModalBackgr, ImgS, TekstAv } from './ModalAvatar.styled';
import avatar from '../../images/my-previe.png';

const ModalAvatar = () => {
    return (
        <ModalBackgr>
            <TekstAv>Viktor Yachmenyk</TekstAv>
            <ImgS src={avatar} alt="ava" />
        </ModalBackgr>
    );
};

export default ModalAvatar;
