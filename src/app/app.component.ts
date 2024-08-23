import { CustomersModule } from './features/customers/customers.module';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomersModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'frontend';
}
