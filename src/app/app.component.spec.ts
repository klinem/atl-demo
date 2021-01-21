import { render, screen } from '@testing-library/angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should get the button by role', async () => {
    await render(AppComponent);

    expect(() => screen.getByRole('button')).not.toThrow();
  });
});
