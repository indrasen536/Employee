import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';




 class Registration {
   constructor(
     public name: string = '',
    public age: number = null,
    public dept: string = 'Select Your Department',
    public empType: string = 'Select Employee Type',
    public hra: string = '',
    public medical: string = '',
  ) { }
 }
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('myModal') myModal: any;
  // It maintains list of Registrations
  registrations: Registration[] = [];
  // It maintains registration Model
  regModel: Registration;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;
  // It maintains Array of Types.
  employeeType: string[] = ['Permanent', 'Trainee'];
  //It maintains the department Type
  department: string[] = ['PES', 'AP1', 'AP2', 'CSD', 'QSD', 'ADMIN'];
  constructor(private data: DataService) {
    // Add default registration data.
    //this.registrations.push(new Registration('Johan', 28, 'PES', 'Permanent', '5', '10'));

  }

  ngOnInit() { }






  // This method associate to New Button.
  onNew() {
    // Initiate new registration.
    this.data.onNewPress(this.regModel);
    // Change submitType to 'Save'.
    this.submitType = 'Save';
  }
 
 
 
 
 
 
  // This method associate to Save Button.
  onSave() {

    if (this.submitType === 'Save') {

      // Push registration model object into registration list.
      (() => {
        // Whatever is here will be executed as soon as the script is loaded.
        confirm("Press OK , If You Want To Save !");
        console.log('Data Saved');
        this.myModal.nativeElement.click();
      })();

      this.registrations.push(this.regModel);

    } else {
      // Update the existing properties values based on model.
      this.registrations[this.selectedRow].name = this.regModel.name;
      this.registrations[this.selectedRow].age = this.regModel.age;
      this.registrations[this.selectedRow].dept = this.regModel.dept;
      this.registrations[this.selectedRow].empType = this.regModel.empType;
      this.registrations[this.selectedRow].hra = this.regModel.hra;
      this.registrations[this.selectedRow].medical = this.regModel.medical;

      if(this.myModal)
        this.myModal.nativeElement.click();
    }
    // Hide registration entry section.
    //this.showNew = false;
  }





  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new Registration();
    // Retrieve selected registration from list and assign to model.
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    //this.showNew = true;
  }





  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    this.registrations.splice(index, 1);
    confirm("Are You Sure ? Press Ok If Yes");

    this.myModal.nativeElement.click();
  }

  
  
  
  
  // This method associate toCancel Button.




  // This method associate to Bootstrap dropdown selection change.
  onChangeEmployee(empType: string) {
    // Assign corresponding selected EmpType to model.
    this.regModel.empType = empType;
    if (this.regModel.empType === 'Permanent') {
      this.regModel.hra = '15';
      this.regModel.medical = '10';
    }
    else if (this.regModel.empType === 'Trainee') {
      this.regModel.hra = '10';
      this.regModel.medical = '10';
    }
  }




  onChangeDepartment(dept: string) {
    // Assign corresponding selected EmpType to model.
    this.regModel.dept = dept;
  }

}
