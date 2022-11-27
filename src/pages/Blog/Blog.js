import React from 'react';
import useTitle from '../../hooks/useTitle/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='w-11/12 mx-auto px-10 my-10'>
            <div className='my-10 mx-8 bg-gray-100 p-10 rounded-xl shadow-stone-600 shadow-lg'>
                <h1 className='text-xl md:text-3xl font-bold'> Question: What are the different ways to manage a state in a React application?</h1>
                <p className='mt-3 text-justify'>
                    <h1 className='text-base md:text-lg lg:text-2xl font-bold'>The Four Kinds of React State to Manage</h1>
                    <div>
                        <p className='text-lg md:text-xl font-semibold md:font-bold'>1. Local state</p>
                        <p className='md:font-semibold'>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.useState is the first tool you should reach for to manage state in your components.
                            It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).
                        </p>
                    </div>
                    <div>
                        <p className='text-lg md:text-xl font-semibold md:font-bold'>1. Global state</p>
                        <p className='md:font-semibold'>Once you attempt to manage state across multiple components, things get a bit trickier.

                            You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.

                            What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.

                            To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.</p>
                    </div>
                    <div>
                        <p className='text-lg md:text-xl font-semibold md:font-bold'>1. Server state</p>
                        <p className='md:font-semibold'>Server state can be deceptively challenging to manage.

                            At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.</p>
                    </div>
                    <div>
                        <p className='text-lg md:text-xl font-semibold md:font-bold'>1. URL state</p>
                        <p className='md:font-semibold'>To end a difficult topic on a positive note, URL state is largely already managed for you if you are using a framework like Next.js or the current version of React Router.

                            URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.</p>
                    </div>
                </p>
            </div>
            <div className='my-10 mx-8 bg-gray-100 p-10 rounded-xl shadow-stone-600 shadow-lg'>
                <h1 className='text-xl md:text-3xl font-bold'>Question: How does prototypical inheritance work?</h1>
                <p className='md:font-semibold'>The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype. Note: The property of an object that points to its prototype is not called prototype .
                </p>
            </div>
            <div className='my-10 mx-8 bg-gray-100 p-10 rounded-xl shadow-stone-600 shadow-lg'>
                <h1 className='text-xl md:text-3xl font-bold'>Question: What is a unit test? Why should we write unit tests?</h1>
                <p className='md:font-semibold'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. <br />
                    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                </p>
            </div>
            <div className='my-10 mx-8 bg-gray-100 p-10 rounded-xl shadow-stone-600 shadow-lg'>
                <h1 className='text-xl md:text-3xl font-bold'>Question: React vs Angular vs Vue?</h1>
                <h1 className='text-base md:text-lg lg:text-2xl font-bold'>1. React.Js</h1>
                <p className='md:font-semibold'>React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.
                </p>
                <h1 className='text-base md:text-lg lg:text-2xl font-bold'>2. Angular.Js</h1>
                <p className='md:font-semibold'>Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.
                </p>
                <h1 className='text-base md:text-lg lg:text-2xl font-bold'>3. Vue.Js</h1>
                <p className='md:font-semibold'>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
                </p>
            </div>
        </div>
    );
};

export default Blog;