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
  // public menus = [
  //   {
  //     "name": "Dashboard",
  //     "icon": "fa-solid fa-gauge-high",
  //     "url": "dashboard"
  //   },
  //   {
  //     "name": "Cargos",
  //     "icon": "fa-solid fa-boxes-stacked",
  //     "url": "logistics/cargos"
  //   },
  //   {
  //     "name": "Packages",
  //     "icon": "fa-solid fa-box-open",
  //     "url": "logistics/package"
  //   },
  //   {
  //     "name": "Shipments",
  //     "icon": "fa-solid fa-truck-fast",
  //     "url": "logistics/shipment"
  //   },
  //   {
  //     "name": "Delivery Note",
  //     "icon": "fa-solid fa-file-invoice",
  //     "url": "logistics/delivery"
  //   },
  //   {
  //     "name": "Carrier Management",
  //     "icon": "fa-solid fa-people-carry-box",
  //     "url": "logistics/carrier"
  //   },
  //   {
  //     "name": "Logistics Reports",
  //     "icon": "fa-solid fa-chart-line",
  //     "url": "logistics/reports"
  //   },
  //   {
  //     "name": "Settings",
  //     "icon": "fa-solid fa-gear",
  //     "url": "setting/users",
  //     "submenus": [
  //       {
  //         "name": "User Management",
  //         "icon": "fa-solid fa-users-cog",
  //         "url": "setting/users"
  //       },
  //       {
  //         "name": "Freight Management",
  //         "icon": "fa-solid fa-dolly",
  //         "url": "logistics/freight"
  //       },
  //       {
  //         "name": "Administration",
  //         "icon": "fa-solid fa-screwdriver-wrench",
  //         "url": "setting/administration"
  //       }
  //     ]
  //   }
  // ];
  

  public menus = [
    {
      "name": "Dashboard",
      "icon": "fa-solid fa-tachometer-alt",
      "url": "dashboard"
    },
    {
      "name": "Order Management",
      "icon": "fa-solid fa-box-open",
      "url": "order/customers",
      "submenus": [
        {
          "name": "Customers",
          "icon": "fa-solid fa-users",
          "h": "order/customers"
        },
        {
          "name": "Quotes",
          "icon": "fa-solid fa-file-contract",
          "url": "order/quote"
        },
        {
          "name": "Sales Order",
          "icon": "fa-solid fa-receipt",
          "url": "order/sale-order"
        },
        {
          "name": "Invoice",
          "icon": "fa-solid fa-file-invoice-dollar",
          "url": "order/invoice"
        },
        {
          "name": "Payments",
          "icon": "fa-solid fa-credit-card",
          "url": "order/payments"
        },
        {
          "name": "RMA",
          "icon": "fa-solid fa-undo-alt",
          "url": "order/rma"
        },
        {
          "name": "Credit Memo",
          "icon": "fa-solid fa-file-invoice",
          "url": "order/credit-memo"
        },
        {
          "name": "Order Management Reports",
          "icon": "fa-solid fa-chart-bar",
          "url": "order/order-reports"
        }
      ]
    },
    {
      "name": "Logistics",
      "icon": "fa-solid fa-truck",
      "url": "logistics/package",
      "submenus": [
        // {
        //   "name": "Cargos",
        //   "icon": "fa-solid fa-calendar-alt",
        //   "url": "logistics/cargos"
        // },
        {
          "name": "Packages",
          "icon": "fa-solid fa-box",
          "url": "logistics/package"
        },
        {
          "name": "Shipments",
          "icon": "fa-solid fa-shipping-fast",
          "url": "logistics/shipment"
        },
        {
          "name": "Delivery Note",
          "icon": "fa-solid fa-file-alt",
          "url": "logistics/delivery"
        },
        {
          "name": "Carrier Management",
          "icon": "fa-solid fa-people-carry",
          "url": "logistics/carrier"
        },
        {
          "name": "Freight Management",
          "icon": "fa-solid fa-truck-loading",
          "url": "logistics/freight"
        },
        {
          "name": "Logistics Reports",
          "icon": "fa-solid fa-chart-pie",
          "url": "logistics/reports"
        }
      ]
    },
    {
      "name": "Procurement",
      "icon": "fa-solid fa-shopping-cart",
      "url": "procurement/suppliers",
      "submenus": [
        {
          "name": "Supplier Management",
          "icon": "fa-solid fa-user-tie",
          "url": "procurement/suppliers"
        },
        {
          "name": "Purchase Orders (PO)",
          "icon": "fa-solid fa-file-signature",
          "url": "procurement/po"
        },
        {
          "name": "Supplier Return",
          "icon": "fa-solid fa-undo-alt",
          "url": "procurement/supplier-return"
        },
        {
          "name": "Procurement Reports",
          "icon": "fa-solid fa-chart-line",
          "url": "procurement/reports"
        }
      ]
    },
    {
      "name": "Manufacturing",
      "icon": "fa-solid fa-cogs",
      "url": "manufacturing/bom",
      "submenus": [
        {
          "name": "Bill of Materials (BOM)",
          "icon": "fa-solid fa-clipboard-list",
          "url": "manufacturing/bom"
        },
        {
          "name": "Production Planning",
          "icon": "fa-solid fa-project-diagram",
          "url": "manufacturing/production"
        },
        {
          "name": "Work Orders",
          "icon": "fa-solid fa-tasks",
          "url": "manufacturing/work-order"
        },
        {
          "name": "Quality Control",
          "icon": "fa-solid fa-check-circle",
          "url": "manufacturing/qc"
        },
        {
          "name": "Manufacturing Reports",
          "icon": "fa-solid fa-chart-area",
          "url": "manufacturing/reports"
        }
      ]
    },
    {
      "name": "Inventory",
      "icon": "fa-solid fa-warehouse",
      "url": "inventory/stock",
      "submenus": [
        {
          "name": "Add Stock",
          "icon": "fa-solid fa-plus-square",
          "url": "inventory/stock"
        },
        {
          "name": "Inventory Details",
          "icon": "fa-solid fa-list-alt",
          "url": "inventory/detail"
        },
        {
          "name": "Inventory Replenishment",
          "icon": "fa-solid fa-sync",
          "url": "inventory/replenishment"
        },
        {
          "name": "Lot",
          "icon": "fa-solid fa-th-large",
          "url": "inventory/lot"
        },
        {
          "name": "Inventory Reports",
          "icon": "fa-solid fa-chart-bar",
          "url": "inventory/reports"
        }
      ]
    },
    {
      "name": "Warehouse",
      "icon": "fa-solid fa-boxes",
      "url": "warehouse/warehouse-details",
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
      "url": "setting/users",
      "submenus": [
        {
          "name": "User Management",
          "icon": "fa-solid fa-user-cog",
          "url": "setting/users"
        },
        {
          "name": "Administration",
          "icon": "fa-solid fa-tools",
          "url": "setting/administration"
        }
      ]
    },
    {

    }
  ];
}
