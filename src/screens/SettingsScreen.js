import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoDownload, setAutoDownload] = useState(false);
  const [location, setLocation] = useState(true);

  const settingsSections = [
    {
      title: 'Preferences',
      items: [
        {
          icon: 'notifications-outline',
          title: 'Push Notifications',
          value: notifications,
          onToggle: setNotifications,
        },
        {
          icon: 'moon-outline',
          title: 'Dark Mode',
          value: darkMode,
          onToggle: setDarkMode,
        },
        {
          icon: 'download-outline',
          title: 'Auto Download Images',
          value: autoDownload,
          onToggle: setAutoDownload,
        },
        {
          icon: 'location-outline',
          title: 'Location Services',
          value: location,
          onToggle: setLocation,
        },
      ],
    },
    {
      title: 'Storage',
      items: [
        { icon: 'folder-outline', title: 'Cache Size', subtitle: '245 MB' },
        { icon: 'trash-outline', title: 'Clear Cache', action: 'clear' },
      ],
    },
    {
      title: 'About',
      items: [
        { icon: 'information-circle-outline', title: 'App Version', subtitle: '1.0.0' },
        { icon: 'document-text-outline', title: 'Terms of Service' },
        { icon: 'shield-checkmark-outline', title: 'Privacy Policy' },
      ],
    },
  ];

  const handleAction = (action) => {
    if (action === 'clear') {
      // Handle clear cache logic
      console.log('Clear cache');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.settingItem}>
                <View style={styles.settingLeft}>
                  <Ionicons name={item.icon} size={24} color="#666" />
                  <View style={styles.settingText}>
                    <Text style={styles.settingTitle}>{item.title}</Text>
                    {item.subtitle && (
                      <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
                    )}
                  </View>
                </View>
                {item.onToggle ? (
                  <Switch
                    value={item.value}
                    onValueChange={item.onToggle}
                    trackColor={{ false: '#ccc', true: '#007AFF' }}
                    thumbColor={item.value ? '#ffffff' : '#ffffff'}
                  />
                ) : item.action ? (
                  <TouchableOpacity onPress={() => handleAction(item.action)}>
                    <Ionicons name="chevron-forward" size={20} color="#ccc" />
                  </TouchableOpacity>
                ) : (
                  <Ionicons name="chevron-forward" size={20} color="#ccc" />
                )}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    marginLeft: 15,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: '#333',
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default SettingsScreen;
