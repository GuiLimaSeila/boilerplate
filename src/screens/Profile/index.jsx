import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
import { useNavigation } from '@react-navigation/native'

export default function Profile({ route }) {
  const { user } = route.params
  const navegation = useNavigation()
  return (
    <View style={styles.container}>
      <Title title="Profiles" />
      <Title title={user.name} />
      <Title title={user.age} />
      <Title title={user.email} />
      <TouchableOpacity style={styles.button} onPress={() => navegation.navigate("Home")}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}