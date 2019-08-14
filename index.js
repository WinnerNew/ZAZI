var _=require('underscore');
var html = '<h2><%= name %></h2>';
var fn = _.template(html);
html = fn({name: 'AA'})
console.log(html);
console.log(fn.toString())
