import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'

import {user1, user2, user3, user4, user5, user6, user7} from '../../data/Profile'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
const navegation = useNavigation()
  return (
    <View style={styles.container}>
      <Title title="Home" />
      <TouchableOpacity style={styles.button} onPress={() => navegation.navigate("Profile", {user1})}>
        <Text style={styles.buttonText}>Go to User1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navegation.navigate("Profile", {user2})}>
        <Text style={styles.buttonText}>Go to User2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navegation.navigate("Profile", {user3})}>
        <Text style={styles.buttonText}>Go to User3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navegation.navigate("Profile", {user4})}>
        <Text style={styles.buttonText}>Go to User4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navegation.navigate("Profile", {user5})}>
        <Text style={styles.buttonText}>Go to User5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navegation.navigate("Profile", {user6})}>
        <Text style={styles.buttonText}>Go to User6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navegation.navigate("Profile", {user7})}>
        <Text style={styles.buttonText}>Go to User7</Text>
      </TouchableOpacity>
    </View>
  )
}