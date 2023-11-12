import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Employee = ({id, name, designation, level, score}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Employee Details', {employeeId: id, name, designation, level, score})} >
        <Text>{name}</Text>
        <Text>{designation}</Text>
        <Text>{level}</Text>
        <Text>{score >= 80 ? "Promote" : score >=50<80 ? "No Change" : score >=40<50 ? "Demote" : "Teminate"}</Text>
 </TouchableOpacity>
  )
}

export default Employee

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30
    }
})