import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faHouseChimney, faUser, faUsers, faArrowRightFromBracket, faRotate } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import logic from '../../../logic/index';
import View from '../../../components/library/View/View';
import Header from '../Header/Header';
import Button from '../../../components/core/Button/Button';
import Footer from '../Footer/Footer';
import Text from '../../../components/core/Text/Text';

import Burger from '../Burger/Burger';
import PanelEditUsername from './panelEditUsername/PanelEditUsername';

import './Profile.css'

function Profile() {
    console.log('Profile -> render')

    const [currentImage, setCurrentImage] = useState(0)

    const images = [
        '/images/Icono1_Blanco.png',
        '/images/Icono2_Verde.png',
        '/images/Icono3_Rojo.png',
        '/images/Icono4_Azul.png',
        '/images/Icono5_Amarillo.png',
        '/images/Icono6_Pink.png',
    ];

    const handleChangeImage = () => {
        if (currentImage < images.length - 1) {
            setCurrentImage(currentImage + 1)
        } else {
            setCurrentImage(0)
        }
    }

    const navigate = useNavigate()
    const [username, setUsername] = useState(null)
    const [isEditingUsername, setIsEditingUsername] = useState(false)
    const [refresh, setRefresh] = useState(Date.now());

    useEffect(() => {
        logic.getUserName()
            .then(username => {
                setUsername(username)
            })
            .catch(error => {
                console.error(error)
                alert(error.message)
            })
    }, [refresh])

    const handleRefresh = () => {
        setRefresh(Date.now())
    }

    const handleGoHome = () => {
        navigate('/')
    }

    const startEditingUsername = () => {
        setIsEditingUsername(true)
    }

    const handleClosePanel = () => {
        setIsEditingUsername(false);
    };

    return <View>
        <Header>
            <Burger />
        </Header>

        <div className='Profile'>
            <div className='Profile-ImageIcon'>
                <img src={images[currentImage]} alt='Profile' className='Image' />
                <FontAwesomeIcon
                    className='Rotate'
                    icon={faRotate}
                    onClick={handleChangeImage}
                />
            </div>
            <div className='Username-edit'>
                <Text className='Username'>{username}</Text>
                <div className='Icon-edit'>
                    <FontAwesomeIcon
                        icon={faPen}
                        size='xl'
                        style={{ color: '#235186', }}
                        onClick={startEditingUsername}
                    />
                </div>
            </div>

            {isEditingUsername && (
                <PanelEditUsername
                    onClose={handleClosePanel}
                    onUsernameUpdated={handleRefresh}
                />
            )}

            <div className='Separator'></div>
            <Button onClick={handleGoHome} className='Game-List'>Game List</Button>
        </div>

        <Footer />

    </View>
}

export default Profile