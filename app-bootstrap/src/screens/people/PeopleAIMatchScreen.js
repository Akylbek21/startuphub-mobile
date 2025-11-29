import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, SafeAreaView } from 'react-native';

export default function PeopleAIMatchScreen({ navigation }) {
  const projectInfo = {
    name: 'TechFlow',
    niche: 'IT / Automation',
    budget: '$500,000',
    stage: 'Seed',
  };

  const matchedInvestors = [
    {
      id: 1,
      name: 'Дмитрий Соколов',
      avatar: 'https://i.pravatar.cc/150?img=12',
      match: 92,
      specialization: 'IT-стартапы',
      portfolio: '$2.5M',
      reason: 'Инвестирует в автоматизацию и AI',
    },
    {
      id: 2,
      name: 'Анна Петрова',
      avatar: 'https://i.pravatar.cc/150?img=32',
      match: 87,
      specialization: 'FinTech & SaaS',
      portfolio: '$1.8M',
      reason: 'Поддерживает проекты на ранней стадии',
    },
    {
      id: 3,
      name: 'Сергей Иванов',
      avatar: 'https://i.pravatar.cc/150?img=68',
      match: 81,
      specialization: 'B2B SaaS',
      portfolio: '$3.2M',
      reason: 'Опыт масштабирования подобных продуктов',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>✨ AI-match инвесторов</Text>
        <Text style={styles.subtitle}>Подбор инвесторов на основе вашего проекта</Text>

        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>🚀 {projectInfo.name}</Text>
          <View style={styles.projectInfo}>
            <View style={styles.projectInfoRow}>
              <Text style={styles.projectInfoLabel}>Ниша:</Text>
              <Text style={styles.projectInfoValue}>{projectInfo.niche}</Text>
            </View>
            <View style={styles.projectInfoRow}>
              <Text style={styles.projectInfoLabel}>Бюджет:</Text>
              <Text style={styles.projectInfoValue}>{projectInfo.budget}</Text>
            </View>
            <View style={styles.projectInfoRow}>
              <Text style={styles.projectInfoLabel}>Стадия:</Text>
              <Text style={styles.projectInfoValue}>{projectInfo.stage}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>🎯 Рекомендованные инвесторы</Text>

        {matchedInvestors.map(investor => (
          <Pressable key={investor.id} style={styles.investorCard}>
            <View style={styles.investorHeader}>
              <Image source={{ uri: investor.avatar }} style={styles.avatar} />
              <View style={styles.investorInfo}>
                <Text style={styles.investorName}>{investor.name}</Text>
                <Text style={styles.investorSpec}>{investor.specialization}</Text>
                <Text style={styles.investorPortfolio}>💼 {investor.portfolio} портфолио</Text>
              </View>
              <View style={styles.matchBadge}>
                <Text style={styles.matchPercent}>{investor.match}%</Text>
              </View>
            </View>
            <View style={styles.reasonCard}>
              <Text style={styles.reasonIcon}>💡</Text>
              <Text style={styles.reasonText}>{investor.reason}</Text>
            </View>
            <Pressable 
              style={styles.contactButton}
              onPress={() => navigation.navigate('PersonProfile', { id: investor.id })}
            >
              <Text style={styles.contactButtonText}>Просмотреть профиль</Text>
            </Pressable>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1, padding: 24 },
  title: { fontSize: 28, fontWeight: '800', color: '#0F172A', letterSpacing: 0.3 },
  subtitle: { fontSize: 15, color: '#64748B', marginTop: 6, marginBottom: 24, lineHeight: 22 },
  projectCard: { backgroundColor: '#F8FAFC', borderRadius: 20, padding: 20, marginBottom: 24, borderWidth: 1, borderColor: '#E2E8F0' },
  projectTitle: { fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 12 },
  projectInfo: { gap: 8 },
  projectInfoRow: { flexDirection: 'row', justifyContent: 'space-between' },
  projectInfoLabel: { fontSize: 14, color: '#6B7280' },
  projectInfoValue: { fontSize: 14, fontWeight: '600', color: '#111827' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 16 },
  investorCard: { backgroundColor: '#F8FAFC', borderRadius: 20, padding: 20, marginBottom: 16, borderWidth: 1, borderColor: '#E2E8F0' },
  investorHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 12 },
  avatar: { width: 60, height: 60, borderRadius: 30 },
  investorInfo: { flex: 1, marginLeft: 12 },
  investorName: { fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 4 },
  investorSpec: { fontSize: 13, color: '#4F46E5', fontWeight: '600', marginBottom: 4 },
  investorPortfolio: { fontSize: 12, color: '#6B7280' },
  matchBadge: { backgroundColor: '#10B981', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6 },
  matchPercent: { fontSize: 16, fontWeight: '700', color: '#fff' },
  reasonCard: { backgroundColor: '#F9FAFB', borderRadius: 8, padding: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  reasonIcon: { fontSize: 20, marginRight: 8 },
  reasonText: { flex: 1, fontSize: 13, color: '#374151' },
  contactButton: { backgroundColor: '#6366F1', paddingVertical: 14, borderRadius: 16, alignItems: 'center' },
  contactButtonText: { color: '#fff', fontSize: 15, fontWeight: '700', letterSpacing: 0.2 },
});
