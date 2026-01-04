import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AboutScreen = () => {
  const appInfo = {
    name: 'Flickr Image Gallery',
    version: '1.0.0',
    description: 'A beautiful React Native app for browsing Flickr images with offline support and smooth navigation.',
    developer: 'Chandrasinh Banoa',
    year: '2024',
  };

  const features = [
    'Browse recent Flickr images',
    'Offline image viewing',
    'Pull-to-refresh functionality',
    'Bottom Tab Navigation',
    'Drawer Navigation',
    'Image caching',
    'Network connectivity detection',
  ];

  const contactInfo = [
    {
      icon: 'mail-outline',
      title: 'Email',
      value: 'developer@example.com',
      action: () => Linking.openURL('mailto:developer@example.com'),
    },
    {
      icon: 'globe-outline',
      title: 'Website',
      value: 'www.example.com',
      action: () => Linking.openURL('https://www.example.com'),
    },
    {
      icon: 'logo-github',
      title: 'GitHub',
      value: 'github.com/Chandrasinh9',
      action: () => Linking.openURL('https://github.com/Chandrasinh9'),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {/* App Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="images" size={60} color="#007AFF" />
          </View>
          <Text style={styles.appName}>{appInfo.name}</Text>
          <Text style={styles.appVersion}>Version {appInfo.version}</Text>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>{appInfo.description}</Text>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          {contactInfo.map((contact, index) => (
            <TouchableOpacity key={index} style={styles.contactItem} onPress={contact.action}>
              <Ionicons name={contact.icon} size={24} color="#007AFF" />
              <View style={styles.contactText}>
                <Text style={styles.contactTitle}>{contact.title}</Text>
                <Text style={styles.contactValue}>{contact.value}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Developed with ❤️ by {appInfo.developer}
          </Text>
          <Text style={styles.footerText}>© {appInfo.year} All rights reserved</Text>
        </View>
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
  header: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  appVersion: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  contactText: {
    flex: 1,
    marginLeft: 15,
  },
  contactTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  contactValue: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default AboutScreen;
