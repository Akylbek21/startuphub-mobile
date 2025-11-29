# Copilot Instructions for StartupHub Mobile (Expo React Native)

These rules guide AI coding agents working in this repository to be immediately productive and aligned with project-specific patterns.

## Big Picture
- **App Type:** Expo React Native app (SDK 54) with React Navigation 7 and bottom tab layout for startup ecosystem features.
- **Entry Points:** Root `App.js` and Bootstrap `app-bootstrap/App.js` both render `NavigationContainer` and `MainTabs`. The bootstrap version is the live entry point.
- **Navigation Structure:** 
  - Bottom tabs in `app-bootstrap/src/navigation/MainTabs.js` with 4 tabs: Главная (⚡), Стартапы (💎), События (🎯), Люди (✨)
  - Each tab uses nested `@react-navigation/native-stack` navigators with domain-specific screens
  - Tabs are platform-aware: height 92px (iOS) / 96px (Android), custom padding for safe areas
- **Screen Organization:** Feature folders under `app-bootstrap/src/screens/**` by domain: `startups/`, `events/`, `people/`, `profile/`. Each subfolder contains list/detail/filters and AI-related screens (e.g., `StartupAIAnalysisScreen.js`, `EventsAIRecommendScreen.js`).
- **Why two app roots:** `app-bootstrap/` is the runnable Expo project (scripts, babel, assets). The top-level holds a minimal mirror (`src/` + `App.js`) but Expo expects the bootstrap folder for development.
- **Data Pattern:** Static mock data arrays defined in screen files (no state management or API integration yet). Data includes startups, events, and people with realistic Russian content.

## Developer Workflows
- **Start the app (Windows / PowerShell 5.1):** Prefer the helper script which fixes Android SDK, installs deps, and clears cache.
  - Start Expo (no auto-launch):
    - `powershell -ExecutionPolicy Bypass -File .\start-expo.ps1`
  - Start + auto-launch platform:
    - Android: `powershell -ExecutionPolicy Bypass -File .\start-expo.ps1 -Android`
    - iOS: `powershell -ExecutionPolicy Bypass -File .\start-expo.ps1 -iOS`
    - Web: `powershell -ExecutionPolicy Bypass -File .\start-expo.ps1 -Web`
- **Fix Android SDK env:** `powershell -ExecutionPolicy Bypass -File .\fix-android-sdk.ps1` (optionally sets `ANDROID_HOME` permanently, tests `adb`).
- **Direct npm scripts (inside `app-bootstrap/`):**
  - `npm run start` / `npx expo start`
  - `npm run android` / `npm run ios` / `npm run web`
- **Dependencies install location:** Run `npm install` in `app-bootstrap/`. The root `package.json` has no start script and minimal deps.

## Project-Specific Conventions
- **Navigation:**
  - Use `@react-navigation/bottom-tabs` for tabs and `@react-navigation/native-stack` for nested stacks.
  - Keep `headerShown: false` at tab level; per-screen headers should be configured in each stack navigator (e.g., `options={{ title: 'Создать стартап' }}`).
  - Tab icons are simple emoji via `<Text>`; match style in `MainTabs.js` (sizes ~26, active color `#6366F1`, inactive `#94A3B8`).
  - Navigator naming: append "Navigator" suffix (e.g., `StartupsNavigator.js`), screen routes PascalCase (e.g., `StartupDetail`, `CreateStartup`).
- **Components & Layout:**
  - Use `SafeAreaView` from `react-native-safe-area-context` at screen root (or from RN with `style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}`).
  - `react-native-screens` is enabled via `enableScreens()` in `app-bootstrap/App.js`.
  - Reusable `SearchHeader` component (`src/components/SearchHeader.js`) provides logo, search input, and profile button—used on list screens.
  - Screen pattern: `SafeAreaView` → `SearchHeader` (if applicable) → `ScrollView` with content.
- **File Organization:**
  - Put new feature screens in the matching domain subfolder (e.g., `app-bootstrap/src/screens/events/` for event-related views).
  - Add navigators under `app-bootstrap/src/navigation/` and wire them into `MainTabs` if they represent a new tab.
  - Shared components go in `app-bootstrap/src/components/`.
- **Styling:**
  - Inline StyleSheet.create() in each file; no global theme or styled-components.
  - Color palette: primary `#6366F1` (indigo), success `#10B981`, danger `#DC2626`, backgrounds `#F8FAFC` / `#FFFFFF`, borders `#E2E8F0`.
  - Platform.select for shadows: iOS uses shadowColor/shadowOffset/shadowOpacity, Android uses elevation.
  - Emoji for icons (no icon libraries): prefer size 18-26 in UI elements.

## Integration Points & External Deps
- **Expo SDK 54:** Most runtime config lives in `app-bootstrap/app.json` and `babel.config.js`.
- **React Native 0.81 / React 19:** Ensure any library versions are compatible with these.
- **Gesture/Reanimated:** Installed (`react-native-gesture-handler`, `react-native-reanimated`)—initialize where screens need gestures/animations.

