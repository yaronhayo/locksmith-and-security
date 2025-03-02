
// Debug script that will load before React to help diagnose white screen issues
console.log('Debug script loaded');
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');
  const rootElement = document.getElementById('root');
  console.log('Root element exists:', !!rootElement);
});

window.addEventListener('load', () => {
  console.log('Window fully loaded');
});

window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
});
