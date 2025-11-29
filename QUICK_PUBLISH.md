# 📱 StartupHub - Краткая шпаргалка по публикации

## 🎯 Минимальный план действий

### 1. Установка EAS CLI
```powershell
npm install -g eas-cli
eas login
```

### 2. Инициализация проекта
```powershell
cd app-bootstrap
eas build:configure
```

### 3. Первая тестовая сборка
```powershell
# Android (APK для тестирования)
eas build --platform android --profile preview

# iOS (для симулятора)
eas build --platform ios --profile preview
```

### 4. Production сборки
```powershell
# Android AAB для Play Market
eas build --platform android --profile production

# iOS IPA для TestFlight и App Store
eas build --platform ios --profile production
```

### 5. TestFlight (iOS бета-тестирование - РЕКОМЕНДУЕТСЯ)
```powershell
# После сборки iOS билд автоматически появится в TestFlight через 10-30 минут

# Шаги в App Store Connect:
# 1. TestFlight → Internal Testing → добавить тестеров
# 2. Отправить приглашения по email
# 3. Тестеры устанавливают TestFlight app и принимают приглашение
# 4. Собрать feedback 1-3 недели
# 5. Исправить баги и загрузить новый билд
# 6. После успешного тестирования → отправить в App Store Review
```

---

## 📊 Что нужно создать СРОЧНО

### Графика (используйте https://icon.kitchen/)
```
✅ icon.png              (1024×1024px, без прозрачности)
✅ adaptive-icon.png     (1024×1024px, Android)
✅ splash-icon.png       (любой размер)
✅ feature-graphic.png   (1024×500px, для Play Market)
```

### Скриншоты (минимум)
```
Android: 2 скриншота (1080×1920 или 1080×2340)
iOS:     3 скриншота (1242×2688 или 1284×2778)
```

### Тексты
```
✅ Название: StartupHub
✅ Краткое описание (80 символов):
   "Экосистема для стартапов, инвесторов и менторов в Казахстане"
   
✅ Полное описание (400-4000 символов) - см. ниже
✅ Ключевые слова: стартапы, инвестиции, бизнес, экосистема, Казахстан
```

---

## 📝 Шаблон описания для магазинов

### Краткое (для Play Market)
```
StartupHub - мобильная платформа для стартап-экосистемы Казахстана. 
Находите инвесторов, менторов, события и единомышленников для развития 
вашего бизнеса.
```

### Полное описание
```
🚀 StartupHub - ваш проводник в мир стартапов!

StartupHub объединяет предпринимателей, инвесторов, менторов и участников 
стартап-экосистемы Казахстана на единой платформе.

✨ ОСНОВНЫЕ ВОЗМОЖНОСТИ:

📊 Стартапы
• Создавайте и публикуйте свои проекты
• Находите инвесторов и менторов
• AI-анализ перспектив вашего стартапа
• Фильтрация по категориям и стадиям

🎯 События
• Хакатоны, конференции, питч-сессии
• Интерактивная карта событий
• AI-подбор подходящих мероприятий
• Онлайн и оффлайн форматы

👥 Сообщество
• База инвесторов и менторов
• AI-matching для поиска партнеров
• Прямая связь с экспертами
• Портфолио и статистика участников

💡 AI-ФУНКЦИИ:
• Оценка шансов на успех стартапа
• Персонализированные рекомендации событий
• Интеллектуальный подбор инвесторов
• Анализ рисков и возможностей

🎨 ПРЕИМУЩЕСТВА:
✓ Удобный и современный интерфейс
✓ Персонализация под ваши интересы
✓ Безопасное взаимодействие
✓ Актуальная информация о событиях
✓ Полностью на русском языке

Присоединяйтесь к StartupHub и развивайте свой бизнес вместе с нами!

📧 Поддержка: support@startuphub.kz
🌐 Сайт: https://startuphub.kz
```

---

## 🔑 Обязательные URL

```
Privacy Policy URL:
https://github.com/Akylbek21/minimalui-edu/blob/main/PRIVACY_POLICY.md

Terms of Service URL (опционально):
https://yourdomain.com/terms

Support URL:
https://github.com/Akylbek21/minimalui-edu/issues
```

---

## 🏪 Настройки магазинов

### Google Play Console
```
Категория: Бизнес
Возрастной рейтинг: 3+ или 12+
Целевая аудитория: 18-65 лет
Страна: Казахстан (+ можно добавить другие)
Язык: Русский (основной)
```

