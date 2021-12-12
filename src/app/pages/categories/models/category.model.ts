import { merge } from 'lodash-es';

export interface ICategoryModel {
  _id?: string;
  name?: string;
  description?: string;
  active?: boolean;
}

export class CategoryModel implements ICategoryModel {
  _id?: string;
  name?: string;
  description?: string;
  active?: boolean;

  constructor(options?: ICategoryModel) {
      merge(this, this._getDefaults(), options);
  }

  private _getDefaults(): ICategoryModel {
    return {
      name: null,
      description: null,
      active: null,
    }
  };
}