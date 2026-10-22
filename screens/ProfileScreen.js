import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen({ onLogout }) {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>My Profile</Text>
          <Text style={styles.subtitle}>Informasi profil mahasiswa</Text>
        </View>

      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>

        {/* Foto */}
        <Image
          source={require("../assets/sendiri2.jpeg")}
          style={styles.profileImage}
        />

        {/* Nama */}
        <Text style={styles.name}>Ikhsan Darmawan Saputra</Text>

        {/* Garis */}
        <View style={styles.line} />

        {/* NIM */}
        <View style={styles.infoBox}>
          <Text style={styles.label}>NIM</Text>
          <Text style={styles.value}>4112755201250154</Text>
        </View>

        {/* Program Studi */}
        <View style={styles.infoBox}>
          <Text style={styles.label}>Program Studi</Text>
          <Text style={styles.value}>S1 Informatika</Text>
        </View>

      </View>

      {/* Tombol Logout */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={onLogout}
        activeOpacity={0.8}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

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
    marginBottom: 18,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
  },

  subtitle: {
    fontSize: 11,
    color: "#9CA3AF",
    marginTop: 3,
  },


  profileCard: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#DBEAFE",
    marginBottom: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 12,
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#E5E7EB",
    marginBottom: 12,
  },

  infoBox: {
    width: "100%",
    backgroundColor: "#F8FAFC",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },

  label: {
    fontSize: 11,
    color: "#9CA3AF",
    marginBottom: 4,
  },

  value: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#374151",
  },

  logoutButton: {
    width: "100%",
    backgroundColor: "#EF4444",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});