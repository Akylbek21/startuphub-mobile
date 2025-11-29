# 🚀 StartupHub Mobile - Навигация по документации

## 🎯 Начните отсюда

Вы находитесь в проекте **StartupHub Mobile** — мобильное приложение для стартап-экосистемы.

### Что вы хотите сделать?

<table>
<tr>
<td width="50%">

### 🏃‍♂️ Быстрый старт

**Запустить приложение локально:**
```powershell
# Windows (рекомендуется)
powershell -ExecutionPolicy Bypass -File .\start-expo.ps1 -Android

# Или прямой запуск
cd app-bootstrap
npx expo start
```

📖 **Документация:**
- [app-bootstrap/README.md](app-bootstrap/README.md) - полное описание проекта

</td>
<td width="50%">

### 📱 Публикация в маркеты

**Хотите опубликовать в Play Market / App Store?**

Начните с одного из этих документов:

1. **[QUICK_PUBLISH.md](QUICK_PUBLISH.md)** ⚡  
   Краткая шпаргалка на 1-2 страницы

2. **[DEPLOYMENT.md](DEPLOYMENT.md)** 📖  
   Полное пошаговое руководство

3. **[PUBLISHING_CHECKLIST.md](PUBLISHING_CHECKLIST.md)** ✅  
   Чеклист с TODO задачами

</td>
</tr>
</table>

---

## 📚 Все документы проекта

| Документ | Для кого | Описание |
|----------|----------|----------|
| **[QUICK_PUBLISH.md](QUICK_PUBLISH.md)** | 🏃 Спешащие | Краткая шпаргалка: команды, настройки, шаблоны текстов за 5 минут |
| **[DEPLOYMENT.md](DEPLOYMENT.md)** | 📖 Новички | Полное руководство с объяснениями: от регистрации до публикации |
| **[TESTFLIGHT_GUIDE.md](TESTFLIGHT_GUIDE.md)** | ✈️ iOS Бета | Полный гайд по TestFlight: от первого билда до App Store |
| **[PUBLISHING_CHECKLIST.md](PUBLISHING_CHECKLIST.md)** | ✅ Организаторы | TODO-лист с галочками, оценками времени и стоимости |
| **[PRIVACY_POLICY.md](PRIVACY_POLICY.md)** | ⚖️ Compliance | Политика конфиденциальности (готова к публикации) |
| **[app-bootstrap/README.md](app-bootstrap/README.md)** | 👨‍💻 Разработчики | Техническая документация, структура проекта, технологии |
| **[app-bootstrap/IMPLEMENTATION.md](app-bootstrap/IMPLEMENTATION.md)** | 🛠️ Детали | Полное описание реализованного функционала |
| **[.github/copilot-instructions.md](.github/copilot-instructions.md)** | 🤖 AI-агенты | Инструкции для GitHub Copilot и других AI-помощников |

---

## 🗺️ Дорожная карта

### Фаза 1: Разработка прототипа ✅ ЗАВЕРШЕНО
- [x] Дизайн и навигация
- [x] Все основные экраны
- [x] Mock-данные и UI

### Фаза 2: Подготовка к публикации 🔄 ТЕКУЩАЯ
- [ ] Создание графики (иконки, скриншоты)
- [ ] Настройка EAS Build
- [ ] Регистрация в консолях разработчиков
- [ ] Первая публикация в маркеты

### Фаза 3: Backend интеграция 📅 ПЛАНИРУЕТСЯ
- [ ] API для стартапов, событий, пользователей
- [ ] Аутентификация (JWT)
- [ ] База данных (PostgreSQL/MongoDB)
- [ ] Файловое хранилище (AWS S3)

### Фаза 4: AI интеграция 🤖 ПЛАНИРУЕТСЯ
- [ ] AI-анализ стартапов (OpenAI/Azure)
- [ ] AI-подбор событий
- [ ] AI-matching инвесторов
- [ ] Рекомендательная система

### Фаза 5: Production features 🚀 ПЛАНИРУЕТСЯ
- [ ] Push-уведомления (FCM)
- [ ] Аналитика (Firebase/Amplitude)
- [ ] Crash reporting (Sentry)
- [ ] OTA обновления
- [ ] Локализация (KZ/RU/EN)

---

## 🎓 Для новых разработчиков

### 1. Понимание архитектуры (30 минут)
```
1. Прочитайте app-bootstrap/README.md
2. Откройте app-bootstrap/src/navigation/MainTabs.js
3. Посмотрите любой screen в app-bootstrap/src/screens/
```

