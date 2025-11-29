import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>StartupHub</Text>
      <Text style={styles.title}>Экосистема стартапов региона</Text>
      <Text style={styles.subtitle}>
        Находите стартапы, участвуйте в ивентах и находите экспертов.
      </Text>

      <View style={styles.stats}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>124</Text>
          <Text style={styles.statLabel}>Стартапы</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>32</Text>
          <Text style={styles.statLabel}>Ивенты</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>456</Text>
          <Text style={styles.statLabel}>Эксперты</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F9FAFB" },
  logo: { fontSize: 20, fontWeight: "700", marginBottom: 8 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#6B7280", marginBottom: 24 },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    elevation: 2,
  },
  statNumber: { fontSize: 22, fontWeight: "700", marginBottom: 4 },
  statLabel: { fontSize: 13, color: "#6B7280" },
});
