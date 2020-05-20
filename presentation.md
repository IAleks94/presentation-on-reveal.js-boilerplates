# Presentation React

### Slide 1 "What Is React?"

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

### *features:*

+ Declarative:

> React makes it painless to create interactive UIs. Describe how parts of the application interface look in different states and React will efficiently update and render the right components when your data changes.

> Declarative views make your code more predictable and easier to debug.

+ Component-Based:

> Encapsulated components have their own state, and then are combined into complex user interfaces.

> Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

> It’s not such effective in small projects because components are often unique. But it allows reuse of once created components in a large project.

***

### Slide 2 "React Only Updates What’s Necessary"

React elements are simple and cheaper to create in contrast with browsers’ DOM elements. React DOM takes care of updating the DOM to match the React elements.

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

***

### Slide 3 "A Simple Component"

React components implement a **render()** method that takes input data and returns what to display. This example uses an XML-like syntax called JSX.That allows the developer to more easily present the final result. Input data that is passed into the component can be accessed by **render()** via this.props.

### subSlide 1 for Slide 3 "JSX"

JSX produces React “elements”.

React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

Instead of artificially separating technologies by putting markup and logic in separate files, (usually we have an html file containing markup, a JS file containing logic and a css file containing styles) React separates concerns with loosely coupled units called “components” that contain both.(that is, in essence, we are writing HTML inside a JS file).

### subSlide 2 for Slide 3 "styled components (very little)"

We can go further and use styled components that will add styles to the component, but this is a separate, extensive topic. If you have displayed at least "Hello World!" Using React, I advise you to familiarize yourself with styled components.

### subSlide 3 for Slide 3 "Embedding Expressions in JSX"

If you used innerHTML to create elements through JS (which is usually not recommended) then you will be familiar with passing variables to markup.

You can put any valid JavaScript expression inside the curly braces in JSX.

### subSlide 4 for Slide 3 "JSX is an Expression Too"

Most likely you are already familiar with the JS method of the **document** object, **createElement()**, and used it both in functions and loops. JSX is like him.

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

This means that you can use JSX inside of **if** statements and **for** loops, assign it to variables, accept it as arguments, and return it from functions.

### subSlide 5 for Slide 3 "Function and Class Components"

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called **“props”**) and return React elements describing what should appear on the screen.

A component can be declared both through a class and a function:

These two components are equivalent to each other.

### subSlide 6 for Slide 3 "Composing Components"

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

For example, we can create an App component that renders Welcome many times:

***

### Slide 4 "A Stateful Component"

In addition to taking input data (accessed via **this.props**), a component can maintain internal state data (accessed via **this.state**). When a component’s state data changes, the rendered markup will be updated by re-invoking **render()**.

State is similar to props, but it is private and fully controlled by the component.

Note that unlike regular JS, in React, changes to the state object are made through the **setState()** method and not by directly accessing the object key;

***

### Slide 5 "Lifecycle Methods"

We can rewrite previously created Clocks using state and life cycle methods.

In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.

The initial rendering of a component in the DOM is called “mounting”.

Each time the DOM node created by the component is deleted, "unmounting" occurs.

The **componentDidMount()** method is launched after the component has rendered in the DOM - here we will set the timer.

The **componentWillUnmount()** method is launched when the element is "unmounted", in it we delete the timer.

***

### subSlide 6  "Classes and Hooks"

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

In addition to making code reuse and code organization more difficult, we’ve found that classes can be a large barrier to learning React. You have to understand how this works in JavaScript, which is very different from how it works in most languages. You have to remember to bind the event handlers. Without unstable syntax proposals, the code is very verbose. People can understand props, state, and top-down data flow perfectly well but still struggle with classes. The distinction between function and class components in React and when to use each one leads to disagreements even between experienced React developers.

To solve these problems, Hooks let you use more of React’s features without classes. Conceptually, React components have always been closer to functions. Hooks embrace functions, but without sacrificing the practical spirit of React. Hooks provide access to imperative escape hatches and don’t require you to learn complex functional or reactive programming techniques.
