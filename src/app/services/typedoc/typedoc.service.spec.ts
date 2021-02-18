/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TypedocService } from './typedoc.service';

describe('Service: Typedoc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypedocService]
    });
  });

  it('should ...', inject([TypedocService], (service: TypedocService) => {
    expect(service).toBeTruthy();
  }));
});