### App Store Connect
```
Primary Category: Business
Secondary Category: Productivity
Age Rating: 4+ или 12+
SKU: STARTUPHUB001 (уникальный ID)
Availability: Kazakhstan (+ можно добавить другие)
Price: Free
```

---

## ⚠️ Частые ошибки

### Android
```
❌ "Version code already exists"
✅ Увеличьте versionCode в app.json (android.versionCode)

❌ "Target SDK version too low"
✅ Обновите Expo: npm install -g expo-cli@latest

❌ "Missing keystore"
✅ Используйте EAS: eas credentials
```

### iOS
```
❌ "Missing compliance information"
✅ App Store Connect → App Info → Export Compliance → "No"

❌ "Invalid bundle identifier"
✅ Проверьте app.json: ios.bundleIdentifier совпадает с App ID

❌ "Missing required icon sizes"
✅ icon.png должен быть ровно 1024×1024 без альфа-канала
```

### TestFlight
```
❌ "Build is processing" более часа
✅ Проверьте email на ошибки, пересоберите если нужно

❌ "Cannot accept invite"
✅ Убедитесь что правильный Apple ID, обновите TestFlight app

❌ "Beta App Unavailable"
✅ Билд истек (90 дней), загрузите новый
```

---

## 📞 Куда обращаться за помощью

| Проблема | Ресурс |
|----------|--------|
| EAS Build ошибки | https://docs.expo.dev/build/troubleshooting/ |
| Play Console | https://support.google.com/googleplay/android-developer |
| App Store | https://developer.apple.com/support/app-store-connect/ |
| Expo форум | https://forums.expo.dev/ |

---

## ⏰ Чеклист за 1 день (быстрая публикация в Play Market)

- [ ] **09:00-10:00** Создать иконки (icon.kitchen)
- [ ] **10:00-11:00** Настроить EAS CLI и конфигурацию
- [ ] **11:00-12:00** Первая тестовая сборка Android
- [ ] **12:00-13:00** Обед 🍕
- [ ] **13:00-14:00** Создать скриншоты (эмулятор + скриншоты)
- [ ] **14:00-15:00** Зарегистрироваться в Play Console
- [ ] **15:00-16:00** Заполнить описания и метаданные
- [ ] **16:00-17:00** Production сборка и загрузка AAB
- [ ] **17:00-18:00** Настроить App Store Connect
- [ ] **18:00** Отправить Android на проверку ✅

## ⏰ Чеклист с TestFlight (рекомендуется для iOS)

**День 1: Подготовка и сборка**
- [ ] **09:00-10:00** Создать иконки
- [ ] **10:00-11:00** Настроить EAS CLI
- [ ] **11:00-12:00** Production сборка iOS
- [ ] **12:00-13:00** Обед 🍕
- [ ] **13:00-14:00** Настроить TestFlight Internal Testing
- [ ] **14:00-15:00** Добавить 5-10 внутренних тестеров
- [ ] **15:00-18:00** Создать скриншоты и тексты

**Неделя 1-2: Internal Testing**
- [ ] Тестеры устанавливают через TestFlight
- [ ] Собрать feedback и баг-репорты
- [ ] Исправить критические проблемы
- [ ] Загрузить обновленный билд

**Неделя 3-4: External Testing (опционально)**
- [ ] Создать External Testing группу
- [ ] Отправить на TestFlight Review (1-2 дня)
- [ ] Пригласить 50-100 внешних тестеров
- [ ] Финальные исправления

**День финальный: App Store**
- [ ] Выбрать стабильный билд из TestFlight
- [ ] Заполнить App Store Connect метаданные
- [ ] Отправить на App Store Review ✅

---

## 💾 Сохранить эти файлы

После настройки EAS сохраните в надежное место:
```
✅ app.json - вся конфигурация
✅ eas.json - профили сборок
✅ Credentials (keystore) - EAS хранит автоматически
✅ service-account-key.json (для Google Play API)
✅ Apple ID и App Store Connect credentials
```

---

## 🎉 После публикации

```powershell
# OTA обновление (JS изменения без пересборки)
eas update --branch production

# Проверка статуса билдов
eas build:list

# Просмотр логов
eas build:view [BUILD_ID]
```

**Готово!** Теперь у вас есть все для публикации 🚀
