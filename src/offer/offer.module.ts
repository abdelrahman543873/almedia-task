import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferRepository } from './offer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer } from './offer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Offer])],
  providers: [OfferService, OfferRepository],
})
export class OfferModule {}
