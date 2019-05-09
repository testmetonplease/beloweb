import { UserService } from '../user/user.service';
import { RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from '../store/reducers/index';
import { TransferState } from '@angular/platform-browser';
import { NotificationService } from './notifications/notification.service';
import { LocalStorageService } from './local-storage/local-storage.service';
import { httpInterceptorProviders } from './http-interceptors';
import { TitleService } from './title/title.service';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './error-handler/app-error-handler.service';

export const CORE_PROVIDERS = [
  { provide: RouterStateSerializer, useClass: CustomSerializer },
  UserService,
  TransferState,
  NotificationService,
  LocalStorageService,
  httpInterceptorProviders,
  TitleService,
  { provide: ErrorHandler, useClass: AppErrorHandler },
];
