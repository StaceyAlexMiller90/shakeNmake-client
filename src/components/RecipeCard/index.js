import React from 'react'
import { Text, View, ActivityIndicator, Image, FlatList } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import BodyText from '../../components/BodyText'
import PrimaryButton from '../PrimaryButton'
import { fonts } from '../../styles'

const RecipeCard = (props) => {
  return (
    <Card
      titleStyle={{ fontFamily: fonts.header }}
      title={props.title.toUpperCase()}
      titleNumberOfLines={2}
      image={{ uri: props.image }}
      imageProps={{ resizeMode: 'center' }}
    >
      <BodyText text={`${Math.round(props.calories)} cals`} />
      <BodyText text={`${props.ingredients.length} total ingredients`} />
      <FlatList
        data={props.dietLabels}
        numColumns={10}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Ionicons name="md-checkmark" color={'green'} size={15} />
              <BodyText text={item} style={{ size: 20 }} />
            </View>
          )
        }}
        listKey={'_' + Math.random().toString(36).substr(2, 9)}
        keyExtractor={(item, index) => `${item} ${index.toString()}`}
      />

      <FlatList
        data={props.healthLabels}
        numColumns={10}
        renderItem={({ item }) => {
          return <BodyText text={item} />
        }}
        listKey={'_' + Math.random().toString(36).substr(2, 9)}
        keyExtractor={(item, index) => `${item} ${index.toString()}`}
      />
      <FlatList
        data={props.cautions}
        numColumns={10}
        renderItem={({ item }) => {
          return (
            <>
              <Ionicons name="md-warning" color={'orange'} size={15} />
              <BodyText text={item} style={{ marginRight: 5 }} />
            </>
          )
        }}
        listKey={'_' + Math.random().toString(36).substr(2, 9)}
        keyExtractor={(item, index) => `${item} ${index.toString()}`}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <PrimaryButton buttonStyle={{ margin: 10 }} title="View Details" />
        <PrimaryButton buttonStyle={{ margin: 10 }} title="Save this recipe" />
      </View>
    </Card>
  )
}

export default RecipeCard
