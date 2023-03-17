import { HttpException, HttpStatus } from '@nestjs/common';

export class GroupNotFoundException extends HttpException {
  constructor() {
    super('Không tìm thấy group', HttpStatus.BAD_REQUEST);
  }
}
