const API_URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s';

export const fetchImages = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.photos.photo.map(photo => photo.url_s);
  } catch (error) {
    console.log('Error fetching images:', error);
    return [];
  }
};

export const isOnline = async () => {
  try {
    const response = await fetch('https://www.google.com', { 
      method: 'HEAD',
      cache: 'no-store'
    });
    return response.ok;
  } catch (error) {
    console.log('Network error:', error.message);
    return false;
  }
};
