import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView, Text} from 'react-native';
import PeraturanPeminjaman from './PeraturanPeminjaman';
import styles from './_dashboardStyle';

function Dashboard() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View></View>
        <Text style={styles.textHeader}>Beranda</Text>
        <View style={styles.arrow}></View>
      </View>
      <View style={styles.headerWrapper}>
        <Text style={styles.textSection}>Borangin Polibatam</Text>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.textTitle}>Peraturan Peminjaman</Text>
        <ScrollView>
          <PeraturanPeminjaman />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;
