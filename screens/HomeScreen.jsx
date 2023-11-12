import { ActivityIndicator, Text, StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Employees from '../components/Employees'
import filter from 'lodash.filter'

const HomeScreen = () => {

  const [data, setData] = useState([])
  const [fullData, setFullData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [error, setError] = useState(null)

  useEffect(()=>{
    setIsLoading(true)
    fetchData()
    setFullData()
  },[])

  const fetchData = async () => {
    try {
      const response = await fetch('https://urchin-app-v7laf.ondigitalocean.app/api/employees/')
      const data = await response?.json()
      setData(data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  const handleSearch = (query)=>{
    setSearchInput(query)
    const formattedQuery = query.toLowerCase()
    const filteredData = filter(fullData, (employee) =>{
      return contains(employee, formattedQuery)
    })
    setData(filteredData)
  }

  const contains = ({name, designation, level, score}, query) => {
    if(name.includes(query) || designation.includes(query) || level.includes(query) || score.includes(query)){
      return true
    }
    return false
  }
  
  if(isLoading){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color='grey' />
      </View>
      
    )
  }

  if(error){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>There was an error fetching employees ... check your internet</Text>
      </View>
    )
  }

  return (
      <View style={styles.container}>
        <View style={styles.searchInput}>
          <TextInput placeholder='search employee' onChangeText={query=>handleSearch(query)} autoCapitalize='none' autoCorrect={false} value={searchInput} />
        </View>
        <Employees data={data}/>
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{ 
   flex:1,
    padding:20
  },

  searchInput: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 8,
    marginBottom: 8,
    paddingHorizontal: 6
  }
})