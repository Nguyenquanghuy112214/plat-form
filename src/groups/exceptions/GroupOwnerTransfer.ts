import { HttpException, HttpStatus } from '@nestjs/common';

export class GroupOwnerTransferException extends HttpException {
  constructor(msg?: string) {
    const defaultMessage = 'Ngoại lệ chuyển nhượng chủ sở hữu nhóm';
    const errorMessage = msg
      ? defaultMessage.concat(': ', msg)
      : defaultMessage;
    super(errorMessage, HttpStatus.BAD_REQUEST);
  }
}
