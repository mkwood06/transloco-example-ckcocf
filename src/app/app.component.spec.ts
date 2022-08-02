import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { By } from '@angular/platform-browser';
import en from '../assets/i18n/en.json';
import es from '../assets/i18n/es.json';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslocoTestingModule.withLangs(
          {
            en,
            es
          },
          {
            defaultLang: 'es'
          }
        )
      ],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should work', function() {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.innerText).toBe('home spanish');
  });
});
