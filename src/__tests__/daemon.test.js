import Daemon from '../js/Daemon';

test('check instance classes Daemon', () => {
  const inst = new Daemon('Vlad');
  const result = {
    name: 'Vlad',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(inst).toEqual(result);
});
