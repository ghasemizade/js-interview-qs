export type Difficulty = "junior" | "mid" | "senior"

export interface Question {
  id: string
  difficulty: Difficulty
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export const nodejsQuestions: Question[] = [
  // Junior Developer Questions
  {
    id: "nodejs-junior-1",
    difficulty: "junior",
    question: "What is Node.js?",
    options: [
      "A frontend framework for building user interfaces",
      "A JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server",
      "A database management system",
      "A CSS preprocessor",
    ],
    correctAnswer: 1,
    explanation:
      "Node.js is a JavaScript runtime environment that allows you to execute JavaScript code outside of a browser, primarily on the server side. It's built on Chrome's V8 engine and enables building scalable network applications.",
  },
  {
    id: "nodejs-junior-2",
    difficulty: "junior",
    question: "What is npm?",
    options: [
      "Node Package Manager - a tool for managing JavaScript packages and dependencies",
      "A type of JavaScript file",
      "A server configuration tool",
      "A styling library",
    ],
    correctAnswer: 0,
    explanation:
      "npm (Node Package Manager) is the default package manager for Node.js. It allows you to install, manage, and share JavaScript packages and libraries. The package.json file defines your project's dependencies.",
  },
  {
    id: "nodejs-junior-3",
    difficulty: "junior",
    question: "How do you import a module in Node.js?",
    options: [
      "import module from 'module-name'",
      "const module = require('module-name')",
      "include 'module-name'",
      "load 'module-name'",
    ],
    correctAnswer: 1,
    explanation:
      "In Node.js, you use the require() function to import modules. For example, const express = require('express'). With ES modules enabled, you can also use import syntax.",
  },
  {
    id: "nodejs-junior-4",
    difficulty: "junior",
    question: "What is Express.js?",
    options: [
      "A data visualization library",
      "A minimal and flexible Node.js web application framework for building APIs and web servers",
      "A database query language",
      "A testing framework",
    ],
    correctAnswer: 1,
    explanation:
      "Express.js is a popular and lightweight web application framework for Node.js. It provides tools for routing, middleware, and handling HTTP requests/responses, making it easy to build web servers and APIs.",
  },
  {
    id: "nodejs-junior-5",
    difficulty: "junior",
    question: "What does middleware do in Express?",
    options: [
      "Stores data in memory",
      "Functions that have access to request and response objects and can process requests before sending responses",
      "Encrypts sensitive data",
      "Manages the database connection",
    ],
    correctAnswer: 1,
    explanation:
      "Middleware in Express are functions that can access the request (req) and response (res) objects. They can modify these objects, end the request, or pass control to the next middleware. This allows for modular and reusable request processing.",
  },
  {
    id: "nodejs-junior-6",
    difficulty: "junior",
    question: "How do you create a simple HTTP server in Node.js?",
    options: [
      "Using the 'http' module and creating a server with http.createServer()",
      "Using Express without any other dependencies",
      "Using the 'server' global module",
      "Node.js cannot create HTTP servers",
    ],
    correctAnswer: 0,
    explanation:
      "Node.js provides a built-in 'http' module that allows you to create HTTP servers. You use http.createServer() to create a server and listen on a specific port to handle incoming requests.",
  },
  {
    id: "nodejs-junior-7",
    difficulty: "junior",
    question: "What is the event-driven architecture in Node.js?",
    options: [
      "A pattern where code execution is determined by events, using callbacks or promises to handle asynchronous operations",
      "A way to organize files in a project",
      "A database design pattern",
      "A security feature",
    ],
    correctAnswer: 0,
    explanation:
      "Node.js uses an event-driven architecture where operations are asynchronous and non-blocking. Events (like 'data', 'error', 'finish') are emitted and handled by listeners, enabling efficient handling of concurrent operations.",
  },
  {
    id: "nodejs-junior-8",
    difficulty: "junior",
    question: "What is the purpose of package.json?",
    options: [
      "To store user passwords",
      "To define project metadata, dependencies, scripts, and configuration for your Node.js application",
      "To store environment variables",
      "To compile JavaScript to machine code",
    ],
    correctAnswer: 1,
    explanation:
      "package.json is a manifest file that describes your Node.js project. It contains project metadata, lists dependencies and devDependencies, defines npm scripts, and includes other project configuration like version and license.",
  },
  {
    id: "nodejs-junior-9",
    difficulty: "junior",
    question: "What is a callback in Node.js?",
    options: [
      "A function that returns a value immediately",
      "A function passed as an argument to another function to be executed later, typically after an asynchronous operation completes",
      "A type of error handling",
      "A database query result",
    ],
    correctAnswer: 1,
    explanation:
      "A callback is a function passed to another function that gets executed after a specific operation is completed. Node.js uses callbacks extensively for asynchronous operations like file I/O and network requests.",
  },
  {
    id: "nodejs-junior-10",
    difficulty: "junior",
    question: "What is the role of process.env?",
    options: [
      "To define the version of Node.js",
      "To access environment variables from the system or .env file",
      "To execute shell commands",
      "To manage package versions",
    ],
    correctAnswer: 1,
    explanation:
      "process.env is an object in Node.js that contains environment variables. It allows you to access configuration values from the system or from a .env file, useful for storing sensitive data like API keys and database URLs.",
  },

  // Mid-Level Developer Questions
  {
    id: "nodejs-mid-1",
    difficulty: "mid",
    question: "What is the difference between require() and import?",
    options: [
      "They are identical",
      "require() is CommonJS (synchronous), import is ES6 modules (asynchronous, can be optimized by bundlers)",
      "import is older and synchronous",
      "require() is only for third-party packages",
    ],
    correctAnswer: 1,
    explanation:
      "require() is part of the CommonJS module system and is synchronous, while import is part of ES6 modules and is asynchronous. ES6 modules have better optimization and tree-shaking support in modern tools.",
  },
  {
    id: "nodejs-mid-2",
    difficulty: "mid",
    question: "What are streams in Node.js and why are they useful?",
    options: [
      "Only for reading files",
      "Objects that let you read and write data in chunks, reducing memory usage for large data processing",
      "A type of database connection",
      "A way to handle errors",
    ],
    correctAnswer: 1,
    explanation:
      "Streams are objects that allow you to work with data chunk by chunk rather than loading it all into memory. This is particularly useful for handling large files, network data, or real-time data, making applications more efficient.",
  },
  {
    id: "nodejs-mid-3",
    difficulty: "mid",
    question: "How do you handle errors in asynchronous operations?",
    options: [
      "Using try-catch with async/await, or .catch() with promises, or error callbacks",
      "Errors cannot be handled in async code",
      "Using only callbacks",
      "Using global error handlers only",
    ],
    correctAnswer: 0,
    explanation:
      "Modern Node.js provides multiple ways to handle async errors: try-catch with async/await, .catch() with promises, or traditional error callbacks. The best practice is to use async/await with try-catch for cleaner, more readable code.",
  },
  {
    id: "nodejs-mid-4",
    difficulty: "mid",
    question: "What is the event loop in Node.js?",
    options: [
      "A loop that crashes the application",
      "The mechanism that allows Node.js to perform non-blocking I/O operations by offloading work to the system kernel and executing callbacks when operations complete",
      "A way to iterate over arrays",
      "A type of authentication mechanism",
    ],
    correctAnswer: 1,
    explanation:
      "The event loop is central to Node.js's non-blocking I/O model. It continuously checks for pending operations, callbacks, and tasks in the queue, ensuring that I/O-heavy operations don't block the main thread.",
  },
  {
    id: "nodejs-mid-5",
    difficulty: "mid",
    question: "What are promises and how do they improve upon callbacks?",
    options: [
      "Promises are the same as callbacks",
      "Promises represent eventual completion of an async operation and provide chaining, error handling, and better readability compared to callback hell",
      "Promises are only for synchronous code",
      "Promises cannot handle errors",
    ],
    correctAnswer: 1,
    explanation:
      "Promises provide a cleaner way to handle asynchronous operations compared to callbacks. They can be chained using .then() and .catch(), handle errors more gracefully, and avoid the 'callback hell' problem.",
  },
  {
    id: "nodejs-mid-6",
    difficulty: "mid",
    question: "What is middleware chaining in Express?",
    options: [
      "Creating multiple servers",
      "Executing multiple middleware functions in sequence, with each middleware calling next() to pass control to the next middleware",
      "Storing data in a chain",
      "A security protocol",
    ],
    correctAnswer: 1,
    explanation:
      "Middleware chaining in Express involves multiple middleware functions executed in order. Each middleware must call next() to pass control to the next function in the chain. This allows for modular request processing.",
  },
  {
    id: "nodejs-mid-7",
    difficulty: "mid",
    question: "How do you create RESTful API endpoints in Express?",
    options: [
      "By creating files for each endpoint",
      "Using HTTP method functions (app.get(), app.post(), app.put(), app.delete()) with routes and handlers",
      "Node.js doesn't support REST APIs",
      "Using configuration files only",
    ],
    correctAnswer: 1,
    explanation:
      "Express provides methods like app.get(), app.post(), app.put(), and app.delete() that correspond to HTTP verbs. You combine these with route paths and request handlers to create RESTful API endpoints.",
  },
  {
    id: "nodejs-mid-8",
    difficulty: "mid",
    question: "What is the difference between process.nextTick() and setImmediate()?",
    options: [
      "They are identical",
      "process.nextTick() executes before I/O operations and setImmediate() after I/O is pending",
      "process.nextTick() is slower",
      "setImmediate() is older",
    ],
    correctAnswer: 1,
    explanation:
      "Both are used to defer execution, but process.nextTick() has higher priority and executes before I/O operations, while setImmediate() executes after I/O polling. This affects the order of execution in the event loop.",
  },
  {
    id: "nodejs-mid-9",
    difficulty: "mid",
    question: "What is clustering in Node.js?",
    options: [
      "A way to group data",
      "Creating multiple Node.js processes to utilize multi-core systems and handle more concurrent requests",
      "A database indexing strategy",
      "A networking protocol",
    ],
    correctAnswer: 1,
    explanation:
      "Node.js runs on a single thread, but the cluster module allows you to spawn multiple worker processes. Each worker can handle requests independently, utilizing all CPU cores and improving application performance.",
  },
  {
    id: "nodejs-mid-10",
    difficulty: "mid",
    question: "How do you work with files in Node.js?",
    options: [
      "Using a text editor plugin",
      "Using the 'fs' (file system) module with methods like readFile(), writeFile(), and streams for efficient I/O",
      "Node.js cannot work with files",
      "Using only third-party libraries",
    ],
    correctAnswer: 1,
    explanation:
      "Node.js provides the built-in 'fs' module for file operations. You can use synchronous methods, asynchronous callbacks, or promises. Streams are recommended for handling large files efficiently.",
  },

  // Senior Developer Questions
  {
    id: "nodejs-senior-1",
    difficulty: "senior",
    question: "What are worker threads and when should you use them?",
    options: [
      "Only for file operations",
      "A way to run CPU-intensive tasks in separate threads to avoid blocking the event loop",
      "A type of database connection pool",
      "A security feature",
    ],
    correctAnswer: 1,
    explanation:
      "Worker threads allow you to run CPU-intensive JavaScript code in parallel without blocking the event loop. They're useful for tasks like image processing, cryptography, or complex calculations that would otherwise freeze the application.",
  },
  {
    id: "nodejs-senior-2",
    difficulty: "senior",
    question: "What is backpressure handling in streams?",
    options: [
      "Compression algorithm",
      "Properly managing when a writable stream is full by slowing down reading to prevent memory overflow",
      "A network protocol",
      "A database optimization technique",
    ],
    correctAnswer: 1,
    explanation:
      "Backpressure occurs when a writable stream cannot accept data as fast as it's being written. Proper handling involves checking the return value of write() and pausing the source stream when the destination is overwhelmed.",
  },
  {
    id: "nodejs-senior-3",
    difficulty: "senior",
    question: "How does the garbage collector work in Node.js?",
    options: [
      "Manually controlled by developers",
      "Automatically identifies and frees memory of unreferenced objects using various GC algorithms like mark-sweep and Scavenger",
      "Only works with external memory",
      "Cannot be optimized",
    ],
    correctAnswer: 1,
    explanation:
      "Node.js uses automatic garbage collection to manage memory. The V8 engine uses mark-sweep for the old generation and a Scavenger algorithm for the young generation, allowing developers to avoid manual memory management.",
  },
  {
    id: "nodejs-senior-4",
    difficulty: "senior",
    question: "What is the libuv library and its role in Node.js?",
    options: [
      "A JavaScript validation library",
      "A C library that provides event loop implementation, async I/O, and thread pool management for Node.js",
      "A CSS framework",
      "A database driver",
    ],
    correctAnswer: 1,
    explanation:
      "libuv is a C library that forms the foundation of Node.js's asynchronous I/O. It handles the event loop, manages the thread pool for operations like file I/O, and provides cross-platform abstractions.",
  },
  {
    id: "nodejs-senior-5",
    difficulty: "senior",
    question: "How do you optimize Node.js application performance?",
    options: [
      "Using global variables everywhere",
      "Using clustering, caching, proper error handling, monitoring, profiling, and optimizing I/O operations",
      "Adding more console.log() statements",
      "Using callbacks instead of promises",
    ],
    correctAnswer: 1,
    explanation:
      "Performance optimization involves multiple strategies: clustering for multi-core utilization, caching to reduce redundant operations, monitoring and profiling to identify bottlenecks, and efficient stream handling.",
  },
  {
    id: "nodejs-senior-6",
    difficulty: "senior",
    question: "What is the purpose of the --inspect flag in Node.js?",
    options: [
      "To validate syntax",
      "To enable debugging via Chrome DevTools or other debuggers by exposing a WebSocket inspector protocol",
      "To check file permissions",
      "To optimize code",
    ],
    correctAnswer: 1,
    explanation:
      "The --inspect flag enables Node.js debugging capabilities. It exposes a WebSocket server that allows debuggers like Chrome DevTools to connect and debug the application in real-time, inspecting variables and step-through execution.",
  },
  {
    id: "nodejs-senior-7",
    difficulty: "senior",
    question: "What are C++ addons in Node.js?",
    options: [
      "CSS styling for the frontend",
      "Native C++ modules that can be loaded into Node.js to perform CPU-intensive operations or access system-level functionality",
      "JavaScript framework extensions",
      "Configuration files",
    ],
    correctAnswer: 1,
    explanation:
      "C++ addons allow you to write native code in C++ that can be loaded and used from Node.js. They're useful for CPU-intensive operations, interfacing with system libraries, or achieving better performance than pure JavaScript.",
  },
  {
    id: "nodejs-senior-8",
    difficulty: "senior",
    question: "What is the microtask queue and how does it differ from the macrotask queue?",
    options: [
      "They are identical",
      "Microtask queue (promises, nextTick) has higher priority and executes before macrotask queue (setTimeout, I/O)",
      "Macrotask queue is older",
      "Microtask queue is only for errors",
    ],
    correctAnswer: 1,
    explanation:
      "The event loop processes microtasks (promises, process.nextTick) before macrotasks (setTimeout, I/O operations). This affects the order of execution and is crucial for understanding async behavior in Node.js.",
  },
  {
    id: "nodejs-senior-9",
    difficulty: "senior",
    question: "How do you implement proper error handling in production Node.js applications?",
    options: [
      "Ignoring all errors",
      "Using try-catch, error middleware, proper logging, monitoring, and gracefully handling unhandled rejections and exceptions",
      "Using only console.log for errors",
      "Using global error handlers only",
    ],
    correctAnswer: 1,
    explanation:
      "Production error handling involves multiple layers: try-catch for known operations, error middleware in Express, comprehensive logging, monitoring systems, and handling unhandled promise rejections and uncaught exceptions.",
  },
  {
    id: "nodejs-senior-10",
    difficulty: "senior",
    question: "What is memory leaking in Node.js and how do you prevent it?",
    options: [
      "When a program uses too much RAM",
      "When objects are not garbage collected due to retained references, prevented through proper cleanup, event listener removal, and memory monitoring",
      "When the hard drive is full",
      "When network connections drop",
    ],
    correctAnswer: 1,
    explanation:
      "Memory leaks occur when objects remain in memory even though they're no longer needed. Prevention involves: removing event listeners, clearing timers, avoiding circular references, using weak references, and using tools to detect leaks.",
  },
]
