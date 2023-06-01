import { Button, StyleSheet, Text, View, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import  Axios  from 'axios';

const CallApiAxios = () => {
    const [dataUser, setDataUser] = useState({
        avatar:'',
        email:'',
        first_name: '',
        last_name: '',
    });
    const [dataJob, setDataJob] = useState({
        name: '',
        job: ''
    });

    const getData = () => {
        //Get Data Axios
        Axios.get('https://reqres.in/api/users/3')
        .then(result => {
            setDataUser(result.data.data);
        }).catch(err => console.log('Err: ', err));
        
    };

    const postData = () => {
        //Post
        const dataForAPI = {
            name: "morpheus",
            job: "leader"
        }

        Axios.post('https://reqres.in/api/users', dataForAPI)
        .then(result => {
            setDataJob(result.data);
        })
        .catch(err => console.log('Err: ', err));

    }
    return (
        <View style={styles.wrapper}>
          <Text style = {styles.textTitle}>CallApiAxios</Text>
          <Button title='Get Data' onPress={getData}/>
          <Text style = {styles.textTitle}>Response Get Data</Text>
          {dataUser.avatar.length > 0 && (<Image source={ {uri: dataUser.avatar}} style={styles.avatar}/>)}
          
          <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
          <Text>{dataUser.email}</Text>
    
          <View style = {styles.line}></View>
    
    
          <Button title='Post Data' onPress={postData}/>
          <Text style = {styles.textTitle}>Response Post Data</Text>
          <Text>{dataJob.name}</Text>
          <Text>{dataJob.job}</Text>
          <View style = {styles.line}></View>
        </View>
      )
}

export default CallApiAxios

const styles = StyleSheet.create({
    wrapper: {
        padding:20
    },
    textTitle:{
        textAlign: 'center'
    },
    line:{
        height:2, backgroundColor:'black', marginVertical:20,
    },
    avatar:{
        width:100,height:100, borderRadius:100
    }
})