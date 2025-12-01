# PairedApp 👋

A React Native mobile application built with Expo that helps users discover engaging questions and activities to spark conversations and exploration.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Troubleshooting](#troubleshooting)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

1. **Node.js** (v18 or higher)

   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)

   - Verify installation: `npm --version`

3. **Git**
   - Download from [git-scm.com](https://git-scm.com/)
   - Verify installation: `git --version`

### Platform-Specific Requirements

#### For iOS Development (macOS only):

- **Xcode** (latest version from Mac App Store)
- **Xcode Command Line Tools**: `xcode-select --install`
- **CocoaPods**: `sudo gem install cocoapods`

#### For Android Development:

- **Android Studio** ([Download here](https://developer.android.com/studio))
- **Android SDK** (installed via Android Studio)
- **Java Development Kit (JDK)** 17 or higher

#### For Web Development:

- No additional requirements (works out of the box)

## 📦 Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd PairedApp
```

### Step 2: Install Dependencies

Install all required packages using npm:

```bash
npm install
```

This will install all dependencies listed in `package.json`, including:

- **Expo SDK** (~54.0.23)
- **React Native** (0.81.5)
- **React Navigation** (v7.x)
- **Expo Router** (~6.0.14)
- And all other required packages

### Step 3: Verify Installation

Check that all packages were installed correctly:

```bash
npm list --depth=0
```

## 🚀 Running the App

### Start the Development Server

```bash
npm start
```

or

```bash
npx expo start
```

This will start the Expo development server and display a QR code in your terminal.

### Run on Different Platforms

#### iOS Simulator (macOS only)

```bash
npm run ios
```

or press `i` in the Expo CLI after running `npm start`

#### Android Emulator

```bash
npm run android
```

or press `a` in the Expo CLI after running `npm start`

**Note:** Make sure you have an Android emulator running or a physical device connected via USB with USB debugging enabled.

#### Web Browser

```bash
npm run web
```

or press `w` in the Expo CLI after running `npm start`

#### Physical Device

1. Install **Expo Go** app on your device:

   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Scan the QR code displayed in your terminal:
   - **iOS**: Use the Camera app
   - **Android**: Use the Expo Go app to scan

## 📁 Project Structure

```
PairedApp/
├── app/                          # Main application directory
│   ├── _layout.tsx              # Root layout with navigation
│   ├── index.tsx                 # Entry point
│   ├── Navigation/               # Navigation configuration
│   │   ├── navigation.tsx       # Stack navigator and types
│   │   └── modal.tsx
│   ├── Screens/                  # Application screens
│   │   ├── Sign_In_Screen/      # Sign in/authentication
│   │   ├── Main_Screen/          # Main activity screen
│   │   ├── Profile_Screen/       # User profile settings
│   │   ├── Settings_Screen/      # App settings
│   │   └── Contact_Support/      # Contact support form
│   └── ui/                       # Reusable UI components
│       ├── GradientBorder.tsx
│       ├── option-pill.tsx
│       ├── pref-card.tsx
│       └── sharedUI.tsx
├── assets/                       # Static assets
│   └── images/                   # Image files
├── components/                   # Shared components
├── constants/                    # App constants
├── hooks/                        # Custom React hooks
├── app.json                      # Expo configuration
├── package.json                  # Dependencies and scripts
└── tsconfig.json                 # TypeScript configuration
```

## ✨ Features

- **Sign In Screen**: Multiple authentication options (Google, Instagram, Apple ID)
- **Main Screen**: Interactive cards with questions and activities
  - Swipeable cards with animations
  - Two modes: "Questions" and "Things to Do"
  - Favorite functionality
  - Reroll feature
- **Profile Screen**: User preferences and customization
  - Activity type preferences
  - Indoor/outdoor preferences
  - Time commitment settings
  - Solo/group activity preferences
  - Vibe selection (multi-select)
- **Settings Screen**: App configuration
  - Profile management
  - Notifications toggle
  - Subscription management
  - Support links
  - About section
- **Contact Support**: In-app support form
  - Subject and message inputs
  - Form validation
  - Success confirmation

## 🛠 Technologies Used

### Core

- **React Native** (0.81.5) - Mobile framework
- **React** (19.1.0) - UI library
- **Expo** (~54.0.23) - Development platform
- **TypeScript** (~5.9.2) - Type safety

### Navigation

- **React Navigation** (v7.x) - Navigation library
  - `@react-navigation/native` (^7.1.19)
  - `@react-navigation/native-stack` (^7.6.2)
  - `@react-navigation/bottom-tabs` (^7.4.0)
- **Expo Router** (~6.0.14) - File-based routing

### UI & Styling

- **Expo Linear Gradient** (~15.0.7) - Gradient effects
- **Expo Blur** (~15.0.7) - Blur effects
- **Expo Vector Icons** (^15.0.3) - Icon library
- **React Native Safe Area Context** (~5.6.0) - Safe area handling

### Development Tools

- **ESLint** (^9.25.0) - Code linting
- **TypeScript** (~5.9.2) - Type checking

## 🐛 Troubleshooting

### Common Issues

#### Metro Bundler Cache Issues

If you encounter module resolution errors or stale code:

```bash
npx expo start --clear
```

or

```bash
npm start -- --reset-cache
```

#### Port Already in Use

If port 8081 is already in use:

```bash
# Kill the process using the port
lsof -ti:8081 | xargs kill -9
```

#### iOS Build Issues

```bash
cd ios
pod install
cd ..
npm run ios
```

#### Android Build Issues

1. Clean the build:

   ```bash
   cd android
   ./gradlew clean
   cd ..
   ```

2. Clear Android cache:
   ```bash
   rm -rf android/app/build
   ```

#### Node Modules Issues

If you encounter dependency issues:

```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

#### TypeScript Errors

Clear TypeScript cache:

```bash
rm -rf node_modules/.cache
npm start
```

### Getting Help

- Check [Expo Documentation](https://docs.expo.dev/)
- Visit [Expo Forums](https://forums.expo.dev/)
- Join [Expo Discord](https://chat.expo.dev/)

## 📝 Available Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint
- `npm run reset-project` - Reset to blank project (development only)

## 🔐 Environment Setup

No environment variables are currently required. All configuration is handled through `app.json`.

## 📄 License

[Add your license information here]

## 👥 Contributors

[Add contributor information here]

---

**Happy Coding! 🚀**
