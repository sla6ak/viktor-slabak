import React from 'react';
import {
    ContactsBacground,
    TitleBlock,
    GeneralBlockInfo,
    NameInfo,
    AboutNameInfo,
    InfoLink,
    OneBlok,
} from './Contacts.styled';
import { ReactComponent as TelegramSvg } from '../../images/contacts/icons8-telegram-app.svg';
import { ReactComponent as ViberSvg } from '../../images/contacts/icons8-viber.svg';
import { ReactComponent as TeleponeSvg } from '../../images/contacts/whatsapp-svgrepo-com.svg';
import { ReactComponent as LinkedinSvg } from '../../images/contacts/linkedin.svg';
import { ReactComponent as FacebookSvg } from '../../images/contacts/facebook.svg';
import { ReactComponent as GitHubSvg } from '../../images/contacts/github-svgrepo-com.svg';

const Contacts = () => {
    return (
        <ContactsBacground>
            <TitleBlock>My contacts:</TitleBlock>
            <GeneralBlockInfo>
                <OneBlok>
                    <NameInfo>
                        <AboutNameInfo>Ukraine</AboutNameInfo>
                    </NameInfo>
                    <NameInfo>
                        <AboutNameInfo>Krivoy Rog /50026</AboutNameInfo>
                    </NameInfo>
                    <NameInfo>
                        <AboutNameInfo>Karmeluka 23/60</AboutNameInfo>
                    </NameInfo>
                </OneBlok>
                <OneBlok>
                    <NameInfo>
                        <InfoLink sx={{ ml: '5px' }} target="blank" href="tel:+3800966290475">
                            <p>Tel: (+38) 0966290475</p>
                            <AboutNameInfo>
                                <TeleponeSvg width={24} height={24} />
                            </AboutNameInfo>
                        </InfoLink>
                    </NameInfo>
                    <NameInfo>
                        <InfoLink sx={{ ml: '5px' }} target="blank" href="https://t.me/Tor_Ya">
                            <p>Telegram</p>
                            <AboutNameInfo>
                                <TelegramSvg width={24} height={24} />
                            </AboutNameInfo>
                        </InfoLink>
                    </NameInfo>
                    <NameInfo>
                        <InfoLink sx={{ ml: '5px' }} target="blank" href="https://t.me/Tor_Ya">
                            <p>Viber</p>
                            <AboutNameInfo>
                                <ViberSvg width={24} height={24} />
                            </AboutNameInfo>
                        </InfoLink>
                    </NameInfo>
                </OneBlok>
                <OneBlok>
                    <NameInfo>
                        <InfoLink
                            sx={{ ml: '5px' }}
                            target="blank"
                            href="https://www.linkedin.com/in/viktor-yachmenik-81b759215/"
                        >
                            <p>Linkedin</p>
                            <AboutNameInfo>
                                <LinkedinSvg width={24} height={24} />
                            </AboutNameInfo>
                        </InfoLink>
                    </NameInfo>
                    <NameInfo>
                        <InfoLink
                            sx={{ ml: '5px' }}
                            target="blank"
                            href="https://www.facebook.com/profile.php?id=100017368142774"
                        >
                            <p>Facebook</p>
                            <AboutNameInfo>
                                <FacebookSvg width={24} height={24} />
                            </AboutNameInfo>
                        </InfoLink>
                    </NameInfo>
                    <NameInfo>
                        <InfoLink sx={{ ml: '5px' }} target="blank" href="https://github.com/sla6ak">
                            <p>GitHub</p>
                            <AboutNameInfo>
                                <GitHubSvg width={24} height={24} />
                            </AboutNameInfo>
                        </InfoLink>
                    </NameInfo>
                </OneBlok>
            </GeneralBlockInfo>
        </ContactsBacground>
    );
};

export default Contacts;
