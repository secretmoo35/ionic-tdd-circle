import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HomePage } from './home';
import { IonicModule, NavController, DeepLinker } from 'ionic-angular';
import { NavMock, DeepLinkerMock } from '../../../test-config/mocks-ionic';
import { By } from '@angular/platform-browser';

describe('Home Page', () => {

  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let inputUsernameEl;
  let inputPasswordEl;
  let btnEl;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        { provide: DeepLinker, useClass: DeepLinkerMock },
        { provide: NavController, useClass: NavMock }
      ]
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => {

    expect(comp instanceof HomePage).toBe(true);
    expect(comp['title']).toEqual('My Page');

  });

  it('should be initial homepage show input name="username" type text', () => {

    inputUsernameEl = fixture.debugElement.query(By.css('ion-input[name="username"][type="text"]')).nativeElement;
    expect(inputUsernameEl).not.toBeNull();

  });

  it('should be initial homepage show input name="password" type password', () => {

    inputPasswordEl = fixture.debugElement.query(By.css('ion-input[name="password"][type="password"]')).nativeElement;
    expect(inputPasswordEl).not.toBeNull();

  });

  it('should be initial homepage show button class="btnLogin"', () => {

    btnEl = fixture.debugElement.query(By.css('.btnLogin')).nativeElement;
    expect(btnEl).not.toBeNull();

  });

  it('should be fill input without username and password button is disabled = true', () => {

    btnEl = fixture.debugElement.query(By.css('.btnLogin')).nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(btnEl.disabled).toBe(true);
    });

  });

  // it('should be fill input without username button is disabled = true', () => {
  //   // ผิด ion-input
  //   inputPasswordEl = fixture.debugElement.query(By.css('ion-input[name="password"][type="password"]')).nativeElement;
  //   btnEl = fixture.debugElement.query(By.css('.btnLogin')).nativeElement;
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     inputPasswordEl.value = 'password';
  //     expect(inputPasswordEl.value).toBe('password');
  //     expect(btnEl.disabled).toBe(true);
  //   });

  // });

  // it('should be fill input without password button is disabled = true', () => {
  //   // ผิด ion-input
  //   inputUsernameEl = fixture.debugElement.query(By.css('ion-input[name="username"][type="text"]')).nativeElement;
  //   btnEl = fixture.debugElement.query(By.css('.btnLogin')).nativeElement;
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     inputUsernameEl.value = 'username';
  //     inputUsernameEl.dispatchEvent(new Event('input'));
  //     expect(inputUsernameEl.value).toBe('username');
  //     expect(btnEl.disabled).toBe(true);
  //   });

  // });

  // it('should be fill input username and password button is disabled = false', async(() => {
  //   // ผิด ion-input
  //   inputUsernameEl = fixture.debugElement.query(By.css('ion-input[name="username"][type="text"]')).nativeElement;
  //   inputPasswordEl = fixture.debugElement.query(By.css('ion-input[name="password"][type="password"]')).nativeElement;
  //   btnEl = fixture.debugElement.query(By.css('.btnLogin')).nativeElement;
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     inputUsernameEl.value = 'username';
  //     inputPasswordEl.value = 'password';
  //     expect(inputUsernameEl.value).toBe('username');
  //     expect(inputPasswordEl.value).toBe('password');
  //     expect(btnEl.disabled).toBe(false);
  //   });

  }));

});