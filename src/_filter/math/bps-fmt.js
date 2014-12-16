/**
 * @ngdoc filter
 * @name bpsFmt
 * @kind function
 *
 * @description
 * Convert bits per second numbers into abbreviations.
 * i.e: kbps for 1000, Mbps for 1000^2, Gbps for 1000^3, Tbps for 1000^4
 * e.g: 1000 => 1 kbps, 5170000 => 5.17 Mbps
 */

angular.module('a8m.math.bpsFmt', ['a8m.math'])

  .filter('bpsFmt', ['$math', function ($math) {
    return function (number, decimal) {
      if (isNumber(decimal) && isFinite(decimal) && decimal%1===0 && decimal >= 0 &&
        isNumber(number) && isFinite(number)) {

          if(number < 1e3) {
            return convertToDecimal(number, 0, $math) + ' bps';
          } else if(number < 1e6) {
            return convertToDecimal((number / 1e3), decimal, $math) + ' kbps';
          } else if(number < 1e9) {
            return convertToDecimal((number / 1e6), decimal, $math) + ' Mbps';
          } else if(number < 1e12) {
            return convertToDecimal((number / 1e9), decimal, $math) + ' Gbps';
          } else {
            return convertToDecimal((number / 1e12), decimal, $math) + ' Tbps';
          }
	  } else {
        return "NaN";
	  }
	}
}]);
