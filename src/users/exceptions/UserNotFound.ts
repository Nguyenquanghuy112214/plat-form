import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor() {
    super('Không tìm thấy người dùng', HttpStatus.NOT_FOUND);
  }
}
