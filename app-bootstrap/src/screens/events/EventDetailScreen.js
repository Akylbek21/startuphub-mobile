import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, SafeAreaView } from 'react-native';

export default function EventDetailScreen({ route }) {
  const { id } = route.params || {};
  const [registered, setRegistered] = useState(false);

  const event = {
    name: 'Хакатон "AI for Good"',
    description: '48-часовой хакатон по созданию решений на основе искусственного интеллекта для решения социальных и экологических проблем. Призовой фонд $50,000.',
    organizer: 'Технопарк "Инновации"',
    date: '29 ноября 2025',
    time: '10:00 - 18:00',
    location: 'г. Алматы, пр. Абая 150Б',
    format: 'Оффлайн + Онлайн',
    participants: 150,
    ageLimit: '16+',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg' }}
          style={styles.coverImage}
        />

        <View style={styles.content}>
          <View style={styles.dateBox}>
            <Text style={styles.dateDay}>29</Text>
            <Text style={styles.dateMonth}>ноя</Text>
          </View>

          <Text style={styles.title}>{event.name}</Text>
          <Text style={styles.format}>{event.format}</Text>

          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>📅</Text>
              <Text style={styles.infoText}>{event.date}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>⏰</Text>
              <Text style={styles.infoText}>{event.time}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>👥</Text>
              <Text style={styles.infoText}>{event.participants} участников</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoIcon}>🎯</Text>
              <Text style={styles.infoText}>{event.ageLimit}</Text>
            </View>
          </View>

          <Text style={styles.blockTitle}>📝 Описание</Text>
          <Text style={styles.text}>{event.description}</Text>

          <Text style={styles.blockTitle}>🏛️ Организатор</Text>
          <View style={styles.organizerCard}>
            <View style={styles.organizerAvatar}>
              <Text style={styles.organizerAvatarText}>Т</Text>
            </View>
            <Text style={styles.organizerName}>{event.organizer}</Text>
          </View>

          <Text style={styles.blockTitle}>📍 Локация</Text>
          <View style={styles.locationCard}>
            <Text style={styles.locationText}>{event.location}</Text>
            <Pressable style={styles.mapButton}>
              <Text style={styles.mapButtonText}>🗺️ Показать на карте</Text>
            </Pressable>
          </View>

          <Text style={styles.blockTitle}>🎥 Видео-презентация</Text>
          <View style={styles.videoPlaceholder}>
            <Text style={styles.videoText}>▶️ Смотреть видео</Text>
          </View>

          <View style={styles.actions}>
            <Pressable 
              style={[styles.registerBtn, registered && styles.registeredBtn]}
              onPress={() => setRegistered(!registered)}
            >
              <Text style={styles.registerTxt}>
                {registered ? '✓ Вы зарегистрированы' : '🎫 Зарегистрироваться'}
              </Text>
            </Pressable>
            <View style={styles.secondaryActions}>
              <Pressable style={styles.secondaryBtn}>
                <Text style={styles.secondaryTxt}>📅 В календарь</Text>
              </Pressable>
              <Pressable style={styles.secondaryBtn}>
                <Text style={styles.secondaryTxt}>📤 Поделиться</Text>
              </Pressable>
            </View>
          </View>
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
  },
  coverImage: {
    width: '100%',
    height: 280,
    backgroundColor: '#E2E8F0',
  },
  content: {
    padding: 24,
  },
  dateBox: {
    position: 'absolute',
    top: -30,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dateDay: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4F46E5',
  },
  dateMonth: {
    fontSize: 12,
    color: '#6B7280',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0F172A',
    marginTop: 20,
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  format: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '700',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  infoIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  infoText: {
    fontSize: 13,
    color: '#374151',
  },
  blockTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginTop: 20,
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
  },
  organizerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
  },
  organizerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4F46E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  organizerAvatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  organizerName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  locationCard: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 12,
  },
  mapButton: {
    backgroundColor: '#111827',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  mapButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  videoPlaceholder: {
    height: 180,
    backgroundColor: '#111827',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  actions: {
    marginTop: 28,
    marginBottom: 32,
  },
  registerBtn: {
    backgroundColor: '#10B981',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  registeredBtn: {
    backgroundColor: '#64748B',
  },
  registerTxt: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  secondaryActions: {
    flexDirection: 'row',
    gap: 12,
  },
  secondaryBtn: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },
  secondaryTxt: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
