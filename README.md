## 打开调试工具栏
Control + Shift + I

## 创建项目
``` cmd
mkdir my-electron-app && cd my-electron-app
npm init
```

## 下载依赖
``` cmd
npm install electron -D
```

## 编写相关代码，如本示例

## 下载打包工具
``` cmd
npm install electron-builder -D
```

## 添加相关命令
``` javascript
"scripts": {
    "start": "electron .",
    "build": "electron-builder"
}
```

## 打包配置项
``` javascript
"build": {
    "appId": "xxxholic",
    "productName": "xxxholic",
    "directories": {
      "output": "release"
    },
    "win": {
      "artifactName": "${productName}_setup_${version}.${ext}",
      "icon": "logo.ico",
      "target": [
        "target": "nsis",
        "arch": [
          "x64"
        ]
      ]
    },
    "nsis": {
      "oneClick": false,
      "perMachine": true,
      "allowToChangeInstallationDirectory": true
    }
  }
```

## 完整配置文件
``` javascript
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder"
  },
  "build": {
    "appId": "xxxholic",
    "productName": "xxxholic",
    "directories": {
      "output": "release"
    },
    "win": {
      "artifactName": "${productName}_setup_${version}.${ext}",
      "icon": "logo.ico",
      "target": [
        "target": "nsis",
        "arch": [
          "x64"
        ]
      ]
    },
    "nsis": {
      "oneClick": false,
      "perMachine": true,
      "allowToChangeInstallationDirectory": true
    }
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "electron": "^32.0.1",
    "electron-builder": "^24.13.3"
  }
}
```

## Npm 配置文件中加入下载镜像，否则可能会下载很慢 C:\\User\\{name}\\.npmrc
electron_mirror=https://registry.npmmirror.com/-/binary/electron/
electron_builder_binaries_mirror=https://registry.npmmirror.com/-/binary/electron-builder-binaries/