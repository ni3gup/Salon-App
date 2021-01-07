import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Login</Text>
            
            <View style={styles.inputView} >
                <TextInput style={styles.inputText} placeholder="Email" placeholderTextColor="#003f5c" onChangeText={text => setEmail(text)} />
            </View>

            <View style={styles.inputView} >
                <TextInput secureTextEntry style={styles.inputText} placeholder="Password" placeholderTextColor="#003f5c" onChangeText={text => setPassword(text)} />
            </View>
            
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text style={styles.signupText}>Signup</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: Colors.primary,
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Colors.primary,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        fontSize: 14
    },
    loginBtn: {
        width: "80%",
        backgroundColor: Colors.primary,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    },
    signupText: {
        fontSize: 16
    }
});

export default Login;
