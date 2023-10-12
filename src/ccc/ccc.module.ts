import { Module } from '@nestjs/common';
import { CccController } from './ccc.controller';
import { ConfigurableModuleClass } from './ccc.module-definition';

@Module({
  controllers: [CccController],
})

// CccModule继承ConfigurableModuleClass后 此时CccModule就已经有了register和registerAsync方法了
export class CccModule extends ConfigurableModuleClass {}
