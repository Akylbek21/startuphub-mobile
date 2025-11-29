import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image, Platform, SafeAreaView, ScrollView } from 'react-native';
import SearchHeader from '../../components/SearchHeader';

const peopleData = [
  { 
    id: '1', 
    name: 'Дмитрий Соколов', 
    type: 'mentor',
    role: 'Маркетолог B2B и B2C',
    description: 'Техническое маркетинг для B2B и B2C. Увеличиваю конверсию для 20+ стартапов',
    experience: '7 лет опыта',
    avatar: 'https://i.pravatar.cc/150?img=12',
    bio: 'Опытный маркетолог с 7-летним стажем в digital-маркетинге. Специализируюсь на привлечении клиентов для B2B и B2C компаний. Помогаю стартапам выстраивать маркетинговые стратегии и увеличивать конверсию.',
    interests: ['Digital-маркетинг', 'Growth Hacking', 'B2B продажи', 'Analytics'],
    stats: { projects: 20, invested: 'N/A', experience: '7 лет' },
    supportedProjects: [
      { name: 'TechFlow', amount: 'Консалтинг', year: 2024 },
      { name: 'EduSpace', amount: 'Консалтинг', year: 2023 },
    ],
  },
  { 
    id: '2', 
    name: 'Тимур Тигранович', 
    type: 'participant',
    role: 'Full-stack разработчик',
    description: 'Специализируюсь на React, Node.js и AWS. Создал 15+ MVP для стартапов',
    experience: '6 лет опыта',
    avatar: 'https://i.pravatar.cc/150?img=33',
    bio: 'Full-stack разработчик с опытом создания MVP для стартапов. Работаю с современным стеком: React, Node.js, PostgreSQL, AWS. Специализируюсь на быстрой разработке и масштабировании приложений.',
    interests: ['React', 'Node.js', 'AWS', 'Microservices', 'Docker'],
    stats: { projects: 15, invested: 'N/A', experience: '6 лет' },
    supportedProjects: [
      { name: 'HealthAI MVP', amount: 'Разработка', year: 2024 },
      { name: 'FinTech App', amount: 'Разработка', year: 2023 },
      { name: 'E-commerce Platform', amount: 'Разработка', year: 2022 },
    ],
  },
  { 
    id: '3', 
    name: 'Сергей Белов', 
    type: 'mentor',
    role: 'HR для стартапов',
    description: 'Строю команды для стартапов. Нанимаю сотрудников для 30+ компаний',
    experience: '5 лет опыта',
    avatar: 'https://i.pravatar.cc/150?img=14',
    bio: 'HR-эксперт с фокусом на стартапы. Помогаю находить и нанимать таланты для быстрорастущих компаний. Построил команды для более чем 30 стартапов в IT, fintech и e-commerce.',
    interests: ['Рекрутинг', 'HR-стратегия', 'Team Building', 'Корпоративная культура'],
    stats: { projects: 30, invested: 'N/A', experience: '5 лет' },
    supportedProjects: [
      { name: 'TechFlow', amount: 'HR-консалтинг', year: 2024 },
      { name: 'StartupHub', amount: 'Найм команды', year: 2023 },
    ],
  },
  { 
    id: '4', 
    name: 'Анна Иванова', 
    type: 'investor',
    role: 'Венчурный инвестор',
    description: 'Инвестирую в ранние стадии стартапов. Портфель: 25 компаний, 3 выхода',
    experience: '$2M инвестиций',
    avatar: 'https://i.pravatar.cc/150?img=45',
    bio: 'Венчурный инвестор с фокусом на ранние стадии (pre-seed, seed). Инвестирую в IT, AI/ML и fintech стартапы. В портфеле 25 компаний, 3 успешных выхода. Активно помогаю портфельным компаниям в развитии.',
    interests: ['AI/ML', 'FinTech', 'SaaS', 'Deep Tech'],
    stats: { projects: 25, invested: '$2M', experience: '8 лет' },
    supportedProjects: [
      { name: 'TechFlow', amount: '$150K', year: 2024 },
      { name: 'AI Analytics', amount: '$200K', year: 2023 },
      { name: 'FinTech Startup', amount: '$100K', year: 2022 },
    ],
  },
  { 
    id: '5', 
    name: 'TechTeam Almaty', 
    type: 'team',
    role: 'Команда разработчиков',
    description: 'Команда из 5 разработчиков (React, Node.js, Python). Ищем проект',
    experience: '3 проекта завершено',
    avatar: 'https://i.pravatar.cc/150?img=60',
    bio: 'Команда из 5 опытных разработчиков из Алматы. Специализируемся на создании web и mobile приложений. Работаем с React, React Native, Node.js, Python, PostgreSQL. Ищем интересные проекты для партнерства.',
    interests: ['React', 'React Native', 'Node.js', 'Python', 'AI Integration'],
    stats: { projects: 3, invested: 'N/A', experience: '2 года' },
    supportedProjects: [
      { name: 'E-commerce MVP', amount: 'Разработка', year: 2024 },
      { name: 'Mobile App', amount: 'Разработка', year: 2023 },
      { name: 'CRM System', amount: 'Разработка', year: 2023 },
    ],
  },
  { 
    id: '6', 
    name: 'Максим Петров', 
    type: 'investor',
    role: 'Бизнес-ангел',
    description: 'Инвестирую в IT и fintech. Менторская поддержка для портфельных компаний',
    experience: '$500K инвестиций',
    avatar: 'https://i.pravatar.cc/150?img=70',
    bio: 'Бизнес-ангел и серийный предприниматель. Инвестирую собственные средства в перспективные IT и fintech стартапы. Помимо денег предоставляю менторскую поддержку и доступ к сети контактов.',
    interests: ['FinTech', 'IT', 'E-commerce', 'B2B SaaS'],
    stats: { projects: 8, invested: '$500K', experience: '10 лет' },
    supportedProjects: [
      { name: 'Payment Gateway', amount: '$80K', year: 2024 },
      { name: 'B2B Platform', amount: '$120K', year: 2023 },
      { name: 'Mobile Banking', amount: '$100K', year: 2022 },
    ],
  },
];

