import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from './offer.entity';
import { Repository } from 'typeorm';
import { IOffer } from './interfaces/offer.interface';

@Injectable()
export class OfferRepository {
  constructor(
    @InjectRepository(Offer)
    private offer: Repository<Offer>,
  ) {}
  addOffers(offer: IOffer[]) {
    return this.offer.insert(offer);
  }
}
