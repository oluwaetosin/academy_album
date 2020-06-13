import { EmployeeComponent } from './employee/employee.component';
import { Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NewTraineeComponent } from './new-trainee/new-trainee.component';


export const routes: Routes = [
                        {
                            path: '',
                            redirectTo : 'home',
                            pathMatch: 'full'
                        },
                        {
                            path: 'home',
                            component: HomeComponent
                        },
                        {
                            path: 'reactiveform',
                            component: ReactiveformComponent
                        },
                        {
                            path : 'form',
                            component: FormComponent
                        },
                        {
                            path : 'trainee/new',
                            component: NewTraineeComponent
                        },
                        {
                          path : 'employee',
                          component: EmployeeComponent
                        },
                        {
                            path: '**',
                            component: ReactiveformComponent
                        }
];


