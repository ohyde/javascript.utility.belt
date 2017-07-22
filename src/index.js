import R from 'ramda';

import * as arrayUtils from './utils/arrayUtils';
import * as logicUtils from './utils/logicUtils';
import * as mathsUtils from './utils/mathsUtils';
import * as miscUtils from './utils/miscUtils';
import * as numberUtils from './utils/numberUtils';
import * as objectUtils from './utils/objectUtils';
import * as stringUtils from './utils/stringUtils';

export default R.mergeAll([
  arrayUtils,
  logicUtils,
  mathsUtils,
  miscUtils,
  numberUtils,
  objectUtils,
  stringUtils
])
