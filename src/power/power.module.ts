import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports:[PowerService] //CAN be used in other modules
})
export class PowerModule {}
