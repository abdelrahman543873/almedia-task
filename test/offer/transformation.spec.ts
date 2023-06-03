import { OfferService } from '../../src/offer/offer.service';
import { payload } from '../../src/offer/payloads/offer2.payload';

describe('transform functionality test', () => {
  it('should transform successfully', async () => {
    const offerService: OfferService = global.offerService;
    console.log(await offerService.addOffersForSecondProvider(payload));
  });
});
