
type ScriptLoadCallback = () => void;
type ScriptErrorCallback = (error: Error) => void;

interface ScriptOptions {
  async?: boolean;
  defer?: boolean;
  id?: string;
  onLoad?: ScriptLoadCallback;
  onError?: ScriptErrorCallback;
}

const loadedScripts = new Set<string>();

export const loadScript = (
  src: string, 
  options: ScriptOptions = { async: true, defer: true }
): Promise<HTMLScriptElement> => {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (loadedScripts.has(src)) {
      console.log(`Script already loaded: ${src}`);
      resolve(document.querySelector(`script[src="${src}"]`) as HTMLScriptElement);
      return;
    }
    
    // Create script element
    const script = document.createElement('script');
    script.src = src;
    
    // Set attributes
    if (options.async !== false) script.async = true;
    if (options.defer !== false) script.defer = true;
    if (options.id) script.id = options.id;
    
    // Set up event handlers
    script.onload = () => {
      console.log(`Script loaded successfully: ${src}`);
      loadedScripts.add(src);
      if (options.onLoad) options.onLoad();
      resolve(script);
    };
    
    script.onerror = (event) => {
      const error = new Error(`Failed to load script: ${src}`);
      console.error(error);
      if (options.onError) options.onError(error);
      reject(error);
    };
    
    // Add to document
    document.head.appendChild(script);
  });
};

export const preconnect = (url: string): void => {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = url;
  document.head.appendChild(link);
};

export const preload = (url: string, as: 'script' | 'style' | 'image' | 'font' | 'fetch'): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = url;
  link.as = as;
  document.head.appendChild(link);
};
