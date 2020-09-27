import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentService } from '..';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvironmentService.loadEnvironment],
    }),
  ],
  providers: [],
  exports: [ConfigModule],
})
export class EnvironmentModule {}
