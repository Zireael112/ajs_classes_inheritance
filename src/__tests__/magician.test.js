import Magician from '../js/Magician';

test('check instance classes Magician', () => {
  const inst = new Magician('Vlad');
  const result = {
    name: 'Vlad',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(inst).toEqual(result);
});
