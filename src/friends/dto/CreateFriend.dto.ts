import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateFriendDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
}
