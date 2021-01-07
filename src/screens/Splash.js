import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(async () => {
            navigation.navigate('Home');
        }, 2000);
    }, []);

    return (
        <View style={styles.screen}>
            <Image
                source={require('../../assets/images/logo.png')}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E5E5'
    },
    logo: {
        width: '100%',
        height: '100%',
    },
});

export default Splash;
