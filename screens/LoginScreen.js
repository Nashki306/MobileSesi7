  import { StatusBar } from 'expo-status-bar';
  import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
  import {useState} from 'react';

  export default function LoginScreen({ onLogin }) {

    // const nama = "Ikhsan Daramawan"

    const [nama, ubahNama] = useState("Ikhsan Darmawan")
    const [password, ubahPassword] = useState("Ikhsan Darmawan")

    const actionButton = () => {
      onLogin(nama);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcom}>Selamat Datang</Text>
        <TextInput placeholder="Masukan Nama" keyboardType="default" onChangeText={ubahNama} style={styles.input}></TextInput>
        <TextInput placeholder="Masukan Password" keyboardType="default" onChangeText={ubahPassword} style={styles.input}></TextInput>
        <TouchableOpacity style={styles.button}onPress={actionButton}activeOpacity={0.8}>
        <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f7fb',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 30,
    },

    huruf: {
      fontSize: 30,
    },

    welcom: {
      fontSize: 34,
      fontWeight: 'bold',
      color: '#000000',
      marginBottom: 50,
      textAlign: 'center',
    },

    input: {
      width: '100%',
      height: 55, 
      backgroundColor: '#fff',
      borderColor: '#1765ca',
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 20,
      marginBottom: 25,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.08,
      shadowRadius: 5,
      elevation: 3,
    },

    button: {
    width: '100%',
    height: 55,
    backgroundColor: '#6326A0',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    },
  });