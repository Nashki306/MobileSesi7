import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home Page</Text>
      </View>

      {/* Welcome Card */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>Hallo, Ikhsan Darmawan Saputra</Text>
        <Text style={styles.welcomeText}>
          Selamat datang di aplikasi mahasiswa. Semoga
          aktivitas kuliahmu hari ini berjalan lancar.
        </Text>
      </View>

      {/* Aktivitas */}
      <Text style={styles.sectionTitle}>Aktivitas</Text>

      <View style={styles.grid}>

        {/* Tugas */}
        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>Tugas</Text>
          <Text style={styles.number}>2</Text>
          <Text style={styles.description}>Tugas belum selesai</Text>
        </View>

        {/* Jadwal */}
        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>Jadwal</Text>
          <Text style={styles.number}>2</Text>
          <Text style={styles.description}>Mata kuliah hari ini</Text>
        </View>

        {/* Absensi */}
        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>Absensi</Text>
          <Text style={styles.number}>100%</Text>
          <Text style={styles.description}>Kehadiran mata kuliah</Text>
        </View>

        {/* Pengumuman */}
        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>Pengumuman</Text>
          <Text style={styles.number}>2</Text>
          <Text style={styles.description}>Pengumuman baru</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    padding: 16,
    paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
  },

  welcomeCard: {
    backgroundColor: "#2563EB",
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
  },

  welcomeTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  welcomeText: {
    color: "#E5E7EB",
    fontSize: 12,
    lineHeight: 18,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 12,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  activityCard: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  activityTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 6,
  },

  number: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 4,
  },

  description: {
    fontSize: 10,
    color: "#9CA3AF",
  },
});