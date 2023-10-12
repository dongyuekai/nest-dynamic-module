import { DynamicModule, Module } from '@nestjs/common';
import { BbbService } from './bbb.service';
import { BbbController } from './bbb.controller';

@Module({
  controllers: [BbbController],
  providers: [BbbService],
})
export class BbbModule {
  // 我们给BbbModule加一个register的静态方法，返回模块定义的对象
  // 和在装饰器里定义的时候的区别 只是多了一个module属性
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: BbbModule,
      controllers: [BbbController],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        BbbService,
      ],
      exports: [],
    };
  }
}

// 这里的register方法理论上叫啥都行 但nest约定了3种方法名
// 说明如下：
// register: 用一次模块传一次配置 比如这次调用是BbbModule.register({ aaa:1 }) 下一次就是BbbModule.register({ aaa:2 })了
// forRoot: 配置一次模块用多次 比如 XxxModule.forRoot({})一次 之后一直用这个module 一般在AppModule里import
// forFeature: 用了forRoot固定了整体模块 用于局部的时候 可能需要再传入一些配置 比如用forRoot指定了数据库链接信息 再用forFeature指定某个模块访问哪个数据库和表
