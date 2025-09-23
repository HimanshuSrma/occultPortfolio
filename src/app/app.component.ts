import { AfterViewInit, OnInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import e from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // ngOnInit() {
  //   try {
  //     let isDevPortfolioVisitor = window.localStorage.getItem('isDevPortfolioVisitor');
  //     if(isDevPortfolioVisitor && window.location.hostname != 'localhost'){
  //       window.location.href = 'https://dev-portfolio.vercel.app';
  //     }
  //   } catch (error) {
  //     console.error(error);
      
  //   }
  //   console.log('AppComponent initialized');
  // }
  // async ngAfterViewInit() {
    // keep for dynamic remote attach if needed later
    // const RemoteCmp = await loadRemoteModule({...}).then(m => m.AppComponent);
    // this.viewContainerRef.createComponent(RemoteCmp);
  // }
}
