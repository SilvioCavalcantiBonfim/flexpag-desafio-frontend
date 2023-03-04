import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from './classes/request.class';

/*
  Serviço responsável com controlar as classes query e request.
*/ 

@Injectable({
  providedIn: 'root'
})
export class ControllerService extends request {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }
}
