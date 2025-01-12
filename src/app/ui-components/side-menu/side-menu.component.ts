import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  onHover(event: MouseEvent, index: number): void {
    if (index != 0) {
      const element = event.target as HTMLElement;
      const rect = element.getBoundingClientRect();
      const distanceFromTop = rect.top;
      const contentElement = this.el.nativeElement.querySelector(`#content-${index}`);
      if (contentElement) {
        this.renderer.setStyle(contentElement, 'top', `${distanceFromTop}px`);
      }
    }
  }
  
  public menus = [
    {
      "name": "Dashboard",
      "icon": "fa-solid fa-tachometer-alt",
      "url": "dashboard"
    },
  
    {
      "name": "Order Managements",
      "icon": "fa-solid fa-box-open",
      "url": "order-mangements/customer",
      "submenus": [
        {
          "name": "Customers",
          "icon": "fa-solid fa-users",
          "h": "order-mangements/customer"
        },
        {
          "name": "Quotes",
          "icon": "fa-solid fa-file-contract",
          "url": "order-mangements/quotes"
        },
        {
          "name": "Sales Order",
          "icon": "fa-solid fa-receipt",
          "url": "order-mangements/sales-orders"
        },
        {
          "name": "Invoice",
          "icon": "fa-solid fa-file-invoice-dollar",
          "url": "order-mangements/invoices"
        },
        {
          "name": "Payments",
          "icon": "fa-solid fa-credit-card",
          "url": "order-mangements/payments"
        },
        {
          "name": "RMA",
          "icon": "fa-solid fa-undo-alt",
          "url": "order-mangements/return-orders"
        },
        {
          "name": "Credit Memo",
          "icon": "fa-solid fa-file-invoice",
          "url": "order-mangements/credit-memo"
        },
        {
          "name": "Order Management Reports",
          "icon": "fa-solid fa-chart-bar",
          "url": "order-mangements/order-reports"
        }
      ]
    },
    
    {
      "name": "Logistic",
      "icon": "fa-solid fa-truck",
      "url": "logistic/package",
      "submenus": [
        {
          "name": "Packages",
          "icon": "fa-solid fa-box",
          "url": "logistic/package"
        },
        {
          "name": "Shipments",
          "icon": "fa-solid fa-shipping-fast",
          "url": "logistic/shipment"
        },
        {
          "name": "Delivery Note",
          "icon": "fa-solid fa-file-alt",
          "url": "logistic/delivery-note"
        },
        {
          "name": "Carrier Management",
          "icon": "fa-solid fa-people-carry",
          "url": "logistic/carrier-mangement"
        },
        {
          "name": "Freight Management",
          "icon": "fa-solid fa-truck-loading",
          "url": "logistic/freight-management"
        },
        {
          "name": "Logistics Reports",
          "icon": "fa-solid fa-chart-pie",
          "url": "logistic/reports"
        }
      ]
    },
    {
      "name": "Procurements",
      "icon": "fa-solid fa-shopping-cart",
      "url": "procurements/suppliers",
      "submenus": [
        {
          "name": "Supplier Management",
          "icon": "fa-solid fa-user-tie",
          "url": "procurements/suppliers/suppliers-listing"
        },
        {
          "name": "Purchase Orders (PO)",
          "icon": "fa-solid fa-file-signature",
          "url": "procurements/purchase-orders/po-listings"
        },
        {
          "name": "Supplier Return",
          "icon": "fa-solid fa-undo-alt",
          "url": "procurements/suppliers-return/returns-listing"
        },
        {
          "name": "Procurement Reports",
          "icon": "fa-solid fa-chart-line",
          "url": "procurements/procurements-reports/purchase-orders-details"
        }
      ]
    },
    {
      "name": "Manufacturing",
      "icon": "fa-solid fa-cogs",
      "url": "manufacturings/boms/boms-listing",
      "submenus": [
        {
          "name": "Bill of Materials (BOM)",
          "icon": "fa-solid fa-clipboard-list",
          "url": "manufacturings/boms/boms-listing"
        },
        {
          "name": "Production Planning",
          "icon": "fa-solid fa-project-diagram",
          "url": "manufacturings/productions/prod-listing"
        },
        {
          "name": "Work Orders",
          "icon": "fa-solid fa-tasks",
          "url": "manufacturings/work-order/order-listing"
        },
        {
          "name": "Quality Control",
          "icon": "fa-solid fa-check-circle",
          "url": "manufacturings/quality/qc-listings"
        },
        {
          "name": "Manufacturing Reports",
          "icon": "fa-solid fa-chart-area",
          "url": "manufacturings/report/inv-reports"
        }
      ]
    },
    {
      "name": "Inventory",
      "icon": "fa-solid fa-warehouse",
      "url": "inventorys/inventory-details/details-listing",
      "submenus": [
        {
          "name": "Add Stock",  
          "icon": "fa-solid fa-plus-square",
          "url": "inventorys/stock-level/stocks-listing"
        },
        {
          "name": "Inventory Details",
          "icon": "fa-solid fa-list-alt",
          "url": "inventorys/inventory-details/details-listing"
        },
        {
          "name": "Inventory Replenishment",
          "icon": "fa-solid fa-sync",
          "url": "inventorys/replenishments/listing"
        },
        {
          "name": "Lot",
          "icon": "fa-solid fa-th-large",
          "url": "inventorys/lots/lots-listing"
        },
        {
          "name": "Inventory Reports",
          "icon": "fa-solid fa-chart-bar",
          "url": "inventorys/inventory-report/summary"
        }
      ]
    },
    {
      "name": "Warehouse",
      "icon": "fa-solid fa-boxes",
      "url": "warehouse/warehouse-details/listing",
      "submenus": [
        {
          "name": "Warehouse Details",  
          "icon": "fa-solid fa-info-circle",
          "url": "warehouse/warehouse-details"
        },
        {
          "name": "Add Stock",
          "icon": "fa-solid fa-plus",
          "url": "warehouse/add-stock"
        },
        {
          "name": "Stock Transfer Form",
          "icon": "fa-solid fa-exchange-alt",
          "url": "warehouse/stock-transfer-forms"
        },
        {
          "name": "Stock Adjustment Requests",
          "icon": "fa-solid fa-sliders-h",
          "url": "warehouse/stock-adjustment"
        }
      ]
    },
    
    {
      "name": "Settings",
      "icon": "fa-solid fa-cog",
      "url": "settings/users",
      "submenus": [
        {
          "name": "User Management",
          "icon": "fa-solid fa-user-cog",
          "url": "settings/users"
        },
        {
          "name": "Administration",
          "icon": "fa-solid fa-tools",
          "url": "settings/Administrations"
        }
      ]
    },
    {

    }
  ];
}
