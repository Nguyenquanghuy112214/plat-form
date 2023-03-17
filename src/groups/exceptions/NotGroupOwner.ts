import { HttpException, HttpStatus } from '@nestjs/common';

export class NotGroupOwnerException extends HttpException {
  constructor() {
    super('Không phải chủ sở hữu nhóm', HttpStatus.BAD_REQUEST);
  }
}
