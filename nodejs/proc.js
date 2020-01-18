const fs = require('fs')

var data = fs.readFileSync('./data.txt', 'utf8');
var newData = '';
data = data.split('\n');

for (var i = 0; i < data.length; i++) {
  var idx = indexChinese(data[i]);
  var eng = data[i].substring(0, idx - 1);
  var zh_tw = data[i].substring(idx);
  newData += eng + '\t' + zh_tw + '\n';
}

fs.writeFileSync('./new.txt', newData, 'utf8');

function indexChinese(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 0x4E00 && str.charCodeAt(i) <= 0x9FA5) {
      return i;
    }
  }
  return -1;
}