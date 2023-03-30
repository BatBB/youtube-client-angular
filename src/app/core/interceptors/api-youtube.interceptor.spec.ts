import { TestBed } from '@angular/core/testing';

import { ApiYoutubeInterceptor } from './api-youtube.interceptor';

describe('ApiYoutubeInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ApiYoutubeInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: ApiYoutubeInterceptor = TestBed.inject(
      ApiYoutubeInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
