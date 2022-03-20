import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceController } from './controllers/device/device.controller';
import { DeviceRepository } from './repositories/device/device.repository';
import { PrismaService } from './services/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, DeviceController],
  providers: [AppService, DeviceRepository, PrismaService],
})
export class AppModule { }
