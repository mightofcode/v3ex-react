## V3EX: 仿 V2EX 论坛

测试地址： [https://v3ex.mocyx.com/](https://v3ex.mocyx.com)
技术栈：
Nodejs、React、Nextjs、Mongodb、koa

功能列表：
注册登录
邮件验证
发布主题（支持 Markdown）、发布回复
主题支持 tab、category
用户首页
个人信息修改、密码修改
今日热议主题
添加附言
## 安装步骤

下面示例 debian10 上的安装过程
假设服务端 ip 是 1.1.1.1

### 1，部署 mongodb 服务

使用 deps 目录下的 mongodb-org-server_4.4.5_amd64.deb 安装 mongodb 服务端：

```
dpkg -i mongodb-org-server_4.4.5_amd64.deb
```

使用 deps 目录下的 mongosh-0.11.0-linux.tgz 安装 mongo shell：

```
tar -xvf mongosh-0.11.0-linux.tgz
```

修改/etc/profile

```
export PATH=/opt/mongosh/bin:$PATH
```

启动 mongodb

```
mongod --port 20000 --dbpath /var/lib/mongodb --bind_ip 0.0.0.0
```

使用 mongosh 注册 mongodb 用户

```
mongosh

use admin;

db.createUser(  {
    user: "root",
    pwd: "password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)
```

重新启动 mongodb

```
mongod --port 20000 --dbpath /var/lib/mongodb --auth --bind_ip 0.0.0.0
```

使用 nosqlbooster 确认 mongodb 配置成功 https://nosqlbooster.com/

### 2，部署 V3EX-server

server 是一个 koa 服务，默认运行在 4100 端口

签出代码

```
git clone https://github.com/mightofcode/v3ex-react.git
```

配置 server, 添加 modules/server/.env 文件

```
MONGODB_URI=mongodb://root:password@127.0.0.1:20000/v2ex?authSource=admin   # mongodb链接
JWT_SECRET_KEY=12345678
ALIBABA_MAIL_KEY=XXX      # 阿里邮件服务key
ALIBABA_MAIL_SECRET=XXX   # 阿里邮件服务secret
ALIBABA_MAIL_NAME=XXX     # 阿里邮件服务
SITE_URL=http://1.1.1.1:4000  # 网站地址
SITE_NAME=V3EX               #网站名
```

要发送邮件需要申请阿里云邮件服务：https://help.aliyun.com/product/29412.html  
如果没有配置阿里云邮件服务，可以在后台日志里面查看验证码

启动 server

```
yarn start
```

确保 mongodb 能正常连接

数据初始化：

```
yarn initMeta
```

### 3，部署 V3EX-next

next 是一个 nextjs 服务，默认运行在 4000 端口

配置 next, 添加 modules/next/.env 文件

```
API_URL=http://1.1.1.1:4100/        #指向server服务
NEXT_PUBLIC_API_END_POINT=http://1.1.1.1:4000/   #指向next服务
NEXT_PUBLIC_SITE_NAME=V3EX    # 网站名
```

开发模式启动：

```
npm run dev
```

访问 http://1.1.1.1:4000/ , 验证服务启动成功

生产模式启动：

```
npm run build   # 编译
npm run start   # 生产模式运行
```
