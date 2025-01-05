import { Component } from '@angular/core';

@Component({
  selector: 'app-bom-add',
  templateUrl: './bom-add.component.html',
  styleUrls: ['./bom-add.component.scss']
})
export class BomAddComponent {

  myList: any[] = [];


  ngOnInit(){
    this.myList.push({
      component:"",
      Quantity:"",
      UnitofMeasure:""
    })
    console.log(this.myList);

  }

  addbom(){
    this.myList.push({
      component:"",
      Quantity:"",
      UnitofMeasure:""
    })
  }
  _delete(i:any){
    this.myList.splice(i,1)
  }

  
}
