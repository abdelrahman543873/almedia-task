import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
class Offer {
  @Expose({ name: 'offer_id' })
  @IsString()
  @IsNotEmpty()
  externalOfferId: string;

  @Expose({ name: 'offer_name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Expose({ name: 'offer_desc' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @Expose({ name: 'call_to_action' })
  @IsString()
  @IsNotEmpty()
  requirements: string;

  @Expose({ name: 'offer_url' })
  @IsString()
  @IsNotEmpty()
  offerUrlTemplate: string;

  @Expose({ name: 'image_url' })
  @IsString()
  @IsNotEmpty()
  thumbnail: string;

  @Expose()
  platform: string;

  @Expose()
  device: string;

  @Expose({ name: 'isDesktop' })
  get isDesktop() {
    if (this.platform === 'desktop') return 1;
    return 0;
  }

  @Expose()
  get isAndroid() {
    if (this.platform === 'mobile' && this.device !== 'iphone_ipad') return 1;
    return 0;
  }

  @Expose()
  get isIos() {
    if (this.platform === 'mobile' && this.device === 'iphone_ipad') {
      return 1;
    }
    return 0;
  }
}

class Response {
  @Expose({ name: 'offers' })
  @ValidateNested({ each: true })
  @Type(() => Offer)
  offers: Offer[];
}

export class Offer1Serialization {
  @Expose({ name: 'response' })
  @ValidateNested()
  response: Response;
}
