import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class TransferOwnerDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  newOwnerId: number;
}
