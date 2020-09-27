import { Test, TestingModule } from '@nestjs/testing';
import { SourceryService } from './sourcery.service';

describe('SourceryService', () => {
  let service: SourceryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SourceryService],
    }).compile();

    service = module.get<SourceryService>(SourceryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
