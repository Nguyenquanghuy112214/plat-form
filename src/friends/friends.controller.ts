/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Routes, Services } from '../utils/constants';

@Controller(Routes.FRIENDS)
export class FriendsController {
  constructor() {}
}
