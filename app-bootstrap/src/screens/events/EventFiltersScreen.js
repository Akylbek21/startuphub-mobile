import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView, Switch } from 'react-native';

export default function EventFiltersScreen({ navigation }) {
  const [format, setFormat] = useState('all'); // 'all', 'online', 'offline'
  const [scope, setScope] = useState('all'); // 'all', 'local', 'international'
  const [ageGroup, setAgeGroup] = useState('all'); // 'all', 'under18', 'over18'
  const [selectedTopics, setSelectedTopics] = useState([]);

  const topics = ['IT', 'Бизнес', 'Наука', 'Дизайн', 'Маркетинг', 'Образование'];

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const applyFilters = () => {
    console.log('Filters:', { format, scope, ageGroup, selectedTopics });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>🔍 Фильтры событий</Text>
        <Text style={styles.subtitle}>Найдите подходящие мероприятия</Text>

        <Text style={styles.sectionTitle}>Формат</Text>
        <View style={styles.optionsRow}>
          <Pressable
            style={[styles.option, format === 'all' && styles.optionActive]}
            onPress={() => setFormat('all')}
          >
            <Text style={[styles.optionText, format === 'all' && styles.optionTextActive]}>Все</Text>
          </Pressable>
          <Pressable
            style={[styles.option, format === 'online' && styles.optionActive]}
            onPress={() => setFormat('online')}
          >
            <Text style={[styles.optionText, format === 'online' && styles.optionTextActive]}>💻 Онлайн</Text>
          </Pressable>
          <Pressable
            style={[styles.option, format === 'offline' && styles.optionActive]}
            onPress={() => setFormat('offline')}
          >
            <Text style={[styles.optionText, format === 'offline' && styles.optionTextActive]}>🏛️ Оффлайн</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>География</Text>
        <View style={styles.optionsRow}>
          <Pressable
            style={[styles.option, scope === 'all' && styles.optionActive]}
            onPress={() => setScope('all')}
          >
            <Text style={[styles.optionText, scope === 'all' && styles.optionTextActive]}>Все</Text>
          </Pressable>
          <Pressable
            style={[styles.option, scope === 'local' && styles.optionActive]}
            onPress={() => setScope('local')}
          >
            <Text style={[styles.optionText, scope === 'local' && styles.optionTextActive]}>🇰🇿 Ваша страна</Text>
          </Pressable>
          <Pressable
            style={[styles.option, scope === 'international' && styles.optionActive]}
            onPress={() => setScope('international')}
          >
            <Text style={[styles.optionText, scope === 'international' && styles.optionTextActive]}>🌍 Международные</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Возраст</Text>
        <View style={styles.optionsRow}>
          <Pressable
            style={[styles.option, ageGroup === 'all' && styles.optionActive]}
            onPress={() => setAgeGroup('all')}
          >
            <Text style={[styles.optionText, ageGroup === 'all' && styles.optionTextActive]}>Все</Text>
          </Pressable>
          <Pressable
            style={[styles.option, ageGroup === 'under18' && styles.optionActive]}
            onPress={() => setAgeGroup('under18')}
          >
            <Text style={[styles.optionText, ageGroup === 'under18' && styles.optionTextActive]}>До 18</Text>
          </Pressable>
          <Pressable
            style={[styles.option, ageGroup === 'over18' && styles.optionActive]}
            onPress={() => setAgeGroup('over18')}
          >
            <Text style={[styles.optionText, ageGroup === 'over18' && styles.optionTextActive]}>18+</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Тематика</Text>
        <View style={styles.topicsGrid}>
          {topics.map(topic => (
            <Pressable
              key={topic}
              style={[styles.topicChip, selectedTopics.includes(topic) && styles.topicChipActive]}
              onPress={() => toggleTopic(topic)}
            >
              <Text style={[styles.topicChipText, selectedTopics.includes(topic) && styles.topicChipTextActive]}>
                {topic}
              </Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.applyButton} onPress={applyFilters}>
          <Text style={styles.applyText}>✓ Применить фильтры</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginTop: 16,
    marginBottom: 12,
  },
  optionsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  option: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  optionActive: {
    backgroundColor: '#4F46E5',
    borderColor: '#4F46E5',
  },
  optionText: {
    fontSize: 13,
    color: '#6B7280',
  },
  optionTextActive: {
    color: '#fff',
  },
  topicsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  topicChip: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  topicChipActive: {
    backgroundColor: '#4F46E5',
    borderColor: '#4F46E5',
  },
  topicChipText: {
    fontSize: 13,
    color: '#6B7280',
  },
  topicChipTextActive: {
    color: '#fff',
  },
  applyButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 24,
    marginBottom: 32,
    alignItems: 'center',
  },
  applyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
