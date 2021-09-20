import { moduleA } from './module-a';

describe('moduleA', () => {
  it('should work', () => {
    expect(moduleA()).toEqual('module-a yo');
  });
});
