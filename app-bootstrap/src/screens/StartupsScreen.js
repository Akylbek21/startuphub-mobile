import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";

const startups = [
  {
    id: "1",
    name: "TechFlow",
    desc: "Автоматизация бизнес-процессов с ИИ.",
    raised: "5M ₸",
    team: "12 человек",
  },
  {
    id: "2",
    name: "EduSpace",
    desc: "Онлайн-обучение с персональными траекториями.",
    raised: "2M ₸",
    team: "6 человек",
  },
  {
    id: "3",
    name: "HealthAI",
    desc: "ИИ-платформа для диагностики заболеваний.",
    raised: "8M ₸",
    team: "15 человек",
  },
];

export default function StartupsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Стартапы региона</Text>

      <View style={styles.actionsRow}>
        <Pressable style={styles.actionBtnPrimary} onPress={() => navigation.navigate('CreateStartup')}>
          <Text style={styles.actionBtnPrimaryText}>▶️ Добавить стартап</Text>
        </Pressable>
        <Pressable style={styles.actionBtnSecondary} onPress={() => navigation.navigate('StartupFilters')}>
          <Text style={styles.actionBtnSecondaryText}>🔍 Фильтры</Text>
        </Pressable>
      </View>

      <FlatList
        data={startups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => navigation.navigate('StartupDetail', { id: item.id })}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
            <Text style={styles.meta}>Привлечено: {item.raised}</Text>
            <Text style={styles.meta}>Команда: {item.team}</Text>
          </Pressable>
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFFFFF" },
  title: { fontSize: 26, fontWeight: "800", color: '#0F172A', marginBottom: 12, letterSpacing: 0.3 },
  actionsRow: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  actionBtnPrimary: { flex: 1, backgroundColor: '#6366F1', paddingVertical: 12, borderRadius: 12, alignItems: 'center' },
  actionBtnPrimaryText: { color: '#fff', fontSize: 14, fontWeight: '700', letterSpacing: 0.2 },
  actionBtnSecondary: { flex: 1, backgroundColor: '#F8FAFC', paddingVertical: 12, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: '#E2E8F0' },
  actionBtnSecondaryText: { color: '#0F172A', fontSize: 14, fontWeight: '600' },
  card: {
    backgroundColor: "#F8FAFC",
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  name: { fontSize: 18, fontWeight: "700", color: '#0F172A', marginBottom: 6 },
  desc: { fontSize: 14, color: "#64748B", marginBottom: 8, lineHeight: 20 },
  meta: { fontSize: 12, color: "#64748B" },
});
