import { TestBed, async } from '@angular/core/testing';
import AppComponent from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        SidebarComponent,
        HeaderComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render pageTitle', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appInstance = fixture.componentInstance;
    expect(appInstance.pageTitle).toBe('User Management System');
  });
});
