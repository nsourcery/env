import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvironmentService {
  static loadEnvironment(
    env: NodeJS.ProcessEnv = process.env,
  ): NodeJS.ProcessEnv {
    const NODE_ENV = env.NODE_ENV || 'development';
    const PORT = env.PORT || '3000';
    const PROTECTED_ENVIRONMENTS =
      env.PROTECTED_ENVIRONMENTS || 'staging;production;';
    const SYNCHRONIZE = (
      !PROTECTED_ENVIRONMENTS.includes(NODE_ENV) && env.SYNCHRONIZE === 'true'
    ).toString();

    return {
      ...env,
      NODE_ENV,
      PORT,
      PROTECTED_ENVIRONMENTS,
      SYNCHRONIZE,
    };
  }
}
