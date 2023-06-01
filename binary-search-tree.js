"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(sought) {
    let curr = this;
    console.log("curr=", curr, "val=", sought);
    // if(curr.val === null) return undefined;
    //check if equal
    if (curr.val === sought) return curr;
    //check less
    if (sought < curr.val) {
      if(curr.left === null){
        return undefined;
      } else {
        return curr.left.findRecursively(sought);
      }
    } else {
      if(curr.right === null) {
        return undefined;
      } else {
        return curr.right.findRecursively(sought);
      }
    }
  }

/** insertRecursively(val): Starting at the invoking node, insert a new node
 * into the BST with value val. Returns the inserted node. Uses recursion. */

insertRecursively(val) {
  let curr = this;
  //check for equality
  if (curr.val === val) {
    return this;
  }
  //if less than go left
  if (val < curr.val) {
    //check if left is null... ifso, set it to left and return this
    if (curr.left === null) {
      curr.left = new Node(val);
      return this;
    }
    //if not, call fn again on this.left
    else {
      return curr.left.insertRecursively(val);
    }
  }
  //if greater than go right
  else if (val > curr.val) {
    if (curr.right === null) {
      curr.right = new Node(val);
      return this;
    }
    //if not, call fn again on this.left
    else {
      return curr.right.insertRecursively(val);
    }
  }
}

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
* Returns an array of visited nodes. */

dfsPreOrder() {

}

/** dfsInOrder(): Traverse from the invoking node using in-order DFS.
* Returns an array of visited nodes. */

dfsInOrder() {

}

/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
* Returns an array of visited nodes. */

dfsPostOrder() {

}

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    //check if equal
    let curr = this.root;
    if (curr.val === val) {
      return this;
    }
    while (curr.val) {
      //check if less than
      if (val < curr.val) {
        if (curr.left !== null) {
          curr = curr.left;
        } else {
          curr.left = newNode;
          return this;
        }
        //check if greater than
      } else if (val > curr.val) {
        if (curr.right !== null) {
          curr = curr.right;
        } else {
          curr.right = newNode;
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    else {
      this.root.insertRecursively(val);
      return this;
    }
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return undefined;
    }
    //check if equal
    let curr = this.root;

    while (curr) {
      if (curr.val === val) return curr;
      if (val < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.root === null) {
      return undefined;
    }
    else {
      return this.root.findRecursively(val);
    }
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {

  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
