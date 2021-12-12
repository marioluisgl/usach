import { merge } from 'lodash-es';

export interface ICursesModel {
  _id?: string;
  name?: string;
  date_to_send_1?: string;
  date_to_send_2?: string;
  date_to_review_1?: string;
  date_to_review_2?: string;
  index?: string;
}

export class CursesModel implements ICursesModel {
  _id?: string;
  name?: string;
  date_to_send_1?: string;
  date_to_send_2?: string;
  date_to_review_1?: string;
  date_to_review_2?: string;
  index?: string;

  constructor(options?: ICursesModel) {
      merge(this, this._getDefaults(), options);
  }

  private _getDefaults(): ICursesModel {
    return {
      name: null,
      date_to_send_1: null,
      date_to_send_2: null,
      date_to_review_1: null,
      date_to_review_2: null
    }
  };
}