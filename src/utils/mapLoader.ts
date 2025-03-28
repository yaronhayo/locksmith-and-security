
/**
 * Utility to track Maps API loading state and manage initialization
 */
export const MapLoader = {
  isLoaded: false,
  isLoading: false,
  callbacks: [] as Function[],

  /**
   * Add a callback to be executed when Maps API is loaded
   */
  onLoad(callback: Function) {
    if (this.isLoaded) {
      callback();
    } else {
      this.callbacks.push(callback);
    }
  },

  /**
   * Called when Maps API is initialized
   */
  initialize() {
    this.isLoaded = true;
    this.isLoading = false;
    
    // Execute all callbacks
    this.callbacks.forEach(callback => {
      try {
        callback();
      } catch (error) {
        console.error('Error in Maps API callback:', error);
      }
    });
    
    // Clear callbacks
    this.callbacks = [];
  }
};

// Set up global initialization function
window.initMap = () => {
  console.log('Maps API initialized via global callback');
  MapLoader.initialize();
  
  // Dispatch event for components that might be listening
  document.dispatchEvent(new Event('google-maps-loaded'));
};
