import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerEditModalComponent } from './components/customer-edit-modal/customer-edit-modal.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { CustomerAddModalComponent } from './components/customer-add-modal/customer-add-modal.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerAddModalComponent,
    CustomerEditModalComponent,
  ],
  imports: [CommonModule, FormsModule, NgxMaskDirective, NgxMaskPipe],
  exports: [
    CustomerListComponent,
    CustomerAddModalComponent,
    CustomerEditModalComponent,
  ],
})
export class CustomersModule {}
