import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { Routes, Services } from '../utils/constants';
import { UserProfileDto } from './dtos/UserProfile.dto';
import { UserAlreadyExists } from './exceptions/UserAlreadyExits';
import { IUserService } from './user';

@ApiTags(Routes.USERS)
@Controller(Routes.USERS)
export class UsersController {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {}

  @Get('search')
  searchUsers(@Query('query') query: string) {
    console.log(query);
    if (!query)
      throw new HttpException(
        'Cung cấp truy cập hợp lệ',
        HttpStatus.BAD_REQUEST,
      );
    return this.userService.searchUsers(query);
  }

  @Post('profiles')
  @UseInterceptors(FileInterceptor('file'))
  async completeProfile(
    @UploadedFile() file: Express.Multer.File,
    @Body() userProfileDto: UserProfileDto,
  ) {
    console.log(file);
    console.log(userProfileDto.about, userProfileDto.username);
  }

  @Get('check')
  async checkUsername(@Query('username') username: string) {
    if (!username)
      throw new HttpException('Truy vấn không hợp lệ', HttpStatus.BAD_REQUEST);
    const user = await this.userService.findUser({ username });
    if (user) throw new UserAlreadyExists();
    return HttpStatus.OK;
  }
}
