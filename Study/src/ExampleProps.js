import React, {Component} from 'react';
import { StyleSheet, Text, Button, View, ScrollView, Image } from 'react-native';

const ExampleProps = () => {
    return ( 
        
         
            <View style={styles.container}>
              <Text>HelloWorld</Text>
               // <Image source = {require('')}/>
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


export default ExampleProps;