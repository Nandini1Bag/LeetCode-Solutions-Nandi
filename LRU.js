//Node class: Represents a node in the doubly linked list with key, 
//value, previous, and next pointers.
class Node {
    constructor(key, val) {
      this.key = key;
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  //LRUCache class:
    //capacity: Maximum size of the cache.
    //cache: A hash map to store key-value pairs and corresponding nodes.
    //head and tail: Dummy nodes for the doubly linked list.
  class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = {};
      this.head = new Node(0, 0);
      this.tail = new Node(0, 0);
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }
    //get(key):If the key exists in the cache, move the corresponding node to the 
    //tail (most recently used position) and return its value.Otherwise, return -1.
    get(key) {
      if (!(key in this.cache)) return -1;
      const node = this.cache[key];
      this.remove(node);
      this.add(node);
      return node.val;   
  
    }
    //put(key, value):If the key already exists, update its value and move it to the tail.
    //Otherwise, create a new node and add it to the tail.If the cache is full, 
    //remove the least recently used item (head.next) from the cache and doubly linked list.
    put(key, value) {
      if (key in this.cache) {
        const node = this.cache[key];
        node.val = value;
        this.remove(node);
        this.add(node);
        return;
      }
      const node = new Node(key, value);
      this.cache[key] = node;
      this.add(node);
      if (Object.keys(this.cache).length > this.capacity) {
        const lru = this.head.next;
        this.remove(lru);
        delete this.cache[lru.key];
      }
    }
  
    //remove(node): Removes a node from the doubly linked list.
    remove(node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    //add(node): Adds a node to the tail of the doubly linked list.
    add(node) {
      node.prev = this.tail.prev;
      node.next = this.tail;
      this.tail.prev.next = node;
      this.tail.prev = node;
    }
  }


// Sample usage
// const lruCache = new LRUCache(2);
// lruCache.put(1, 1); // Cache is {1=1}
// lruCache.put(2, 2); // Cache is {1=1, 2=2}
// console.log(lruCache.get(1)); // Returns 1 and cache is {2=2, 1=1}
// lruCache.put(3, 3); // Evicts key 2, cache is {1=1, 3=3}
// console.log(lruCache.get(2)); // Returns -1 (not found)
// lruCache.put(4, 4); // Evicts key 1, cache is {3=3, 4=4}
// console.log(lruCache.get(1)); // Returns -1 (not found)
// console.log(lruCache.get(3)); // Returns 3
// console.log(lruCache.get(4)); // Returns 4


// Sample usage
// LRU cache with capacity 3
const lru = new LRUCache (3);
lru.put(1, "A");

lru.put(2, "B");

lru.put(3, "C");

lru.put(4, "D");

console.log(lru.get(1));

console.log(lru.get(4));

/* Output: 
-1 
D
*/