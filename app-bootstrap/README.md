# 🚀 StartupHub Mobile

**Мобильная платформа для стартап-экосистемы Казахстана**

[![Expo](https://img.shields.io/badge/Expo-SDK%2054-blue.svg)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.81-green.svg)](https://reactnative.dev/)
[![React Navigation](https://img.shields.io/badge/React%20Navigation-7-purple.svg)](https://reactnavigation.org/)

---

## 📱 О проекте

StartupHub — это мобильное приложение, которое объединяет предпринимателей, инвесторов и менторов. Находите стартапы, участвуйте в событиях, знакомьтесь с экспертами и развивайте свой бизнес.

### ✨ Основные функции
- **Стартапы**: создание, поиск, фильтрация, AI-анализ перспектив
- **События**: хакатоны, конференции, карта мероприятий, AI-подбор
- **Люди**: база инвесторов и менторов, AI-matching
- **Профиль**: управление проектами, избранное, история инвестиций

### 🎯 Навигация
- **4 вкладки**: Главная (⚡), Стартапы (💎), События (🎯), Люди (✨)
- Вложенная навигация для каждого раздела
- Кастомный `SearchHeader` с поиском и профилем

## AI Функции (заглушки)
- Startup AI Analysis
- Events AI Recommend
- People AI Match

## Структура
```
src/
  components/SearchHeader.js
  navigation/
    MainTabs.js
    StartupsNavigator.js
    EventsNavigator.js
    PeopleNavigator.js
  screens/
    startups/ (List, Create, Filters, Detail, AIAnalysis)
    events/ (List, Map, Filters, Detail, AIRecommend)
    people/ (List, Profile, AIMatch)
    profile/ UserProfileScreen.js
```

## Дальнейшие TODO
1. Реализация реальных API / состояние (Redux / React Query).
2. Загрузка медиа (изображения, видео) для стартапов и событий.
3. Комментарии и лайки (backend).
4. Реальная AI интеграция (endpoint + обработка ответа).
5. Авторизация / хранение токена / защищённые экраны.
6. Локализация (i18n) + переключение языка.
7. Темная тема / дизайн система.
8. Интеграция карт (например, MapView / web map).
9. Добавление избранного, инвестиций, уведомлений.
10. Формы валидации (yup / zod).

## 🚀 Быстрый старт

### Windows (PowerShell)
```powershell
# С автоматическим запуском Android
powershell -ExecutionPolicy Bypass -File .\start-expo.ps1 -Android

# Только запуск Metro bundler
powershell -ExecutionPolicy Bypass -File .\start-expo.ps1
```

### Прямой запуск
```bash
cd app-bootstrap
npx expo start
```

Сканируйте QR через Expo Go или используйте эмулятор.

---

## 📚 Документация

| Документ | Описание |
|----------|----------|
| **[QUICK_PUBLISH.md](../QUICK_PUBLISH.md)** | 🎯 Краткая шпаргалка по публикации |
| **[DEPLOYMENT.md](../DEPLOYMENT.md)** | 📖 Полное руководство для Play Market и App Store |
| **[PUBLISHING_CHECKLIST.md](../PUBLISHING_CHECKLIST.md)** | ✅ Чеклист подготовки к публикации |
| **[PRIVACY_POLICY.md](../PRIVACY_POLICY.md)** | 🔒 Политика конфиденциальности |
| **[IMPLEMENTATION.md](./IMPLEMENTATION.md)** | 🛠️ Техническая документация проекта |
| **[.github/copilot-instructions.md](../.github/copilot-instructions.md)** | 🤖 Инструкции для AI-агентов |

---

## 🏗️ Структура проекта

```
app-bootstrap/
├── src/
│   ├── components/
│   │   └── SearchHeader.js          # Переиспользуемый header с поиском
│   ├── navigation/
│   │   ├── MainTabs.js              # 4 главных вкладки
│   │   ├── StartupsNavigator.js     # Стек навигации стартапов
│   │   ├── EventsNavigator.js       # Стек навигации событий
│   │   └── PeopleNavigator.js       # Стек навигации людей
│   └── screens/
│       ├── startups/                # Экраны стартапов
│       │   ├── StartupsListScreen.js
│       │   ├── CreateStartupScreen.js
│       │   ├── StartupFiltersScreen.js
│       │   ├── StartupDetailScreen.js
│       │   └── StartupAIAnalysisScreen.js
│       ├── events/                  # Экраны событий
│       │   ├── EventsListScreen.js
│       │   ├── EventsMapScreen.js
│       │   ├── EventFiltersScreen.js
│       │   ├── EventDetailScreen.js
│       │   └── EventsAIRecommendScreen.js
│       ├── people/                  # Экраны людей
│       │   ├── PeopleListScreen.js
│       │   ├── PersonProfileScreen.js
│       │   └── PeopleAIMatchScreen.js
│       └── profile/
│           └── UserProfileScreen.js # Профиль пользователя
├── assets/                          # Иконки и изображения
├── App.js                           # Точка входа
├── app.json                         # Конфигурация Expo
├── eas.json                         # Конфигурация EAS Build
└── package.json
```

---

## 🛠️ Технологии

- **Expo SDK 54** - фреймворк разработки
- **React Native 0.81** - UI фреймворк
- **React 19** - библиотека UI
- **React Navigation 7** - навигация
- **react-native-screens** - оптимизация экранов
- **react-native-safe-area-context** - безопасные зоны
- **react-native-gesture-handler** - жесты
- **react-native-reanimated** - анимации

---

## 📝 Текущий статус

### ✅ Реализовано
- [x] Полная навигация (4 вкладки + вложенные стеки)
- [x] Все основные экраны (список, детали, фильтры, создание)
- [x] AI-функции (интерфейс, mock-данные)
- [x] Профиль пользователя
- [x] Интерактивные элементы (лайки, избранное, комментарии)
- [x] Platform-specific стили (iOS/Android)
- [x] SafeAreaView для всех экранов

### 🚧 В разработке / TODO
- [ ] Backend API интеграция (сейчас mock-данные)
- [ ] Реальная AI интеграция
- [ ] Аутентификация и авторизация
- [ ] Загрузка изображений и файлов
- [ ] Push-уведомления
- [ ] Локализация (i18n)
- [ ] Темная тема
- [ ] Интеграция карт (MapView)
- [ ] Формы валидации
- [ ] Unit/E2E тесты

---

## 🎨 Дизайн система

### Цветовая палитра
```javascript
Primary:    #6366F1  // Indigo
Success:    #10B981  // Green
Danger:     #DC2626  // Red
Background: #F8FAFC  // Light Gray
Surface:    #FFFFFF  // White
Border:     #E2E8F0  // Gray 200
Text:       #0F172A  // Slate 900
TextMuted:  #94A3B8  // Slate 400
```

### Компоненты
- Inline `StyleSheet.create()` в каждом файле
- Emoji иконки (размер 18-26px)
- Platform.select для теней
- Скругленные углы (8-16px)

---

## 🤝 Вклад в проект

Проект разрабатывается в рамках обучения. Если вы хотите внести свой вклад:

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit изменений (`git commit -m 'Add some AmazingFeature'`)
4. Push в branch (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

---

## 📄 Лицензия

Этот проект создан в образовательных целях.

---

## 📞 Контакты

**GitHub:** [@Akylbek21](https://github.com/Akylbek21)  
**Репозиторий:** [minimalui-edu](https://github.com/Akylbek21/minimalui-edu)

---

## ⚡ Примечания

- Данные в приложении — **mock-данные** для прототипа
- AI-функции — интерфейс без реальной интеграции
- Требуется backend для production использования
- Версия для демонстрации и обучения

**Дата создания:** 29 ноября 2025 г.  
**Версия:** 1.0.0