### 2. Запуск проекта (15 минут)
```powershell
# Установите зависимости
cd app-bootstrap
npm install

# Запустите Expo
powershell -ExecutionPolicy Bypass -File ..\start-expo.ps1
```

### 3. Первые изменения (10 минут)
```
Задача: Измените цвет темы с #6366F1 на другой
1. Найдите все вхождения #6366F1 в проекте
2. Замените на новый цвет (например, #8B5CF6)
3. Перезапустите приложение
```

### 4. Изучите паттерны (1 час)
- Как добавить новый экран
- Как зарегистрировать route в навигаторе
- Как использовать SearchHeader компонент
- Как стилизовать для iOS и Android

📖 См. `.github/copilot-instructions.md` для деталей

---

## 💰 Бюджет публикации

| Статья | Стоимость | Частота |
|--------|-----------|---------|
| Google Play Developer | $25 | Один раз |
| Apple Developer Program | $99 | Ежегодно |
| EAS Build (Free plan) | $0 | - |
| Хостинг политики конфиденциальности | $0 | - |
| **Итого первый год** | **$124** | - |
| **Последующие годы** | **$99** | Ежегодно |

*EAS Build: Free план включает 30 билдов/месяц*

---

## ⏱️ Временные затраты

### Публикация (первый раз)
| Задача | Время |
|--------|-------|
| Создание иконок и скриншотов | 3-4 часа |
| Настройка EAS и сборки | 1-2 часа |
| Регистрация в консолях | 1 час |
| Заполнение метаданных | 2-3 часа |
| Политика конфиденциальности | 1 час |
| **Всего** | **8-11 часов** |
| Ожидание проверки | 1-7 дней |

### Разработка нового функционала
| Задача | Время (опытный разработчик) |
|--------|------------------------------|
| Новый экран | 2-4 часа |
| Новая вкладка с навигацией | 4-6 часов |
| Backend интеграция (API) | 1-2 дня |
| AI функция | 2-3 дня |

---

## 🆘 Частые проблемы

### "Не могу запустить Expo"
```powershell
# 1. Удалите кэш
cd app-bootstrap
Remove-Item -Recurse -Force .expo, node_modules
npm install

# 2. Используйте helper script
powershell -ExecutionPolicy Bypass -File ..\start-expo.ps1
```

### "Android не запускается"
```powershell
# Исправьте ANDROID_HOME
powershell -ExecutionPolicy Bypass -File .\fix-android-sdk.ps1
```

### "Ошибки в EAS Build"
```powershell
# Проверьте конфигурацию
cd app-bootstrap
eas build:configure

# Посмотрите логи последней сборки
eas build:list
eas build:view [BUILD_ID]
```

### "App Store отклонил приложение"
- Проверьте Privacy Policy URL
- Заполните Export Compliance
- Добавьте screenshots для всех размеров
- Опишите функционал для ревьюеров

📖 Полный список в [DEPLOYMENT.md](DEPLOYMENT.md) → раздел "Типичные проблемы"

---

## 🔗 Полезные ссылки

### Официальная документация
- [Expo Docs](https://docs.expo.dev/) - документация Expo
- [React Navigation](https://reactnavigation.org/) - навигация
- [React Native](https://reactnative.dev/) - React Native API

### Инструменты разработки
- [Expo Dev Tools](https://expo.dev/) - EAS Dashboard
- [App Store Connect](https://appstoreconnect.apple.com) - управление iOS приложением
- [Google Play Console](https://play.google.com/console) - управление Android приложением

### Генераторы
- [Icon Kitchen](https://icon.kitchen/) - генератор иконок
- [AppIcon.co](https://www.appicon.co/) - альтернативный генератор
- [Previewed.app](https://previewed.app/) - mockup для скриншотов
- [Privacy Policy Generator](https://www.privacypolicygenerator.info/) - генератор политики

### Сообщество
- [Expo Forums](https://forums.expo.dev/) - форум Expo
- [React Native Community](https://github.com/react-native-community) - GitHub
- [r/reactnative](https://www.reddit.com/r/reactnative/) - Reddit

---

## 📞 Поддержка проекта

**GitHub:** [@Akylbek21](https://github.com/Akylbek21)  
**Репозиторий:** [minimalui-edu](https://github.com/Akylbek21/minimalui-edu)  
**Issues:** [GitHub Issues](https://github.com/Akylbek21/minimalui-edu/issues)

---

## 📄 Лицензия

Образовательный проект. Создан для изучения React Native и Expo.

---

<p align="center">
  <strong>Готовы начать? Выберите документ выше и вперед! 🚀</strong>
</p>

<p align="center">
  <sub>Последнее обновление: 29 ноября 2025 г.</sub>
</p>
