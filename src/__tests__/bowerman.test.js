import Bowerman from '../js/Bowerman';

test('check instance classes Bowerman', () => {
  const inst = new Bowerman('Vlad');
  const result = {
    name: 'Vlad',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(inst).toEqual(result);
});
