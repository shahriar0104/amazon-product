import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpHeaders} from '@angular/common/http';

const BASE_URL = environment.base_url;

@Injectable()
export class NetworkService {

  constructor() { }

  getBaseUrl(): string {
    return BASE_URL;
  }

  getOptions(): HttpHeaders {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', '*/*')
      .set('access-control-allow-origin', 'http://localhost:4200/');
    return headers;
  }
}
