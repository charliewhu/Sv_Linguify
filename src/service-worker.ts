import { dev } from '$app/environment';

// only run msw in development
if (dev && 'serviceWorker' in navigator) {
  addEventListener('load', function () {
    navigator.serviceWorker.register('mocks/server.ts');
  });
}