import Character from '../js/Character';
import Bowerman from '../js/Bowerman';

test('test error checkname long name', () => {
  expect(() => {
    const inst = new Character('Vladdddddddddddddddd', 'Bowerman');
    return inst;
  }).toThrow();
});

test('test error checkname name is number', () => {
  expect(() => {
    const inst = new Character(1, 'Bowerman');
    return inst;
  }).toThrow();
});

test('test error checkname small name', () => {
  expect(() => {
    const inst = new Character('V', 'Bowerman');
    return inst;
  }).toThrow();
});

test('test levelUp without error', () => {
  const inst = new Bowerman('Vlad');
  inst.levelUp();
  const levelUpResult = {
    name: 'Vlad',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(inst).toEqual(levelUpResult);
});

test('test levelUp with error', () => {
  expect(() => {
    const inst = new Character('Vlad', 'Bowerman');
    inst.health = 0;
    inst.levelUp();
    return inst;
  }).toThrow();
});

test('test was damaged', () => {
  const inst = new Bowerman('Vlad');
  inst.damage(1);
  const result = {
    name: 'Vlad',
    type: 'Bowerman',
    health: 99.25,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(inst).toEqual(result);
});

test('test damage with error', () => {
  expect(() => {
    const inst = new Character('Vlad', 'Bowerman');
    inst.health = 0;
    inst.damage(10);
    return inst;
  }).toThrow();
});

test('test includes', () => {
  expect(() => {
    const inst = new Character('Vlad', 'Tank');
    return inst;
  }).toThrow();
});
