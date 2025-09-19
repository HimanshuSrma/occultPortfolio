import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

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
export class AppComponent implements AfterViewInit {
  async ngAfterViewInit() {
    // keep for dynamic remote attach if needed later
    // const RemoteCmp = await loadRemoteModule({...}).then(m => m.AppComponent);
    // this.viewContainerRef.createComponent(RemoteCmp);
  }
}
