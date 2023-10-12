import { Controller, Get, Inject } from '@nestjs/common';
import {
  CccModuleOptions,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} from './ccc.module-definition';

@Controller('ccc')
export class CccController {
  // 在Module内注入这个options
  @Inject(MODULE_OPTIONS_TOKEN)
  // private options: CccModuleOptions;
  // private options: typeof OPTIONS_TYPE; // 此时可以取出isGlobal
  private options: typeof ASYNC_OPTIONS_TYPE;

  @Get('')
  hello() {
    // console.log(this.options.useFactory());
    return 'dyk ' + JSON.stringify(this.options.useFactory());
  }
}
