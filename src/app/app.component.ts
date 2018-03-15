import { Component } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';


interface User {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  validation: string;

  constructor(protected localStorage: AsyncLocalStorage) {}

  ngOnInit() {

    const user: User = { name: `Homer Simpsons` };

    this.localStorage.removeItem('user').subscribe(() => {

      this.localStorage.setItem('user', user).subscribe(() => {

        this.localStorage.getItem<User>('user').subscribe((data) => {

          this.name = data ? data.name : '';

        });

        this.localStorage.getItem<User>('user', { schema: { type: 'string' } }).subscribe(() => {}, () => {

          this.validation = 'Schema invalid';

        });

      });

    });

  }

  delete(): void {
    this.localStorage.removeItem('user').subscribe(() => {});
  }
  create(user:string, key:string): void {
    const usu: User = { name: user };
    this.localStorage.setItem(key,usu).subscribe(() => {});
  }

  mostrar(): void {
    this.localStorage.getItem<User>('user').subscribe((user) => {

      this.name = user;
      console.log(this.name);
    });
    
    
  }
}

 
