import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView, Switch } from 'react-native';

export default function StartupFiltersScreen({ navigation }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('date');
  const [onlyInnovative, setOnlyInnovative] = useState(false);
  const [withInvestors, setWithInvestors] = useState(false);

  const categories = ['IT', 'Экология', 'Образование', 'Медицина', 'Финтех', 'E-commerce'];

  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const applyFilters = () => {
    console.log('Filters:', { selectedCategories, sortBy, onlyInnovative, withInvestors });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>🔍 Фильтры</Text>
        <Text style={styles.subtitle}>Настройте параметры поиска</Text>

        <Text style={styles.sectionTitle}>Категории</Text>
        <View style={styles.categoriesGrid}>
          {categories.map(cat => (
            <Pressable
              key={cat}
              style={[styles.categoryChip, selectedCategories.includes(cat) && styles.categoryChipActive]}
              onPress={() => toggleCategory(cat)}
            >
              <Text style={[styles.categoryChipText, selectedCategories.includes(cat) && styles.categoryChipTextActive]}>
                {cat}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Сортировка</Text>
        <View style={styles.sortOptions}>
          <Pressable
            style={[styles.sortOption, sortBy === 'date' && styles.sortOptionActive]}
            onPress={() => setSortBy('date')}
          >
            <Text style={[styles.sortOptionText, sortBy === 'date' && styles.sortOptionTextActive]}>
              По дате
            </Text>
          </Pressable>
          <Pressable
            style={[styles.sortOption, sortBy === 'rating' && styles.sortOptionActive]}
            onPress={() => setSortBy('rating')}
          >
            <Text style={[styles.sortOptionText, sortBy === 'rating' && styles.sortOptionTextActive]}>
              По рейтингу
            </Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Дополнительно</Text>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Только инновационные</Text>
          <Switch value={onlyInnovative} onValueChange={setOnlyInnovative} />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>С инвесторами</Text>
          <Switch value={withInvestors} onValueChange={setWithInvestors} />
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 20,
    marginBottom: 12,
    letterSpacing: 0.2,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryChip: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  categoryChipActive: {
    backgroundColor: '#6366F1',
    borderColor: '#6366F1',
  },
  categoryChipText: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '600',
  },
  categoryChipTextActive: {
    color: '#fff',
  },
  sortOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  sortOption: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  sortOptionActive: {
    backgroundColor: '#0F172A',
    borderColor: '#0F172A',
  },
  sortOptionText: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '600',
  },
  sortOptionTextActive: {
    color: '#fff',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  switchLabel: {
    fontSize: 15,
    color: '#0F172A',
    fontWeight: '600',
  },
  applyButton: {
    backgroundColor: '#6366F1',
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 24,
    marginBottom: 32,
    alignItems: 'center',
  },
  applyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
