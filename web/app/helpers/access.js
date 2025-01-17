import { helper } from '@ember/component/helper';

export default helper(function get([obj, key, accessor]) {
  return obj[key][accessor];
});
