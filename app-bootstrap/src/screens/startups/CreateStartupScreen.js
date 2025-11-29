import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Pressable, SafeAreaView, Platform } from 'react-native';

export default function CreateStartupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [team, setTeam] = useState('');
  const [goal, setGoal] = useState('');
  const [media, setMedia] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [errors, setErrors] = useState({});

  const categories = ['IT', 'Экология', 'Образование', 'Медицина', 'Финтех', 'E-commerce'];

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Введите название проекта';
    if (!description.trim()) e.description = 'Добавьте короткое описание';
    if (!category.trim()) e.category = 'Выберите категорию';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePickMedia = () => {
    // In real app: use expo-image-picker
    const mockFile = { id: Date.now(), name: 'photo.jpg', type: 'image' };
    setMedia([...media, mockFile]);
  };

  const handlePickDocument = () => {
    // In real app: use expo-document-picker
    const mockDoc = { id: Date.now(), name: 'presentation.pdf', type: 'pdf' };
    setDocuments([...documents, mockDoc]);
  };

  const onPublish = () => {
    if (!validate()) return;
    console.log('PUBLISH', { name, description, category, team, goal, media, documents });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>📝 Создать проект</Text>
        <Text style={styles.subtitle}>Заполните информацию о вашем стартапе</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Название проекта *</Text>
          <TextInput 
            style={styles.input}
            placeholder="Введите название"
            value={name}
            onChangeText={setName}
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}

          <Text style={styles.label}>Короткое описание *</Text>
          <TextInput 
            style={[styles.input, styles.textArea]}
            placeholder="Опишите вашу идею в нескольких предложениях"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
          {errors.description && <Text style={styles.error}>{errors.description}</Text>}

          <Text style={styles.label}>Категория *</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryRow}>
            {categories.map(cat => (
              <Pressable 
                key={cat}
                style={[styles.categoryChip, category === cat && styles.categoryChipActive]}
                onPress={() => setCategory(cat)}
              >
                <Text style={[styles.categoryChipText, category === cat && styles.categoryChipTextActive]}>{cat}</Text>
              </Pressable>
            ))}
          </ScrollView>
          {errors.category && <Text style={styles.error}>{errors.category}</Text>}

          <Text style={styles.label}>Команда</Text>
          <TextInput 
            style={styles.input}
            placeholder="Размер команды (например: 3 человека)"
            value={team}
            onChangeText={setTeam}
          />

          <Text style={styles.label}>Необходимая сумма / Цель</Text>
          <TextInput 
            style={styles.input}
            placeholder="Например: $50,000"
            value={goal}
            onChangeText={setGoal}
            keyboardType="numeric"
          />

          <Pressable style={styles.uploadButton} onPress={handlePickMedia}>
            <Text style={styles.uploadButtonText}>📎 Загрузить фото/видео</Text>
          </Pressable>
          {media.length > 0 && (
            <View style={styles.fileList}>
              {media.map(file => (
                <Text key={file.id} style={styles.fileName}>✅ {file.name}</Text>
              ))}
            </View>
          )}

          <Pressable style={styles.uploadButton} onPress={handlePickDocument}>
            <Text style={styles.uploadButtonText}>📄 Загрузить документы (PDF)</Text>
          </Pressable>
          {documents.length > 0 && (
            <View style={styles.fileList}>
              {documents.map(doc => (
                <Text key={doc.id} style={styles.fileName}>✅ {doc.name}</Text>
              ))}
            </View>
          )}

          <Pressable style={styles.publishButton} onPress={onPublish}>
            <Text style={styles.publishButtonText}>✅ Опубликовать</Text>
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
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0F172A',
    marginTop: 16,
    marginHorizontal: 24,
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 6,
    marginBottom: 20,
    marginHorizontal: 24,
  },
  form: {
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    fontSize: 15,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  categoryRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  categoryChip: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
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
  uploadButton: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    borderStyle: 'dashed',
    paddingVertical: 18,
    marginTop: 16,
    alignItems: 'center',
  },
  uploadButtonText: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '600',
  },
  publishButton: {
    backgroundColor: '#6366F1',
    borderRadius: 16,
    paddingVertical: 16,
    marginTop: 24,
    marginBottom: 32,
    alignItems: 'center',
  },
  publishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  error: {
    fontSize: 12,
    color: '#DC2626',
    marginTop: 6,
  },
  fileList: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  fileName: {
    fontSize: 13,
    color: '#10B981',
    marginBottom: 4,
    fontWeight: '600',
  },
});
