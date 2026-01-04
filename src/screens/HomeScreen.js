import React, { useState, useEffect, useCallback } from 'react';
import { 
  View, 
  StyleSheet, 
  FlatList, 
  Image, 
  Dimensions, 
  Text,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { fetchImages, isOnline } from '../services/api';
import { getCachedImages, cacheImages, shouldUpdateCache } from '../storage/cache';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const IMAGE_SIZE = width * 0.9;

const AnimatedImage = Animated.createAnimatedComponent(Image);

const HomeScreen = () => {
  const [images, setImages] = useState([]);
  const [isConnected, setIsConnected] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // Load data on initial mount
  useEffect(() => {
    const initialize = async () => {
      await checkConnectivity();
      await loadCachedImages(); // Load cache first for instant display
      if (isConnected) {
        await loadImages(); // Then try to update from network
      }
      setIsLoading(false);
    };
    
    initialize();
    
    // Set up connectivity listener
    const interval = setInterval(checkConnectivity, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const checkConnectivity = async () => {
    const online = await isOnline();
    setIsConnected(online);
    return online;
  };

  const loadCachedImages = async () => {
    try {
      const { images: cachedImages, timestamp } = await getCachedImages();
      if (cachedImages && cachedImages.length > 0) {
        setImages(cachedImages);
        setLastUpdated(timestamp);
        return true;
      }
      return false;
    } catch (error) {
      console.log('Error loading cached images:', error);
      return false;
    }
  };

  const loadImages = async (forceUpdate = false) => {
    if (!isConnected && !forceUpdate) return;
    
    try {
      setRefreshing(true);
      const newImages = await fetchImages();
      
      if (newImages && newImages.length > 0) {
        const shouldUpdate = forceUpdate || await shouldUpdateCache(newImages);
        
        if (shouldUpdate) {
          const timestamp = await cacheImages(newImages);
          setImages(newImages);
          setLastUpdated(timestamp);
        } else if (images.length === 0) {
          setImages(newImages);
        }
      } else if (images.length === 0) {
        await loadCachedImages();
      }
    } catch (error) {
      console.log('Error loading images:', error);
      if (images.length === 0) {
        await loadCachedImages();
      }
    } finally {
      setRefreshing(false);
    }
  };
  
  const onRefresh = async () => {
    const isOnline = await checkConnectivity();
    if (isOnline) {
      await loadImages(true);
    } else {
      // Just show a brief loading indicator even in offline
      setRefreshing(true);
      setTimeout(() => setRefreshing(false), 1000);
    }
  };

  const renderItem = ({ item, index }) => (
    <Animated.View 
      style={styles.imageContainer}
      entering={FadeIn.delay(index * 100)}
      exiting={FadeOut}
    >
      <AnimatedImage 
        source={{ uri: item }} 
        style={styles.image}
        resizeMode="cover"
        sharedTransitionTag={`image-${index}`}
      />
    </Animated.View>
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      {!isConnected && (
        <View style={styles.offlineContainer}>
          <MaterialIcons name="signal-wifi-off" size={18} color="#fff" />
          <Text style={styles.offlineText}>You are currently offline</Text>
        </View>
      )}
      {lastUpdated && (
        <Text style={styles.lastUpdated}>
          Last updated: {new Date(lastUpdated).toLocaleTimeString()}
        </Text>
      )}
    </View>
  );

  if (isLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => `image-${index}`}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#2196F3']}
            tintColor="#2196F3"
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialIcons name="image-not-supported" size={50} color="#ccc" />
            <Text style={styles.emptyText}>
              {isConnected ? 'No images available' : 'No cached images available'}
            </Text>
            <Text style={styles.emptySubText}>
              {isConnected ? 'Pull to refresh' : 'Connect to the internet to load images'}
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    padding: 10,
  },
  offlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff6b6b',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  offlineText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
  },
  lastUpdated: {
    fontSize: 12,
    color: '#888',
    textAlign: 'right',
    marginBottom: 10,
  },
  list: {
    padding: 10,
    paddingTop: 0,
  },
  imageContainer: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: IMAGE_SIZE,
    backgroundColor: '#f0f0f0',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
  emptySubText: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default HomeScreen;
