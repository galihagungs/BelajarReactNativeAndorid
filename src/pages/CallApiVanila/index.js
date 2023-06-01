import { Button, StyleSheet, Text, View, Image} from 'react-native'
import React, { useEffect, useState } from 'react'

const CallApiVanila = () => {
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
    useEffect(() => {
        // //Get
        // fetch('https://reqres.in/api/users/2')
        // .then(response => response.json())
        // .then(json => console.log(json))


        //Post
        // const dataForAPI = {
        //     "name": "morpheus",
        //     "job": "leader"
        // }
        // console.log('data Object: ',dataForAPI);
        // console.log('Data Stringify : ', JSON.stringify(dataForAPI));
        // fetch('https://reqres.in/api/users',{
        //     method: 'POST',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(dataForAPI)
        // })
        // .then(response => response.json())
        // .then(json => console.log('Post Response: ',json))

    },[]);

    const getData = () => {
        //Get
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => {console.log(json), setDataUser(json.data)}
        )
        
    };

    const postData = () => {
        //Post
        const dataForAPI = {
            name: "morpheus",
            job: "leader"
        }

        fetch('https://reqres.in/api/users',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataForAPI)
        })
        .then(response => response.json())
        .then(json => {console.log('Post Response: ',json), setDataJob(json)})

    }
  return (
    <View style={styles.wrapper}>
      <Text style = {styles.textTitle}>CallApiVanila</Text>
      <Button title='Get Data' onPress={getData}/>
      <Text style = {styles.textTitle}>Response Get Data</Text>
      
      <Image source={ {uri: dataUser.avatar}} style={styles.avatar}/>
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

export default CallApiVanila

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