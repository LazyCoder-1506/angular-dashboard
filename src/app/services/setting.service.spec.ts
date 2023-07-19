import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SettingService } from './setting.service';
import { Setting } from '../state/setting/setting.model';
import { first } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('SettingService', () => {
  let service: SettingService;
  let controller: HttpTestingController;
  const expectedUrl: string = 'http://localhost:3000/settings';
  const expectedSettings: Setting = {
    layout: "row",
    cardSize: "large",
    chartType: "donut",
    cardOrder: [
      "population",
      "ER",
      "admission",
      "cost",
      "specialist"
    ],
    sectionOrder: [
      "cards",
      "yearly",
      "charts"
    ],
    chartOrder: [
      "age",
      "location"
    ]
  };
  const newSettings: Setting = {
    layout: "column",
    cardSize: "small",
    chartType: "donut",
    cardOrder: [
      "population",
      "admission",
      "ER",
      "cost",
      "specialist"
    ],
    sectionOrder: [
      "yearly",
      "cards",
      "charts"
    ],
    chartOrder: [
      "age",
      "location"
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SettingService]
    });
    service = TestBed.inject(SettingService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetches settings from json-server', () => {
    let actualSettings: Setting | undefined;
    service.fetchSettings().pipe(first()).subscribe(result => {
      actualSettings = result;
    });

    const request = controller.expectOne(expectedUrl);
    request.flush(expectedSettings);
    controller.verify();

    expect(actualSettings).toEqual(expectedSettings);
  });

  it('fails to fetch settings', () => {
    const status = 500;
    const statusText = 'Server error';
    const errorEvent = new ErrorEvent('API error');
  
    let actualError: HttpErrorResponse | undefined;
  
    service.fetchSettings().subscribe(
      () => {
        fail('next handler must not be called');
      },
      (error) => {
        actualError = error;
      },
      () => {
        fail('complete handler must not be called');
      },
    );
  
    controller.expectOne(expectedUrl).error(
      errorEvent,
      { status, statusText }
    );
  
    if (!actualError) {
      throw new Error('Error needs to be defined');
    }
    expect(actualError.error).toBe(errorEvent);
    expect(actualError.status).toBe(status);
    expect(actualError.statusText).toBe(statusText);
  });

  it('updates settings to json-server', () => {
    let actualSettings: Setting | undefined;
    
    service.updateSettings(newSettings).pipe(first()).subscribe(result => {
      actualSettings = result;
    });

    const request = controller.expectOne(expectedUrl);
    request.flush(newSettings);
    controller.verify();

    expect(actualSettings).toEqual(newSettings);
    expect(actualSettings).not.toEqual(expectedSettings);
  });

  it('fails to update settings', () => {
    const status = 500;
    const statusText = 'Server error';
    const errorEvent = new ErrorEvent('API error');
  
    let actualError: HttpErrorResponse | undefined;
  
    service.updateSettings(newSettings).subscribe(
      () => {
        fail('next handler must not be called');
      },
      (error) => {
        actualError = error;
      },
      () => {
        fail('complete handler must not be called');
      },
    );
  
    controller.expectOne(expectedUrl).error(
      errorEvent,
      { status, statusText }
    );
  
    if (!actualError) {
      throw new Error('Error needs to be defined');
    }
    expect(actualError.error).toBe(errorEvent);
    expect(actualError.status).toBe(status);
    expect(actualError.statusText).toBe(statusText);
  });
});
