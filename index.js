var _=require('underscore');
var html = '<h2><%= name %></h2>';
var fn = _.template(html);
html = fn({name: 'AA'})
console.log(html);
console.log(fn.toString())
var str = 'abcd';
console.log(str.split('').reverse().join(''));
var st2 = [...str].reverse().join('');
console.log(st2);