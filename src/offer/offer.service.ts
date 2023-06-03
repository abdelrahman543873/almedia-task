import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Offer1Serialization } from './serializations/offer1.serialization';
import { randomUUID } from 'crypto';
import { Offer2Serialization } from './serializations/offer2.serialization';
import { OfferRepository } from './offer.repository';
import { validateOrReject, validateSync } from 'class-validator';

@Injectable()
export class OfferService {
  constructor(private readonly offerRepository: OfferRepository) {}
  async addOffersForFirstProvider(providerPayload: any) {
    const offersResponseDTO = plainToClass(
      Offer1Serialization,
      providerPayload,
      {
        enableImplicitConversion: true,
        strategy: 'excludeAll',
      },
    );
    await validateOrReject(offersResponseDTO);
    const offers = offersResponseDTO.response.offers.map((offer) => {
      return {
        slug: randomUUID(),
        providerName: 'provider1',
        externalOfferId: offer.externalOfferId,
        name: offer.name,
        description: offer.description,
        requirements: offer.requirements,
        offerUrlTemplate: offer.offerUrlTemplate,
        thumbnail: offer.thumbnail,
        isDesktop: offer.isDesktop,
        isAndroid: offer.isAndroid,
        isIos: offer.isIos,
      };
    });
    return await this.offerRepository.addOffers(offers);
  }

  async addOffersForSecondProvider(providerPayload: any) {
    const offers = Object.keys(providerPayload.data).map((key) => {
      const offer = plainToClass(
        Offer2Serialization,
        providerPayload.data[key],
        {
          enableImplicitConversion: true,
          strategy: 'excludeAll',
        },
      );
      validateSync(offer);
      return {
        providerName: 'provider2',
        slug: randomUUID(),
        externalOfferId: offer.Offer.externalOfferId,
        name: offer.Offer.name,
        description: offer.Offer.description,
        requirements: offer.Offer.requirements,
        offerUrlTemplate: offer.Offer.offerUrlTemplate,
        thumbnail: offer.Offer.thumbnail,
        isIos: offer.OS.isIos,
        isAndroid: offer.OS.isAndroid,
        isDesktop: offer.OS.isDesktop,
      };
    });
    return await this.offerRepository.addOffers(offers);
  }
}
