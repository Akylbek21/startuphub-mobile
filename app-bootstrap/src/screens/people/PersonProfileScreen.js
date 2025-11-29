import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image, SafeAreaView } from 'react-native';

export default function PersonProfileScreen({ route }) {
  const { person: routePerson, propose } = route.params || {};

  const fallback = {
    name: 'Дмитрий Соколов',
    avatar: 'https://i.pravatar.cc/150?img=12',
    role: 'Инвестор & Ментор',
    bio: 'Опытный инвестор в IT-стартапы. 15+ лет в бизнесе. Помогаю молодым предпринимателям масштабировать бизнес и привлекать инвестиции.',
    interests: ['IT', 'FinTech', 'AI/ML', 'E-commerce'],
    supportedProjects: [
      { name: 'TechFlow', amount: '$100K', year: 2024 },
      { name: 'EduSpace', amount: '$75K', year: 2023 },
      { name: 'HealthAI', amount: '$150K', year: 2022 },
    ],
    stats: {
      projects: 12,
      invested: '$2.5M',
      experience: '15 лет',
    },
  };

  const person = {
    ...fallback,
    ...(routePerson || {}),
    stats: routePerson?.stats || fallback.stats,
    supportedProjects: routePerson?.supportedProjects || fallback.supportedProjects,
    interests: routePerson?.interests || fallback.interests,
    avatar: routePerson?.avatar || fallback.avatar,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: person.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{person.name}</Text>
          <View style={styles.roleBadge}>
            <Text style={styles.roleText}>{person.role}</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{person.stats.projects}</Text>
            <Text style={styles.statLabel}>Проектов</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{person.stats.invested}</Text>
            <Text style={styles.statLabel}>Инвестировано</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{person.stats.experience}</Text>
            <Text style={styles.statLabel}>Опыт</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>📝 Биография</Text>
          <Text style={styles.text}>{person.bio}</Text>

          <Text style={styles.sectionTitle}>🎯 Интересы</Text>
          <View style={styles.interestsRow}>
            {person.interests.map((interest, idx) => (
              <View key={idx} style={styles.interestChip}>
                <Text style={styles.interestText}>{interest}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>🚀 Поддержанные проекты</Text>
          {person.supportedProjects.map((project, idx) => (
            <View key={idx} style={styles.projectCard}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.projectAmount}>{project.amount}</Text>
              </View>
              <Text style={styles.projectYear}>📅 {project.year}</Text>
            </View>
          ))}

          <View style={styles.actions}>
            <Pressable 
              style={styles.messageBtn}
              onPress={() => console.log('Message:', person.name)}
            >
              <Text style={styles.messageTxt}>💬 Написать</Text>
            </Pressable>
            <Pressable 
              style={[styles.proposeBtn, propose && { opacity: 1 }]}
              onPress={() => console.log('Propose project to:', person.name)}
            >
              <Text style={styles.proposeTxt}>💼 Предложить проект</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1 },
  header: { alignItems: 'center', paddingVertical: 32, backgroundColor: '#F8FAFC' },
  avatar: { width: 110, height: 110, borderRadius: 55, marginBottom: 16, borderWidth: 4, borderColor: '#fff' },
  name: { fontSize: 26, fontWeight: '800', color: '#0F172A', marginBottom: 12, letterSpacing: 0.3 },
  roleBadge: { backgroundColor: '#6366F1', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 },
  roleText: { color: '#fff', fontSize: 14, fontWeight: '700', letterSpacing: 0.2 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
  statItem: { alignItems: 'center' },
  statValue: { fontSize: 18, fontWeight: '700', color: '#111827' },
  statLabel: { fontSize: 12, color: '#6B7280', marginTop: 4 },
  content: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#111827', marginTop: 20, marginBottom: 12 },
  text: { fontSize: 14, color: '#374151', lineHeight: 22 },
  interestsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  interestChip: { backgroundColor: '#EEF2FF', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16 },
  interestText: { fontSize: 13, color: '#4F46E5', fontWeight: '600' },
  projectCard: { backgroundColor: '#F9FAFB', borderRadius: 12, padding: 16, marginBottom: 12 },
  projectHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  projectName: { fontSize: 16, fontWeight: '600', color: '#111827' },
  projectAmount: { fontSize: 16, fontWeight: '700', color: '#10B981' },
  projectYear: { fontSize: 13, color: '#6B7280' },
  actions: { marginTop: 28, marginBottom: 32, gap: 12 },
  messageBtn: { backgroundColor: '#6366F1', paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
  messageTxt: { color: '#fff', fontSize: 16, fontWeight: '700', letterSpacing: 0.2 },
  proposeBtn: { backgroundColor: '#10B981', paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
  proposeTxt: { color: '#fff', fontSize: 16, fontWeight: '700', letterSpacing: 0.2 },
});
