import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { LoginPage } from './login';
import { IonicModule, NavController, DeepLinker } from 'ionic-angular';
import { NavMock, DeepLinkerMock } from '../../../test-config/mocks-ionic';
import { By } from '@angular/platform-browser';

describe('Login Page', () => {

  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let formUsername;
  let formPassword;
  let btnLogin;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(LoginPage)
      ],
      providers: [
        { provide: DeepLinker, useClass: DeepLinkerMock },
        { provide: NavController, useClass: NavMock }
      ]
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component instanceof LoginPage).toBe(true);
  });

  it('should be initial home page show form input (formControlName="username" type="text")', () => {
    formUsername = fixture.debugElement.query(By.css('[formControlName="username"][type="text"]')).nativeElement;
    expect(formUsername).not.toBeNull();
  });

  it('should be initial home page show form input (formControlName="password" type="password")', () => {
    formPassword = fixture.debugElement.query(By.css('[formControlName="password"][type="password"]')).nativeElement;
    expect(formPassword).not.toBeNull();
  });

  it('should be initial home page show button (class="btn-login")', () => {
    btnLogin = fixture.debugElement.query(By.css('.btn-login')).nativeElement;
    expect(btnLogin).not.toBeNull();
  });

  it('should be fill input have username and without password button is disabled (true)', () => {
    btnLogin = fixture.debugElement.query(By.css('.btn-login')).nativeElement;
    component.username.setValue('username');
    fixture.detectChanges();
    expect(component.username.value).toEqual('username');
    expect(component.password.value).toEqual('');
    expect(btnLogin.disabled).toBe(true);
  });

  it('should be fill input without username and have password button is disabled (true)', () => {
    btnLogin = fixture.debugElement.query(By.css('.btn-login')).nativeElement;
    component.password.setValue('password');
    fixture.detectChanges();
    expect(component.username.value).toEqual('');
    expect(component.password.value).toEqual('password');
    expect(btnLogin.disabled).toBe(true);
  });

  it('should be fill input username and password button is disabled (false)', () => {
    btnLogin = fixture.debugElement.query(By.css('.btn-login')).nativeElement;
    component.username.setValue('username');
    component.password.setValue('password');
    fixture.detectChanges();
    expect(component.username.value).toEqual('username');
    expect(component.password.value).toEqual('password');
    expect(btnLogin.disabled).toBe(false);
  });

  it('should be click login function onLogin()', () => {
    component.username.setValue('username');
    component.password.setValue('password');
    btnLogin = fixture.debugElement.query(By.css('.btn-login'));
    spyOn(component.navCtrl, 'push');
    // btnLogin.triggerEventHandler('click', null);
    component.onLogin()
    expect(component.navCtrl.push).toHaveBeenCalledWith('HomePage');
  });

});