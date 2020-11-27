/** @format */

function Node(element) {
	this.element = element;
	this.next = null;
}

function linkList() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.reverse = reverse;
	this.display = display;
}

function find(item) {
	var currNode = this.head;
	while (currNode.element !== item) {
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var curr = this.find(item);
	newNode.next = curr.next;
	curr.next = newNode;
}

function display() {
	var currNode = this.head;
	while (!(currNode.next === null)) {
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

// function reverse(head) {
// 	var prev = null;
// 	var next = null;
// 	var currNode = head;

// 	while (currNode !== null) {
// 		next = currNode.next;
// 		currNode.next = prev;
// 		prev = currNode;
// 		currNode = next;
// 	}
// 	return prev;
// }

function reverse(head) {
	var previous = null;
	var next = null;

	while (head !== null) {
		next = head.next;
		head.next = previous;
		previous = head;
		head = next;
	}
	return previous;
}

// function reverse(head) {
// 	let node = head,
// 		previous,
// 		temp;

// 	while (node) {
// 		// saving the node before overwriting it
// 		temp = node.next;

// 		// reversing the pointer
// 		node.next = previous;

// 		// moving forward in the list
// 		previous = node;
// 		node = temp;
// 	}
// 	return previous;
// }

var carList = new linkList();
carList.insert("benz", "head");
carList.insert("bmw", "benz");
carList.insert("audi", "bmw");
carList.insert("aston-martin", "audi");

carList.display();
// console.log(reverse(carList));
