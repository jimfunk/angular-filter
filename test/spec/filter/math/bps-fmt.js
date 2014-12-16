'use strict';

describe('bpsFmtFilter', function () {

  var filter;

  beforeEach(module('a8m.math.bpsFmt'));

  beforeEach(inject(function ($filter) {
    filter = $filter('bpsFmt');
  }));

  it('should return the correct display from the number', function() {
    expect(filter(0,2)).toEqual("0 bps");
    expect(filter(5,2)).toEqual("5 bps");
    expect(filter(5.768,2)).toEqual("6 bps");
    expect(filter(1024,0)).toEqual("1 kbps");
    expect(filter(1024,2)).toEqual("1.02 kbps");
    expect(filter(1993,2)).toEqual("1.99 kbps");
    expect(filter(1049901,5)).toEqual("1.0499 Mbps");
    expect(filter(1909234901,2)).toEqual("1.91 Gbps");
    expect(filter(9531909234901,2)).toEqual("9.53 Tbps");

  });

  it('should return NaN if bytes is not a number', function(){
	expect(filter("0",2)).toEqual("NaN");
	expect(filter([0],2)).toEqual("NaN");
	expect(filter({number:0},0)).toEqual("NaN");
  });

  it('should return NaN if decimal point is less than zero or not a number', function(){
	expect(filter(0.45,-1)).toEqual("NaN");
	expect(filter(-0.25,-101)).toEqual("NaN");
	expect(filter(0.45,1.3)).toEqual("NaN");
	expect(filter(0.45,"0")).toEqual("NaN");
	expect(filter(0.45,[3])).toEqual("NaN");
	expect(filter(0.45,{num : 4})).toEqual("NaN");
  });

});
