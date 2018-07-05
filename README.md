# vue-nuxt-template

> Nuxt.js project

## Build Script

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## 打包部署

### 第一步，打包，生成.nuxt/ 文件夹

```
 $ npm run build
```

### 第二步，选择要部署的文件

可以选择将文件从本机复制到服务器运行，如果感觉太麻烦，直接克隆全部代码放到服务器运行一样的。
如果选择拷贝打包后文件到服务器运行，只需要下面3个目录：

  * .nuxt/ 文件夹
  * package.json 文件
  * nuxt.config.js 文件(如果你配置proxy等，则需要上传这个文件，建议把它传上去)
  
### 第三步，启动你的nuxt

```
 $ npm start
```

## 线上网站

* [乐器之乡--电子商务网站](www.yueqizhixiang.com)
