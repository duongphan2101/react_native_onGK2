import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert,TextInput } from 'react-native';

const ScreenLogin = ({navigation}) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const user = [
        {email: "duong@gmail.com", pass: "123"},
        {email: "duong1@gmail.com", pass: "123"},
        {email: "duong2@gmail.com", pass: "123"},
        {email: "duong3@gmail.com", pass: "123"},
        {email: "duong4@gmail.com", pass: "123"},
    ];

    const handleContinue = () => {
        if (email === '' || password === '') {
            Alert.alert("Lỗi", "Vui lòng nhập cả email và mật khẩu!");
        } else {
            const foundUser = user.find(u => u.email === email && u.pass === password);
            if (foundUser) {
                navigation.navigate('Electronic');
            } else {
                Alert.alert("Lỗi", "Email hoặc mật khẩu không đúng!");
            }
        }
    };
    
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <View style={styles.container}>
            <View style={styles.style1}>
                <Image source={require('../assets/icon.png')}/>
            </View>
            <View style={styles.style2}>
                <Text style={styles.textHello}>Hello Again!</Text>
            </View>
            <View style={styles.style3}>
                <Text style={styles.textLogin}>Log into your account</Text>
            </View>
            <View style={styles.style4}>
                <Image source={require('../assets/Vector.png')} style={styles.imgVector}/>
                <TextInput style={styles.ipEmail} 
                placeholder='Enter your email address'
                keyboardType='email-address' 
                value={email} 
                onChangeText={setEmail}
                />
            </View>
            <View style={styles.style5}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/lock.png')} style={styles.imglock} />
                    <TextInput  style={styles.ipPassword}
                        placeholder='Enter your password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword} 
                    />
                </View>
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Image source={require('../assets/eye.png')} style={styles.imgeye} />
                </TouchableOpacity>
               
            </View>
            <View style={styles.style6}>
                 <Text style={styles.texrForgot}>Forgot password?</Text>
            </View>
            <View style={styles.style7}>
            <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
                <Text style={styles.textContinue}>Continue</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.style8}>
                <Text style={styles.textor}>or</Text>
            </View>
        <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
                <Image source={require('../assets/google.png')} style={styles.socialIcon}/>
             </TouchableOpacity>
             <TouchableOpacity style={styles.socialButton}>
                  <Image source={require('../assets/face.png')} style={styles.socialIcon}/>
             </TouchableOpacity>
             <TouchableOpacity style={styles.socialButton}>
                  <Image source={require('../assets/apple.png')} style={styles.socialIcon}/>
             </TouchableOpacity>
      </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:'center',
        },
        style1:{
           
            marginTop:140
        },
        style2:{
             
            marginTop:10
        },
        textHello:{
            fontSize:28,
            fontWeight:600
        },
        style3:{
           
            marginTop:5
        },
        textLogin:{
            fontSize:11,
            color: 'gray'
        },
        style4:{
            marginTop:40, 
            flexDirection: 'row',
            width: '100%',
            maxWidth: 350,
            borderWidth: 1.5,
            borderColor: '#bababa',
            borderRadius: 12,
            paddingHorizontal: 10,
        },
        ipEmail:{
            color:'gray',
            padding: 10,
            outlineWidth: 0,
        },
        style5:{
            marginTop:20,
            flexDirection: 'row',
            width: '100%',
            maxWidth: 350,
            borderWidth: 1.5,
            borderColor: '#bababa',
            borderRadius: 12,
            paddingHorizontal: 10,
            justifyContent: 'space-between'
        },
        ipPassword:{
            color:'gray',
            padding: 10,
            outlineWidth: 0,
        },
        imgVector:{
           tintColor:'gray',
           marginTop:13
        },
        imglock:{
            tintColor:'gray',
            marginTop:8
        },
        imgeye:{
            tintColor:'black',
            marginTop:8,
            marginLeft:100
        },
        style6:{
           marginLeft:220,
           marginTop:5
        },
        texrForgot:{
            color:'#61a4ad',
            fontWeight:'bold'
        },
        style7:{
            marginTop:20
        },
        continueButton:{
            alignItems: 'center',
            backgroundColor: '#00bdd6',
            borderRadius: 10,
            paddingVertical: 12,
            width:345  
        },
        textContinue:{
            color:'#ffffff',
           fontSize:15
        },
        style8:{
            marginTop:30
        },
        textor:{
            color:'gray'
        },
        socialContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          },
          socialButton: {
            padding: 3,
          }
    }
)
export default ScreenLogin;