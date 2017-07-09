## vue 初始化模板
    ├── .babelrc   //babel配置
    ├── .editorconfig
    ├── .gitignore
    ├── .postcssrc.js
    ├── README.md
    ├── build    //webpack配置目录，一般不做修改
    │   ├── build.js
    │   ├── check-versions.js
    │   ├── dev-client.js
    │   ├── dev-server.js
    │   ├── utils.js
    │   ├── vue-loader.conf.js
    │   ├── webpack.base.conf.js
    │   ├── webpack.dev.conf.js
    │   └── webpack.prod.conf.js
    ├── config  //自定义配置目录
    │   ├── dev.env.js
    │   ├── index.js  //build.assetsPublicPath 为cdn地址，dev.proxyTable用于测试时代理，解决跨域问题
    │   └── prod.env.js
    ├── dist    //build的结果
    ├── index.ejs    //首页模版文件
    ├── package.json
    ├── src    //前端目录
    │   ├── App.vue  
    │   ├── common   //共用的一些字体 css文件 js文件 ....
    │   ├── api   //共用的ajax组件
    │   ├── assets   //静态文件目录
    │   │   └── logo.png
    │   ├── components    //vue组件目录
    │   │   └── Hello.vue
    │   ├── main.js    //入口文件
    │   ├── pages    //vue页面目录 暂时木有 多页面才需要
    │   │   └── login.vue
    │   ├── router    //vue-router定义前端路由
    │   │   └── index.js
    │   └── store   //vuex状态管理目录 暂时木有
    │       ├── index.js
    │       └── modules
    │           └── user.js
    └── static    //默认静态目录，这个目录下的文件会被原封不动的拷贝到dist/static下
