import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";

const experts = [
  {
    id: "1",
    name: "Дмитрий Соколов",
    role: "Маркетолог B2B и B2C",
    experience: "7 лет",
    company: "GrowthLab",
    bio: "Помогаю стартапам строить воронки роста и масштабировать продажи.",
    interests: ["SaaS", "E-commerce", "Fintech"],
    rating: 4.8,
    supportedProjects: 12,
    available: true,
    contact: "@dmitry_sokolov",
  },
  {
    id: "2",
    name: "Тимур Тигранович",
    role: "Full-stack разработчик",
    experience: "6 лет",
    company: "DevForge",
    bio: "Проектирую масштабируемые бэкенды и удобные интерфейсы.",
    interests: ["AI", "Web", "Cloud"],
    rating: 4.7,
    supportedProjects: 9,
    available: false,
    contact: "@tim_dev",
  },
  {
    id: "3",
    name: "Сергей Белов",
    role: "HR для стартапов",
    experience: "5 лет",
    company: "TalentHub",
    bio: "Нахожу сильных специалистов и выстраиваю процессы найма.",
    interests: ["PeopleOps", "Startup HR"],
    rating: 4.6,
    supportedProjects: 15,
    available: true,
    contact: "@sergey_hr",
  },
];

export default function ExpertsScreen({ navigation }) {
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
          <Pressable style={styles.card} onPress={() => navigation.navigate('PersonProfile', { person: item })}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.role}>{item.role} • {item.company}</Text>
            <Text style={styles.bio}>{item.bio}</Text>
            <Text style={styles.meta}>Опыт: {item.experience} • Проектов: {item.supportedProjects}</Text>
            <Text style={styles.meta}>Интересы: {item.interests.join(', ')}</Text>
            <Text style={styles.meta}>Рейтинг: ⭐ {item.rating} • {item.available ? 'Доступен' : 'Занят'}</Text>

            <View style={styles.buttonsRow}>
              <Pressable style={styles.primaryBtn} onPress={() => navigation.navigate('PersonProfile', { person: item })}>
                <Text style={styles.primaryBtnText}>Написать</Text>
              </Pressable>
              <Pressable style={styles.secondaryBtn} onPress={() => navigation.navigate('PersonProfile', { person: item, propose: true })}>
                <Text style={styles.secondaryBtnText}>Предложить проект</Text>
              </Pressable>
            </View>
            <Text style={styles.contact}>Контакт: {item.contact}</Text>
          </Pressable>
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
  role: { fontSize: 14, color: "#4B5563", marginBottom: 6 },
  bio: { fontSize: 13, color: "#374151", marginBottom: 6 },
  meta: { fontSize: 12, color: "#6B7280", marginBottom: 4 },
  buttonsRow: { flexDirection: 'row', gap: 8, marginTop: 10, marginBottom: 6 },
  primaryBtn: { flex: 1, backgroundColor: '#4F46E5', paddingVertical: 10, borderRadius: 8, alignItems: 'center' },
  primaryBtnText: { color: '#fff', fontSize: 14, fontWeight: '700' },
  secondaryBtn: { flex: 1, backgroundColor: '#F3F4F6', paddingVertical: 10, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB' },
  secondaryBtnText: { color: '#111827', fontSize: 14, fontWeight: '600' },
  contact: { fontSize: 12, color: '#6B7280', marginTop: 4 },
});
