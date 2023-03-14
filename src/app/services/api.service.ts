import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl: string = 'http://localhost:8000/api/'

  constructor(
    private http: HttpClient
  ) { }

  public apiCall(endpoint: string, method: string, data: any) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" })
    switch (method.toUpperCase()) {
      case "GET":
        return this.http.get(`${this.apiUrl}${endpoint}`, { headers: headers})
      case "POST":
        return this.http.post(`${this.apiUrl}${endpoint}`, data, { headers: headers})
      case "PUT":
        return this.http.put(`${this.apiUrl}${endpoint}`, data, { headers: headers})
      case "DELETE":
        return this.http.delete(`${this.apiUrl}${endpoint}`, { headers: headers})
      default:
        return null;
    }
  }
}
