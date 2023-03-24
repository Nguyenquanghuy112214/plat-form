import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExists extends HttpException {
  constructor() {
    super('Người dùng đã tồn tại', HttpStatus.CONFLICT);
  }
}
