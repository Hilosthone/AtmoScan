### 📝 The Ultimate `README.md` for AtmoScan

```markdown
# 🌦️ AtmoScan - Group 6 Weather Application

AtmoScan is a professional-grade mobile weather utility built with **React Native** and **Expo**. This project serves as the core submission for the 2026 Mobile Engineering Project by **Group 6**.

---

## 👥 The Team
- **Lead Software Engineer (Hilosthone)**: Architecture, Navigation & Git Management.
- **Developer 2**: Logic, API Integration & Geolocation.
- **Developer 3**: UI/UX Design, Theming & Personalization.

---

## 🛠️ Technical Setup

### Prerequisites
- Node.js (v18 or higher)
- Expo Go app on your mobile device OR Android Studio Emulator

### Installation
1. **Clone the repository**:
   ```bash
   git clone [https://github.com/Hilosthone/AtmoScan.git](https://github.com/Hilosthone/AtmoScan.git)
   cd AtmoScan

```

2. **Install dependencies**:
```bash
npm install

```

3. **Start the development server**:
```bash
npx expo start -c
---

## 📂 Project Structure

```text
AtmoScan/
├── assets/          # Images, logos, and splash screens
├── components/      # Reusable UI elements (Buttons, Cards)
├── screens/         # Main application views
│   ├── HomeScreen.tsx
│   ├── WeatherScreen.tsx
│   └── SettingsScreen.tsx
├── styles/          # Global theme and color constants (Colors.ts)
└── App.tsx          # Navigation logic and Drawer setup

```

---

## 🔄 Git Workflow (Critical for Dev 2 & 3)

To avoid merge conflicts, please follow this workflow before starting work:

1. **Always pull the latest code first**:
```bash
git pull origin main

```


2. **Commit your changes locally**:
```bash
git add .
git commit -m "feat: added weather icon logic"

```


3. **Push to the primary repository**:
```bash
git push origin main

```


4. **Lead Engineer only**: Sync the backup repository:
```bash
git push gates main

```
---

## 🗺️ Roadmap

* [x] Base Architecture & Drawer Navigation
* [x] Persistent Settings (AsyncStorage)
* [ ] Live API Integration (OpenWeatherMap)
* [ ] GPS Location Services
* [ ] Dark Mode Implementation

---

## 📄 License

Internal project for Group 6 Engineering Students.
