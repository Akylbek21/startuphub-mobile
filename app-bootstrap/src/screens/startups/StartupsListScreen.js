import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image, Platform, SafeAreaView, ScrollView } from 'react-native';
import SearchHeader from '../../components/SearchHeader';

const data = [
  { 
    id: '1', 
    name: 'TechFlow', 
    description: 'Платформа для автоматизации бизнес-процессов с использованием искусственного интеллекта',
    raised: '5M ₸',
    team: '12 человек',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  { 
    id: '2', 
    name: 'EduSpace', 
    description: 'Платформа для онлайн-обучения с персонализированными траекториями',
    raised: '2M ₸',
    team: '6 человек',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  { 
    id: '3', 
    name: 'HealthAI', 
    description: 'ИИ-платформа для ранней диагностики заболеваний',
    raised: '8M ₸',
    team: '15 человек',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
];

export default function StartupsListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SearchHeader 
        placeholder="Поиск стартапов..."
        onProfile={() => navigation.navigate('UserProfile')}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Стартапы</Text>
        <Text style={styles.subtitle}>
          Участвуйте в развитии экосистемы: находите команды и проекты
        </Text>

        <View style={styles.actionsRow}>
          <Pressable 
            style={styles.filterButton} 
            onPress={() => navigation.navigate('StartupFilters')}
          >
            <Text style={styles.filterButtonText}>🔍 Фильтры</Text>
          </Pressable>
          <Pressable 
            style={styles.addButton} 
            onPress={() => navigation.navigate('CreateStartup')}
          >
            <Text style={styles.addButtonText}>➕ Добавить</Text>
          </Pressable>
        </View>

        <View style={styles.list}> 
          {data.map((item) => (
            <Pressable 
              key={item.id}
              style={styles.card} 
              onPress={() => navigation.navigate('StartupDetail', { id: item.id })}
            >
              <Image 
                source={{ uri: item.image }} 
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.content}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.metaRow}>
                  <Text style={styles.meta}>💰 {item.raised}</Text>
                  <Text style={styles.meta}>👥 {item.team}</Text>
                </View>
              </View>
            </Pressable>
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
  addButton: {
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
  addButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  list: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  card: { 
    backgroundColor: '#F8FAFC', 
    borderRadius: 24, 
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 20,
  },
  name: { 
    fontSize: 20, 
    fontWeight: '700', 
    color: '#0F172A',
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  description: { 
    fontSize: 14, 
    color: '#64748B',
    lineHeight: 20,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 12,
  },
  meta: { 
    fontSize: 14, 
    color: '#64748B',
    fontWeight: '500',
  },
});
