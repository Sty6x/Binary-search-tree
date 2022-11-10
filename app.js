#!usr/bin/node

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class Tree{
  constructor(arr){
    this.array =arr;
    this.root = null;
  }
}

const sortedArr = [1,2,3,4,5]
function buildTree(arr,start,end){
  if(start > end) return null;
  let mid  = Math.floor((start+end) /2);
  let root = new Node(arr[mid]);
  root.left = buildTree(arr,start, mid-1)
  root.right = buildTree(arr,mid+1,end);
  return root 
}

//
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null ) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}
const root = buildTree(sortedArr,0,sortedArr.length-1)

function traverse(value,root){
  if(root.data == value){
    return root
  }
  if(value < root.data){
    return traverse(value,root.left)
  } 
  if(value > root.data){
    return traverse(value,root.right)
  }
}

function insert(value,root){
    if(root == null){
    console.log('is null')
    root = new Node(value)
    return root 
  }
  if(value < root.data){
    root.left = insert(value,root.left)
  } 
  if(value > root.data){
    console.log(`value is greater than ${root.data} from ${root}`)
    root.right= insert(value,root.right)
  }
  console.log(root)
  // returns the whole root
  return root
}
console.log(prettyPrint(root))
console.log(insert(6,root))
console.log(prettyPrint(root))
