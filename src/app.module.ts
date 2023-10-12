import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';

@Module({
  // 引入动态模块（通过register静态方法）
  // 我们还可以把参数传入的options对象作为一个新的provider
  imports: [
    BbbModule.register({
      aaa: 1,
      bbb: 2,
    }),
    CccModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
