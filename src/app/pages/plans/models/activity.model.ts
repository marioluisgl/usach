import { merge } from 'lodash-es';
import { ICategoryModel } from '../../categories/models/category.model';
import { ISubCategoryModel } from '../../categories/models/sub-category.model';

export interface IActivityModel {
  _id?: string;
  title?: string;
  category?: ICategoryModel;
  sub_category?: ISubCategoryModel;
  hours_per_week?: number;
  hours_per_semestre?: number;
  score?: number;
  done?: boolean;
  index?: number
}

export class ActivityModel implements IActivityModel {
  _id?: string;
  title?: string;
  category?: ICategoryModel;
  sub_category?: ISubCategoryModel;
  hours_per_week?: number;
  hours_per_semestre?: number;
  score?: number;
  done?: boolean;
  index?: number

  constructor(options?: IActivityModel) {
      merge(this, this._getDefaults(), options);
  }

  private _getDefaults(): IActivityModel {
    return {
      title: null,
      category: null,
      sub_category: null,
      hours_per_week: null,
      hours_per_semestre: null,
      score: null,
      done: null,
      index: null,
    }
  };
}