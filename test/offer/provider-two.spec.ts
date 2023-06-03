import { OfferRepository } from 'src/offer/offer.repository';
import { OfferService } from '../../src/offer/offer.service';
import { payload } from '../../src/offer/payloads/offer2.payload';

describe('add offer for provider 2', () => {
  it('should add providers for provider 2', async () => {
    const offerService: OfferService = global.offerService;
    const offerRepository: OfferRepository = global.offerRepository;
    const insertions = await offerService.addOffersForSecondProvider(payload);
    const offerId = insertions.identifiers[0].id;
    const offer = await offerRepository.findOne(offerId);
    expect(offer.id).toBe(offerId);
    expect(offer.name).toBe(payload.data[15828].Offer.name);
  });
});
