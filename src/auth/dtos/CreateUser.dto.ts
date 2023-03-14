import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @MaxLength(32)
  @ApiProperty()
  firstName: string;

  @IsNotEmpty()
  @MaxLength(32)
  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @MaxLength(32)
  @ApiProperty()
  password: string;
}
