import { Expose } from 'class-transformer';
class Offer {
  @Expose({ name: 'campaign_id' })
  externalOfferId: string;

  @Expose({ name: 'name' })
  name: string;

  @Expose({ name: 'description' })
  description: string;

  @Expose({ name: 'instructions' })
  requirements: string;

  @Expose({ name: 'tracking_url' })
  offerUrlTemplate: string;

  @Expose({ name: 'icon' })
  thumbnail: string;
}

class Os {
  @Expose()
  ios: boolean;

  @Expose()
  android: boolean;

  @Expose()
  web: boolean;

  @Expose({ name: 'isDesktop' })
  get isDesktop() {
    if (this.web) return 1;
    return 0;
  }

  @Expose()
  get isAndroid() {
    if (this.android) return 1;
    return 0;
  }

  @Expose()
  get isIos() {
    if (this.ios) return 1;
    return 0;
  }
}

export class Offer2Serialization {
  @Expose({ name: 'OS' })
  OS: Os;

  @Expose({ name: 'Offer' })
  Offer: Offer;
}
