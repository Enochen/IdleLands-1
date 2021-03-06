
import RestrictedNumber from 'restricted-number';

import { Profession } from '../base/profession';

export class Pirate extends Profession {

  static baseHpPerLevel = Profession.baseHpPerLevel + 30;
  static baseMpPerLevel = Profession.baseMpPerLevel + 5;

  static baseHpPerCon = 3;
  static baseHpPerStr = 1;
  static baseMpPerInt = 5;

  static baseConPerLevel = 3;
  static baseDexPerLevel = 2;
  static baseAgiPerLevel = 2;
  static baseStrPerLevel = 3;
  static baseIntPerLevel = 1;

  static classStats = {
    str: (target, baseValue) => target.$personalities && target.$personalities.isActive('Drunk') ? baseValue / 2 : 0
  }

  static setupSpecial(target) {
    target._special.name = 'Bottles';
    target._special.maximum = 99;
    target._special.toMaximum();

    target.$drunk = new RestrictedNumber(0, 100, 0);
  }

  static resetSpecial(target) {
    super.resetSpecial(target);
    delete target.$drunk;
  }
}