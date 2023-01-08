import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import CategoryCard from './CategoryCard'

export class Categories extends Component {
  render() {
    return (
        <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}>
            {/* Category Card */}
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Hotel"/>
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Hotel"/>
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Hotel"/>
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Hotel"/>

      </ScrollView>
    )
  }
}

export default Categories