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

26. What does CLI stand for?
26. Command Line Interface

27. How can you describe a CLI's interaction with a computer?
27. Like chatting with your computer using specific commands

28. What is the purpose of the hashbang (#!/usr/bin/env node) in a CLI script?
28. To tell the operating system which runtime environment (Node.js) should be used to execute the script

29. What command initializes a new Node.js project?
29. npm init (or npm init --yes for default settings)

30. What file is created when initializing a Node.js project with npm init?
30. package.json

31. How can you access the third argument passed to a CLI using Node.js?
31. Using process.argv[2], since the first two indexes are reserved for the environment and file path

32. Why do you need to wrap a multi-word CLI argument in quotes?
32. To prevent the argument from being split into multiple separate arguments by spaces

33. What method can be used to generate a unique identifier for a note?
33. Date.now() which returns the current timestamp in milliseconds

34. What happens to program memory and data when a Node.js script finishes executing?
34. The memory is wiped, and all data is lost unless it is explicitly persisted

35. What are the initial properties of the note object being created?
35. The note object has two properties: 'content' (the note text) and 'id' (a unique timestamp identifier)

36. What is an IIFE and what is its primary purpose in JavaScript?
36. An Immediately Invoked Function Expression (IIFE) is a function that encapsulates code in its own scope, isolating it from the global space and preventing interference from other scripts.

37. What are the three types of modules in Node.js?
37. The three types of modules in Node.js are: 1) Internal modules (like http, file system), 2) User-created modules (pieces of code created by the developer), and 3) Third-party modules (modules created by others and downloaded)

38. What is the key difference between setting up ES6 modules versus CommonJS modules in Node.js?
38. In Node.js, to use ES6 modules, you need to add a 'type' field with the value 'module' in the package.json file, which enables import/export statements instead of using require()

39. What is the difference between a named export and a default export in JavaScript modules?
39. A named export must be imported using its original name with curly braces, while a default export can be imported with any name and does not require curly braces

40. Why do Node.js modules with type 'module' require explicit .js file extensions when importing?
40. With modules, explicit extensions help distinguish between different types of files (JavaScript, CSS, images) that might have similar names, ensuring the correct file is imported

41. What is the syntax for importing a core Node.js module like 'fs'?
41. Use the module name directly without a path, such as import fs from 'fs' or import { readFile } from 'fs'

42. What is the difference between importing a local module versus a core Node.js module?
42. Local modules require a path (starting with './' or '../'), while core Node.js modules can be imported by their name directly

43. What is the CommonJS equivalent of import count from './count.js'?
43. In CommonJS: const count = require('./count.js')

44. How do you export a default object in CommonJS?
44. Using module.exports = { count: someFunction } which exports an object with properties

45. What configuration is needed to use ES6 module syntax in Node.js?
45. Ensure 'type: module' is enabled in your project configuration

46. What is a recommended approach for organizing code modules?
46. Keep files light and small, associate things by logical grouping, create modules freely without worrying about performance, and aim to make modules as small and modular as possible to improve testability and reduce merge conflicts.

47. What is the purpose of the index.js pattern in module organization?
47. The index.js file acts as a router or aggregator for modules, importing and re-exporting modules from a folder, allowing for a clean and centralized way to import multiple modules using a single import statement.

48. How can you import all exports from a folder using JavaScript?
48. Use the star (*) import syntax with a folder, which will automatically look for an index.js file and import all exports. For example: import * as utils from './utils' will import everything exported from the utils folder's index.js file.

49. What syntax is recommended for importing modules in modern JavaScript development?
49. The import/export ES6 syntax is recommended, as it provides consistency across frontend and backend development and is likely to become the default behavior in future Node.js versions.

50. What are two key benefits of breaking code into small modules?
50. Easier individual testing of code components, and 2) Reduced likelihood of merge conflicts when working in team environments by separating different functionalities into distinct modules.

51. What does the 'fs' module in Node.js stand for and what can it do?
51. FS stands for file system. It allows performing file-related operations like reading, writing, and manipulating files programmatically, essentially replicating most file interactions a human can do on a computer.

52. What is the purpose of the 'http' module in Node.js?
52. The 'http' module helps with networking in Node.js, positioned just above TCP level. It can be used to create servers, send responses like JSON, images, or files.

53. What does npm stand for, and what is its primary function?
53. npm stands for Node Package Manager. Its primary function is to manage and install packages for Node.js applications.

54. Why should you not include the 'node_modules' folder in Git repositories?
54. Including 'node_modules' in Git would create massive pull requests with changes to third-party code, and the dependencies are not code you've written. Instead, package.json and package-lock.json allow easy recreation of dependencies.

55. What is the purpose of the package-lock.json file?
55. The package-lock.json file locks in the exact versions of installed dependencies, ensuring that the same versions are used across different machines and team members.

56. What does the Yargs library help developers do with command-line tools?
56. Yargs helps build interactive command-line tools by parsing arguments and generating an elegant user interface

57. What does the demand() method do in Yargs configuration?
57. It ensures that at least one command must be used when running the CLI, preventing execution without a specified command

58. How does Yargs transform command-line arguments compared to raw process.argv?
58. Yargs converts command-line arguments into a formatted object and can automatically typecast arguments based on specified configurations

