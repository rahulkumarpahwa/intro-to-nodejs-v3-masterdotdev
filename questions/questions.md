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