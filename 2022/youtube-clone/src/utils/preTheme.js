(() => {
  const storageKey = 'youtube-clone themeType';
  const themeType = localStorage.getItem(storageKey);
  if (!themeType) {
    localStorage.setItem(storageKey, window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light');
  }
})();
