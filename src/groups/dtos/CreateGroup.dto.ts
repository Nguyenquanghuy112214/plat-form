import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsString } from 'class-validator';

export class CreateGroupDto {
  @IsString({ each: true })
  @ArrayNotEmpty()
  @ApiProperty()
  users: string[];

  @ApiProperty()
  title: string;
}
