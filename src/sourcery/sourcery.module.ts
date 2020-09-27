import { Module } from '@nestjs/common';
import { SourceryService } from '..';

@Module({
  providers: [SourceryService],
  exports: [SourceryService],
})
export class SourceryModule {}
