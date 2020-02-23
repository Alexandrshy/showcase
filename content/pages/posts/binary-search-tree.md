---
template: post
title: Data structures. Binary Search Tree in JavaScript. Part 1
slug: binary-search-tree
lang: en
hasTranslation: false
draft: false
date: 2019-08-26T09:16:00.000Z
tags:
  - javascript
  - beginners
  - webdev
  - programming
---
In parallel to a series of articles where I make out [question for interviews with Frontend developers](https://dev.to/alexandrshy/frontend-job-interview-questions-1-html-questions-mej) I decided to touch on a more practical topic — algorithms and data structures. In these articles, we'll try to analyze Binary Search Trees and write our implementation in JavaScript.

## Tree

A tree's a structure in which each node can have zero or more subnodes — "children". For example, a tree might look like this

![A tree with company structure](https://thepracticaldev.s3.amazonaws.com/i/ui5uw8s48gd8rxgzg2xt.jpg)

This tree shows the structure of the company. Nodes represent people or departments, lines represent connections and relationships. The tree is the most effective way to represent and store such information.

## Binary Search Tree

The binary search tree's similar to the tree in the example above, but it has a number of features:

- Each node has no more than two children
- These two children are often called *left child* and *right child*, where the value of *left child* is always less than the value of the parent node, and the value of *right child* is always greater than the value of the parent node

An example of such a tree

![Binary Search Tree](https://thepracticaldev.s3.amazonaws.com/i/gsg7awvtcomi61g31g1g.jpg)

Well, now we have a visual representation of the binary search tree and the rules by which it's built. Let's implement it in JavaScript!

Let's start by describing one node of the binary search tree. 

```javascript
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
```

Here we create a new instance of Node with three parameters `data`, `left` and `right`.

- `data` - The value that this node stores
- `left` - Pointer to the left node in the Node tree
- `right` - Pointer to the right node in the Node tree

We just describe the nodes for the binary search tree, now let's think about the basic interface. The base interface must consist of three methods:

1. Adding a new value of the tree
1. Finding for a value in the tree
1. Removing a value from the tree

Let's analyze each method separately.

### Adding a new value of the tree

Suppose we have a tree of one node — the root node's 13. And we add a new node with a value of 8.

![Adding a new value of the tree](https://thepracticaldev.s3.amazonaws.com/i/yjzo83jxcs2237m6ps5m.jpg)

Because the value of 8 is less than 13, it becomes the left child. Then we add a node with a value of 6. When adding 6, it becomes the left child of 8, since 6 is less than 13 (so we go to the left) and less than 8.

![Adding a new value of the tree](https://thepracticaldev.s3.amazonaws.com/i/8mlp39b66ccs13ih0c4x.jpg)

When we add a node with a value of 37 it becomes the right child for 8, since 37 is greater than 8. Repeating the same algorithm for 11, 12, 24, 42, 16, 29, 55 we'll get such a binary search tree.

![Adding a new value of the tree](https://thepracticaldev.s3.amazonaws.com/i/vu0wbln6c08co49d77nn.jpg)

We got a tree with root node 8 and depth 3 (this means that the farthest node from the root's at three nodes).

Let's move on to the code:

```javascript
class BST {
  constructor() {
    /**
     * Pointer to the root node in the tree
     */
    this.root = null;
  }

  /**
   * Adds some value to the tree
   * @param {number} data The value to add into the tree
   */
  add(data) {}

  /**
   * Determines if a given value exists in the tree
   * @param {number} data The value to find
   */
  search(data) {}

  /**
   * Remove the value from the tree
   * @param {number} data The node to be removeed
   */
  remove(data) {}
}
```

The method `add` must traverse the tree to find the correct location to insert a new element into the tree. Duplicate elements shouldn't be added to the tree. Implement the method `add`:

```javascript
add(data) {
  const node = new Node(data);
  /**
   * Check if there're nodes in the tree
   */
  if (this.root === null) {
    this.root = node;
  } else {
    /**
     * Recursively traverse
     * @param {Object} current Current node
     */
    const searchNode = function(current) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = node;
          return;
        } else {
          return searchNode(current.left);
        }
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = node;
          return;
        } else {
          return searchNode(current.right);
        }
      } else {
        return null;
      }
    };
    return searchNode(this.root);
  }
};
```

Firstly we created a node to insert into the tree and named it just `node`. Then we checked if we have nodes in the current tree, if not we save in `root` the value from the variable `node`. Now we come to the biggest part, but don't worry, it isn't difficult. We create a variable `current` in which we write the parent node. After that, we start checking the value of the new element and value of the `current`. If the value of the new element is less than `current` we'll work with the left node, if more we'll work with the right node. If there isn't value in the left (right) node we write it there, but if there is then we update `current`. And the cycle will repeat anew.

Congratulations! We wrote the first method for our tree 😀

Before we go further, let's make sure that our solution works correctly, and for this, we'll write a new simple method.

```javascript
toString() {
  return JSON.stringify(this.root);
};
```

And now let's "create" our tree

```javascript
const tree = new BST();
tree.add(13);
tree.add(3);
tree.add(37);
```

Print the result

```javascript
console.log(tree.toString());

// {"data":13,"left":{"data":3,"left":null,"right":null},"right":{"data":37,"left":null,"right":null}}
```

Everything works! 🙂 But we can't stop, let's now implement the search method.

### Searching for a value in the tree

The search algorithm's similar to the algorithm that we discussed earlier. Starting with the root element, check the value of the nodes. If it's less than the current node goes to the left if more to the right. If there are no more nodes to check, then the item you're looking for isn't in the tree.

```javascript
search(data) {
  /**
   * Recursively traverse
   * @param {Object} current Current node
   * @returns {boolean} True if the value is found in the tree, false if not
   */
  const searchNode = function(current) {
    if (current === null) return false;
    if (data < current.data) return searchNode(current.left);
    if (data > current.data) return searchNode(current.right);
    return true;
  };
  return searchNode(this.root);
};
```

The search function's ready. We just have to check it.

```javascript
const tree = new BST();
tree.add(13);
tree.add(3);
tree.add(37);
tree.search(13); // true
tree.search(37); // true
tree.search(42); // false
```

Everything works fine ☺️ We have to implement the remove method.

### Removing a value from the tree

Perhaps this's the most complex method from our interface. The logic of deleting a node can be divided into three cases:

1. Removing a node that doesn't have children
1. Removing a node that has only one child
1. Removing a node that has two children

To make out each of the cases, let's return to the tree that we considered earlier

![Binary Search Tree](https://thepracticaldev.s3.amazonaws.com/i/gsg7awvtcomi61g31g1g.jpg)

#### Removing a node that doesn't have children

Suppose we want to remove a node with a value of 12. It's very simple, we need to find this node in the tree and just replace it with `null`. As a result, we get an updated tree.

![Binary Search Tree](https://thepracticaldev.s3.amazonaws.com/i/4cocxru186v3djdwivvm.jpg)

#### Removing a node that has only one child

Suppose we want to remove a node with a value of 42. Here the algorithm's similar to the previous one, we need to find this node in the tree, but after that, we found it we need to move the child nodes to the place of the removed node. In our case, instead of 42, we write 55.

![Binary Search Tree](https://thepracticaldev.s3.amazonaws.com/i/qgk492djacn0u0enjvjl.jpg)

#### Removing a node that has two children

Suppose we want to remove a node with a value of 37. This's probably the most difficult case to remove a node. We need to find the best replacement for the removed node by traversing the subtrees. The approach to finding the best replacement node may be different, it's important that the rules for the left child node and right child node aren't violated. We'll use this algorithm: we find the left child node at the node to be removed, then find the largest value for this subtree (it's always the values of the right child node). And then replace the removed node with a new onde. In our case, instead of 37, we write 29.

![Binary Search Tree](https://thepracticaldev.s3.amazonaws.com/i/qfbraav9kvuhnfui40tn.jpg)

Now let's implement the `remove` method

```javascript
remove(data) {
  /**
   * Recursively traverse
   * @param {Object} current Current node
   * @param {number} data Node to remove
   */
  const removeNode = function(current, data) {
    /**
     * If the tree is empty just exit
     */
    if (current === null) return null;
    /**
     * Determine which node to traverse
     */
    if (data < current.data) {
      current.left = removeNode(current.left, data);
    } else if (data > current.data) {
      current.right = removeNode(current.right, data);
    } else {
      if (current.left === null && current.right === null) return null;
      if (current.left === null) return current.right;
      if (current.right === null) return current.left;
      let replacement = current.left;
      let replacementParent = current;
      /**
       * Find the best replacement
       */
      while (replacementParent.right !== null) {
        replacementParent = replacement;
        replacement = replacement.right;
      }
      current.data = replacementParent.data;
      current.left = removeNode(current.left, replacementParent.data);
    }
    return current;
  };
  this.root = removeNode(this.root, data);
};
```

The method is ready. We just have to check it.

```javascript
const tree = new BST();
tree.add(13);
tree.add(8);
tree.add(6);
tree.add(11);
tree.add(12);
tree.add(37);
tree.add(24);
tree.add(42);
tree.add(16);
tree.add(29);
tree.add(55);
tree.remove(90);
tree.remove(12);
tree.remove(42);
tree.remove(37);
```

Print the result

```javascript
console.log(tree.toString());

// {"data":13,"left":{"data":8,"left":{"data":6,"left":null,"right":null},"right":{"data":11,"left":null,"right":null}},"right":{"data":29,"left":{"data":24,"left":{"data":16,"left":null,"right":null},"right":null},"right":{"data":55,"left":null,"right":null}}}
```

Everything is good 😌 I understand this method may seem a little complicated so let's visualize once again the removal of the node. To do this, we’ll use [binary search tree visualizer](https://www.cs.usfca.edu/~galles/visualization/BST.html).

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/5rns0v7b2r5vc68yp9bh.gif)

You can build your own binary search tree and experiment, it will give you a better understanding of the topic.

## Conclusion

We have considered how to build a binary search tree. We have reviewed the basic interface of the binary search tree with methods: add, search and remove. We wrote our own implementation in JavaScript (source code on [GitHub](https://github.com/Alexandrshy/articles/blob/master/algorithms/binary-search-tree/binary-search-tree.js) and [Jsfiddle](https://jsfiddle.net/cvLs9qd3/)). That's all for now in the next part we'll discuss new methods for our implementation and look at practical tasks [Leetcode](https://leetcode.com/) and [Hackerrank](https://www.hackerrank.com/).

Thank you for your attention and have a nice day 👋
