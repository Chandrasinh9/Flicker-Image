import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_KEY = 'flickr_images_cache';
const CACHE_TIMESTAMP_KEY = 'flickr_cache_timestamp';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Get cached images with timestamp
export const getCachedImages = async () => {
  try {
    const [cachedData, timestamp] = await Promise.all([
      AsyncStorage.getItem(CACHE_KEY),
      AsyncStorage.getItem(CACHE_TIMESTAMP_KEY)
    ]);
    
    if (!cachedData) return { images: [], timestamp: null };
    
    return {
      images: JSON.parse(cachedData),
      timestamp: timestamp ? parseInt(timestamp, 10) : null,
      isExpired: timestamp ? (Date.now() - parseInt(timestamp, 10)) > CACHE_EXPIRY : true
    };
  } catch (error) {
    console.log('Error getting cached images:', error);
    return { images: [], timestamp: null, isExpired: true };
  }
};

// Cache images with current timestamp
export const cacheImages = async (images) => {
  try {
    const now = Date.now();
    await Promise.all([
      AsyncStorage.setItem(CACHE_KEY, JSON.stringify(images)),
      AsyncStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString())
    ]);
    return now;
  } catch (error) {
    console.log('Error caching images:', error);
    return null;
  }
};

// Check if cache needs update
export const shouldUpdateCache = async (newImages) => {
  try {
    const { images: cachedImages, isExpired } = await getCachedImages();
    
    // If cache is empty or expired, we should update
    if (!cachedImages.length || isExpired) return true;
    
    // If new data is different from cached data
    return JSON.stringify(cachedImages) !== JSON.stringify(newImages);
  } catch (error) {
    console.log('Error checking cache update:', error);
    return true; // If there's an error, force update
  }
};
