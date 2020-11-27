/** @format */

// Reverse Link list

// Node Constructor
class Node {
	constructor(element, next = null) {
		this.element = element;
		this.next = next;
	}
}

// Link list constructor
class linkList {
	constructor() {
		// set the head
		this.head = null;
	}

	add(element) {
		var node = new Node(element);
		if (!this.head) {
			this.head = node;
		} else {
			var currentNode = this.head;
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}
	}

	// reverse a node in the link list
	reverseNode(node, previous) {
		var newNode = new Node(node.element, previous);
		if (node.next) {
			return this.reverseNode(node.next, newNode);
		} else {
			return newNode;
		}
	}

	//return the reversed link list
	reversedList() {
		return this.reverseNode(this.head, null);
	}

	reversedList() {
		var node = this.head;
		var previous = null;
		while (node) {
			previous = new Node(node.element, previous);
			node = node.next;
		}
		return previous;
	}
}

// adding node to the end of the list

var carList = new linkList();
carList.add("merceds-benz");
carList.add("bmw");
carList.add("audi");
carList.add("aston-martin");
carList.add("maybach");
carList.add("masserati");
carList.add("rolls-royce");
carList.add("bentley");

console.log(carList.reversedList());
