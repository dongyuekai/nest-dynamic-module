import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface CccModuleOptions {
  aaa: number;
  bbb: string;
}

// ConfigurableModuleClass里就带了register、registerAsync方法
// 返回的ConfigurableModuleClass、MODULE_OPTIONS_TOKEN分别是生成的class、options对象的token
export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<CccModuleOptions>().build();
