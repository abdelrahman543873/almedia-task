import { payload } from '../../src/offer/payloads/offer1.payload';
import { OfferRepository } from 'src/offer/offer.repository';
import { OfferService } from '../../src/offer/offer.service';

describe('add offer for provider 1', () => {
  it('should add providers for provider 1', async () => {
    const offerService: OfferService = global.offerService;
    const offerRepository: OfferRepository = global.offerRepository;
    const insertions = await offerService.addOffersForFirstProvider(payload);
    const offerId = insertions.identifiers[0].id;
    const offer = await offerRepository.findOne(offerId);
    expect(offer.id).toBe(offerId);
    expect(offer.name).toBe(payload.response.offers[0].offer_name);
  });
});
