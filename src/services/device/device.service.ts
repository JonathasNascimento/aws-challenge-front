import { Injectable } from '@nestjs/common';
import { Device } from 'src/models/device';
import { DeviceRepository } from 'src/repositories/device/device.repository';

@Injectable()
export class DeviceService {
  constructor(private readonly deviceRepository: DeviceRepository) { }

  findDevices(): Promise<Device[]> {
    return this.deviceRepository.findAll();
  }

  findDeviceById(id: number): Promise<Device> {
    return this.deviceRepository.findById(id);
  }
}