59. What free feature does Yargs provide for command-line interfaces?
59. Yargs automatically generates a help menu (--help) that lists available commands and flags without requiring manual implementation

60. What is the purpose of the parse() method in Yargs configuration?
60. The parse() method signals Yargs to execute the command parsing and processing of command-line arguments

61. What method does yargs provide to define a command's positional argument?
61. yargs.positional() can be used to define a positional argument, specifying its type and description

62. What does the difference between angle brackets <> and square brackets [] mean when defining command arguments?
62. Angle brackets <> indicate a required argument, while square brackets [] indicate an optional argument with a potential default value

63. How can you add an option/flag to a command in yargs?
63. Use an options method with an object that can specify an alias, type, and description for the option

64. What are the benefits of using yargs for CLI command creation?
64. Yargs provides a more structured approach to creating CLI commands compared to using multiple if statements and regular expressions

65. How can you check the available commands and their help information in a yargs CLI application?
65. Use the --help flag to display a list of all available commands and their descriptions

The async-await (or promise.then) pattern is useful when one async operation depends on the other. For example, if you want to check if the username is available first, THEN register the new user. Or if async operations are independent, you could run them simultaneously with Promise.all()

66. What are the three main scenarios that typically make code asynchronous in Node.js?
66. Interacting with networks/internet, 2. Using timing functions like setTimeout or setInterval, 3. Interacting with file systems or databases

67. What is the primary problem with using nested callbacks in asynchronous JavaScript?
67. It creates a complex, hard-to-read 'callback hell' or 'upside-down pyramid' where code becomes deeply nested and difficult to understand and maintain

68. What is the purpose of converting a callback-based function to a Promise?
68. To allow easier chaining of asynchronous operations, keeping callback depth to one level and making the code more readable and manageable

69. What does async/await allow developers to do with asynchronous code?
69. Transform asynchronous code that returns a Promise into synchronous-looking code that executes line by line, making it easier to read and reason about

70. What are the requirements for using await in a function?
70. The function must be marked as async, and the value being awaited must return a Promise

71. What does the 'fs' module in Node.js stand for?
71. File system. It provides an API to interact with files programmatically.

72. List five frequently used methods in the fs module.
72. mkdir (make directory), 2. readdir (read directory), 3. stat (get file information), 4. unlink (delete file), 5. rename (rename file)

73. What is the difference between readFileSync and readFile?
73. readFileSync is a blocking synchronous function that stops all other operations until the file is read, while readFile is an asynchronous method that allows other operations to continue while reading the file.

74. How can you use the fs module to read files in Node.js with promises?
74. Use fs.promises.readFile() with async/await, which returns a promise and allows for non-blocking file reading.

75. What method in the fs module is used to write files?
75. writeFile() is used to write content to a file. It can be used with async/await when accessing the promises version of the fs module.

76. What method is used to read the database file in Node.js using the fs module?
76. fs.readFile() is used to read the database file, with UTF-8 encoding specified as the second parameter to ensure proper string parsing

77. What does JSON.stringify() do when saving a database file?
77. JSON.stringify() converts a JavaScript object into a JSON string, which can then be written to a file. When additional arguments like 2 are used, it formats the JSON with indentation for readability

78. Why can't fs.appendFile() be used directly for adding JSON data?
78. appendFile() doesn't understand JSON structure and would simply add data to the bottom of the file, which would break the JSON format and make parsing impossible

79. What is the purpose of using file system methods with promises in Node.js?
79. Using file system methods with promises allows for asynchronous file operations that are non-blocking, making file reading and writing more efficient

80. What is an ORM in the context of database interactions?
80. An ORM (Object-Relational Mapping) is like an SDK for databases that provides an abstraction layer, allowing developers to interact with databases without writing raw SQL or low-level database commands

81. What does the acronym CRUD stand for in software development?
81. Create, Read, Update, Delete

82. What are the five CRUD operations being implemented for notes in this implementation?
82. Create a new note, get all notes, find matching notes, remove a note, and remove all notes

83. How is a new note object typically constructed in this implementation?
83. With properties including content, ID (using Date.now()), and tags

84. What is destructuring in JavaScript?
84. A technique for extracting properties from an object or array and assigning them to variables with the same names in a concise manner

85. How does the findNotes function perform a text search on notes?
85. It uses toLowerCase() to normalize the note content and filter array, then uses .includes() to check if the filter text is a substring of the note's content, returning an array of matching notes

86. What is the purpose of the match variable in the removeNote function?
86. The match variable checks if a note with the specified ID exists in the database, which helps determine whether to proceed with removal and ensures only existing notes can be deleted

87. Why does the code use .filter() instead of directly mutating the notes array when removing a note?
87. To create a new array without the specified note in an immutable way, avoiding potential side effects and maintaining data integrity by not modifying the original array

88. How does removeAllNotes reset the database?
88. It calls saveDB with an empty array for the notes, effectively clearing all existing notes from the database

89. What normalization technique is used in the findNotes function to improve search flexibility?
89. The function converts both the note content and search filter to lowercase using .toLowerCase(), ensuring case-insensitive substring matching