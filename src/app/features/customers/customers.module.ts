import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerEditModalComponent } from './components/customer-edit-modal/customer-edit-modal.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@NgModule({
  declarations: [CustomerListComponent, CustomerEditModalComponent],
  imports: [CommonModule, FormsModule, NgxMaskDirective, NgxMaskPipe],
  exports: [CustomerListComponent, CustomerEditModalComponent],
})
export class CustomersModule {}
