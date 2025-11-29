import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";

const experts = [
  {
    id: "1",
    name: "Дмитрий Соколов",
    role: "Маркетолог B2B и B2C",
    experience: "7 лет опыта",
  },
  {
    id: "2",
    name: "Тимур Тигранович",
    role: "Full-stack разработчик",
    experience: "6 лет опыта",
  },
  {
    id: "3",
    name: "Сергей Белов",
    role: "HR для стартапов",
    experience: "5 лет опыта",
  },
];

export default function ExpertsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Эксперты</Text>
      <Text style={styles.subtitle}>
        Найдите профессионалов для вашего проекта.
      </Text>

      <FlatList
        data={experts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role}</Text>
            <Text style={styles.exp}>{item.experience}</Text>

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Связаться</Text>
            </Pressable>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F9FAFB" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#6B7280", marginBottom: 16 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },
  name: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  role: { fontSize: 14, color: "#4B5563", marginBottom: 4 },
  exp: { fontSize: 13, color: "#6B7280", marginBottom: 10 },
  button: {
    backgroundColor: "#111827",
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 14 },
});
