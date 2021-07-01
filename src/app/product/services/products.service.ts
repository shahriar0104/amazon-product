import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';
import {NetworkService} from '../../shared/services/network.service';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient,
              private networkClient: NetworkService) { }

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/products', {headers: this.networkClient.getOptions()});
  }
}
