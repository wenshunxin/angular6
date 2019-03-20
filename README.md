## project
----

### 开发环境

>- Angular CLI 6.0.8
>- Node: 8.9.3
>- ng-zorro 1.1.1 版本
>- 使用最新版vsCode或者webstorm
>- 使用`platform-web-server`搭建[mock](https://gitee.com/majiahang/platform-web-server)服务器(如果不需要可以跳过)

### 安装方法

>- 全局安装依赖 `@angular/cli`: npm i -g @angular/cli(避免使用cnpm)
>- 安装[git](https://git-scm.com/)
>- 使用`git`下载项目([git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000))
>- 进入项目安装依赖 `npm i` (这时候可以打包测试一下,如果正常,安装完成)

### 项目启动

>- 命令行下`ng serve`,默认[访问地址](http://localhost:4200/):`http://localhost:4200/`

### 项目打包

>- `npm run aot` 项目下新生成的`dist`文件内

### 命名规范

>- 指令:[kylinAcl] 驼峰写法,必须以kylin开头
>- 组件:'kylin-open-layer' 必须以kylin开头
>- 管道:'kylinPipe' 驼峰写法,必须以kylin开头
>- 更多规范请参考`angular`[风格指南](https://angular.cn/guide/styleguide)
>- 参照编辑器`ts-lint`提示书写

### 开发规范

>- 新增模块应该使用惰性加载的方式,引入sharedModule获取各种开发包依赖
>- 新增`管道`,`组件`,`指令` 放入`shared`模块对应目录下
>- shared模块下新增模块不建议使用独立模块,防止因为依赖出现奇怪的问题
>- 新增全局service 放在core模块下
>- 惰性加载模块内组件的`service`如果是单例服务,那么可以声明在使用此服务的组件内
>- 除非无法确定对象的数据结构,不然不应该使用`any`类型,应当使用自定义类来描述对象结构,方便查错和开发


### 如何快速新建一个惰性加载模块

>- ng g m ModuleName --routing --flat  可以利用cli快速创建一个带路由的模块结构  (@params --flat 意思是指在当前命令行路径下新建ModuleName.module.ts文件,如果没有此参数,那么cli会新建一个ModuleName的文件夹并且把新建文件放入此文件夹)

### 打包和测试

>- npm run aot 即可使用树摇优化打包项目
>- 注意: 如果有任何关于@NgModule内imports数组内容的变动,那么需要从新 ng server才能查看到最新改动! 切记!
>- 提交代码或者合并代码之前请使用`npm run aot`打包一下,确保代码没有错误,之后运行`ng lint`指令检查语法是否符合项目规范

### 页面设计规范

>- 所有按钮的事件都应该防止用户可以连续点击,最简单的解决方案就是给按钮添加[loading](https://ng.ant.design/components/button/zh)状态.

### core 模块里面的公共服务

>- 路由跳转 routing-jump.service.ts
>- HTTP服务 http.service.ts
>- 路由守卫 auth-router.service.ts
>- 浏览器缓存 storage.service.ts

### shared 模块内管道

>- date-pipe.ts 是时间格式处理管道 把时间戳处理成项目需求的`YYYY-MM-DD HH:mm:ss`的时间格式

### lodash如何引用

>-  import * as _ from 'lodash';

### 参考资料

>- [angular官网](https://angular.cn/docs)
>- [angular学习资料](https://segmentfault.com/a/1190000008754631)
>- [ng-zorro官网](https://ng.ant.design/docs/introduce/zh)

### angular/cli 指令速查表

>- 点击属性名称可以查看当前属性支持的全部参数 : 请务必完整浏览一遍,可以大幅提升开发效率

### 浏览器缓存

>- 登陆成功以后后端返回的信息全部缓存在localStorage `SiderData`,获取方法直接使用core模块内的`sider-data.service.ts`内的方法

<table>
<thead>
<tr>
<th>Scaffold</th>
<th>Usage</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://github.com/angular/angular-cli/wiki/generate-component" rel="nofollow">Component</a></td>
<td><code>ng g component my-new-component</code></td>
</tr>
<tr>
<td><a href="https://github.com/angular/angular-cli/wiki/generate-directive" rel="nofollow">Directive</a></td>
<td><code>ng g directive my-new-directive</code></td>
</tr>
<tr>
<td><a href="https://github.com/angular/angular-cli/wiki/generate-pipe" rel="nofollow">Pipe</a></td>
<td><code>ng g pipe my-new-pipe</code></td>
</tr>
<tr>
<td><a href="https://github.com/angular/angular-cli/wiki/generate-service" rel="nofollow">Service</a></td>
<td><code>ng g service my-new-service</code></td>
</tr>
<tr>
<td><a href="https://github.com/angular/angular-cli/wiki/generate-class" rel="nofollow">Class</a></td>
<td><code>ng g class my-new-class</code></td>
</tr>
<tr>
<td><a href="https://github.com/angular/angular-cli/wiki/generate-guard" rel="nofollow">Guard</a></td>
<td><code>ng g guard my-new-guard</code></td>
</tr>
<tr>
<td><a href="https://github.com/angular/angular-cli/wiki/generate-interface" rel="nofollow">Interface</a></td>
<td><code>ng g interface my-new-interface</code></td>
</tr>
<tr>
<td><a href="https://github.com/angular/angular-cli/wiki/generate-enum" rel="nofollow">Enum</a></td>
<td><code>ng g enum my-new-enum</code></td>
</tr>
<tr>
<td><a href="https://github.com/angular/angular-cli/wiki/generate-module" rel="nofollow">Module</a></td>
<td><code>ng g module my-module</code></td>
</tr>
</tbody>
</table>

### angular自带pipe

<table>
<thead>
<tr>
  <th>管道</th>
  <th>功能</th>
</tr>
</thead>
<tbody><tr>
  <td>DatePipe</td>
  <td>日期管道，格式化日期</td>
</tr>
<tr>
  <td>JsonPipe</td>
  <td>将输入数据对象经过JSON.stringify()方法转换后输出对象的字符串</td>
</tr>
<tr>
  <td>UpperCasePipe</td>
  <td>将文本所有小写字母转换成大写字母</td>
</tr>
<tr>
  <td>LowerCasePipe</td>
  <td>将文本所有大写字母转换成小写字母</td>
</tr>
<tr>
  <td>DecimalPipe</td>
  <td>将数值按特定的格式显示文本</td>
</tr>
<tr>
  <td>CurrentcyPipe</td>
  <td>将数值进行货币格式化处理</td>
</tr>
<tr>
  <td>SlicePipe</td>
  <td>将数组或者字符串裁剪成新子集</td>
</tr>
<tr>
  <td>PercentPipe</td>
  <td>将数值转百分比格式</td>
</tr>
</tbody></table>
