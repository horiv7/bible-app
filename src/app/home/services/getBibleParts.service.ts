import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { BiblePartInterface } from '../types/biblePart.interface';

@Injectable()
export class GetBiblePartsService {
  constructor(private http: HttpClient) {}

  getBibleParts(): Observable<BiblePartInterface[]> {
    const fullUrl = `${environment.apiUrl}bibleParts.json`;
    return this.http.get<BiblePartInterface[]>(fullUrl);
  }
}
