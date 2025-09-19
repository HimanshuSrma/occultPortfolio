import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ChangeDetectorRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm } from "@angular/forms";
import { FirestoreService } from "../../../services/firestore.service";
import { Router } from "@angular/router";
import { DialogModule } from "primeng/dialog";

type FieldKey =
  | "fullName"
  | "dateOfBirth"
  | "gender"
  | "email"
  | "mobile"
  | "userGoal";
type InvalidFields = Record<FieldKey, boolean>;

@Component({
  selector: "app-input-form",
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule],
  templateUrl: "./input-form.component.html",
  styleUrls: ["./input-form.component.scss"],
})
export class InputFormComponent {
  constructor(
    private fs: FirestoreService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.generateParticles();
  }

  // userData: any = {
  //   fullName: '',
  //   email: '',
  //   mobile: '',
  //   dateOfBirth: '',
  //   gender: 'male',
  //   userGoal: ''
  // };
  userData: any = {
    fullName: "Himmanshu sharma",
    dateOfBirth: "2000-06-05",
    gender: "male",
    email: "name@domain.com",
    mobile: "9876543210",
    userGoal: "NA NA NA NA NA NA NA NA",
  };

  fullName = "Himmanshu sharma";
  dateOfBirth = "2000-06-05";
  gender = "male";
  email = "name@domain.com";
  mobile = "9876543210";
  userGoal = "NA NA NA NA NA NA NA NA";

  @Output() calculationDone = new EventEmitter<any>();

  invalidFields: InvalidFields = {
    fullName: false,
    dateOfBirth: false,
    gender: false,
    email: false,
    mobile: false,
    userGoal: false,
  };

  invalidField: { [key: string]: boolean } = {};
  isSubmitting = false;
  particles: Array<{ x: number; y: number; delay: number }> = [];
  @ViewChild("form") formRef: NgForm | undefined;
  showModal: boolean = false;
  existingUserData: any;
  generateParticles() {
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 6,
      });
    }
  }

  async submitInitialForm(
    form: any,
    confirmed: boolean = false,
    skipAll: boolean = false
  ) {
    if (!confirmed) {
      this.showModal = true;
      return;
    }
    // debugger;

    this.invalidField = {};

    if (form.invalid) {
      // Mark invalid fields for shake animation
      Object.keys(form.controls).forEach((key) => {
        if (form.controls[key].invalid) {
          this.invalidField[key] = true;
          setTimeout(() => {
            this.invalidField[key] = false;
          }, 500);
        }
      });
      return;
    }

    this.isSubmitting = true;

    // Store user data in localStorage or service
    localStorage.setItem("userData", JSON.stringify(this.userData));

    // if (window.location.hostname != 'localhost') {
    let data = {
      name: this.userData?.fullName.trim(),
      dob: this.userData?.dateOfBirth,
      gender: this.userData?.gender,
      email: this.userData?.email,
      mobile: this.userData?.mobile,
      userGoal: this.userData?.userGoal.trim(),
      createdAt: new Date(),
    };

    // await this.fs
    //   .addUser(data)
    //   .then((docRef) => {
    //     debugger
    //     let existingUser = sessionStorage.getItem('existingUser');
    //     if(existingUser){
    //       this.existingUserData = data;
    //       this.cdr.detectChanges();
    //       console.log(`User with email ${data.email} already exists.`, data,docRef);
    //       return;
    //     }else{
    //       console.log('✅ New user added with ID:', data, docRef);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('❌ Failed to add user:', error);
    //   });

    const result = await this.fs.addUser(data);
    // debugger;
    if (!skipAll && result?.exists) {
      console.log("User already exists:", result.data);
      this.existingUserData = result?.data;
      // show toaster or handle accordingly
      if (!this.existingUserData) {
        this.showModal = false;
      } else {
        this.isSubmitting = false;
        return;
      }
    } else {
      this.showModal = false;
      console.log("New user added:", result?.data);
      // success handling
    }

    // }
    // Simulate processing time
    // setTimeout(() => {
    this.calculationDone.emit({
      name: this.userData?.fullName.trim(),
      dob: this.userData?.dateOfBirth,
      gender: this.userData?.gender,
      email: this.userData?.email,
      mobile: this.userData?.mobile,
    });
    // this.router.navigate(['']);
    // }, 2000);
  }

  infoConfirmed(skip: boolean = false) {
    if (this.formRef?.valid) {
      // Access form controls, status, validity, etc.
      this.submitInitialForm(this.formRef, true, skip);
    }
  }

  // async submitForm(form: NgForm) {
  //   if (form.invalid) {
  //     form.control.markAllAsTouched();

  //     this.invalidFields.fullName = !this.fullName.trim();
  //     this.invalidFields.dateOfBirth = !this.dateOfBirth;
  //     this.invalidFields.gender = !this.gender;
  //     this.invalidFields.email = !this.email || !this.email.includes('@');
  //     this.invalidFields.mobile = !this.mobile || !/^\d{10}$/.test(this.mobile);
  //     this.invalidFields.userGoal = !this.userGoal.trim();

  //     setTimeout(() => {
  //       this.invalidFields = {
  //         fullName: false,
  //         dateOfBirth: false,
  //         gender: false,
  //         email: false,
  //         mobile: false,
  //         userGoal: false,
  //       };
  //     }, 400);

  //     return;
  //   }

  //   if (window.location.hostname != 'localhost') {
  //     let data = {
  //       name: this.fullName.trim(),
  //       dob: this.dateOfBirth,
  //       gender: this.gender,
  //       email: this.email,
  //       mobile: this.mobile,
  //       userGoal: this.userGoal.trim(),
  //       createdAt: new Date(),
  //     };

  //     await this.fs
  //       .addUser(data)
  //       .then((docRef) => {
  //         console.log('✅ New user added with ID:', docRef.id);
  //       })
  //       .catch((error) => {
  //         console.error('❌ Failed to add user:', error);
  //       });
  //   }

  //   this.calculationDone.emit({
  //     name: this.fullName.trim(),
  //     dob: this.dateOfBirth,
  //     gender: this.gender,
  //     email: this.email,
  //     mobile: this.mobile,
  //   });
  // }
}
