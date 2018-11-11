import _ from 'lodash';

import { BASE_ASSETS_URL } from './constants';

export default function fetchImport(name) {
  const url = BASE_ASSETS_URL + 'data/' + _.trimStart(name, './');
  return () => fetch(url);
}
