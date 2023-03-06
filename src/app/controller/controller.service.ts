import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from './classes/request.class';
import { ErrorService } from './error/error.service';

/*
  Serviço responsável com controlar as classes query e request.
*/ 

@Injectable({
  providedIn: 'root'
})
export class ControllerService extends request {

  constructor(private httpClient: HttpClient,private error_s: ErrorService) {
    super(httpClient, error_s);
  }
}
