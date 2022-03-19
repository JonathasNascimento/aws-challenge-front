import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceController } from './controllers/device/device.controller';
import { DeviceService } from './services/device/device.service';

@Module({
  imports: [],
  controllers: [AppController, DeviceController],
  providers: [AppService, DeviceService],
})
export class AppModule {}
