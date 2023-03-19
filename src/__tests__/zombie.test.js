import Zombie from '../js/Zombie';

test('check instance classes Zombie', () => {
  const inst = new Zombie('Vlad');
  const result = {
    name: 'Vlad',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(inst).toEqual(result);
});
