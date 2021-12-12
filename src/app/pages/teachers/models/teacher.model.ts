import { merge } from 'lodash-es';

export interface ITeacherModel {
  _id?: string;
  name?: string;
  email?: string;
  role?: string;
  active?: boolean;
}

export class TeacherModel implements ITeacherModel {
  _id?: string;
  name?: string;
  email?: string;
  role?: string;
  active?: boolean;

  constructor(options?: ITeacherModel) {
    merge(this, this._getDefaults(), options);
  }

  private _getDefaults(): ITeacherModel {
    return {
      name: null,
      email: null,
      role: null,
      active: null,
    }
  };
}