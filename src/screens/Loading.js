import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { getTokensFromEncryptedStorage } from '../api/AuthenticationApi'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


export default function Loading(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        getTokensFromEncryptedStorage(dispatch, props.setIsLoading)
    } , [])
  return (
    <View>
        <TouchableOpacity onPress={() => props.setIsLoading(false)}>
        <Text>Loading</Text>
        </TouchableOpacity>
    
    </View>
  )
}