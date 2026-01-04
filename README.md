# Flickr Image Gallery App

video link:- https://drive.google.com/file/d/1PIoWgarK0APlZhg0IOCwBd4YxECo3_e0/view?usp=drive_link

A beautiful React Native app for browsing Flickr images with smooth navigation and offline support.

## 🚀 Features

### 📱 Navigation
- **Bottom Tab Navigation** - Primary navigation with 4 main tabs
- **Drawer Navigation** - Secondary menu with hamburger button access
- **Seamless Integration** - Both navigation types work together perfectly

### 🏠 Main Pages
1. **Home** - Flickr image gallery with pull-to-refresh
2. **Profile** - User profile with account settings
3. **Settings** - App preferences and configurations
4. **About** - App information and contact details

### 🖼️ Image Gallery Features
- **Recent Flickr Images** - Browse latest photos from Flickr API
- **Offline Support** - View cached images when offline
- **Pull-to-Refresh** - Update image gallery with fresh content
- **Image Caching** - Smart caching for better performance
- **Network Detection** - Automatic online/offline status detection

### 🎨 User Experience
- **Smooth Animations** - Fluid transitions between screens
- **Responsive Design** - Works on all device sizes
- **Clean UI** - Modern, intuitive interface
- **Performance Optimized** - Fast and efficient navigation

## 🛠️ Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **React Navigation** - Navigation library
  - Bottom Tabs Navigator
  - Drawer Navigator
- **React Native Gesture Handler** - Gesture handling
- **React Native Reanimated** - Smooth animations
- **AsyncStorage** - Local data storage
- **Flickr API** - Image source

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/Chandrasinh9/Flicker-Image.git
cd FlickrImageGallery
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npx expo start
```

4. Run on device/emulator
- Scan QR code with Expo Go app
- Press `a` for Android emulator
- Press `i` for iOS simulator

## 🎯 Navigation Guide

### Bottom Tabs
- **Home** 🏠 - Flickr image gallery
- **Profile** 👤 - User profile page
- **Settings** ⚙️ - App settings
- **About** ℹ️ - App information

### Drawer Menu
- Tap hamburger menu (☰) in top-left corner
- Or swipe from left edge of screen
- Access to all 4 main pages

## 📋 Task Requirements Met

✅ **Bottom Tab Navigation** - 4 tabs with icons and labels  
✅ **Drawer Navigation** - Left menu with hamburger button  
✅ **Four Main Pages** - Home, Profile, Settings, About  
✅ **Clear Headings** - Each page displays proper title  
✅ **Smooth UX** - Fluid transitions and interactions  
✅ **Responsive Design** - Works on all screen sizes  
✅ **Clean Code** - Well-structured, efficient codebase  
✅ **Bug-Free** - Thoroughly tested functionality  

## 🔧 Development

### Project Structure
```
src/
├── navigation/
│   └── AppNavigator.js    # Main navigation setup
├── screens/
│   ├── HomeScreen.js      # Flickr gallery
│   ├── ProfileScreen.js   # User profile
│   ├── SettingsScreen.js  # App settings
│   └── AboutScreen.js      # App info
├── services/
│   └── api.js             # Flickr API calls
└── storage/
    └── cache.js           # Image caching logic
```

### Key Components
- **AppNavigator** - Main navigation container
- **TabNavigator** - Bottom tab navigation
- **DrawerNavigator** - Left drawer navigation
- **CustomHeader** - Header with hamburger menu

## 🌟 Highlights

- **Dual Navigation** - Bottom tabs + drawer for maximum flexibility
- **Offline First** - Works without internet connection
- **Performance Optimized** - Smooth scrolling and fast loading
- **Modern UI** - Clean, professional design
- **Cross-Platform** - Works on Android and iOS

## 📱 Screenshots

*(Add screenshots of the app in action)*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Developed by **Chandrasinh Banoa**  
React Native Developer Internship Project

---

**Note**: This app demonstrates advanced React Native navigation patterns and best practices for mobile app development.
