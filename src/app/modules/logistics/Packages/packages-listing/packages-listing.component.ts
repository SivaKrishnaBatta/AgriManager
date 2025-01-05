import { Component } from '@angular/core';

@Component({
  selector: 'app-packages-listing',
  templateUrl: './packages-listing.component.html',
  styleUrls: ['./packages-listing.component.scss']
})
export class PackagesListingComponent {

  _packages = [
    {
      "package": "10001",
      "customer": "Ahmed",
      "status": "not_shipped",
      "id": "7",
      "exp_date": "2024-01-16",
      "carrier": "FedEx",
      "so_id": "SO12345"
    },
    {
      "package": "10002",
      "customer": "Saikumar",
      "status": "shipped",
      "id": "8",
      "exp_date": "2024-01-16",
      "carrier": "UPS",
      "so_id": "SO12346"
    },
    {
      "package": "10003",
      "customer": "ABD",
      "status": "delivered",
      "id": "9",
      "exp_date": "2024-01-16",
      "carrier": "DHL",
      "so_id": "SO12347"
    },
    {
      "package": "10004",
      "customer": "John",
      "status": "shipped",
      "id": "10",
      "exp_date": "2024-02-10",
      "carrier": "FedEx",
      "so_id": "SO12348"
    },
    {
      "package": "10005",
      "customer": "Jane",
      "status": "not_shipped",
      "id": "11",
      "exp_date": "2024-02-15",
      "carrier": "UPS",
      "so_id": "SO12349"
    },
    {
      "package": "10006",
      "customer": "Paul",
      "status": "delivered",
      "id": "12",
      "exp_date": "2024-01-20",
      "carrier": "DHL",
      "so_id": "SO12350"
    },
    {
      "package": "10007",
      "customer": "Ravi",
      "status": "not_shipped",
      "id": "13",
      "exp_date": "2024-01-25",
      "carrier": "FedEx",
      "so_id": "SO12351"
    },
    {
      "package": "10008",
      "customer": "Sara",
      "status": "shipped",
      "id": "14",
      "exp_date": "2024-01-30",
      "carrier": "UPS",
      "so_id": "SO12352"
    },
    {
      "package": "10009",
      "customer": "Daniel",
      "status": "delivered",
      "id": "15",
      "exp_date": "2024-02-05",
      "carrier": "DHL",
      "so_id": "SO12353"
    },
    {
      "package": "10010",
      "customer": "Ali",
      "status": "not_shipped",
      "id": "16",
      "exp_date": "2024-02-10",
      "carrier": "FedEx",
      "so_id": "SO12354"
    },
    {
      "package": "10011",
      "customer": "Vikram",
      "status": "shipped",
      "id": "17",
      "exp_date": "2024-02-12",
      "carrier": "UPS",
      "so_id": "SO12355"
    },
    {
      "package": "10012",
      "customer": "Linda",
      "status": "delivered",
      "id": "18",
      "exp_date": "2024-02-18",
      "carrier": "DHL",
      "so_id": "SO12356"
    }
  ];
  
  

  columns = ["not_shipped", "shipped", "delivered"]
  data: any
  currentItem: any
  // projectsList: any
  // _Project_Id = 1 
  _project: any

  modelView: any;
  modelOpen = false;
  priorityLevel = ""
  ngOnInit() {
    // console.log(this.getTicketbyProjectId(this._Project_Id));
    // this._project = 1
    // if (this.priorityLevel.length == 0) {
    //   this.data = this.getTicketbyProjectId(this._Project_Id);
    // }
    // else {
    //   let taskdata = this.getTicketbyProjectId(this._Project_Id);
    //   this.data = this.filterTasksByPriority(taskdata, this.priorityLevel);
    // }
    this.data = this.getTickets()
    console.log(this.data);
  }
  filterTickets(status: string) {
    return this.data.filter((m: any) => m.status == status);
  }
  countColoum(status: string) {
    let x = this.data.filter((m: any) => m.status == status)
    return x.length;
  }
  onDragStart(item: any) {
    this.currentItem = item;
  }
  onDrop(event: any, status: string) {
    console.log('onDrop');
    event.preventDefault();
    const record = this.data.find((m: any) => m.id == this.currentItem.id);
    if (record != undefined) {
      record.status = status;
    }
    let submission = this.addTask(this.currentItem)
    if (submission) {
      this.currentItem = null;
      this.ngOnInit()
    }

  }
  onDragOver(event: any) {
    event.preventDefault();
  }
  onOptionSelected(e: any) {
    this.priorityLevel = e.target.value
    this.ngOnInit()

  }
  // filterTasksByPriority(tasks: any, priority: any) {
  //   return tasks.filter((task: any) => task.priority === priority);
  // }


  
  getTickets() {
    const jsonString = localStorage.getItem('_packages');
    if (jsonString) {
      return JSON.parse(jsonString);
    }
    const jsonStringProject = JSON.stringify(this._packages);
    localStorage.setItem('_packages', jsonStringProject);
    return this._packages;
  }
  // getTicketbyProjectId(ID: any) {
  //   let alltickets:any = this.getTickets()
  //   let _array = alltickets.filter((ticket:any) => ticket.project_id == ID);
  //   console.log(_array);
  //   return _array
  // }
  addTask(obj: any) {
    console.log(obj);
    const task_Data = this.getTickets();
    if (obj.id == "") {
      if (task_Data.length > 0) {
        let last_obj = task_Data[task_Data.length - 1]
        obj.id = Number(last_obj.id) + 1
      }
      else {
        obj.id = 1
      }
      task_Data.push(obj)
      return this.pushData(task_Data)
    }
    else {
      let target_index;
      for (let i = 0; i < task_Data.length; i++) {
        if (task_Data[i].id == obj.id) {
          target_index = i
          break
        }
      }
      task_Data[Number(target_index)] = obj
      console.log(task_Data);
      return this.pushData(task_Data)
    }
  }
  pushData(json: any) {
    const jsonData = JSON.stringify(json);
    localStorage.setItem("_packages", jsonData);
    return true
  }

  
}
