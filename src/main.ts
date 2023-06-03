import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

export let validationPipe;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  new ValidationPipe({
    whitelist: true,
    transform: true,
    stopAtFirstError: true,
    forbidNonWhitelisted: false,
    validateCustomDecorators: true,
  });
}
bootstrap();
