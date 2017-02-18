module.exports = function getBase(base) {
    var syst = 2, temp, string = '', remain;
    if (base.length > 14) {
      return new Array(base.length).join('9');
    }
    while (syst <= +base) {
      temp = +base;
      
      do {
        remain = temp % syst;
        if (remain !== 1) {
          string = '';
          break;
        }
        string = remain + string;
        temp = Math.floor(temp / syst);
      } while (temp !== 0);

      if ( string !== '' ) {
        return syst+'';
      }
      syst++;
    }
};