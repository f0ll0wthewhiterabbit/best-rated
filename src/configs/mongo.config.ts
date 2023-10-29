import { TypegooseModuleOptions } from '@m8a/nestjs-typegoose';
import { ConfigService } from '@nestjs/config';

const getMongoString = (configService: ConfigService) => {
  const login = configService.get('MONGO_LOGIN');
  const password = configService.get('MONGO_PASSWORD');
  const host = configService.get('MONGO_HOST');
  const port = configService.get('MONGO_PORT');
  const database = configService.get('MONGO_AUTH_DATABASE');

  return `mongodb://${login}:${password}@${host}:${port}/${database}`;
};

export const getMongoConfig = async (
  configService: ConfigService
): Promise<TypegooseModuleOptions> => ({ uri: getMongoString(configService) });
