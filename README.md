## PrimeNg使用指南

### 介绍

本文介绍如何整合使用 `Angular 4 + primeNg`作为前端框架开发。`Angular 4`是Google推出的一整套前端框架，包括路由、网络请求等等，使用`typescript`	语言开发。`PrimeNg`是一套使用Angular制作的组件，类似于`Easy UI`相对于`jQuery`框架。

### 正题

首先，确认安装好`nodejs`环境，本文是在Win10下安装的，下载页面是: `https://nodejs.org/zh-cn/download/`, 我直接下载免安装版本[`node-v6.11.3-win-x64.zip`]，直接解压，配置解压目录到PATH环境变量即可。

1. 安装好`nodejs`之后，可以在命令行cmd下执行如下命令安装`Angular 4`：

```
npm install -g @angular/cli
```

2. 使用` @angular/cli`控制台工具创建示例应用：

```
ng new demo_project
```
这会需要一定的时间下载相应的依赖包，需要耐心等一会


3. 安装`PrimeNG和font-awesome`
```
npm install primeng font-awesome --save
```
为了`Angular4`可以正常工作，还需要安装如下包，并修改`AppModule.ts`
```
npm install @angular/animations --save
```
修改代码

```
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        //...
    ],
    //...
})
export class YourAppModule { }

```
4. 修改`.angular-cli.json` 文件，添加额外的css文件

```
...省略...
      "styles": [
        "styles.css",
        "../node_modules/primeng/resources/themes/omega/theme.css",
        "../node_modules/font-awesome/css/font-awesome.min.css",
        "../node_modules/primeng/resources/primeng.min.css"
      ],

```

5. 开始运行, 进入工程目录下，运行
```
cd demo_project
npm run start
```
6. 打开 浏览器，访问： `http://localhost:4200/`



# NgLearn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
