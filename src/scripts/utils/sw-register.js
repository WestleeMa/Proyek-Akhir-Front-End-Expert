const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported, try changing your browser.');
    return;
  }

  try {
    const swReg = await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker registered', swReg);
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
