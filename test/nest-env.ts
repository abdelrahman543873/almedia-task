import { TestingModule } from '@nestjs/testing';
import NodeEnvironment from 'jest-environment-node';
import { OfferService } from '../src/offer/offer.service';

class NestEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
  }

  async setup() {
    await super.setup();
    this.global.appContext = global.app;
    const app: TestingModule = <TestingModule>this.global.appContext;
    this.global.offerService = app.get<OfferService>(OfferService);
  }

  async teardown() {
    await super.teardown();
  }

  getVmContext() {
    return super.getVmContext();
  }
}

export default NestEnvironment;
