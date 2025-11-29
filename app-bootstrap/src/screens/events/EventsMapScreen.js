import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, SafeAreaView } from 'react-native';

export default function EventsMapScreen({ navigation }) {
  const events = [
    { id: 'hackathon', name: 'Хакатон "AI for Good"', type: '💻 Хакатон', location: 'Алматы, пр. Абая 150Б', lat: 43.2220, lon: 76.8512 },
    { id: 'conference', name: 'Tech Conference 2025', type: '🎤 Конференция', location: 'Астана, ул. Кабанбай Батыра 53', lat: 51.1694, lon: 71.4491 },
    { id: 'olympiad', name: 'Онлайн-олимпиада по программированию', type: '🏆 Олимпиада', location: 'Онлайн', lat: null, lon: null },
    { id: 'competition', name: 'Международный конкурс стартапов', type: '🌍 Конкурс', location: 'Шымкент, ул. Тауке хана 10', lat: 42.3417, lon: 69.5901 },
    { id: 'workshop', name: 'Мастер-класс по UX/UI дизайну', type: '🎨 Мастер-класс', location: 'Караганда, пр. Бухар жырау 38', lat: 49.8047, lon: 73.1094 },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapIcon}>🗺️</Text>
          <Text style={styles.mapTitle}>Интерактивная карта Казахстана</Text>
          <Text style={styles.mapSubtitle}>Точки мероприятий по всей стране</Text>
        </View>

        <Text style={styles.sectionTitle}>📍 Ближайшие мероприятия</Text>
        
        {events.map((event) => (
          <Pressable 
            key={event.id}
            style={styles.eventCard}
            onPress={() => navigation.navigate('EventDetail', { id: event.id })}
          >
            <View style={styles.eventHeader}>
              <Text style={styles.eventType}>{event.type}</Text>
              {event.location === 'Онлайн' && (
                <View style={styles.onlineBadge}>
                  <Text style={styles.onlineBadgeText}>📡 ONLINE</Text>
                </View>
              )}
            </View>
            <Text style={styles.eventName}>{event.name}</Text>
            <View style={styles.locationRow}>
              <Text style={styles.locationIcon}>📍</Text>
              <Text style={styles.locationText}>{event.location}</Text>
            </View>
            {event.lat && event.lon && (
              <Text style={styles.coordinates}>
                Координаты: {event.lat.toFixed(4)}, {event.lon.toFixed(4)}
              </Text>
            )}
          </Pressable>
        ))}

        <View style={styles.legend}>
          <Text style={styles.legendTitle}>Типы мероприятий:</Text>
          <View style={styles.legendGrid}>
            <Text style={styles.legendItem}>💻 Хакатон</Text>
            <Text style={styles.legendItem}>🎤 Конференция</Text>
            <Text style={styles.legendItem}>🏆 Олимпиада</Text>
            <Text style={styles.legendItem}>🌍 Конкурс</Text>
            <Text style={styles.legendItem}>🎨 Мастер-класс</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1 },
  mapPlaceholder: {
    height: 250,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  mapIcon: { fontSize: 64, marginBottom: 16 },
  mapTitle: { fontSize: 22, fontWeight: '800', color: '#fff', marginBottom: 8, letterSpacing: 0.3 },
  mapSubtitle: { fontSize: 14, color: '#E2E8F0', textAlign: 'center' },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    margin: 24,
    letterSpacing: 0.2,
  },
  eventCard: {
    backgroundColor: '#F8FAFC',
    marginHorizontal: 24,
    marginBottom: 16,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  eventType: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6366F1',
  },
  onlineBadge: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  onlineBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.5,
  },
  eventName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
    lineHeight: 24,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationIcon: { fontSize: 16, marginRight: 8 },
  locationText: { fontSize: 14, color: '#64748B', flex: 1 },
  coordinates: {
    fontSize: 12,
    color: '#94A3B8',
    fontFamily: 'monospace',
    marginTop: 4,
  },
  legend: {
    backgroundColor: '#F8FAFC',
    marginHorizontal: 24,
    marginVertical: 24,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
  },
  legendGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  legendItem: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '600',
  },
});
