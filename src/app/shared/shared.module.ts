import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'; // 由此模块给其他模块提供common服务
import {FormsModule} from '@angular/forms';  // 表单基础依赖
import {ReactiveFormsModule} from '@angular/forms'; // 响应式表单依赖
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';


// 注册ng-zorro语言包
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

//引入跳转路��;
import { RoutingJumpService } from "../core/service/routing-jump.service";

// 管道
// 指令

// 组件

// 常量



@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [],
  providers: [RoutingJumpService,{ provide: NZ_I18N, useValue: zh_CN }],
  exports: [ReactiveFormsModule, CommonModule, FormsModule, NgZorroAntdModule]
})
export class SharedModule {
}
