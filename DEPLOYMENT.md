# 🚀 Публикация StartupHub в Play Market и App Store

> **💡 Рекомендация:** Для iOS используйте **TestFlight** для бета-тестирования перед публикацией в App Store. Это позволит найти баги, собрать feedback и обеспечить качественный релиз. См. раздел [4️⃣ iOS - TestFlight](#4%EF%B8%8F%E2%83%A3-ios---app-store) → F. TestFlight.

## 📋 Быстрый чеклист

### 1️⃣ Подготовка проекта (30-60 мин)

#### Обновить метаданные приложения
```powershell
cd app-bootstrap
```

Отредактировать `app.json`:
```json
{
  "expo": {
    "name": "StartupHub",
    "slug": "startuphub-mobile",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.startuphub.app",
      "buildNumber": "1"
    },
    "android": {
      "package": "com.startuphub.app",
      "versionCode": 1,
      "permissions": ["INTERNET"],
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#6366F1"
      }
    }
  }
}
```

#### Создать иконки приложения
- **App Icon**: 1024×1024px PNG без прозрачности
- **Adaptive Icon** (Android): 1024×1024px PNG с центральной безопасной зоной 768×768px
- **Splash Screen**: подходящее изображение для загрузочного экрана

Используйте онлайн-генераторы:
- https://www.appicon.co/
- https://icon.kitchen/

Поместите в `app-bootstrap/assets/`:
```
assets/
  icon.png          (1024×1024)
  adaptive-icon.png (1024×1024)
  splash-icon.png
```

---

### 2️⃣ Настройка EAS Build (15-30 мин)

#### Установить EAS CLI
```powershell
npm install -g eas-cli
eas login
```

Создайте аккаунт на https://expo.dev если нет.

#### Инициализировать EAS
```powershell
cd app-bootstrap
eas build:configure
```

Это создаст `eas.json`:
```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

Для Play Market измените `"buildType": "aab"` (Android App Bundle).

---

### 3️⃣ Android - Play Market

#### A. Регистрация в Google Play Console
1. Зарегистрируйтесь: https://play.google.com/console
2. Оплата: $25 (единоразово)
3. Создайте приложение: "StartupHub"

#### B. Генерация Keystore (если собираете локально)
```powershell
keytool -genkeypair -v -storetype PKCS12 -keystore startuphub.keystore -alias startuphub-key -keyalg RSA -keysize 2048 -validity 10000
```

Сохраните пароли в надежном месте!

**Или используйте EAS для автоматического управления ключами** (рекомендуется):
```powershell
eas credentials
```

#### C. Сборка APK/AAB
```powershell
# Для тестирования (APK)
eas build --platform android --profile preview

# Для публикации (AAB)
eas build --platform android --profile production
```

Сборка займет 10-15 минут. Скачайте результат:
```
✔ Build finished
URL: https://expo.dev/accounts/.../builds/...
```

#### D. Заполнение Play Console
1. **Внутреннее тестирование** → загрузите AAB
2. **Описание магазина**:
   - Название: StartupHub
   - Краткое описание (80 символов): "Экосистема для стартапов, инвесторов и менторов"
   - Полное описание (4000 символов)
   - Скриншоты: минимум 2 (разрешение 16:9 или 9:16)
   - Иконка: 512×512px (загружается отдельно)
3. **Возрастной рейтинг**: заполнить анкету
4. **Политика конфиденциальности**: URL на вашу политику
5. **Целевая аудитория и контент**: выбрать категории

#### E. Запуск на проверку
- Внутреннее тестирование → Закрытое → Открытое → Production
- Первая проверка: 1-7 дней

---

### 4️⃣ iOS - App Store

#### A. Регистрация Apple Developer
1. Зарегистрируйтесь: https://developer.apple.com
2. Оплата: $99/год (подписка)
3. Подтверждение личности (может занять несколько дней)

#### B. Создание App ID
1. Перейдите: Certificates, Identifiers & Profiles
2. Identifiers → + → App IDs
3. Bundle ID: `com.startuphub.app` (совпадает с `app.json`)

#### C. Сборка IPA
```powershell
eas build --platform ios --profile production
```

EAS автоматически создаст сертификаты и профили подготовки (если разрешите).

#### D. App Store Connect
1. https://appstoreconnect.apple.com
2. My Apps → + → New App
3. Заполните:
   - Название: StartupHub
   - Язык: Русский (или English)
   - Bundle ID: выберите созданный
   - SKU: уникальный идентификатор (например, "STARTUPHUB001")

#### E. Метаданные приложения
1. **Скриншоты** (обязательно для 6.5" iPhone):
   - Используйте симулятор iOS или Figma/Sketch
   - Минимум 3 скриншота
2. **Описание**:
   - Promotional Text (170 символов)
   - Description (4000 символов)
   - Keywords (100 символов через запятую)
3. **App Preview** (опционально): видео до 30 секунд
4. **Support URL** и **Privacy Policy URL**

#### F. TestFlight - Бета-тестирование (РЕКОМЕНДУЕТСЯ)

**TestFlight** — это Apple-платформа для бета-тестирования iOS приложений. Используйте её для проверки перед отправкой в App Store.

##### Зачем нужен TestFlight:
- ✅ Тестирование на реальных устройствах
- ✅ Сбор feedback от бета-тестеров
- ✅ Обнаружение крашей и багов
- ✅ Проверка работы на разных iOS версиях
- ✅ Отсутствие длительной проверки (только автоматический скан)

##### Шаги для TestFlight:

**1. Автоматическая загрузка после EAS Build**
```powershell
eas build --platform ios --profile production
```
Билд автоматически появится в TestFlight через 10-30 минут после завершения сборки.

**2. Настройка TestFlight в App Store Connect**

Откройте https://appstoreconnect.apple.com → TestFlight:

```
TestFlight
├── Internal Testing (до 100 тестеров)
│   ├── Внутренняя команда (сотрудники Apple Developer аккаунта)
│   ├── Быстрое добавление по email
│   └── Доступ сразу после обработки билда
│
└── External Testing (до 10,000 тестеров)
    ├── Требуется Apple Review (1-2 дня первый раз)
    ├── Публичная ссылка или приглашение по email
    └── Можно добавлять группы тестеров
```

**3. Добавление Internal Testers**
1. TestFlight → Internal Testing → Internal Group
2. Нажмите "+" → введите email Apple ID тестера
3. Тестер получит email-приглашение
4. Установит TestFlight app из App Store
5. Примет приглашение и установит билд

**4. Создание External Testing группы**
1. TestFlight → External Testing → Create Group
2. Введите название группы (например, "Beta Testers")
3. Выберите билд для тестирования
4. **Test Information** (обязательно):
   - Beta App Description (что нового в версии)
   - Feedback Email (куда тестеры отправляют отзывы)
   - Marketing URL (опционально)
   - Privacy Policy URL (обязательно)
5. **Submit for Review** (первый раз требует проверки Apple)

**5. Приглашение тестеров**

Способ 1 - По email:
```
TestFlight → External Group → Testers → Add
Введите email → Send Invite
```

Способ 2 - Публичная ссылка:
```
TestFlight → External Group → Enable Public Link
Скопируйте ссылку вида: https://testflight.apple.com/join/XXXXXXXX
Поделитесь с тестерами
```

**6. Мониторинг тестирования**
```
TestFlight Dashboard показывает:
├── Количество установок
├── Количество сессий
├── Крэши и проблемы
└── Feedback от тестеров
```

##### Рабочий процесс TestFlight:

```
┌─────────────────┐
│  EAS Build iOS  │
│   15-20 минут   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Автоматическая  │
│обработка Apple  │
│   10-30 минут   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Доступен в      │
│ TestFlight      │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌─────────┐ ┌─────────┐
│Internal │ │External │
│ Testers │ │ Testers │
│  сразу  │ │review   │
│         │ │ 1-2 дня │
└────┬────┘ └────┬────┘
     │           │
     └─────┬─────┘
           ▼
   ┌───────────────┐
   │ Бета-         │
   │ тестирование  │
   │ 1-4 недели    │
   └───────┬───────┘
           │
           ▼
   ┌───────────────┐
   │ Исправление   │
   │ багов         │
   └───────┬───────┘
           │
           ▼
   ┌───────────────┐
   │ Новый билд    │
   │ в TestFlight  │
   └───────┬───────┘
           │
           ▼
   ┌───────────────┐
   │ Готово для    │
   │ App Store     │
   └───────────────┘
```

##### Команды для обновления TestFlight:

```powershell
# Новая версия для TestFlight (увеличьте buildNumber в app.json)
eas build --platform ios --profile production

# Или автоматическое увеличение (настроить в eas.json)
# "ios": { "autoIncrement": true }

# Проверка статуса сборки
eas build:list

# Просмотр деталей билда
eas build:view [BUILD_ID]
```

##### Лимиты TestFlight:

| Параметр | Лимит |
|----------|-------|
| Internal Testers | 100 |
| External Testers | 10,000 |
| Билды на версию | 100 |
| Срок жизни билда | 90 дней |
| Одновременных групп | 100 |

##### Рекомендуемый workflow:

**Неделя 1-2: Internal Testing**
```
1. Собрать первый билд
2. Добавить 5-10 внутренних тестеров
3. Собрать feedback
4. Исправить критические баги
5. Загрузить новый билд
```

**Неделя 3-4: External Testing**
```
1. Создать External Group
2. Отправить на Apple Review (1-2 дня)
3. После одобрения: пригласить 50-100 внешних тестеров
4. Собрать feedback и метрики
5. Финальные исправления
```

**Неделя 5: Production**
```
1. Убедиться что крашей < 1%
2. Положительный feedback от тестеров
3. Отправить финальный билд в App Store Review
```

##### Типичные проблемы TestFlight:

**"Build is processing"**
- Ожидание: обычно 10-30 минут, иногда до 2 часов
- Решение: проверьте email на наличие уведомлений об ошибках

**"Missing Compliance Information"**
- App Store Connect → TestFlight → выберите билд → Export Compliance
- Выберите "No" если не используете шифрование

**"Expired Build"**
- Билды живут 90 дней
- Загрузите новый билд для продолжения тестирования

**"TestFlight not showing build"**
- Проверьте статус обработки в App Store Connect
- Убедитесь что тестер принял приглашение
- Попросите тестера обновить TestFlight app

#### G. Загрузка в App Store (после TestFlight)

После успешного бета-тестирования в TestFlight:

В App Store Connect:
1. My Apps → выберите приложение → 1.0.0 Version
2. **Build** → выберите протестированный билд из TestFlight
3. **App Information** → заполните все обязательные поля
4. **Pricing and Availability** → установите цену (Free) и регионы
5. **App Review Information**:
   - Контактная информация
   - Демо-аккаунт (если требуется логин)
   - Примечания для ревьюера
   - Приложите скриншоты проблемных мест (если есть)
6. **Submit for Review**

#### H. Ожидание проверки App Store
- Первая проверка: 24-72 часа
- Повторная (после исправлений): 12-24 часа
- Статус можно отслеживать в App Store Connect
- После одобрения: выпустить вручную или автоматически

---

### 5️⃣ Скриншоты для магазинов

#### Размеры для Android (Play Market)
- Phone: 1080×1920px, 1080×2340px
- 7" Tablet: 1200×1920px
- 10" Tablet: 1600×2560px

#### Размеры для iOS (App Store)
- 6.5" iPhone (обязательно): 1242×2688px или 1284×2778px
- 5.5" iPhone: 1242×2208px
- iPad Pro 12.9": 2048×2732px

**Инструменты:**
- Android Studio Emulator + `adb shell screencap`
- iOS Simulator + Cmd+S для скриншота
- Figma с устройствами-фреймами
- https://previewed.app/ для красивых mockup

---

### 6️⃣ Обязательные документы

#### Политика конфиденциальности
Создайте страницу с описанием:
- Какие данные собираются (email, имя, фото профиля)
- Как используются данные
- С кем делятся данные
- Права пользователей (GDPR для ЕС)

Хостинг: GitHub Pages, Notion, WordPress, или ваш сайт.

Пример структуры:
```
1. Сбор информации
2. Использование данных
3. Хранение и безопасность
4. Передача третьим лицам
5. Права пользователей
6. Контактная информация
```

#### Условия использования (Terms of Service)
Опционально, но рекомендуется.

---

### 7️⃣ Постпубликация

#### Отслеживание крашей
```powershell
npx expo install sentry-expo
```

Интеграция Sentry в `App.js`:
```javascript
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  enableInExpoDevelopment: false,
});
```

#### Аналитика
- **Firebase Analytics**: для событий и метрик
- **Amplitude**: для user journey
- **Mixpanel**: для A/B тестов

#### OTA обновления (Over-The-Air)
```powershell
npx expo install expo-updates
eas update --branch production
```

Позволяет обновлять JS код без пересборки через маркеты.

---

## 🎯 Типичные проблемы

### Android
- **"Upload failed: Version code 1 already exists"**
  - Увеличьте `versionCode` в `app.json`
- **"App Bundle не подписан"**
  - Убедитесь, что EAS настроен с keystore
- **"Target API level too old"**
  - Обновите `expo` до последней версии (поддерживает API 34+)

### iOS
- **"Missing compliance"**
  - App Store Connect → App Information → Export Compliance → "No" (если не используете шифрование)
- **"Invalid Bundle"**
  - Проверьте `bundleIdentifier` совпадает с App ID
- **"Missing required icon"**
  - Убедитесь `icon.png` 1024×1024px без альфа-канала

### TestFlight
- **"Build is processing" более часа**
  - Проверьте email на уведомления об ошибках от Apple
  - Попробуйте пересобрать с увеличенным buildNumber
- **"Expired invitation"**
  - Приглашения External Testing живут 30 дней
  - Отправьте новое приглашение тестеру
- **"Cannot accept invite"**
  - Убедитесь что тестер использует правильный Apple ID
  - Попросите тестера обновить TestFlight app до последней версии
- **"Beta App Unavailable"**
  - Билд истек (90 дней) или был удален
  - Загрузите новый билд в TestFlight

### EAS Build
- **"Out of build concurrency"**
  - Бесплатный план: 1 сборка одновременно. Подождите завершения текущей.
- **"Build failed: dependency resolution"**
  - Удалите `node_modules` и `package-lock.json`, выполните `npm install`

---

## 📚 Полезные ссылки

**Документация:**
- EAS Build: https://docs.expo.dev/build/introduction/
- TestFlight: https://developer.apple.com/testflight/
- TestFlight Beta Testing: https://testflight.apple.com/
- App Store Review: https://developer.apple.com/app-store/review/guidelines/
- Play Console Help: https://support.google.com/googleplay/android-developer

**Инструменты:**
- EAS Dashboard: https://expo.dev/
- App Store Connect: https://appstoreconnect.apple.com
- TestFlight (для установки): https://apps.apple.com/app/testflight/id899247664
- Google Play Console: https://play.google.com/console

**Генераторы:**
- Иконки: https://icon.kitchen/, https://www.appicon.co/
- Privacy Policy: https://www.privacypolicygenerator.info/
- Скриншоты: https://previewed.app/, https://mockuphone.com/

---

## ⏱️ Примерное время на первую публикацию

| Задача | Время |
|--------|-------|
| Подготовка иконок и метаданных | 1-2 часа |
| Настройка EAS + первая сборка | 1 час |
| Создание скриншотов | 2-3 часа |
| Написание описаний и политики | 2-3 часа |
| Заполнение Play Console | 1 час |
| Настройка TestFlight + Internal Testing | 30 минут |
| TestFlight бета-тестирование | 1-3 недели (рекомендуется) |
| Заполнение App Store Connect | 1.5 часа |
| **Итого активной работы** | **8-12 часов** |
| **Ожидание TestFlight External Review** | 1-2 дня (первый раз) |
| **Ожидание App Store проверки** | 1-3 дня |
| **Ожидание Play Market проверки** | 1-7 дней |

---

**Статус проекта:** Прототип готов к сборке, требуется:
1. Финальные иконки и скриншоты
2. Политика конфиденциальности
3. Backend API (сейчас mock-данные)
4. Регистрация в Developer консолях

Успешной публикации! 🚀
