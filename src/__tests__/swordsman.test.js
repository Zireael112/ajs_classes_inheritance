import Swordsman from '../js/Swordsman';

test('check instance classes Swordsman', () => {
  const inst = new Swordsman('Vlad');
  const result = {
    name: 'Vlad',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(inst).toEqual(result);
});
