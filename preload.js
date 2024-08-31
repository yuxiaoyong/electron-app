const { ipcRenderer, contextBridge } = require("electron")

window.addEventListener('DOMContentLoaded', () => {
    // const replaceText = (selector, text) => {
    //     const element = document.getElementById(selector)
    //     if (element) element.innerText = text
    // }

    // for (const dependency of ['chrome', 'node', 'electron']) {
    //     replaceText(`${dependency}-version`, process.versions[dependency])
    // }

})

contextBridge.exposeInMainWorld('API', {
    version: '1.0.0',
    writeFile(text) {
        ipcRenderer.send('write-file', text)
    },

    readFile() {
        return ipcRenderer.invoke('read-file')
    }
})

