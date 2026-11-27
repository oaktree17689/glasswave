const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('glasswaveWindow', {
  minimize: () => ipcRenderer.invoke('glasswave:window', 'minimize'),
  close: () => ipcRenderer.invoke('glasswave:window', 'close')
});
