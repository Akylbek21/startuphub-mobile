# 🚀 StartupHub - Подготовка к публикации

## ✅ Что уже сделано
- [x] Приложение разработано и работает локально
- [x] Навигация и экраны реализованы
- [x] `app.json` обновлен с production метаданными
- [x] `eas.json` создан для EAS Build
- [x] Политика конфиденциальности написана

## 📝 TODO перед публикацией

### 🎨 Графика (высокий приоритет)
- [ ] Создать app icon 1024×1024px (`app-bootstrap/assets/icon.png`)
- [ ] Создать adaptive icon 1024×1024px (`app-bootstrap/assets/adaptive-icon.png`)
- [ ] Создать splash screen (`app-bootstrap/assets/splash-icon.png`)
- [ ] Создать feature graphic для Play Market (1024×500px)
- [ ] Сделать 4-8 скриншотов для каждой платформы

**Инструменты:**
- https://icon.kitchen/ - генератор иконок
- https://www.appicon.co/ - альтернатива
- Figma/Photoshop для скриншотов

### 🔧 Техническая подготовка
- [ ] Настроить EAS CLI: `npm install -g eas-cli && eas login`
- [ ] Инициализировать EAS: `cd app-bootstrap && eas build:configure`
- [ ] Тестовая сборка Android: `eas build --platform android --profile preview`
- [ ] Тестовая сборка iOS: `eas build --platform ios --profile preview`

### 📱 Google Play Console
- [ ] Зарегистрироваться ($25 единоразово)
- [ ] Создать приложение "StartupHub"
- [ ] Заполнить описание магазина
- [ ] Пройти анкету возрастного рейтинга
- [ ] Загрузить политику конфиденциальности (URL)
- [ ] Загрузить AAB: `eas build --platform android --profile production`
- [ ] Запустить внутреннее тестирование

### ✈️ TestFlight (iOS Бета-тестирование - РЕКОМЕНДУЕТСЯ)
- [ ] Собрать IPA: `eas build --platform ios --profile production`
- [ ] Дождаться обработки билда (10-30 минут)
- [ ] Настроить Internal Testing в App Store Connect
- [ ] Добавить 5-10 внутренних тестеров (команда)
- [ ] Тестеры устанавливают TestFlight app и принимают приглашение
- [ ] Собрать feedback (1-2 недели)
- [ ] Исправить критические баги
- [ ] Создать External Testing группу (опционально)
- [ ] Отправить на TestFlight External Review (1-2 дня, только первый раз)
- [ ] Пригласить 50-100 внешних тестеров
- [ ] Финальное тестирование (1-2 недели)
- [ ] Убедиться что crash rate < 1%

### 🍎 Apple App Store (Production)
- [ ] Зарегистрироваться в Apple Developer ($99/год)
- [ ] Создать App ID в Developer Portal
- [ ] Создать приложение в App Store Connect
- [ ] Заполнить метаданные (описание, ключевые слова, категория)
- [ ] Загрузить скриншоты для всех размеров экранов
- [ ] Выбрать протестированный билд из TestFlight
- [ ] Заполнить App Review Information
- [ ] Добавить Export Compliance информацию
- [ ] Отправить на проверку

### 📄 Документация
- [ ] Опубликовать `PRIVACY_POLICY.md` на сайте (или GitHub Pages)
- [ ] Обновить контакты в политике конфиденциальности
- [ ] Создать Terms of Service (опционально, но рекомендуется)
- [ ] Подготовить заметки для ревьюеров

### 🔐 Compliance (для Казахстана)
- [ ] Проверить соответствие законодательству РК о персональных данных
- [ ] Уведомить пользователей о сборе данных
- [ ] Обеспечить возможность удаления аккаунта

### 🚀 Post-Launch
- [ ] Настроить Sentry для мониторинга крашей
- [ ] Интегрировать Firebase Analytics
- [ ] Настроить OTA обновления через `expo-updates`
- [ ] Подключить реальный backend (сейчас mock-данные)
- [ ] Создать landing page для приложения

## 📚 Документация

- **Полное руководство:** `DEPLOYMENT.md`
- **Политика конфиденциальности:** `PRIVACY_POLICY.md`
- **AI инструкции:** `.github/copilot-instructions.md`
- **Техническая документация:** `app-bootstrap/IMPLEMENTATION.md`

## 🛠️ Быстрые команды

```powershell
# Запуск для разработки
powershell -ExecutionPolicy Bypass -File .\start-expo.ps1

# Тестовая сборка (Android APK)
cd app-bootstrap
eas build --platform android --profile preview

# Production сборка (Android AAB для Play Market)
eas build --platform android --profile production

# Production сборка (iOS IPA для App Store)
eas build --platform ios --profile production

# Проверка статуса сборки
eas build:list

# OTA обновление (после первой публикации)
eas update --branch production
```

## ⏱️ Оценка времени

### Быстрая публикация (без TestFlight):
| Этап | Время |
|------|-------|
| Создание графики (иконки + скриншоты) | 3-4 часа |
| Настройка EAS и первые сборки | 1-2 часа |
| Регистрация в консолях (Play + Apple) | 1 час |
| Заполнение метаданных магазинов | 2-3 часа |
| Публикация политики конфиденциальности | 1 час |
| **Всего активной работы** | **8-11 часов** |
| Ожидание проверки (Play) | 1-7 дней |
| Ожидание проверки (App Store) | 1-3 дня |

### Рекомендуемый путь (с TestFlight):
| Этап | Время |
|------|-------|
| Подготовка и первая сборка | 8-11 часов |
| Настройка TestFlight Internal Testing | 30 минут |
| Internal бета-тестирование | 1-2 недели |
| Исправление багов и новый билд | 1-3 дня |
| External Testing (опционально) | 2-3 недели |
| Финальная подготовка для App Store | 2 часа |
| **Всего до публикации в App Store** | **3-5 недель** |
| Ожидание App Store Review | 1-3 дня |

## 💰 Стоимость

- Google Play регистрация: **$25** (единоразово)
- Apple Developer: **$99/год** (подписка)
- EAS Build: бесплатно для небольших проектов (30 билдов/месяц на Free plan)
- Хостинг политики: **$0** (GitHub Pages бесплатно)

**Итого:** ~$124 в первый год, потом $99/год

## 🆘 Помощь

Если что-то непонятно, смотрите:
1. `DEPLOYMENT.md` - пошаговое руководство
2. https://docs.expo.dev/build/introduction/ - EAS Build документация
3. https://github.com/Akylbek21/minimalui-edu - репозиторий проекта

**Контакты разработки:**
- GitHub: https://github.com/Akylbek21
- Репозиторий: minimalui-edu

Успехов в публикации! 🎉
