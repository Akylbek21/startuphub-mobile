# 🎨 Создание иконок для StartupHub

## 📁 Созданные файлы

В папке `app-bootstrap/assets/` созданы:
- **icon-source.svg** - основная иконка с логотипом и текстом (для iOS и больших размеров)
- **adaptive-icon-source.svg** - адаптивная иконка без текста (для Android)

## 🔄 Конвертация SVG → PNG

### Вариант 1: Онлайн сервисы (РЕКОМЕНДУЕТСЯ)

#### Для icon.png (1024×1024):
1. Откройте: https://www.svgviewer.dev/ или https://svgtopng.com/
2. Загрузите `icon-source.svg`
3. Установите размер: **1024×1024**
4. Скачайте как `icon.png`
5. Поместите в `app-bootstrap/assets/icon.png`

#### Для adaptive-icon.png (1024×1024):
1. Загрузите `adaptive-icon-source.svg`
2. Размер: **1024×1024**
3. Скачайте как `adaptive-icon.png`
4. Поместите в `app-bootstrap/assets/adaptive-icon.png`

### Вариант 2: Figma/Adobe Illustrator

1. Откройте SVG файл
2. Export as PNG
3. Scale: 1024×1024
4. Resolution: 72 DPI (для app icons)

### Вариант 3: ImageMagick (если установлен)

```powershell
# Установка ImageMagick (если нет)
# winget install ImageMagick.ImageMagick

# Конвертация icon
magick app-bootstrap\assets\icon-source.svg -resize 1024x1024 app-bootstrap\assets\icon.png

# Конвертация adaptive icon
magick app-bootstrap\assets\adaptive-icon-source.svg -resize 1024x1024 app-bootstrap\assets\adaptive-icon.png
```

### Вариант 4: Через icon.kitchen (САМЫЙ ПРОСТОЙ)

1. Откройте: https://icon.kitchen/
2. Upload Image → выберите `icon-source.svg`
3. Настройте:
   - Background: Custom color (#6366F1)
   - Trim: No
   - Padding: 10%
4. **Download Icons** → получите готовый набор для iOS и Android!
5. Скопируйте файлы в `app-bootstrap/assets/`

---

## ✅ Проверка иконок

### Требования App Store (iOS):
- ✅ Размер: 1024×1024 пикселей
- ✅ Формат: PNG
- ✅ Цветовой профиль: sRGB или Display P3
- ✅ БЕЗ альфа-канала (прозрачности)
- ✅ БЕЗ скругленных углов (Apple добавит автоматически)

### Требования Play Market (Android):
- ✅ icon.png: 1024×1024 (квадратная)
- ✅ adaptive-icon.png: 1024×1024
  - Безопасная зона в центре: 768×768 пикселей
  - Может быть обрезана по кругу/скругленному квадрату
- ✅ Формат: PNG
- ✅ Можно с прозрачностью

### Проверка через PowerShell:

```powershell
# Проверка размеров
Add-Type -AssemblyName System.Drawing
$icon = [System.Drawing.Image]::FromFile("$PWD\app-bootstrap\assets\icon.png")
Write-Host "Icon size: $($icon.Width)x$($icon.Height)"
$icon.Dispose()

$adaptive = [System.Drawing.Image]::FromFile("$PWD\app-bootstrap\assets\adaptive-icon.png")
Write-Host "Adaptive icon size: $($adaptive.Width)x$($adaptive.Height)"
$adaptive.Dispose()
```

---

## 🎨 Дизайн иконки

### Основная иконка (icon.png):
```
┌─────────────────────────────┐
│                             │
│    Фон: #6366F1 (Indigo)    │
│                             │
│         ┌───┐               │
│        ╱│   │╲              │
│       ╱ │   │ ╲             │
│      └──┴───┴──┘            │
│      3D Box Logo            │
│                             │
│     StartupHub              │
│                             │
└─────────────────────────────┘
```

### Adaptive Icon (adaptive-icon.png):
```
┌─────────────────────────────┐
│  ╔═══════════════════════╗  │ ← Full bleed
│  ║                       ║  │
│  ║   ┌───────────────┐   ║  │ ← Safe zone
│  ║   │               │   ║  │   (768×768)
│  ║   │   3D Box      │   ║  │
│  ║   │   Larger      │   ║  │
│  ║   │   No text     │   ║  │
│  ║   └───────────────┘   ║  │
│  ║                       ║  │
│  ╚═══════════════════════╝  │
└─────────────────────────────┘
```

---

## 🚀 После создания PNG

1. **Замените файлы** в `app-bootstrap/assets/`:
   ```
   assets/
   ├── icon.png              ← 1024×1024 (iOS, Android)
   ├── adaptive-icon.png     ← 1024×1024 (Android adaptive)
   ├── splash-icon.png       ← Можно использовать adaptive-icon.png
   └── favicon.png           ← 16×16 или 32×32 (web)
   ```

2. **Проверьте в приложении**:
   ```powershell
   cd app-bootstrap
   npx expo start
   ```
   Иконка должна отображаться в Expo Go

3. **Соберите билд**:
   ```powershell
   eas build --platform android --profile preview
   eas build --platform ios --profile preview
   ```

---

## 🎯 Дополнительные размеры (опционально)

Если нужны дополнительные размеры для разных платформ:

### iOS (создаются автоматически из 1024×1024):
- App Icon: 180×180, 120×120, 87×87, 80×80, 76×76, 60×60, 58×58, 40×40, 29×29, 20×20
- Spotlight: 80×80, 40×40
- Settings: 58×58, 29×29

### Android (создаются автоматически):
- mdpi: 48×48
- hdpi: 72×72
- xhdpi: 96×96
- xxhdpi: 144×144
- xxxhdpi: 192×192

Expo автоматически создаст все эти размеры из вашей 1024×1024 иконки!

---

## 🔍 Предпросмотр на устройствах

### Android shapes:
- Circle (круг)
- Squircle (скругленный квадрат)
- Rounded square (квадрат с углами)
- Teardrop (капля)

Ваша адаптивная иконка будет хорошо выглядеть во всех формах, потому что важные элементы находятся в безопасной зоне (центр 768×768).

### iOS:
- Автоматически скруглит углы (радиус ~22%)
- Добавит тень
- Применит App Icon Effect

---

## ✅ Чеклист

- [ ] Конвертировать `icon-source.svg` → `icon.png` (1024×1024)
- [ ] Конвертировать `adaptive-icon-source.svg` → `adaptive-icon.png` (1024×1024)
- [ ] Проверить размеры PNG файлов
- [ ] Убедиться что icon.png БЕЗ прозрачности
- [ ] Заменить файлы в `app-bootstrap/assets/`
- [ ] Проверить в Expo Go
- [ ] Собрать тестовый билд

---

## 🎨 Хотите другой дизайн?

Если нужно изменить дизайн иконки:

1. **Цвет фона**: замените `#6366F1` на другой цвет в SVG файлах
2. **Логотип**: отредактируйте SVG в любом векторном редакторе
3. **Текст**: измените font-size или удалите текст совсем

Или воспользуйтесь онлайн-генераторами:
- https://icon.kitchen/ - автоматическая адаптация
- https://www.appicon.co/ - с предпросмотром
- https://iconifier.net/ - множество стилей

---

**Готово!** После конвертации PNG иконки будут готовы для публикации в App Store и Play Market 🚀
