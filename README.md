![](https://i.imgur.com/1QgrNNw.png)

# JS | Advanced Algorithms

## Data Structures

A [data structure](https://en.wikipedia.org/wiki/Data_structure) is a particular way to organize your dataa in the computer so it can be used efficiently. They can implement one or more [abstract data types](https://en.wikipedia.org/wiki/Abstract_data_type), which specify the operations that can be performed over a data structure.

In this exercise we will implement two different abstract data types that are very common: `stacks` and `queues`. Let's see what both data structures to understand how they work.

### Stacks

An stack is a simple data structure that allows adding and removing elements in a particular order. Every time an element is added, it goes on the top of the stack. The only element that can be removed is the element that was at the top of the stack.

This data structure is also called LIFO queue. LIFO stands for "last in, first out", meaning that the last element we put in the stack, is the first element that will go out.

![](https://i.imgur.com/NcuoeUk.png)

:::info
Think about a stack as if it was a stack of books. You can put a book over the others, but you just can take the book on the top of the stack.
:::

### Queues

Queues are the other abstract data type we are going to see. It's also called as linear data structure, in which the first element is inserted from one end called **rear**, and the deletion of an existing element takes place from the other end called as **front**.

This makes a queue a FIFO data structure, which means that the first element inserted, will be the first element removed.

The process to add an element into queue is called **enqueue**, and the process of removal of an element from queue is called **dequeue**.

![](https://i.imgur.com/Qo1SQQ7.png)

:::info
Think about a queue as if it was a queue in a bank. When you arrive, you are the last in the line, and you have to wait until it's your turn to being attended.
:::

## Exercise

### Introduction

The goal of this exercise is to create a visual layout to show how do stacks and queues work. We will do it by using advanced JavaScript concepts like closures, scope, context, method invocation...

We have created a set of tests to guide you through the abstract data types implementation. After implement the JavaScript functionality, create a visual layout to show how each data structure work.

### Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- Make sure you pass all the tests
- Make sure to use JavaScript closures, scope, shadowing, hoisting, context, and method invocation

### Submission

- Upon completion, run the following commands

	```
	git add .
	git commit -m"done"
	git push origin master
	```

- Navigate to your repo and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/)

### Starter code

Project with Jasmine tests

### First iteration

- Create a stack
- Pass all the tests
- Create a visual layout to show its usage

### Second iteration

- Create a queue
- Pass all the tests
- Create a visual layout to show its usage

### Bonus iteration

- Create a circular queue
- Pass all the tests
- Create a visual layout to show its usage

## Extra Resources

- [Data Structures](https://en.wikipedia.org/wiki/Data_structure)
- [Stacks](http://www.studytonight.com/data-structures/stack-data-structure)
- [Queues](http://www.studytonight.com/data-structures/queue-data-structure)
