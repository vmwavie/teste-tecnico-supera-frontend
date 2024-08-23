import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import Swal from 'sweetalert2';
import { Customer } from '../../models/costumer.model';
import { CustomerEditModalComponent } from '../customer-edit-modal/customer-edit-modal.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.sass'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  currentPage = 0;
  pageSize = 10;
  searchTerm = '';

  constructor(private customerService: CustomerService) {}
  @ViewChild(CustomerEditModalComponent) editModal!: CustomerEditModalComponent;

  ngOnInit(): void {
    this.loadCustomers();
  }

  onSearch(): void {
    const originalCustomers = [...this.customers];
    if (this.searchTerm) {
      this.customers = originalCustomers.filter(customer =>
        customer.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.loadCustomers();
    }
  }

  addCustomer(): void {
    // Logic to add a customer
  }

  deleteCustomer(customerId: number): void {
    Swal.fire({
      title: 'You want to delete this customer?',
      icon: 'question',
      iconColor: '#1ea6d3',
      buttonsStyling: false,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary px-4',
        container: 'bg-primaryLight dark:bg-primaryDark',
        popup: 'bg-primaryLight dark:bg-primaryDark text-black dark:text-white',
      },
    }).then(value => {
      if (value.isConfirmed) {
        this.customerService.deleteCustomer(customerId).subscribe({
          next: (_value: unknown) => {
            console.log('Customer deleted successfully', _value);
            Swal.fire({
              title: 'Deleted!',
              text: 'Customer has been deleted.',
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
          error: (error: { error: { errorMessage: string } }) => {
            Swal.fire({
              title: 'Error!',
              text: error.error.errorMessage,
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
      }
    });

    this.loadCustomers();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCustomers();
    }
  }

  nextPage(): void {
    this.currentPage++;
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService
      .getCustomers(this.currentPage, this.pageSize)
      .subscribe(data => {
        this.customers = data.costumers;
      });
  }

  editCustomer(customerId: number): void {
    return this.editModal.handleEdit(customerId);
  }
}
