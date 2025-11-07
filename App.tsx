import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import ModalWindow from './components/ModalWindow';

export default function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <ModalWindow 
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show modal message</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});