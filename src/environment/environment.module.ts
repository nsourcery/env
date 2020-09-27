import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentService } from '..';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [new EnvironmentService().loadEnvironment],
    }),
  ],
  providers: [],
  exports: [],
})
export class EnvironmentModule {}
