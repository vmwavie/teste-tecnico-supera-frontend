import { Component, Input } from '@angular/core';
import { Customer } from '../../models/costumer.model';
import { CustomerService } from '../../services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-edit-modal',
  templateUrl: './customer-edit-modal.component.html',
  styleUrls: ['./customer-edit-modal.component.sass'],
})
export class CustomerEditModalComponent {
  @Input()
  customer!: Customer;
  customerId!: number | null;
  isOpened = false;

  constructor(private customerService: CustomerService) {}
  handleCloseModal(): void {
    this.isOpened = false;
  }

  handleEdit(customerId: number): void {
    this.isOpened = true;
    this.customerService.getCustomerById(customerId).subscribe(data => {
      this.customerId = customerId;
      this.customer = data.costumer;
    });
  }

  save(): void {
    this.customerService.updateCustomer(this.customer).subscribe({
      next: value => {
        this.customer = value.costumer;
        this.handleCloseModal();
        Swal.fire({
          title: 'Updated!',
          text: 'Customer has been updated.',
          icon: 'success',
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-primary px-4',
            container: 'bg-primaryLight dark:bg-primaryDark',
            popup:
              'bg-primaryLight dark:bg-primaryDark text-black dark:text-white',
          },
        });
      },
      error: error => {
        Swal.fire({
          title: 'Error!',
          text: error.error.errorMessage
            ? error.error.errorMessage
            : 'Failed to update customer.',
          icon: 'error',
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-primary px-4',
            container: 'bg-primaryLight dark:bg-primaryDark',
            popup:
              'bg-primaryLight dark:bg-primaryDark text-black dark:text-white',
          },
        });
      },
    });

    this.customerId = null;
  }
}
