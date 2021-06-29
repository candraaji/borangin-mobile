import React, {useState} from 'react';
import {
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './_formPeminjamanStyle';
const arrowLeft = require('./assets/arrowLeft.png');

function FormPeminjaman() {
  const [namaKegiatan, ubahNamaKegiatan] = useState('');
  const [namaPengaju, ubahNamaPengaju] = useState('');
  const [noHpPengaju, ubahNoHpPengaju] = useState('');
  const submitForm = () => {
    if (!!namaKegiatan && !!namaPengaju && !!noHpPengaju) {
      alert(`${namaKegiatan}, ${namaPengaju}, ${noHpPengaju}`);
    } else {
      alert('Isi form terlebih dahulu');
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => alert('Kembali')}>
              <Image style={styles.arrow} source={arrowLeft} />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Peminjaman</Text>
            <View style={styles.arrow}></View>
          </View>
          <View style={styles.headerWrapper}>
            <Text style={styles.textSection}>Pengajuan Peminjaman</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Nama Kegiatan*</Text>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={ubahNamaKegiatan}
                placeholder="Masukkan nama kegiatan"
                value={namaKegiatan}
              />
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>Nama Pengaju Ruangan*</Text>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={ubahNamaPengaju}
                placeholder="Masukkan nama pengaju ruangan"
                value={namaPengaju}
              />
            </View>
            <View style={styles.wrapTextInput}>
              <Text style={styles.labelInput}>No. HP Pengaju Ruangan*</Text>
              <TextInput
                style={styles.inputWrapper}
                onChangeText={ubahNoHpPengaju}
                placeholder="Masukkan no. hp pengaju ruangan"
                value={noHpPengaju}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={submitForm} style={styles.buttonWrapper}>
            <View>
              <Text style={styles.textHeader}>Ajukan</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FormPeminjaman;
