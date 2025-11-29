import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image, SafeAreaView } from 'react-native';

export default function UserProfileScreen({ navigation }) {
  const user = {
    name: 'Жибек Акылбекова',
    email: 'zhibek@example.com',
    avatar: 'https://i.pravatar.cc/150?img=45',
    stats: {
      projects: 3,
      favorites: 12,
      investments: '$25K',
    },
  };

  const menuItems = [
    { icon: '🚀', label: 'Мои проекты', action: () => console.log('Coming soon: My Projects') },
    { icon: '❤️', label: 'Избранное', action: () => console.log('Coming soon: Favorites') },
    { icon: '💰', label: 'История инвестиций', action: () => console.log('Coming soon: Investments') },
    { icon: '🔔', label: 'Уведомления', action: () => console.log('Coming soon: Notifications') },
    { icon: '⚙️', label: 'Настройки', action: () => console.log('Coming soon: Settings') },
    { icon: '👥', label: 'Поддержка', action: () => console.log('Coming soon: Support') },
    { icon: '🌐', label: 'Сменить язык', action: () => console.log('Coming soon: Language') },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.stats.projects}</Text>
            <Text style={styles.statLabel}>Проекты</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.stats.favorites}</Text>
            <Text style={styles.statLabel}>Избранное</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user.stats.investments}</Text>
            <Text style={styles.statLabel}>Инвестиции</Text>
          </View>
        </View>

        <View style={styles.menu}>
          {menuItems.map((item, idx) => (
            <Pressable key={idx} style={styles.menuItem} onPress={item.action}>
              <View style={styles.menuItemLeft}>
                <Text style={styles.menuIcon}>{item.icon}</Text>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <Text style={styles.menuChevron}>›</Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.logoutButton}>
          <Text style={styles.logoutText}>🚪 Выйти</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1 },
  header: { alignItems: 'center', paddingVertical: 40, backgroundColor: '#F8FAFC' },
  avatar: { width: 110, height: 110, borderRadius: 55, marginBottom: 20, borderWidth: 4, borderColor: '#fff' },
  name: { fontSize: 26, fontWeight: '800', color: '#0F172A', marginBottom: 6, letterSpacing: 0.3 },
  email: { fontSize: 15, color: '#64748B', fontWeight: '500' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 28, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#E2E8F0' },
  statItem: { alignItems: 'center' },
  statValue: { fontSize: 22, fontWeight: '800', color: '#0F172A' },
  statLabel: { fontSize: 13, color: '#64748B', marginTop: 6, fontWeight: '600' },
  menu: { marginTop: 12 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', paddingVertical: 18, paddingHorizontal: 24, borderBottomWidth: 1, borderBottomColor: '#E2E8F0' },
  menuItemLeft: { flexDirection: 'row', alignItems: 'center' },
  menuIcon: { fontSize: 24, marginRight: 16 },
  menuLabel: { fontSize: 16, color: '#0F172A', fontWeight: '600' },
  menuChevron: { fontSize: 28, color: '#94A3B8' },
  logoutButton: { backgroundColor: '#DC2626', marginHorizontal: 24, marginVertical: 32, paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
  logoutText: { color: '#fff', fontSize: 16, fontWeight: '700', letterSpacing: 0.2 },
});
