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
    "appId": "com.xxxholic", //包名
    "productName": "xxxholic", //项目名称（安装文件前缀）
    "copyright": "xxxholic", //版权信息
    "directories": {
      "output": "release"  //打包目录
    },
    "nsis": {
      "oneClick": false, //是否一键安装
      "perMachine": true, //每台机器安装一次，而不是为每个用户安装
      "allowToChangeInstallationDirectory": true //是否允许修改安装位置
      "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
      "installerIcon": "icons/aaa.ico",// 安装图标
      "uninstallerIcon": "icons/bbb.ico",//卸载图标
      "installerHeaderIcon": "icons/aaa.ico", // 安装时头部图标
      "createDesktopShortcut": true, // 创建桌面图标
      "createStartMenuShortcut": true,// 创建开始菜单图标
      "shortcutName": "xxxx", // 图标名称
      "include": "build/script/installer.nsh", // 包含的自定义nsis脚本
    },
    "publish": [
      {
        "provider": "generic", // 服务器提供商 也可以是GitHub等等
        "url": "http://xxxxx/" // 服务器地址
      }
    ],
    "win": {
      "artifactName": "${productName}_setup_${version}.${ext}",
      "icon": "icons/logo.ico", //打包图标，大小至少256*256
      "target": [
        "target": "nsis",
        "arch": [
          "x64"
        ]
      ]
    },
    "dmg": {
      "contents": [
        {
          "x": 410,
          "y": 150,
          "type": "link",
          "path": "/Applications"
        },
        {
          "x": 130,
          "y": 150,
          "type": "file"
        }
      ]
    },
    "mac": {
      "icon": "icons/icon.icns"
    },
    "linux": {
      "icon": "icons/icon.ico"
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
    "appId": "com.xxxholic",
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

disturl=https://registry.npmmirror.com/-/binary/node/
sass_binary_site=https://registry.npmmirror.com/node-sass
phantomjs_cdnurl=https://registry.npmmirror.com/phantomjs
chromedriver_cdnurl=https://registry.npmmirror.com/-/binary/chromedriver/
operadriver_cdnurl=https://registry.npmmirror.com/-/binary/operadriver/

electron_mirror=https://registry.npmmirror.com/-/binary/electron/
electron_builder_binaries_mirror=https://registry.npmmirror.com/-/binary/electron-builder-binaries/


## 命令行参数说明
Commands(命令):
``` shell
  electron-builder build                    构建命名                      [default]
  electron-builder install-app-deps         下载app依赖
  electron-builder node-gyp-rebuild         重建自己的本机代码
  electron-builder create-self-signed-cert  为Windows应用程序创建自签名代码签名证书
  electron-builder start                    使用electronic-webpack在开发模式下运行应用程序(须臾要electron-webpack模块支持)
```

Building(构建参数):
``` shell
  --mac, -m, -o, --macos   Build for macOS,                              [array]
  --linux, -l              Build for Linux                               [array]
  --win, -w, --windows     Build for Windows                             [array]
  --x64                    Build for x64 (64位安装包)                     [boolean]
  --ia32                   Build for ia32(32位安装包)                     [boolean]
  --armv7l                 Build for armv7l                              [boolean]
  --arm64                  Build for arm64                               [boolean]
  --dir                    Build unpacked dir. Useful to test.           [boolean]
  --prepackaged, --pd      预打包应用程序的路径（以可分发的格式打包）
  --projectDir, --project  项目目录的路径。 默认为当前工作目录。
  --config, -c             配置文件路径。 默认为`electron-builder.yml`（或`js`，或`js5`)
```

Publishing(发布):
``` shell
  --publish, -p  发布到GitHub Releases [choices: "onTag", "onTagOrDraft", "always", "never", undefined]
```

Deprecated(废弃):
``` shell
  --draft       请改为在GitHub发布选项中设置releaseType                 [boolean]
  --prerelease  请改为在GitHub发布选项中设置releaseType                 [boolean]
  --platform    目标平台 (请更改为选项 --mac, --win or --linux)
           [choices: "mac", "win", "linux", "darwin", "win32", "all", undefined]
  --arch        目标arch (请更改为选项 --x64 or --ia32)
                   [choices: "ia32", "x64", "armv7l", "arm64", "all", undefined]
```

Other(其他):
``` shell
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

Examples(例子):
``` shell
  electron-builder -mwl                        为macOS，Windows和Linux构建（同时构建）
  electron-builder --linux deb tar.xz          为Linux构建deb和tar.xz
  electron-builder -c.extraMetadata.foo=bar    将package.js属性`foo`设置为`bar`
  electron-builder --config.nsis.unicode=false 为NSIS配置unicode选项
```

TargetConfiguration(构建目标配置):
``` shell
target:  String - 目标名称，例如snap.
arch “x64” | “ia32” | “armv7l” | “arm64”> | “x64” | “ia32” | “armv7l” | “arm64”  -arch支持列表
```