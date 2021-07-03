import {memoize} from 'lodash'
import numeral from 'numeral'
import numeralLocales from 'numeral/locales'

numeral.locale("pt-br");

export default memoize(function (value = 0, options = {}) {
  try {
    const { decimal = true } = options;
    return numeral(value).format(`$ 0,0${decimal ? '.00' : ''}`);
  } catch (e) {
    return "R$ 0,00";
  }
})
