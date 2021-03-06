import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Quote } from "../home/quote.interface";
@Injectable({
  providedIn: "root",
})
export class QuoteService {
  apiURL: string = 'https://ram-dass-quotes-api.herokuapp.com/api';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAllQuotes(): Observable<Quote[]> {
    const endpoint = "/quotes/all";
    const quotes$ = this.http.get<Quote[]>(this.apiURL + endpoint, {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
      }),
    });
    return quotes$;
  }
}
