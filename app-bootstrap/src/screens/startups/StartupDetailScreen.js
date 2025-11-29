import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, SafeAreaView, Platform } from 'react-native';

export default function StartupDetailScreen({ route, navigation }) {
  const { id } = route.params || {};
  const [likes, setLikes] = useState(42);
  const [dislikes, setDislikes] = useState(3);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data
  const startup = {
    name: 'TechFlow',
    description: 'Инновационная платформа для автоматизации бизнес-процессов с использованием ИИ. Мы помогаем компаниям оптимизировать рабочие процессы, снизить затраты и повысить эффективность.',
    team: [
      { name: 'Алексей Иванов', role: 'CEO & Основатель' },
      { name: 'Мария Петрова', role: 'CTO' },
      { name: 'Дмитрий Соколов', role: 'Lead Developer' },
    ],
    raised: '$50,000',
    goal: '$500,000',
    category: 'IT',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg' }}
          style={styles.coverImage}
        />

        <View style={styles.content}>
          <Text style={styles.title}>{startup.name}</Text>
          <Text style={styles.category}>{startup.category}</Text>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{startup.raised}</Text>
              <Text style={styles.statLabel}>Собрано</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{startup.goal}</Text>
              <Text style={styles.statLabel}>Цель</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{startup.team.length}</Text>
              <Text style={styles.statLabel}>Команда</Text>
            </View>
          </View>

          <Text style={styles.blockTitle}>📝 Описание</Text>
          <Text style={styles.text}>{startup.description}</Text>

          <Text style={styles.blockTitle}>👥 Команда</Text>
          {startup.team.map((member, idx) => (
            <View key={idx} style={styles.teamMember}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{member.name[0]}</Text>
              </View>
              <View>
                <Text style={styles.memberName}>{member.name}</Text>
                <Text style={styles.memberRole}>{member.role}</Text>
              </View>
            </View>
          ))}

          <Text style={styles.blockTitle}>🎥 Видео-питч</Text>
          <View style={styles.videoPlaceholder}>
            <Text style={styles.videoText}>▶️ Смотреть видео</Text>
          </View>

          <Text style={styles.blockTitle}>📸 Галерея</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gallery}>
            <View style={styles.galleryImage}>
              <Text style={styles.galleryText}>🖼️</Text>
            </View>
            <View style={styles.galleryImage}>
              <Text style={styles.galleryText}>🖼️</Text>
            </View>
            <View style={styles.galleryImage}>
              <Text style={styles.galleryText}>🖼️</Text>
            </View>
          </ScrollView>

          <Text style={styles.blockTitle}>⭐ Оценки</Text>
          <View style={styles.ratingRow}>
            <Pressable style={styles.likeBtn} onPress={() => setLikes(likes + 1)}>
              <Text style={styles.likeTxt}>👍 {likes}</Text>
            </Pressable>
            <Pressable style={styles.dislikeBtn} onPress={() => setDislikes(dislikes + 1)}>
              <Text style={styles.dislikeTxt}>👎 {dislikes}</Text>
            </Pressable>
          </View>

          <Text style={styles.blockTitle}>💬 Комментарии</Text>
          <View style={styles.comment}>
            <Text style={styles.commentAuthor}>Анна Смирнова</Text>
            <Text style={styles.commentText}>Отличная идея! Желаю успехов команде! 🚀</Text>
          </View>
          <View style={styles.comment}>
            <Text style={styles.commentAuthor}>Иван Кузнецов</Text>
            <Text style={styles.commentText}>Интересная концепция. Когда планируете запуск?</Text>
          </View>

          <View style={styles.actions}>
            <Pressable style={styles.investBtn}>
              <Text style={styles.investTxt}>💰 Инвестировать</Text>
            </Pressable>
            <Pressable style={styles.shareBtn}>
              <Text style={styles.shareTxt}>📤 Поделиться</Text>
            </Pressable>
            <Pressable 
              style={[styles.favoriteBtn, isFavorite && styles.favoriteBtnActive]} 
              onPress={() => setIsFavorite(!isFavorite)}
            >
              <Text style={styles.favoriteTxt}>{isFavorite ? '❤️' : '🤍'} Избранное</Text>
            </Pressable>
          </View>

          <Pressable style={styles.aiBtn} onPress={() => navigation.navigate('StartupAIAnalysis', { id })}>
            <Text style={styles.aiTxt}>✨ AI-оценка: Проанализировать</Text>
          </Pressable>
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
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  category: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '700',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 20,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0F172A',
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 6,
    fontWeight: '600',
  },
  blockTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 28,
    marginBottom: 16,
    letterSpacing: 0.2,
  },
  text: {
    fontSize: 15,
    color: '#64748B',
    lineHeight: 24,
  },
  teamMember: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4F46E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  memberName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  memberRole: {
    fontSize: 12,
    color: '#6B7280',
  },
  videoPlaceholder: {
    height: 200,
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
  gallery: {
    flexDirection: 'row',
  },
  galleryImage: {
    width: 120,
    height: 120,
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  galleryText: {
    fontSize: 32,
  },
  ratingRow: {
    flexDirection: 'row',
    gap: 12,
  },
  likeBtn: {
    flex: 1,
    backgroundColor: '#10B981',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  likeTxt: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  dislikeBtn: {
    flex: 1,
    backgroundColor: '#EF4444',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  dislikeTxt: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  comment: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  commentAuthor: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  commentText: {
    fontSize: 13,
    color: '#374151',
  },
  actions: {
    marginTop: 28,
    gap: 12,
  },
  investBtn: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#10B981',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  investTxt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  shareBtn: {
    backgroundColor: '#0F172A',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  shareTxt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  favoriteBtn: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  favoriteBtnActive: {
    backgroundColor: '#FEE2E2',
    borderColor: '#EF4444',
  },
  favoriteTxt: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  aiBtn: {
    backgroundColor: '#6366F1',
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 32,
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
  aiTxt: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.2,
  },
});
