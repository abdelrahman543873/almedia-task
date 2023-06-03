import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
class Offer {
  @Expose({ name: 'campaign_id' })
  @IsString()
  @IsNotEmpty()
  externalOfferId: string;

  @Expose({ name: 'name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Expose({ name: 'description' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @Expose({ name: 'instructions' })
  @IsString()
  @IsNotEmpty()
  requirements: string;

  @Expose({ name: 'tracking_url' })
  @IsString()
  @IsNotEmpty()
  offerUrlTemplate: string;

  @Expose({ name: 'icon' })
  @IsString()
  @IsNotEmpty()
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
