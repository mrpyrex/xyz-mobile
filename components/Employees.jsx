import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EmployeeData } from '../data/dummy'
import Employee from './Employee'

const Employees = ({data}) => {
    const renderItem = ({item})=>{
        return (
          <View style={styles.container}>
              <Employee id={item.id} name={item.name} designation={item.designation} level={item.level} score={item.score} />
          </View>
        )
        
    }
  return (
    <View style={styles.container}>
      <FlatList 
        data={data} 
        keyExtractor={item => item.id}
        renderItem={renderItem}
        refreshControl={
            <RefreshControl refreshing={false} 
            onRefresh={()=>console.log('refreshing')}
            />
        }
      />
    </View>
  )
}

export default Employees

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})