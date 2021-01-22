import React, {Component} from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

const HelloWorld = () => {
    return ( 
        
         
            <View style={styles.container}>
              <Text>HelloWorld</Text>
              <Button title="회원가입"></Button>
              <Button title="로그인"></Button>
            </View>
    
    
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default HelloWorld;