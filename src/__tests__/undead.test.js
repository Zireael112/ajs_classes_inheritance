import Undead from '../js/Undead';

test('check instance classes Undead', () => {
  const inst = new Undead('Vlad');
  const result = {
    name: 'Vlad',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(inst).toEqual(result);
});
