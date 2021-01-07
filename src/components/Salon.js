import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Salon = ({ salon }) => {
    return (
        <TouchableOpacity>
            <View style={{ width: 350, height: 250, borderRadius: 10, borderColor: '#E5E5E5', borderWidth: 1, marginHorizontal: 20, marginVertical: 10, justifyContent: 'center' }}>
                <Image source={require(`../../assets/images/salons/salon-1.png`)} style={{ width: 366, height: 170, marginLeft: -9, borderRadius: 10, marginTop: -22 }} />
                <Text style={{ color: '#6C6C6C', padding: 5, marginLeft: 10, fontSize: 16, lineHeight: 24, fontWeight: "500" }}>{salon.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 5, }}>
                    <Icon name="location" color="#6C6C6C" size={20} style={{ marginLeft: 10 }} />
                    <Text style={{ color: '#6C6C6C', marginLeft: 5, marginTop: -3, fontSize: 16, lineHeight: 24, fontWeight: "500" }}>{salon.address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Salon;
