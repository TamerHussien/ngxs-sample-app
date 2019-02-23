import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddActivityComponent } from './add-activity.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivityFormComponent } from '../activity-form/activity-form.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

describe('AddActivityComponent', () => {
    let component: AddActivityComponent;
    let fixture: ComponentFixture<AddActivityComponent>;
    // let store: Store<fromFeature.State>;

    // beforeEach(async(() => {
    //     TestBed.configureTestingModule({
    //         imports: [
    //             BsDatepickerModule.forRoot(),
    //             RouterTestingModule,
    //             SharedModule,
    //             StoreModule.forRoot({
    //                 ...fromRoot.reducers,
    //                 feature: combineReducers(fromFeature.reducer),
    //             }),
    //         ],
    //         declarations: [AddActivityComponent, ActivityFormComponent],
    //         providers: [
    //             {
    //                 provide: ActivatedRoute, useValue: {
    //                     snapshot: {
    //                         params: {
    //                             programId: 1
    //                         }
    //                     },
    //                 }
    //             }

    //         ]
    //     });
    //     store = TestBed.get(Store);
    //     spyOn(store, 'dispatch').and.callThrough();
    //     fixture = TestBed.createComponent(AddActivityComponent);
    //     component = fixture.componentInstance;
    //     fixture.detectChanges();
    //     const payload = { programs: [{ id: 1, name: 'a' }], activities: [{ id: 65, name: 'b' }] };
    //     const action = new FetchDataSuccess(payload);
    //     store.dispatch(action);
    // }));

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });

    // it('should display program name', () => {
    //     component.programName$.subscribe(data => {
    //         expect(data).toBe('a');
    //     });
    // });

});
