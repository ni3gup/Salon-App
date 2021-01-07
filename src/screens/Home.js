import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import HeaderButton from '../components/HeaderButton';
import Salon from '../components/Salon';
import Colors from '../constants/colors';
import Salons from '../data/salon';

const Home = () => {
    const [salons, setSalons] = useState(null);

    useEffect(() => {
        setSalons(Salons);
    }, [])

    return (
        <View>
            <TextInput
                style={{ height: 40, borderWidth: 1, margin: 20, borderRadius: 20, width: '90%', borderColor: Colors.primary, color: Colors.accent, textAlign: 'center' }}
                placeholder={'Search Salon'}
                placeholderTextColor={Colors.accent}
                onChangeText={text => { console.log(text) }}
            />
            <Icon name="search" color={Colors.accent} size={20} style={{ position: 'absolute', top: 28, right: 35 }} />

            <Text style={{ color: Colors.primary, padding: 25, fontWeight: 'bold', marginTop: -30 }}>Salons</Text>

            <FlatList
                style={{ marginTop: -25 }}
                data={salons}
                keyExtractor={(item) => item.id.toString()}
                renderItem={(itemData) => (
                    <Salon salon={itemData.item} />
                )}
            />
        </View>
    )
}

Home.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Salon',
        headerTitleAlign: 'center',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <View>
                <Icon name="bell" color="white" size={20} style={{ marginHorizontal: 30 }} />
            </View>
        ),
    };
};

export default Home;

