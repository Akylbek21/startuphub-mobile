import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function StartupAIAnalysisScreen({ route }) {
  const { id } = route.params || {};

  const analysis = {
    successRate: 78,
    risks: [
      'Высокая конкуренция в сегменте',
      'Необходимость значительных инвестиций в маркетинг',
      'Зависимость от технологических партнеров',
    ],
    advice: [
      'Сфокусироваться на уникальном ценностном предложении',
      'Развивать партнерские отношения с крупными игроками',
      'Инвестировать в развитие команды и экспертизы',
    ],
    similar: [
      { name: 'Zapier', success: 'Автоматизация процессов, $140M ARR' },
      { name: 'Monday.com', success: 'Управление проектами, IPO в 2021' },
    ],
    investors: [
      '500 Startups - фокус на технологические стартапы',
      'Y Combinator - ранние стадии развития',
      'Акселераторы при университетах',
    ],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>✨ AI-анализ стартапа</Text>
        <Text style={styles.subtitle}>Детальная оценка перспектив проекта</Text>

        <View style={styles.successCard}>
          <Text style={styles.successLabel}>Шансы на успех</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${analysis.successRate}%` }]} />
          </View>
          <Text style={styles.successPercent}>{analysis.successRate}%</Text>
          <Text style={styles.successNote}>Высокий потенциал для развития</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚠️ Основные риски</Text>
          {analysis.risks.map((risk, idx) => (
            <View key={idx} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{risk}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💡 Рекомендации</Text>
          {analysis.advice.map((item, idx) => (
            <View key={idx} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🚀 Похожие успешные стартапы</Text>
          {analysis.similar.map((startup, idx) => (
            <View key={idx} style={styles.similarCard}>
              <Text style={styles.similarName}>{startup.name}</Text>
              <Text style={styles.similarSuccess}>{startup.success}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💰 Где найти инвесторов</Text>
          {analysis.investors.map((inv, idx) => (
            <View key={idx} style={styles.investorCard}>
              <Text style={styles.investorText}>{inv}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 6,
    marginBottom: 24,
    lineHeight: 22,
  },
  successCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  successLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  progressBar: {
    height: 12,
    backgroundColor: '#E5E7EB',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: 6,
  },
  successPercent: {
    fontSize: 32,
    fontWeight: '700',
    color: '#10B981',
    marginTop: 12,
  },
  successNote: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },
  section: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 16,
    letterSpacing: 0.2,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 14,
    color: '#4F46E5',
    marginRight: 8,
    fontWeight: '700',
  },
  listText: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  similarCard: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  similarName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  similarSuccess: {
    fontSize: 13,
    color: '#6B7280',
  },
  investorCard: {
    backgroundColor: '#EEF2FF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  investorText: {
    fontSize: 13,
    color: '#4F46E5',
  },
});
