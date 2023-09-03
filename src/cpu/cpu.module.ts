import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import {PowerModule} from "../power/power.module";

@Module({
  imports:[PowerModule], //allows to use power module in this module
  providers: [CpuService],
  exports: [CpuService], //EXPORT to Computer module
})
export class CpuModule {}
