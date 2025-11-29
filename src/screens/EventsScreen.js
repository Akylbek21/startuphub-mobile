import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function EventsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Мероприятия</Text>
      <Text style={styles.subtitle}>
        Участвуйте в событиях экосистемы и расширяйте сеть контактов.
      </Text>

      <Image
        source={{
          uri: "https://images.pexels.com/photos/4319962/pexels-photo-4319962.jpeg",
        }}
        style={styles.image}
      />

      <View style={styles.block}>
        <Text style={styles.eventTitle}>Хакатон</Text>
        <Text style={styles.text}>
          Хакатон — форум для разработчиков, где команды решают задачи за
          ограниченное время.
        </Text>

        <Text style={styles.text}>📅 26 ноября 2025, 16:00</Text>
        <Text style={styles.text}>👥 Команда: 1–5 человек</Text>
        <Text style={styles.text}>📍 ул. Гагарина, 7, 5 этаж</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F9FAFB" },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#6B7280", marginBottom: 16 },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
  block: { backgroundColor: "#fff", borderRadius: 12, padding: 14, elevation: 2 },
  eventTitle: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
  text: { fontSize: 14, color: "#4B5563", marginBottom: 4 },
});