## Patterns and Examples
- **Add a new screen:**
  1. Create `app-bootstrap/src/screens/startups/StartupPitchScreen.js` exporting a default React component.
     ```javascript
     export default function StartupPitchScreen({ navigation, route }) {
       return (
         <SafeAreaView style={styles.safeArea}>
           <ScrollView style={styles.container}>
             {/* content */}
           </ScrollView>
         </SafeAreaView>
       );
     }
     ```
  2. Register it in `app-bootstrap/src/navigation/StartupsNavigator.js` stack:
     ```javascript
     <Stack.Screen name="StartupPitch" component={StartupPitchScreen} options={{ title: 'Питч стартапа' }} />
     ```
  3. Navigate from `StartupsListScreen.js`:
     ```javascript
     navigation.navigate('StartupPitch', { id: item.id })
     ```
- **Add a new tab:**
  1. Create a navigator `app-bootstrap/src/navigation/NewsNavigator.js` with a stack.
  2. Import and add to `Tab.Navigator` in `MainTabs.js`:
     ```javascript
     <Tab.Screen 
       name="Новости" 
       component={NewsNavigator}
       options={{
         tabBarIcon: ({ color }) => <Text style={{ fontSize: 26, color }}>📰</Text>,
       }}
     />
     ```
- **Mock data pattern:**
  - Define static data arrays at top of screen files (no external data layer yet):
    ```javascript
    const data = [
      { id: '1', name: 'TechFlow', description: '...', image: 'https://...' },
    ];
    ```
  - Map over data in render with `.map()` or use FlatList for large lists.

## Gotchas
- **Two source trees:** Prioritize `app-bootstrap/` for runtime changes; mirror files at root are minimal and may not be wired to Expo.
- **Cache issues:** Use `npx expo start --clear` or the helper script which removes `.expo` before start.
- **Android env:** If `ANDROID_HOME` missing, Expo Android launch fails; run `fix-android-sdk.ps1`.

## Key Files
- `app-bootstrap/App.js`, `app-bootstrap/index.js`, `app-bootstrap/app.json`, `app-bootstrap/babel.config.js`
- `app-bootstrap/src/navigation/MainTabs.js` and nested navigators
- `app-bootstrap/src/screens/**` domain folders: `events/`, `people/`, `profile/`, `startups/`
- `start-expo.ps1` and `fix-android-sdk.ps1` for Windows workflows

## Production Build & Store Deployment

### Prerequisites for Play Market & App Store
1. **EAS Build Setup** (recommended for Expo SDK 54):
   ```powershell
   cd app-bootstrap
   npm install -g eas-cli
   eas login
   eas build:configure
   ```

2. **Update `app.json`** with production metadata:
   - Change `slug` from "app-bootstrap" to "startuphub-mobile"
   - Add `bundleIdentifier` (iOS): `"com.yourcompany.startuphub"`
   - Add `package` (Android): `"com.yourcompany.startuphub"`
   - Set proper app `name`: "StartupHub"
   - Update `version` and add `buildNumber` (iOS) / `versionCode` (Android)

3. **Required assets** (create in `app-bootstrap/assets/`):
   - `icon.png` - 1024×1024px app icon
   - `adaptive-icon.png` - 1024×1024px Android adaptive icon
   - `splash-icon.png` - splash screen image
   - Store screenshots (6.5" iPhone, various Android sizes)

4. **Android-specific** (`app.json` → `android`):
   ```json
   "permissions": ["INTERNET"],
   "package": "com.yourcompany.startuphub"
   ```
   - Generate keystore: `keytool -genkeypair -v -storetype PKCS12 -keystore startuphub.keystore -alias startuphub -keyalg RSA -keysize 2048 -validity 10000`
   - Add credentials to EAS or store securely

5. **iOS-specific** (`app.json` → `ios`):
   ```json
   "bundleIdentifier": "com.yourcompany.startuphub",
   "buildNumber": "1"
   ```
   - Enroll in Apple Developer Program ($99/year)
   - Create App ID in Apple Developer portal
   - Configure signing in EAS or Xcode

6. **Privacy & Compliance**:
   - Add privacy policy URL to store listings
   - Declare data collection practices
   - For Kazakhstan: ensure compliance with local regulations

### Build Commands
- **Android AAB** (Play Console): `eas build --platform android`
- **iOS IPA** (TestFlight/App Store): `eas build --platform ios`
- **Local builds** (requires Android Studio/Xcode):
  - Android: `eas build --platform android --local`
  - iOS: `eas build --platform ios --local`

### Store Submission Checklist
**Google Play:**
- [ ] App signing key configured
- [ ] Content rating questionnaire completed
- [ ] Store listing: title, short/full description, screenshots
- [ ] Privacy policy URL
- [ ] Target API level 34+ (Android 14)

**App Store:**
- [ ] Apple Developer account active
- [ ] App Store Connect: create new app
- [ ] Screenshots for all required device sizes
- [ ] App Review Information (contact, demo account)
- [ ] Export compliance documentation

### Post-Deployment
- Configure OTA updates via `expo-updates` for hotfixes
- Set up crash reporting (Sentry, Crashlytics)
- Analytics integration (Firebase, Amplitude)
- Backend API integration (replace mock data)

## Expectations for AI Agents
- Favor changes under `app-bootstrap/` unless specifically modifying root mirrors.
- Keep navigator and screen registrations consistent with existing patterns and naming.
- When adding dependencies, update `app-bootstrap/package.json` and verify via the start script.
- Provide copy-pasteable PowerShell commands for run/debug steps.
- For production builds, always reference EAS Build documentation and ensure `app.json` is properly configured.
