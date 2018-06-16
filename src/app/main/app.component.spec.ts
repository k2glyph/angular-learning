import { TestBed, async } from '@angular/core/testing';
import  AppComponent  from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render pageTitle', ()=> {
    const fixture=TestBed.createComponent(AppComponent);
    const appInstance=fixture.componentInstance;
    expect(appInstance.pageTitle).toBe('Product Management System');
  })
});
