import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs/internal/observable/of";

@Injectable()
export class RateService {
  apiUrl = 'http://localhost:8080/v1/rate';

  constructor(private http: HttpClient) {}

    private extractData(res: Response) {
        let body = res;
        return body || { };
    }


    getRate(): Observable<any> {
        return this.http.get(this.apiUrl).pipe(
            map(this.extractData));
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }



}
