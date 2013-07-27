
var super = function (tree){

  var breadth = function (tree) {
    var array = [];
    tree.children.each(function (child){
      array.push(child.value);
    })
    tree.children.each(function (child){
      array.concat(breadth(child));
    })
    return array;
  }

  var result = [];
  result.push(tree.value);
  return result.contact(breadth(tree));
}


//
var walker = function(root_node){
  var node_list = [];
  node_list.push(root_node); //root_node is the root_node of the tree
  var i = 0;

  while(node_list[i]!== undefined){
    for(var j=0; j< node_list[i].children.length; j++){
      node_list.push( node_list[i].children[j] );
    }
    i += 1;
  }

  var result = [];
  for(var k=0; k<node_list.length; k++){
    result.push( node_list[k].value );
  }
  return result;
}

var hash = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

function checkBalance (string) {

};







