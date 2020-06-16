import React from 'react'
import { Text, View, ActivityIndicator, Image, FlatList } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

const RecipeCard = (props) => {
  return (
    <Card
      title={props.title.toUpperCase()}
      titleNumberOfLines={2}
      image={{ uri: props.image }}
      imageProps={{ resizeMode: 'center' }}
    >
      <Text>{`${Math.round(props.calories)} cals`}</Text>
      <Text>{`${props.ingredients.length} total ingredients`}</Text>
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
              <Text style={{ size: 20 }}>{item}</Text>
            </View>
          )
        }}
        listKey={(item) => String(item)}
      />

      <FlatList
        data={props.healthLabels}
        numColumns={10}
        renderItem={({ item }) => {
          return <Text>{item}</Text>
        }}
        listKey={(item) => String(item)}
      />
      <FlatList
        data={props.cautions}
        numColumns={10}
        renderItem={({ item }) => {
          return (
            <>
              <Ionicons name="md-warning" color={'orange'} size={15} />
              <Text style={{ marginRight: 5 }}>{item}</Text>
            </>
          )
        }}
        listKey={(item) => String(item)}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Button buttonStyle={{ margin: 10 }} title="View Details" />
        <Button buttonStyle={{ margin: 10 }} title="Save this recipe" />
      </View>
    </Card>
  )
}

export default RecipeCard
