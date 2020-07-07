import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isLogin = true;
  loading = false;
  constructor() { }
}
