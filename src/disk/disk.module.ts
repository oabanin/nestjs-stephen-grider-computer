import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import {PowerModule} from "../power/power.module";

@Module({
  imports:[PowerModule], //allows to use power module
  providers: [DiskService],
  exports:[DiskService],
})
export class DiskModule {}
