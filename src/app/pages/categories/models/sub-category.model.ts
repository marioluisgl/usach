import { merge } from 'lodash-es';
import { ICategoryModel } from './category.model';

export interface ISubCategoryModel {
  _id?: string;
  name?: string;
  category?: ICategoryModel;
  hours_per_week?: number;
  hours_per_semestre?: number;
  score?: number;
  active?: boolean;
}

export class SubCategoryModel implements ISubCategoryModel {
  _id?: string;
  name?: string;
  category?: ICategoryModel;
  hours_per_week?: number;
  hours_per_semestre?: number;
  score?: number;
  active?: boolean;

  constructor(options?: ISubCategoryModel) {
      merge(this, this._getDefaults(), options);
  }

  private _getDefaults(): ISubCategoryModel {
    return {
      name: null,
      category: null,
      hours_per_week: null,
      hours_per_semestre: null,
      score: null,
      active: null,
    }
  };
}