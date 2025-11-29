import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, SafeAreaView } from 'react-native';

export default function EventsAIRecommendScreen({ navigation }) {
  const userProfile = {
    age: 22,
    interests: ['IT', 'Бизнес', 'Наука'],
    previousEvents: 5,
  };

  const recommendations = [
    {
      id: 1,
      name: 'Хакатон "AI for Good"',
      date: '29 ноября',
      match: 95,
      reason: 'Соответствует вашим интересам в IT и инновациях',
    },
    {
      id: 2,
      name: 'Конференция "Startup Ecosystem"',
      date: '5 декабря',
      match: 88,
      reason: 'Популярно среди людей с похожим профилем',
    },
    {
      id: 3,
      name: 'Мастер-класс "Машинное обучение"',
      date: '12 декабря',
      match: 82,
      reason: 'Развивайте навыки в вашей области интересов',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>✨ AI-подбор событий</Text>
        <Text style={styles.subtitle}>Персонализированные рекомендации на основе вашего профиля</Text>

        <View style={styles.profileCard}>
          <Text style={styles.profileTitle}>👤 Ваш профиль</Text>
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Возраст:</Text>
            <Text style={styles.profileValue}>{userProfile.age} лет</Text>
          </View>
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Интересы:</Text>
            <Text style={styles.profileValue}>{userProfile.interests.join(', ')}</Text>
          </View>
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Посещенных событий:</Text>
            <Text style={styles.profileValue}>{userProfile.previousEvents}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>🎯 Рекомендации для вас</Text>

        {recommendations.map(event => (
          <Pressable 
            key={event.id} 
            style={styles.eventCard}
            onPress={() => navigation.navigate('EventDetail', { id: 'hackathon' })}
          >
            <View style={styles.eventHeader}>
              <View>
                <Text style={styles.eventName}>{event.name}</Text>
                <Text style={styles.eventDate}>📅 {event.date}</Text>
              </View>
              <View style={styles.matchBadge}>
                <Text style={styles.matchPercent}>{event.match}%</Text>
                <Text style={styles.matchLabel}>match</Text>
              </View>
            </View>
            <View style={styles.reasonCard}>
              <Text style={styles.reasonIcon}>💡</Text>
              <Text style={styles.reasonText}>{event.reason}</Text>
            </View>
          </Pressable>
        ))}
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
  profileCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  profileLabel: {
    fontSize: 13,
    color: '#6B7280',
  },
  profileValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  eventCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  eventName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
    flex: 1,
  },
  eventDate: {
    fontSize: 13,
    color: '#6B7280',
  },
  matchBadge: {
    backgroundColor: '#10B981',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    marginLeft: 12,
  },
  matchPercent: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  matchLabel: {
    fontSize: 10,
    color: '#fff',
  },
  reasonCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reasonIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  reasonText: {
    flex: 1,
    fontSize: 13,
    color: '#374151',
  },
});
