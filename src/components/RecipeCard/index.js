import React from 'react'
import { Text, View, ActivityIndicator, Image, FlatList } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const RecipeCard = (props) => {
  return (
    <Card title={props.title.toUpperCase()} image={props.image}>
      <Text style={{ marginBottom: 10 }}>
        The idea with React Native Elements is more about component structure
        than actual design.
      </Text>
      <Text>{props.calories}</Text>
      <Text>{props.source}</Text>
      <FlatList
        data={props.healthLabels}
        renderItem={({ item }) => {
          return <Text>{item}</Text>
        }}
        listKey={(item) => String(item)}
      />
      <FlatList
        data={props.cautions}
        renderItem={({ item }) => {
          return <Text>{item}</Text>
        }}
        listKey={(item) => String(item)}
      />
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="Save this recipe"
      />
    </Card>
  )
}

export default RecipeCard
