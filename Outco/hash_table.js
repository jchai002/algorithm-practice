function HashTable(){
  this.buckets=8;
  this.size=0;
  this.storage=[];
  //initialize all the buckets
  for (var i=0; i<this.buckets; i++){
    this.storage[i]=new Array();
  }
}

HashTable.prototype.hash=function(str,buckets){
  var hash = 5381;
   for (i = 0; i < str.length; i++) {
     char = str.charCodeAt(i);
     hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
   }
   return hash % buckets;
}

HashTable.prototype.insert=function(key,val){
  var bucketNumber=this.hash(key,this.buckets)
  for (var i=0; i<this.storage[bucketNumber].length;i++){
    if(this.storage[bucketNumber][i][0]===key){
      this.storage[bucketNumber][i][1]=val
      console.log('updated the value at the key',key,'in bucket number',bucketNumber,'to',val)
      return
    }
  }
  this.storage[bucketNumber].push([key,val])
  console.log('stored key',key,'in bucket number',bucketNumber, 'with the value',val)
}

HashTable.prototype.delete=function(key){
  var bucketNumber=this.hash(key,this.buckets)
  for (var i=0; i<this.storage[bucketNumber].length;i++){
    if(this.storage[bucketNumber][i][0]===key){
      this.storage[bucketNumber].splice(i,1)
      console.log('Deleteing the key',key,'in bucket number',bucketNumber)
      return
    }
  }
}

HashTable.prototype.retrieve=function(key){
  var bucketNumber=this.hash(key,this.buckets)
  for (var i=0; i<this.storage[bucketNumber].length;i++){
    if(this.storage[bucketNumber][i][0]===key){
      return this.storage[bucketNumber][i]
    }
  }
}
table = new HashTable()

table.insert('cat','meow')
console.log(table.storage[5])
table.insert('hello','world')
table.insert('cat','hissss')
table.insert('meow','yay')
console.log(table.retrieve('hello'))
