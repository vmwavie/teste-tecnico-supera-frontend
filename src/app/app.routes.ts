import { Routes } from '@angular/router';
import { CustomerListComponent } from './features/customers/components/customer-list/customer-list.component';

export const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: '**', redirectTo: '/customers' },
];
