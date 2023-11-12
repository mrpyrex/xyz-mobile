import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const EmployeeDetailsScreen = () => {
  const route = useRoute()
  const {employeeId, name, designation, level, score} = route.params
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{designation}</Text>
      <Text>{level}</Text>
      <Text>{score}</Text>
    </View>
  )
}

export default EmployeeDetailsScreen

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})