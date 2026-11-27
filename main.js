const { app, BrowserWindow, Menu, shell, ipcMain } = require('electron');
const path = require('node:path');
let mainWindow;
Menu.setApplicationMenu(null);
ipcMain.handle('glasswave:window', (event, action) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (!win) return;
  if (action === 'minimize') win.minimize();
  if (action === 'close') win.close();
});
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1160, height: 780, minWidth: 360, minHeight: 600,
    title: 'Glasswave', backgroundColor: '#111113', frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true, nodeIntegration: false, sandbox: true,
      preload: path.join(__dirname, 'preload.js', 'preload.js')
    }
  });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.type !== 'keyDown') return;
    const key = input.key.toLowerCase();
    if ((input.control || input.meta) && key === 'm') {
      event.preventDefault(); mainWindow.minimize();
    }
    if ((input.control || input.meta) && input.shift && key === 'w') {
      event.preventDefault(); mainWindow.close();
    }
  });
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://')) shell.openExternal(url);
    return { action: 'deny' };
  });
  mainWindow.on('closed', () => { mainWindow = null; });
}
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
