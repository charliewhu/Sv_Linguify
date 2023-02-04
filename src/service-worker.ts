import { dev } from '$app/environment';

if (dev && 'serviceWorker' in navigator) {
  addEventListener('load', function () {
    navigator.serviceWorker.register('mocks/server.ts');
  });
}