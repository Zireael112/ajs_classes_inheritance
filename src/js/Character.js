export default class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;
    const typeHeroes = [
      'Bowerman',
      'Daemon',
      'Magician',
      'Swordsman',
      'Undead',
      'Zombie',
    ];

    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
      this.type = type;
    } else {
      throw new Error("the character's name must be from 2 to 10 letter");
    }
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Error, your character is dead');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
