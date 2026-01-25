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
      name: "Dashboard",
      icon: "fa-solid fa-tachometer-alt",
      url: "dashboard",
      submenus: [
        {
          name: "Overview",
          icon: "fa-solid fa-chart-line",
          url: "dashboard/overview"
        },
        {
          name: "Active Crops",
          icon: "fa-solid fa-seedling",
          url: "dashboard/active-crops"
        },
        {
          name: "Total Expenses",
          icon: "fa-solid fa-wallet",
          url: "dashboard/expenses"
        },
        {
          name: "Total Income",
          icon: "fa-solid fa-coins",
          url: "dashboard/income"
        },
        {
          name: "Profit / Loss",
          icon: "fa-solid fa-scale-balanced",
          url: "dashboard/profit-loss"
        }
      ]
    },

    {
      name: "Farm Management",
      icon: "fa-solid fa-tractor",
      url: "farms",
      submenus: [
        {
          name: "Farms List",
          icon: "fa-solid fa-list",
          url: "farms/list"
        },
        {
          name: "Add / Edit Farm",
          icon: "fa-solid fa-plus-square",
          url: "farms/manage"
        }
      ]
    },

    {
      name: "Field Management",
      icon: "fa-solid fa-map",
      url: "fields",
      submenus: [
        {
          name: "Fields List",
          icon: "fa-solid fa-list-ul",
          url: "fields/list"
        },
        {
          name: "Add / Edit Field",
          icon: "fa-solid fa-plus",
          url: "fields/manage"
        }
      ]
    },

    {
      name: "Crop Management",
      icon: "fa-solid fa-leaf",
      url: "crops",
      submenus: [
        {
          name: "Crops List",
          icon: "fa-solid fa-table",
          url: "crops/list"
        },
        {
          name: "Add Crop",
          icon: "fa-solid fa-seedling",
          url: "crops/add"
        },
        {
          name: "Active Crops",
          icon: "fa-solid fa-play-circle",
          url: "crops/active"
        },
        {
          name: "Completed Crops",
          icon: "fa-solid fa-check-circle",
          url: "crops/completed"
        }
      ]
    },

    {
      name: "Expense Management",
      icon: "fa-solid fa-money-bill-wave",
      url: "expenses",
      submenus: [
        {
          name: "Expenses List",
          icon: "fa-solid fa-receipt",
          url: "expenses/list"
        },
        {
          name: "Add Expense",
          icon: "fa-solid fa-plus-circle",
          url: "expenses/add"
        },
        {
          name: "Expense Categories",
          icon: "fa-solid fa-tags",
          url: "expenses/categories"
        },
        {
          name: "Crop-wise Expenses",
          icon: "fa-solid fa-chart-pie",
          url: "expenses/crop-wise"
        }
      ]
    },

    {
      name: "Income / Returns",
      icon: "fa-solid fa-hand-holding-dollar",
      url: "income",
      submenus: [
        {
          name: "Income List",
          icon: "fa-solid fa-list",
          url: "income/list"
        },
        {
          name: "Add Income",
          icon: "fa-solid fa-plus",
          url: "income/add"
        },
        {
          name: "Crop-wise Income",
          icon: "fa-solid fa-chart-bar",
          url: "income/crop-wise"
        }
      ]
    },

    {
      name: "Reports",
      icon: "fa-solid fa-chart-column",
      url: "reports",
      submenus: [
        {
          name: "Crop Summary",
          icon: "fa-solid fa-seedling",
          url: "reports/crop-summary"
        },
        {
          name: "Farm-wise Report",
          icon: "fa-solid fa-tractor",
          url: "reports/farm-wise"
        },
        {
          name: "Field-wise Report",
          icon: "fa-solid fa-map-marked-alt",
          url: "reports/field-wise"
        },
        {
          name: "Monthly Report",
          icon: "fa-solid fa-calendar",
          url: "reports/monthly"
        },
        {
          name: "Quarterly Report",
          icon: "fa-solid fa-calendar-alt",
          url: "reports/quarterly"
        },
        {
          name: "Half-Yearly Report",
          icon: "fa-solid fa-calendar-minus",
          url: "reports/half-yearly"
        },
        {
          name: "Yearly Report",
          icon: "fa-solid fa-calendar-check",
          url: "reports/yearly"
        }
      ]
    },

    {
      name: "Settings",
      icon: "fa-solid fa-cog",
      url: "settings",
      submenus: [
        {
          name: "Profile",
          icon: "fa-solid fa-user",
          url: "settings/profile"
        },
        {
          name: "Change Password",
          icon: "fa-solid fa-key",
          url: "settings/change-password"
        },
        {
          name: "Expense Category Setup",
          icon: "fa-solid fa-sliders-h",
          url: "settings/expense-categories"
        }
      ]
    }
  ];

}
