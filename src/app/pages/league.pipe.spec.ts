import { LeaguePipe } from './league.pipe';

describe('LeaguePipe', () => {
  it('create an instance', () => {
    const pipe = new LeaguePipe();
    expect(pipe).toBeTruthy();
  });
});