export default function PeopleListScreen({ navigation }) {
  const [filter, setFilter] = useState('all');

  const filteredPeople = filter === 'all' 
    ? peopleData 
    : peopleData.filter(p => p.type === filter);

  const filters = [
    { key: 'all', label: 'Все', icon: '👥' },
    { key: 'investor', label: 'Инвесторы', icon: '💰' },
    { key: 'mentor', label: 'Менторы', icon: '👨‍🏫' },
    { key: 'participant', label: 'Участники', icon: '✨' },
    { key: 'team', label: 'Команды', icon: '🤝' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <SearchHeader 
        placeholder="Поиск людей..."
        onProfile={() => navigation.navigate('UserProfile')}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Люди</Text>
        <Text style={styles.subtitle}>
          Найдите профессионалов для вашего проекта
        </Text>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.filtersScroll}
          contentContainerStyle={styles.filtersContent}
        >
          {filters.map(f => (
            <Pressable
              key={f.key}
              style={[styles.filterChip, filter === f.key && styles.filterChipActive]}
              onPress={() => setFilter(f.key)}
            >
              <Text style={styles.filterIcon}>{f.icon}</Text>
              <Text style={[styles.filterLabel, filter === f.key && styles.filterLabelActive]}>
                {f.label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={styles.found}>Найдено: {filteredPeople.length}</Text>

        <View style={styles.list}>
          {filteredPeople.map((item) => (
            <Pressable 
              key={item.id}
              style={styles.card}
              onPress={() => navigation.navigate('PersonProfile', { person: item })}
            >
              <View style={styles.avatarContainer}>
                <Image 
                  source={{ uri: item.avatar }}
                  style={styles.avatar}
                />
                {item.type === 'investor' && (
                  <View style={[styles.badge, { backgroundColor: '#10B981' }]}>
                    <Text style={styles.badgeText}>💰</Text>
                  </View>
                )}
                {item.type === 'team' && (
                  <View style={[styles.badge, { backgroundColor: '#EF4444' }]}>
                    <Text style={styles.badgeText}>👥</Text>
                  </View>
                )}
              </View>
              <View style={styles.content}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.role}>{item.role}</Text>
                <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                <View style={styles.footer}>
                  <Text style={styles.experience}>📊 {item.experience}</Text>
                  <Pressable 
                    style={styles.contactBtn}
                    onPress={(e) => {
                      e.stopPropagation();
                      console.log('Contact:', item.name);
                    }}
                  >
                    <Text style={styles.contactText}>✉️ Связаться</Text>
                  </Pressable>
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
    marginHorizontal: 24,
  },
  filtersScroll: {
    marginTop: 16,
    marginBottom: 12,
  },
  filtersContent: {
    paddingHorizontal: 24,
    gap: 10,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 6,
  },
  filterChipActive: {
    backgroundColor: '#6366F1',
    borderColor: '#6366F1',
  },
  filterIcon: {
    fontSize: 16,
  },
  filterLabel: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '700',
  },
  filterLabelActive: {
    color: '#fff',
  },
  found: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 12,
    marginBottom: 16,
    marginHorizontal: 24,
    fontWeight: '600',
  },
  list: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  card: { 
    backgroundColor: '#F8FAFC', 
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E5E7EB',
  },
  badge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  badgeText: {
    fontSize: 12,
  },
  content: {
    flex: 1,
  },
  name: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: '#0F172A',
    marginBottom: 4,
  },
  role: { 
    fontSize: 14, 
    color: '#64748B',
    marginBottom: 8,
    fontWeight: '600',
  },
  description: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 19,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  experience: {
    fontSize: 12,
    color: '#6B7280',
  },
  contactBtn: {
    backgroundColor: '#6366F1',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  contactText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});
