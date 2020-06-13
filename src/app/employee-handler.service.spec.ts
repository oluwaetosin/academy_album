import { TestBed } from '@angular/core/testing';

import { EmployeeHandlerService } from './employee-handler.service';

describe('EmployeeHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeHandlerService = TestBed.get(EmployeeHandlerService);
    expect(service).toBeTruthy();
  });
});
