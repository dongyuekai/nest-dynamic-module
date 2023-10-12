import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface CccModuleOptions {
  aaa: number;
  bbb: string;
}

// ConfigurableModuleClass里就带了register、registerAsync方法
// 返回的ConfigurableModuleClass、MODULE_OPTIONS_TOKEN分别是生成的class、options对象的token
export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<CccModuleOptions>()
  // .setClassMethodName('forFeature') // 为了支持forRoot、forFeature这样的方法
  // .setClassMethodName('register')  // 支持register这样的方法  默认应该是支持register
  .setExtras({ isGlobal: true }, (defination, extras) => ({
    ...defination,
    global: extras.isGlobal,
  }))
  .build();
