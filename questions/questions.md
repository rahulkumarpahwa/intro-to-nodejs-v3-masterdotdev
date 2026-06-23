1. What is Node.js primarily used for?
1. Node.js is an environment that allows running JavaScript outside of a web browser, functioning as a runtime for executing JavaScript on a computer directly through the terminal

2. What was JavaScript's primary limitation before Node.js?
2. Before Node.js, JavaScript could only be run inside web browsers and was not considered a serious programming language for system-level operations

3. What is the core difference between browser JavaScript and Node.js JavaScript?
3. Browser JavaScript has access to browser-specific features like DOM and CSS, while Node.js JavaScript runs on a computer without visual output and focuses on system-level operations

4. What is Node.js currently using as its version?
4. Node.js is currently on version 18

5. What are some common production use cases for Node.js?
5. Node.js is used for servers, proxies, build tools, framework compilation (like converting React JSX to HTML/JavaScript), and various web development tasks

6. What is non-blocking I/O in Node.js?
6. A method that allows running multiple pieces of code in parallel on a single thread using an event loop, enabling concurrent processing without requiring additional computer resources like multiple threads

7. How does the event loop work in Node.js?
7. The event loop acts as a registry for work that needs to be done, scheduling tasks on specific timers and calling functions when the work is completed, allowing parallel processing of tasks

8. What type of tasks is Node.js NOT well-suited for?
8. CPU-intensive tasks like AI or machine learning, because Node.js uses only one thread by default and does not utilize all computer resources

9. What is the key difference between blocking and non-blocking code?
9. In blocking code, tasks execute sequentially from top to bottom, while in non-blocking code, subsequent lines can execute before previous asynchronous tasks complete, enabling parallel processing

10. What is the relationship between JavaScript and Node.js?
10. Node.js is a runtime environment for JavaScript, using the same language syntax, but with different available globals, packages, and capabilities compared to browser-based JavaScript
 
11. What does NVM stand for?
11. NVM stands for Node Version Manager, which helps manage different versions of Node.js

12. What does LTS mean in the context of Node.js?
12. LTS stands for Long-Term Support, which indicates a version of Node.js that will be supported for an extended period

13. How do you run a Node.js JavaScript file from the terminal?
13. Use the command node filename.js, where filename.js is the path to your JavaScript file

14. Why won't browser-specific functions like alert() work in Node.js?
14. Browser-specific functions like alert() are environment-dependent and do not exist in the Node.js terminal environment, which is text-based and lacks visual dialog capabilities

15. How can you check the installed version of Node.js in the terminal?
15. Use the command node --version to display the currently installed Node.js version

16. What is the global object in a browser environment?
16. Window object, where many global methods and properties are attached

17. What is the equivalent of the browser's window object in Node.js?
17. The global object, though it is rarely used directly

18. What key difference exists between browser and Node.js JavaScript regarding DOM manipulation?
18. Node.js has no DOM, so methods like document.getElementById() cannot be used since there is no HTML or webpage

19. What does REPL stand for?
19. Read, Evaluate, Print, Loop - an interactive environment for writing and testing JavaScript code inline

20. How do you enter the Node.js REPL in the terminal?
20. Type 'node' with no arguments, which opens an interactive JavaScript environment

21. What is the process global in Node.js and what does it provide access to?
21. The process global provides access to information and methods related to the operating system where the code is running, such as computer name, running programs, and environment-specific details, allowing Node.js applications to be dynamic across different computers and environments.

22. What is process.argv in Node.js?
22. Process.argv is an array that contains command-line arguments passed to a Node.js script. The first two elements are always the Node.js executable path and the script file path, with subsequent elements being additional arguments passed to the script.

23. What is process.env used for in Node.js?
23. Process.env provides access to environment variables, which are used to store secrets, configuration settings, and other environment-specific values that can be dynamically accessed without hardcoding sensitive information into the application.

24. What is the purpose of the NODE_ENV environment variable?
24. The NODE_ENV variable is used to switch the application mode between development, production, and testing, allowing developers to conditionally enable or disable features like logging, authentication, analytics, and performance optimizations based on the current environment.

25. How are environment variables typically managed and shared across a team?
25. Environment variables can be managed through methods like using password managers, encrypted vaults, creating individual database users with separate credentials, using DevOps platforms like AWS, or using specialized apps that securely distribute environment variables across a team.