import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable, Platform, SafeAreaView } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
      {/* Header с градиентом */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.logo}>⬢ StartupHub</Text>
          <Pressable onPress={() => navigation.navigate('UserProfile')}>
            <Text style={styles.loginBtn}>Войти</Text>
          </Pressable>
        </View>
        <Text style={styles.headerTitle}>Экосистема стартапов региона</Text>
      </View>

      {/* Статистика */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>124</Text>
          <Text style={styles.statLabel}>Стартапы</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>32</Text>
          <Text style={styles.statLabel}>Ивенты</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>456</Text>
          <Text style={styles.statLabel}>Эксперты</Text>
        </View>
      </View>

      {/* Карточки действий */}
      <View style={styles.cardsContainer}>
        <Pressable style={styles.card} onPress={() => navigation.navigate('Стартапы')}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>🔍</Text>
          </View>
          <Text style={styles.cardTitle}>Поиск Стартапов</Text>
          <Text style={styles.cardDesc}>Найдите перспективные стартапы в вашем регионе</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => navigation.navigate('События')}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>📅</Text>
          </View>
          <Text style={styles.cardTitle}>Ивенты</Text>
          <Text style={styles.cardDesc}>Участвуйте в мероприятиях экосистемы</Text>
        </Pressable>

        <Pressable style={styles.card} onPress={() => navigation.navigate('Люди')}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>👥</Text>
          </View>
          <Text style={styles.cardTitle}>Эксперты</Text>
          <Text style={styles.cardDesc}>Найдите специалистов для вашего проекта</Text>
        </Pressable>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#4F46E5" },
  container: { flex: 1, backgroundColor: "#F9FAFB" },
  header: {
    backgroundColor: "#4F46E5",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 10 : 50,
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: { fontSize: 22, fontWeight: "700", color: "#fff" },
  loginBtn: { fontSize: 14, color: "#fff", fontWeight: "600" },
  headerTitle: {
    fontSize: 18,
    color: "#E0E7FF",
    fontWeight: "500",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: -20,
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 16,
    marginHorizontal: 4,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  statLabel: { fontSize: 12, color: "#6B7280" },
  cardsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  iconBox: {
    width: 56,
    height: 56,
    backgroundColor: "#EEF2FF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  iconText: { fontSize: 28 },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 18,
  },
});
