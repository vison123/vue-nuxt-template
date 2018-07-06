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

### 第一步 Nginx配置

* 常规Nginx配置

```
http {
    ....  # 省略其他配置
   
    server {
        listen 80;
        server_name  *.sosout.com;
        
        if ($host ~* "^(.*?)\.sosout\.com$") {
            set $domain $1;
        }

        location / {
            if ($domain ~* "next") {
                root /mnt/html/next;
            }
            if ($domain ~* "nuxt") {
                root /mnt/html/nuxt;
            }
            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   X-Forwarded-Proto  $scheme;
        }
        access_log  /mnt/logs/nginx/access.log  main;
    }

    #tcp_nopush     on;

    include /etc/nginx/conf.d/*.conf;
}
```

* Nginx反向代理

```
upstream nodenuxt {
    server 127.0.0.1:3002; #nuxt项目 监听端口
    keepalive 64;
}

server {
    listen 80;
    server_name nuxt.sosout.com;
    location / {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;  
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_cache_bypass $http_upgrade;
        proxy_pass http://nodenuxt; #反向代理
    }
}
```

### 第二步，打包，生成.nuxt/ 文件夹

```
 $ npm run build
```

### 第三步，选择要部署的文件

可以选择将文件从本机复制到服务器运行，如果感觉太麻烦，直接克隆全部代码放到服务器运行一样的。
如果选择拷贝打包后文件到服务器运行，只需要下面3个目录：

  * .nuxt/ 文件夹
  * package.json 文件
  * nuxt.config.js 文件(如果你配置proxy等，则需要上传这个文件，建议把它传上去)
  
### 第四步，启动你的nuxt

```
 $ npm start
```

### 参考资料

* [
next.js、nuxt.js等服务端渲染框架构建的项目部署到服务器，并用PM2守护程序
](https://segmentfault.com/a/1190000012774650)

## 线上网站

* [乐器之乡--电子商务网站](www.yueqizhixiang.com)
