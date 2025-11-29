import React from 'react';
import { View, TextInput, StyleSheet, Pressable, Text, Platform, SafeAreaView } from 'react-native';

export default function SearchHeader({ placeholder = 'Поиск...', onProfile, onSearch }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput 
          style={styles.input} 
          placeholder={placeholder}
          placeholderTextColor="#94A3B8"
          onChangeText={onSearch}
        />
      </View>
      <Pressable style={styles.profileBtn} onPress={onProfile}>
        <Text style={styles.profileIcon}>👤</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  container: { 
    flexDirection: 'row', 
    paddingHorizontal: 24, 
    paddingVertical: 12, 
    backgroundColor: '#FFFFFF', 
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  input: { 
    flex: 1, 
    fontSize: 15,
    color: '#0F172A',
    fontWeight: '500',
  },
  profileBtn: { 
    width: 48,
    height: 48,
    backgroundColor: '#F8FAFC',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  profileIcon: { 
    fontSize: 24,
  },
});
