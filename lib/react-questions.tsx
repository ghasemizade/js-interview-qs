"use client"

export type Difficulty = "junior" | "mid" | "senior"

export interface Question {
    id: number
    question: string
    options: string[]
    correct: number
    explanation: string
    difficulty: Difficulty
}

export const reactQuestions: Question[] = [
    // JUNIOR DEVELOPER
    {
        id: 1,
        question: "What is a React component?",
        options: [
            "A JavaScript function or class that returns JSX",
            "A CSS class for styling",
            "A database table",
            "A Next.js configuration file",
        ],
        correct: 0,
        difficulty: "junior",
        explanation:
            "A React component is a JavaScript function or class that returns JSX to describe what should appear on the screen. Components are reusable and can accept props as inputs.",
    },
    {
        id: 2,
        question: "What do props do in React?",
        options: [
            "Store the component's internal state",
            "Pass data from parent to child component",
            "Create a connection to the database",
            "Handle component styling",
        ],
        correct: 1,
        difficulty: "junior",
        explanation:
            "Props are arguments passed to React components, allowing parent components to pass data to child components. Props are read-only and cannot be modified by the child component.",
    },
    {
        id: 3,
        question: "What does the useState hook do?",
        options: [
            "Fetches data from an API",
            "Creates state in a functional component",
            "Connects to a database",
            "Imports a component",
        ],
        correct: 1,
        difficulty: "junior",
        explanation:
            "useState is a Hook that lets you add state to functional components. It returns an array with the current state value and a function to update it. Example: const [count, setCount] = useState(0);",
    },
    {
        id: 4,
        question: "What is JSX?",
        options: [
            "A new JavaScript language",
            "A syntax extension to JavaScript that looks like HTML",
            "A CSS framework",
            "A database query language",
        ],
        correct: 1,
        difficulty: "junior",
        explanation:
            "JSX is a syntax extension to JavaScript that lets you write HTML-like code in JavaScript. It gets compiled to React.createElement() calls and allows you to describe UI declaratively.",
    },
    {
        id: 5,
        question: "How do you handle click events in React?",
        options: ["onclick='handleClick()'", "onClick={handleClick}", "@click='handleClick()'", "on-click={handleClick}"],
        correct: 1,
        difficulty: "junior",
        explanation:
            "React uses camelCase event handlers. You pass a function reference (not a function call) to the onClick attribute. Example: <button onClick={handleClick}>Click</button>",
    },
    {
        id: 6,
        question: "What is the useEffect hook used for?",
        options: [
            "Managing component styling",
            "Handling side effects in functional components",
            "Fetching props",
            "Creating child components",
        ],
        correct: 1,
        difficulty: "junior",
        explanation:
            "useEffect lets you perform side effects in functional components. It runs after the component renders and is used for data fetching, subscriptions, and manually changing the DOM.",
    },
    {
        id: 7,
        question: "What will happen if you don't include dependencies in useEffect?",
        options: [
            "The effect will run once on mount",
            "The effect will run after every render",
            "The effect will never run",
            "React will throw an error",
        ],
        correct: 1,
        difficulty: "junior",
        explanation:
            "Without a dependency array, useEffect runs after every render. With an empty array [], it runs once. With specific dependencies, it runs when those dependencies change.",
    },
    {
        id: 8,
        question: "How do you conditionally render a component in React?",
        options: [
            "Use if/else statements in JSX",
            "Use ternary operator or && operator",
            "Use v-if directive",
            "Use *ngIf directive",
        ],
        correct: 1,
        difficulty: "junior",
        explanation:
            "You can use ternary operators: {condition ? <Component /> : null} or && operator: {condition && <Component />}. You cannot use if/else directly in JSX.",
    },
    {
        id: 9,
        question: "What is the key prop used for in lists?",
        options: [
            "To style list items",
            "To help React identify which items have changed, been added, or removed",
            "To sort the list",
            "To add animations to the list",
        ],
        correct: 1,
        difficulty: "junior",
        explanation:
            "The key prop helps React identify which items have changed. Use a unique, stable identifier (not index if the list can reorder). This improves performance and preserves component state correctly.",
    },
    {
        id: 10,
        question: "What is the difference between controlled and uncontrolled components?",
        options: [
            "They are the same",
            "Controlled: React state controls input value. Uncontrolled: DOM controls input value",
            "Uncontrolled: React state controls input. Controlled: DOM controls input",
            "Only controlled components exist in React",
        ],
        correct: 1,
        difficulty: "junior",
        explanation:
            "Controlled components have their state managed by React via onChange handlers. Uncontrolled components manage their own state and use refs to get values. Controlled components are generally preferred.",
    },

    // MID-LEVEL DEVELOPER
    {
        id: 11,
        question: "What is a custom hook?",
        options: [
            "A built-in React hook",
            "A reusable function that encapsulates stateful logic",
            "A hook for custom CSS",
            "A hook only for class components",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "A custom hook is a JavaScript function that uses one or more React hooks. It allows you to extract component logic into reusable functions. Custom hooks must start with 'use' to follow the naming convention.",
    },
    {
        id: 12,
        question: "What is the Context API used for?",
        options: [
            "Making HTTP requests",
            "Sharing state across components without prop drilling",
            "Styling components",
            "Creating animations",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "Context API allows you to share state globally without passing props through every component level (prop drilling). Use createContext(), Provider, and useContext() to implement it.",
    },
    {
        id: 13,
        question: "What does React.memo do?",
        options: [
            "Caches the entire application",
            "Memoizes a component to prevent unnecessary re-renders if props haven't changed",
            "Clears the browser cache",
            "Stores data in memory",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "React.memo is a higher-order component that memoizes a component and only re-renders if its props change. It's useful for optimizing performance but shouldn't be used everywhere.",
    },
    {
        id: 14,
        question: "What is the useCallback hook used for?",
        options: [
            "Calling callbacks after rendering",
            "Memoizing a function to maintain referential equality across renders",
            "Handling errors in callbacks",
            "Creating callback components",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "useCallback memoizes a function, returning the same function reference if dependencies haven't changed. This is useful when passing callbacks to memoized child components to prevent unnecessary re-renders.",
    },
    {
        id: 15,
        question: "What is the useMemo hook used for?",
        options: [
            "Memoizing expensive computations to avoid recalculating on every render",
            "Creating memo components",
            "Storing data in browser cache",
            "Handling API requests",
        ],
        correct: 0,
        difficulty: "mid",
        explanation:
            "useMemo memoizes an expensive computation and only recalculates when dependencies change. Use it when calculations are computationally expensive but avoid overusing it as it has its own performance cost.",
    },
    {
        id: 16,
        question: "What are refs used for in React?",
        options: [
            "Managing component state",
            "Accessing DOM nodes or component instances directly",
            "Passing props to children",
            "Creating new components",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "Refs allow you to access DOM nodes or class component instances directly. Created with useRef(), refs persist across renders and don't cause re-renders. Use sparingly; state and props are usually better.",
    },
    {
        id: 17,
        question: "What is the useReducer hook?",
        options: [
            "A hook for reducing file sizes",
            "A hook for managing complex state logic similar to Redux",
            "A hook for API requests",
            "A hook for animations",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "useReducer is an alternative to useState for managing complex state. It takes a reducer function and initial state, and returns the current state and a dispatch function.",
    },
    {
        id: 18,
        question: "What is prop drilling?",
        options: [
            "A technique to optimize props",
            "Passing props through multiple levels of components unnecessarily",
            "Drilling holes in components",
            "A CSS technique",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "Prop drilling occurs when you pass props through intermediate components that don't use them. Context API and state management libraries like Redux can help avoid this problem.",
    },
    {
        id: 19,
        question: "What is the fragment component (<> </>) used for?",
        options: [
            "Creating styled fragments",
            "Grouping multiple elements without adding extra DOM nodes",
            "Creating fragments for caching",
            "Styling fragments",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "Fragments allow you to group multiple elements without adding an extra wrapper div to the DOM. Use <></> or <React.Fragment></React.Fragment> to keep the DOM clean.",
    },
    {
        id: 20,
        question: "What is the purpose of error boundaries?",
        options: [
            "Catching styling errors",
            "Catching JavaScript errors in child components to prevent the whole app from crashing",
            "Validating component props",
            "Managing API errors",
        ],
        correct: 1,
        difficulty: "mid",
        explanation:
            "Error boundaries are React components that catch JavaScript errors in child components, log those errors, and display a fallback UI. They don't catch errors in event handlers or async code.",
    },

    // SENIOR DEVELOPER
    {
        id: 21,
        question: "What is React's virtual DOM?",
        options: [
            "A virtual server for hosting React apps",
            "A lightweight JavaScript representation of the real DOM used for diffing and updates",
            "A caching mechanism",
            "A styling system",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "The virtual DOM is a lightweight copy of the real DOM in memory. React uses it to figure out what changed (diffing) and then updates only the changed parts of the real DOM, improving performance.",
    },
    {
        id: 22,
        question: "How does React's reconciliation algorithm work?",
        options: [
            "It compares strings to find differences",
            "It uses fiber architecture to compare virtual DOM trees and update the real DOM efficiently",
            "It rebuilds the entire DOM on each render",
            "It uses a simple if/else comparison",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "React uses a fiber-based reconciliation algorithm that compares the new virtual DOM with the previous one, identifies differences, and applies minimal updates to the real DOM.",
    },
    {
        id: 23,
        question: "What is React Suspense used for?",
        options: [
            "Suspending components from rendering",
            "Handling asynchronous operations and code splitting with cleaner syntax",
            "Suspending network requests",
            "Pausing animations",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "Suspense lets you specify what happens while your component is loading. Use it with lazy() for code splitting and with async data fetching to handle loading states declaratively.",
    },
    {
        id: 24,
        question: "What is React.lazy used for?",
        options: [
            "Making components lazy in rendering",
            "Code splitting and dynamic importing of components",
            "Making props lazy-loaded",
            "Lazy validating props",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "React.lazy allows you to split your code by importing a component dynamically. Wrap it with Suspense to show a fallback while the component loads. This reduces the initial bundle size.",
    },
    {
        id: 25,
        question: "What are React Server Components?",
        options: [
            "Components that run only on the server",
            "Server-rendered components for rendering and streaming data",
            "Components for server-side validation",
            "Components that manage API calls",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "React Server Components run only on the server and send rendered output to the client. They reduce client-side JavaScript, improve performance, and allow secure database access without exposing keys.",
    },
    {
        id: 26,
        question: "What is the key difference between useMemo and useCallback?",
        options: [
            "They are identical",
            "useMemo memoizes values, useCallback memoizes functions",
            "useCallback memoizes values, useMemo memoizes functions",
            "Neither should be used in modern React",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "useMemo memoizes computed values and returns them, while useCallback memoizes a function and returns the same function reference. Both should be used strategically for performance optimization.",
    },
    {
        id: 27,
        question: "What is the purpose of the useLayoutEffect hook?",
        options: [
            "Managing component layout",
            "Running synchronously after DOM mutations but before the browser paints",
            "Controlling CSS layout",
            "Managing responsive layouts",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "useLayoutEffect fires synchronously after all DOM mutations but before the browser repaints. Use it when you need to measure layout or synchronously update the DOM to avoid visual flashing.",
    },
    {
        id: 28,
        question: "What are controlled component patterns best for?",
        options: [
            "Only for forms",
            "For form validation, synchronization with state, and complex form logic",
            "For all input elements",
            "For styling inputs",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "Controlled components are ideal for form validation, synchronizing multiple fields, and implementing complex form logic. The React state becomes the single source of truth for input values.",
    },
    {
        id: 29,
        question: "What is compound component pattern?",
        options: [
            "Components that are compounded or merged together",
            "A pattern where related components are grouped together and share implicit state",
            "A pattern for combining CSS classes",
            "A pattern for merging props",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "The compound component pattern groups related components that share implicit state via React Context. Examples include <Tabs>, <Tab>, <Accordion>, <AccordionItem>. It improves API clarity and flexibility.",
    },
    {
        id: 30,
        question: "What is render prop pattern?",
        options: [
            "A prop that renders HTML",
            "A technique where a component accepts a function as a prop to determine what to render",
            "A prop for rendering arrays",
            "A pattern for CSS rendering",
        ],
        correct: 1,
        difficulty: "senior",
        explanation:
            "The render prop pattern is a technique where a component accepts a function prop that returns React elements. It's powerful for sharing stateful logic. Example: <DataComponent render={data => <View data={data} />} />",
    },
]
