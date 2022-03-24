import { Test, TestingModule } from '@nestjs/testing';
import { CategoryRepository } from 'src/repositories/category/category.repository';
import { DeviceRepository } from 'src/repositories/device/device.repository';
import { PrismaService } from 'src/repositories/prisma/prisma.service';

import { DeviceService } from '../device/device.service';
import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryRepository,
        DeviceRepository,
        CategoryService,
        DeviceService,
        PrismaService,
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
