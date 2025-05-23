// Initialize the app
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Update status message
const statusElement = document.getElementById('status');
if (statusElement) {
  const user = tg.initDataUnsafe.user;
  if (user) {
    statusElement.textContent = `Welcome, ${user.first_name}!`;
  } else {
    statusElement.textContent = 'Welcome to Telegram Mini App!';
  }
}

// Add a main button
tg.MainButton.setText('Close App');
tg.MainButton.onClick(() => {
  tg.close();
});
tg.MainButton.show(); 