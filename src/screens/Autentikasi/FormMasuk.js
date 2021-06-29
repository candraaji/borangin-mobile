import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './_formMasukStyle';
const logoPolibatam = require('./../../../assets/images/logopolibatam.png');

function FormMasuk() {
  const [username, ubahUsername] = useState('');
  const [password, ubahpassword] = useState('');

  const submitForm = () => {
    if (!!username && !!password) {
      alert(`Data berhasil di input dengan ${username}`);
    } else {
      alert('Username atau Password yang anda gunakan salah');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View>
          <View style={styles.imageWrapper}>
            <Image source={logoPolibatam} style={styles.image} />
          </View>
          <View>
            <Text style={styles.headerText}>Selamat Datang!</Text>
            <Text style={styles.bodyText}>
              Silahkan gunakan username dan password learning anda
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.wrapTextInput}>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={ubahUsername}
                placeholder="Masukkan username learning"
                value={username}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.wrapTextInput}>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={ubahpassword}
                placeholder="Masukkan password learning"
                value={password}
                autoCapitalize="none"
                secureTextEntry
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.bodyText}>
            Tidak bisa login?{' '}
            <Text
              style={styles.underlineText}
              onPress={() => alert('Lupa password clicked')}>
              Lupa password
            </Text>
          </Text>
          <TouchableOpacity onPress={submitForm} style={styles.buttonWrapper}>
            <View>
              <Text style={styles.textHeader}>Masuk</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default FormMasuk;
