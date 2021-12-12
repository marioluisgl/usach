import { merge } from 'lodash-es';
import { ICursesModel } from '../../curses/models/curses.model';
import { ITeacherModel } from '../../teachers/models/teacher.model';

export interface IPlansModel {
  _id?: string;
  course?: ICursesModel | string;
  semestre?: string;
  professor?: ITeacherModel | string;
  score?: number;
  state?: string;
  index?: number
}

export class PlansModel implements IPlansModel {
  _id?: string;
  course?: ICursesModel | string;
  semestre?: string;
  professor?: string;
  score?: number;
  state?: string;
  index?: number

  constructor(options?: IPlansModel) {
      merge(this, this._getDefaults(), options);
  }

  private _getDefaults(): IPlansModel {
    return {
      course: null,
      semestre: null,
      professor: null,
      score: null,
      state: null,
      index: null
    }
  };
}