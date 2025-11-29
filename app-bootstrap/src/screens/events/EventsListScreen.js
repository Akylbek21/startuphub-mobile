import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image, Platform, SafeAreaView } from 'react-native';
import SearchHeader from '../../components/SearchHeader';

export default function EventsListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SearchHeader 
        placeholder="Поиск событий..."
        onProfile={() => navigation.navigate('UserProfile')}
      />
      <ScrollView style={styles.container}>
      <Text style={styles.title}>Мероприятия</Text>
      <Text style={styles.subtitle}>
        Участвуйте в событиях экосистемы и расширяйте сеть контактов
      </Text>
      
      <View style={styles.actionsRow}>
        <Pressable 
          style={styles.filterButton} 
          onPress={() => navigation.navigate('EventFilters')}
        >
          <Text style={styles.filterButtonText}>🔍 Фильтры</Text>
        </Pressable>
        <Pressable 
          style={styles.aiButton} 
          onPress={() => navigation.navigate('EventsAIRecommend')}
        >
          <Text style={styles.aiButtonText}>✨ AI-подбор</Text>
        </Pressable>
      </View>

      {/* Карта */}
      <Pressable 
        style={styles.mapCard} 
        onPress={() => navigation.navigate('EventsMap')}
      >
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=600' }}
          style={styles.mapImage}
          resizeMode="cover"
        />
        <View style={styles.mapOverlay}>
          <Text style={styles.mapTitle}>🗺️ Карта событий</Text>
          <Text style={styles.mapSubtitle}>Посмотреть на карте региона</Text>
        </View>
      </Pressable>

      {/* Событие */}
      <Pressable 
        style={styles.eventCard}
        onPress={() => navigation.navigate('EventDetail', { id: 'hackathon' })}
      >
        <View style={styles.eventHeader}>
          <View style={styles.dateBox}>
            <Text style={styles.dateDay}>29</Text>
            <Text style={styles.dateMonth}>ноя</Text>
          </View>
          <View style={styles.eventInfo}>
            <Text style={styles.eventTitle}>Хакатон</Text>
            <Text style={styles.eventDesc}>
              Хакатон — форум для разработчиков, где команды решают задачи за ограниченное время
            </Text>
          </View>
        </View>
        <View style={styles.eventMeta}>
          <Text style={styles.metaItem}>📅 29 ноября 2025, 16:00</Text>
          <Text style={styles.metaItem}>👥 Команда: 1-5 человек</Text>
          <Text style={styles.metaItem}>📍 ул. Гагарина, 7, 5 этаж</Text>
        </View>
      </Pressable>

      {/* Другие события можно добавить аналогично */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#FFFFFF',
  },
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  title: { 
    fontSize: 28, 
    fontWeight: '800', 
    color: '#0F172A',
    marginTop: 20,
    marginHorizontal: 24,
    letterSpacing: 0.3,
  },
  subtitle: { 
    fontSize: 15, 
    color: '#64748B',
    marginTop: 6,
    marginBottom: 20,
    marginHorizontal: 24,
    lineHeight: 22,
  },
  actionsRow: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
    gap: 12,
  },
  filterButton: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  filterButtonText: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  aiButton: {
    flex: 1,
    backgroundColor: '#6366F1',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#6366F1',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  aiButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  mapCard: {
    marginHorizontal: 24,
    marginBottom: 24,
    borderRadius: 24,
    overflow: 'hidden',
    height: 200,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  mapOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(15,23,42,0.75)',
    padding: 20,
  },
  mapTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  mapSubtitle: {
    fontSize: 14,
    color: '#E2E8F0',
  },
  eventCard: {
    backgroundColor: '#F8FAFC',
    marginHorizontal: 24,
    marginBottom: 20,
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  eventHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  dateBox: {
    width: 68,
    height: 68,
    backgroundColor: '#6366F1',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#6366F1',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  dateDay: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
  },
  dateMonth: {
    fontSize: 12,
    color: '#E0E7FF',
    textTransform: 'uppercase',
    fontWeight: '600',
    marginTop: 2,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  eventDesc: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  eventMeta: {
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 16,
  },
  metaItem: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 6,
    fontWeight: '500',
  },
});
