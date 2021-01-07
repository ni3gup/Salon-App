import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton
            title={'Text'}
            {...props}
            IconComponent={Ionicons}
            iconSize={30}
            color='white'
        />
    );
};

export default CustomHeaderButton;