import * as React from 'react'
import { Text, View, ViewStyle } from 'react-native-web'
import Layout from '../components/Layout'

export default function Index() {
  return (
    <Layout>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View style={{ marginBottom: 40 }}>
          <Text
            style={{
              fontSize: (1 + 3) * 2 + 14,
              color: '#ddd',
              fontFamily: 'Crimson Text'
            }}
          >
            Welcome to your Next website
          </Text>
        </View>
      </View>
    </Layout>
  )
}
