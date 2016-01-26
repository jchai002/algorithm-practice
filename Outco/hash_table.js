function HashTable() {
  this.buckets = 8;
  this.size = 0;
  this.storage = [];
  //initialize all the buckets
  for (var i = 0; i < this.buckets; i++) {
    this.storage[i] = new Array();
  }
}

HashTable.prototype.hash = function(str, buckets) {
  var hash = 5381;
   for (i = 0; i < str.length; i++) {
     char = str.charCodeAt(i);
     hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
   }
   return hash % buckets;
};

HashTable.prototype.insert = function(key, val) {
  var bucketNumber = this.hash(key, this.buckets);
  for (var i = 0; i < this.storage[bucketNumber].length; i++) {
    if (this.storage[bucketNumber][i][0] === key) {
      this.storage[bucketNumber][i][1] = val;
      console.log('updated the value at the key', key, 'in bucket number', bucketNumber, 'to', val);
      return;
    }
  }
  this.storage[bucketNumber].push([key, val]);
  this.size++;
  console.log('stored key', key, 'in bucket number', bucketNumber, 'with the value', val);
  if (this.loadFactorCritical()) {
    this.resize();
  }
};

HashTable.prototype.delete = function(key) {
  var bucketNumber = this.hash(key, this.buckets);
  for (var i = 0; i < this.storage[bucketNumber].length; i++) {
    if (this.storage[bucketNumber][i][0] === key) {
      this.storage[bucketNumber].splice(i, 1);
      this.size--;
      console.log('Deleteing the key', key, 'in bucket number', bucketNumber);
      return;
    }
  }
};

HashTable.prototype.retrieve = function(key) {
  var bucketNumber = this.hash(key, this.buckets);
  for (var i = 0; i < this.storage[bucketNumber].length; i++) {
    if (this.storage[bucketNumber][i][0] === key) {
      return this.storage[bucketNumber][i];
    }
  }
};

HashTable.prototype.loadFactorCritical = function() {
  var loadFactor = this.size / this.buckets;
  if (loadFactor > 0.75) {
    console.log('Load Factor is', loadFactor + ',', 'critical Load Factor reached!');
    return true;
  } else {
    console.log('Load Factor is', loadFactor + ',', 'status: ok');
    return false;
  }
};


HashTable.prototype.resize = function() {
console.log('Resizing...');
this.buckets = this.buckets * 2;
var tempStorage = [];
for (var i = 0; i < this.buckets; i++) {
  tempStorage[i] = new Array();
}

  for (var i = 0; i < this.storage.length; i++) {
    for (var j = 0; j < this.storage[i].length; j++) {
      var key = this.storage[i][j][0];
      var val = this.storage[i][j][1];
      var bucketNumber = this.hash(key, this.buckets);
      tempStorage[bucketNumber].push([key, val]);
        console.log('storing key', key, 'in new bucket number', bucketNumber, 'with the value', val);
    }
  }
  this.storage = tempStorage;
  tempStorage = null;
  console.log('finished resizing, new hash table:', this);
};
table = new HashTable();

table.insert('cat', 'meow');
table.insert('hello', 'world');
table.insert('cat', 'hissss');
table.insert('meow', 'yay');
table.insert('dog', 'woof');
table.insert('homer', 'doh!!');
table.insert('dragon', 'roar!');
table.insert('alien', 'pew pew!');
