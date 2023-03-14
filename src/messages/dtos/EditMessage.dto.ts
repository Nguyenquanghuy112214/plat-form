import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class EditMessageDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  content: string;
}
