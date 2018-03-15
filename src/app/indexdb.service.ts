import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
@Injectable()
export class IndexdbService {


  
  public constructor(protected storage: AsyncLocalStorage) {}

  
  public ngOnInit(): void {
  
    this.storage.setItem('lang', 'es').subscribe(() => {
      // Done
    });
    
  }
}

