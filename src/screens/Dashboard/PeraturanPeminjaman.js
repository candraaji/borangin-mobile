import React from 'react';
import {View, Text} from 'react-native';
import styles from './_dashboardStyle';

function PeraturanPeminjaman() {
  return (
    <View>
      <Text style={styles.textBody}>
        Alur proses peminjaman ruang kelas dan laboratorium Jurusan Teknik
        Informatika diluar jadwal yang sudah dipublish.
      </Text>
      <Text style={styles.textBody}>
        1. Peminjam ruang telah memastikan bahwa ruangan yang akan dipinjam
        tidak terjadwal di jadwal kuliah dan PBL Jurusan IF vrsi terakhir yang
        sudah di publish di{' '}
        <Text style={styles.textLink}>
          https://if.polibatam.ac.id/pengumuman/2021/03/jadwal-perkuliahan-semester-genap-2020-2021-jurusan-teknik-informatika/
        </Text>
        .
      </Text>
      <Text style={styles.textBody}>
        2. Peminjam ruang telah memastikan bahwa ruangan yang akan dipinjam
        tidak berstatus DIAJUKAN atau DISETUJUI yang dapat dilihat pada link{' '}
        <Text style={styles.textLink}>
          http://if.polibatam.ac.id/peminjaman/linimasa
        </Text>
        .
      </Text>
      <Text style={styles.textBody}>
        3. Peminjam ruang sudah mengkomunikasikan rencana peminjaman ruang
        dengan penanggung jawab/pembimbing/pembina kegiatan (Dosen/Staff)
        sebelum mengisi pengajuan peminjaman ruang di official Website
        Peminjaman Ruangan Jurusan Teknik Informatika melalui link{' '}
        <Text style={styles.textLink}>
          http://if.polibatam.ac.id/peminjaman/pengajuan/
        </Text>
        .
      </Text>
      <Text style={styles.textBody}>
        4. Setelah penanggung jawab/pembimbing/pembina kegiatan (Dosen/Staf)
        menyetujui rencana peminjaman ruang yang dilakukan pada Poin Tahapan
        ke-3, Peminjam ruang mengajukan peminjaman ruang di Official Website
        Peminjaman Ruangan Jurusan Teknik Informatika melalui link{' '}
        <Text style={styles.textLink}>
          http://if.polibatam.ac.id/peminjaman/pengajuan/
        </Text>
        .
      </Text>
      <Text style={styles.textBody}>
        5. Peminjam ruang harus menuliskan jumlah PC yang akan digunakan dalam
        tabel keterangan yang tersedia, sehinggu memungkinkan untuk
        mengoptimalkan penggunaan PC yang ada di lab tersebut.
      </Text>
      <Text style={styles.textBody}>
        6. Bagi Peminjam ruang yang tidak menuliskan jumlah PC yang akan
        digunakan maka silahkan mengupdate data peminjaman ruangan ke TU-IF
        sebelum meneruskan pada proses Tahapan selanjutnya. Jika hal ini ditak
        dilakukan maka pengajuan peminjaman ruangan dianggap tidak valid dan
        status peminjaman akan DITOLAK.
      </Text>
    </View>
  );
}

export default PeraturanPeminjaman;
