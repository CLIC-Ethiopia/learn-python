export interface Topic {
  title: string;
  content: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface SyntaxItem {
  name: string;
  description: string;
  code: string;
}

export interface SandboxItem {
  command: string;
  output: string;
}

export interface Chapter {
  id: string;
  title: string;
  learn: Topic[];
  syntax: SyntaxItem[];
  sandbox: SandboxItem[];
}

export interface Book {
  id: string;
  title: string;
  chapters: Chapter[];
  quiz: QuizQuestion[];
}

export const curriculum: Book[] = [
  {
    "id": "book1",
    "title": "Book 1: Getting Started",
    "chapters": [
      {
        "id": "b1c1",
        "title": "Chapter 1: Starting with Python",
        "learn": [
          {
            "title": "Why Python Is Hot",
            "content": "## Why Python Is Hot\n\nPython has become the world's most popular programming language due to its simplified syntax, natural-language flow, and incredible user community. It is the language of choice for machine learning, data science, artificial intelligence, and robotics.\n\nBecause of its massive ecosystem, Python saves you from reinventing the wheel."
          },
          {
            "title": "Choosing the Right Python",
            "content": "## Choosing the Right Python\n\nThere are different versions of Python, but the rule of thumb is simple: use the most current version (Python 3.9+). Older versions like Python 2.7 are obsolete.\n\n> **Warning:** Do not mix Python 2 and Python 3 syntax, they are fundamentally different!"
          },
          {
            "title": "Tools for Success",
            "content": "## Tools for Success\n\nTo write Python, you need a good editor and an interpreter. We recommend **Visual Studio Code (VS Code)** and **Anaconda**.\n\n- **Anaconda**: A complete Python data-science platform, including Jupyter Notebooks.\n- **VS Code**: A lightweight but powerful source code editor.\n\n> **Tip:** Always use an environment like Anaconda to manage your dependencies easily!"
          },
          {
            "title": "Why Python Is Hot",
            "content": "## Why Python Is Hot\n\nPython is presented as a widely used language because its syntax is approachable and its ecosystem covers areas such as data science, AI, and robotics."
          },
          {
            "title": "Choosing the Right Python",
            "content": "## Choosing the Right Python\n\nThe book works with modern Python 3 and treats Python 2 as obsolete. For new work, keep the interpreter and examples consistently on Python 3."
          },
          {
            "title": "Tools for Success",
            "content": "## Tools for Success\n\nA productive Python setup needs an editor plus a Python interpreter/environment. The book emphasizes VS Code and Anaconda/Jupyter as a practical combination."
          },
          {
            "title": "Introducing Anaconda and VS Code",
            "content": "## Introducing Anaconda and VS Code\n\nAnaconda provides a managed Python environment and useful data-science tooling, while VS Code provides the editing and debugging workspace."
          },
          {
            "title": "Installing Anaconda and VS Code",
            "content": "## Installing Anaconda and VS Code\n\nThe setup process is about getting the interpreter, editor, and Python support installed before writing projects. Verify the tools before troubleshooting code."
          },
          {
            "title": "Writing Python in VS Code",
            "content": "## Writing Python in VS Code\n\nA Python file can be edited and run directly from VS Code. The important workflow is to select the intended interpreter, write code, save it, and execute it."
          },
          {
            "title": "Choosing your Python interpreter",
            "content": "## Choosing your Python interpreter\n\nVS Code can have several Python interpreters available. Selecting the correct interpreter determines which Python installation and installed packages your file uses."
          },
          {
            "title": "Writing some Python code",
            "content": "## Writing some Python code\n\nStart with small executable statements, run them immediately, and change one thing at a time. This short feedback loop makes syntax and behavior easier to learn."
          },
          {
            "title": "Getting back to VS Code Python",
            "content": "## Getting back to VS Code Python\n\nThis section focuses on **Getting back to VS Code Python** as part of the chapter’s practical progression. Treat the idea as a small concept to understand, then reinforce it by writing and modifying a short Python example."
          },
          {
            "title": "Using Jupyter Notebook for Coding",
            "content": "## Using Jupyter Notebook for Coding\n\nJupyter Notebook combines executable code cells with explanatory text. It is especially useful when experimenting because cells can be run independently and revisited."
          }
        ],
        "syntax": [
          {
            "name": "Print Statement",
            "description": "Outputs text to the console.",
            "code": "print(\"Hello, World!\")\n\n# You can also use single quotes\nprint('Hello again!')"
          },
          {
            "name": "Importing Zen",
            "description": "View the Zen of Python.",
            "code": "import this\n\n# Executing this prints out the 19 principles of Python design."
          },
          {
            "name": "Print and inspect a value",
            "description": "Basic console output.",
            "code": "print(\"Hello, Python!\")\nname = \"Fad\"\nprint(\"Welcome,\", name)"
          },
          {
            "name": "Simple expression",
            "description": "Evaluate Python expressions directly.",
            "code": "a = 7\nb = 3\nprint(a + b)\nprint(a * b)"
          }
        ],
        "sandbox": [
          {
            "command": "print(\"Hello, World!\")",
            "output": "Hello, World!"
          },
          {
            "command": "import this",
            "output": "The Zen of Python, by Tim Peters\n\nBeautiful is better than ugly.\nExplicit is better than implicit..."
          },
          {
            "command": "print(2 + 3)",
            "output": "5"
          },
          {
            "command": "name = \"Python\"\nprint(name.upper())",
            "output": "PYTHON"
          }
        ]
      },
      {
        "id": "b1c2",
        "title": "Chapter 2: Interactive Mode, Getting Help, and Writing Apps",
        "learn": [
          {
            "title": "Using Python’s Interactive Mode",
            "content": "## Using Python’s Interactive Mode\n\nInteractive mode evaluates Python statements immediately. It is ideal for trying a function, expression, or small idea before putting the code into a program."
          },
          {
            "title": "Opening Terminal",
            "content": "## Opening Terminal\n\nThe terminal gives direct access to commands such as starting Python and running scripts. It is also a useful place to see command-line errors clearly."
          },
          {
            "title": "Getting your Python version",
            "content": "## Getting your Python version\n\nChecking the interpreter version confirms which Python executable is being used. This is a simple first diagnostic when behavior differs between environments."
          },
          {
            "title": "Going into the Python Interpreter",
            "content": "## Going into the Python Interpreter\n\nLaunching Python from a terminal enters the interactive interpreter, where the prompt accepts Python statements and displays their results."
          },
          {
            "title": "Entering commands",
            "content": "## Entering commands\n\nInteractive commands are executed as soon as the interpreter has enough information to evaluate them. Indentation matters when entering multi-line blocks."
          },
          {
            "title": "Using Python’s built-in help",
            "content": "## Using Python’s built-in help\n\nPython includes an interactive help system for exploring modules, objects, and topics. It is a useful companion when learning unfamiliar features."
          },
          {
            "title": "Exiting interactive help",
            "content": "## Exiting interactive help\n\nThe help system has its own prompt; leave it before returning to normal Python interaction. Learning these prompts prevents confusion during exploration."
          },
          {
            "title": "Searching for specific help topics online",
            "content": "## Searching for specific help topics online\n\nWhen built-in help is not enough, targeted documentation and topic searches can fill the gap. The goal is to search for the exact object or behavior you need."
          },
          {
            "title": "Lots of free cheat sheets",
            "content": "## Lots of free cheat sheets\n\nCheat sheets are useful as quick references after concepts are understood. Use them to recall syntax rather than replacing hands-on practice."
          },
          {
            "title": "Creating a Python Development Workspace",
            "content": "## Creating a Python Development Workspace\n\nA dedicated project workspace keeps source files and related resources together. A predictable folder structure makes running and maintaining projects easier."
          },
          {
            "title": "Creating a Folder for Your Python Code",
            "content": "## Creating a Folder for Your Python Code\n\nKeeping Python projects in their own folders reduces path confusion and makes it easier for an editor to treat the folder as a workspace."
          },
          {
            "title": "Typing, Editing, and Debugging Python Code",
            "content": "## Typing, Editing, and Debugging Python Code\n\nThe development cycle is iterative: type code, run it, observe the error or result, edit the relevant line, and run again."
          },
          {
            "title": "Writing Python code",
            "content": "## Writing Python code\n\nPython programs are built from statements and indented blocks. Begin with small, readable pieces and expand the program incrementally."
          },
          {
            "title": "Saving your code",
            "content": "## Saving your code\n\nSave Python source with the `.py` extension so tools recognize it as a Python program. Saving frequently also preserves a known version to rerun."
          },
          {
            "title": "Running Python in VS Code",
            "content": "## Running Python in VS Code\n\nVS Code can run the current Python file using the selected interpreter. Running frequently exposes syntax and logic problems early."
          },
          {
            "title": "Learning simple debugging",
            "content": "## Learning simple debugging\n\nSimple debugging starts with reading the error message and locating the reported line. Printing intermediate values is another basic way to inspect program state."
          },
          {
            "title": "Using the VS Code Python debugger",
            "content": "## Using the VS Code Python debugger\n\nA debugger lets you pause execution and inspect variables and program flow. Breakpoints make it possible to examine a problem without filling the program with print statements."
          },
          {
            "title": "Writing Code in a Jupyter Notebook",
            "content": "## Writing Code in a Jupyter Notebook\n\nNotebook cells can hold executable Python and can be rerun as you experiment. This makes them convenient for incremental exploration and demonstrations."
          },
          {
            "title": "Creating a folder for Jupyter Notebook",
            "content": "## Creating a folder for Jupyter Notebook\n\nA dedicated notebook folder keeps `.ipynb` files and supporting data organized. Start the notebook server in the project area you want to work with."
          },
          {
            "title": "Creating and saving a Jupyter notebook",
            "content": "## Creating and saving a Jupyter notebook\n\nA notebook stores code, outputs, and Markdown in one document. Save it as you progress so experiments remain reproducible."
          },
          {
            "title": "Typing and running code in a notebook",
            "content": "## Typing and running code in a notebook\n\nEnter Python into a code cell and execute that cell. The resulting output stays near the code, making cause and effect easy to inspect."
          },
          {
            "title": "Adding Markdown text",
            "content": "## Adding Markdown text\n\nMarkdown cells add headings, explanations, lists, and other notes beside executable code. They turn a notebook into both a program and a learning document."
          },
          {
            "title": "Saving and opening notebooks",
            "content": "## Saving and opening notebooks\n\nNotebook files can be saved and reopened later, preserving the document structure and recorded outputs that were saved with it."
          }
        ],
        "syntax": [
          {
            "name": "Interactive version check",
            "description": "Check the interpreter version from Python.",
            "code": "import sys\nprint(sys.version.split()[0])"
          },
          {
            "name": "Notebook-friendly calculation",
            "description": "A small cell-sized experiment.",
            "code": "values = [2, 4, 6]\nprint(sum(values) / len(values))"
          }
        ],
        "sandbox": [
          {
            "command": "x = 10\nx * 2",
            "output": "20"
          },
          {
            "command": "sum([1, 2, 3, 4])",
            "output": "10"
          }
        ]
      },
      {
        "id": "b1c3",
        "title": "Chapter 3: Python Elements and Syntax",
        "learn": [
          {
            "title": "The Zen of Python",
            "content": "## The Zen of Python\n\nPEP 20, the Zen of Python, dictates the guiding principles of the language. \"Readability counts\" is a core tenet. Code should be clean and explicit."
          },
          {
            "title": "Indentations",
            "content": "## Indentations Count, Big Time\n\nUnlike JavaScript or C++, which use curly braces `{}` to define blocks of code, Python uses **indentations**. A block of code must be consistently indented (usually 4 spaces).\n\n> **Warning:** Mixing tabs and spaces will cause an IndentationError!"
          },
          {
            "title": "The Zen of Python",
            "content": "## The Zen of Python\n\nThe Zen of Python, exposed through `import this`, summarizes design preferences such as readability, explicitness, and simplicity. It is a useful mindset for writing maintainable Python."
          },
          {
            "title": "Introducing Object-Oriented Programming",
            "content": "## Introducing Object-Oriented Programming\n\nObject-oriented programming organizes software around objects that combine data and behavior. Python supports this style while also allowing simpler procedural code."
          },
          {
            "title": "Discovering Why Indentations Count, Big Time",
            "content": "## Discovering Why Indentations Count, Big Time\n\nPython uses indentation to mark code blocks instead of curly braces. Consistent indentation is therefore part of the program structure, not just visual formatting."
          },
          {
            "title": "Using Python Modules",
            "content": "## Using Python Modules\n\nA module is a Python file containing reusable definitions. Importing modules lets a program use existing functionality without placing everything in one source file."
          },
          {
            "title": "Understanding the syntax for importing modules",
            "content": "## Understanding the syntax for importing modules\n\nPython supports forms such as `import module` and `from module import name`. The chosen form affects how names are referenced in the program."
          },
          {
            "title": "Using an alias with modules",
            "content": "## Using an alias with modules\n\nAn import alias gives a module a shorter local name, which can make repeated references more readable and can avoid awkwardly long names."
          }
        ],
        "syntax": [
          {
            "name": "Indentation Example",
            "description": "How Python blocks are structured.",
            "code": "def greet(name):\n    # This block is indented 4 spaces\n    if name == \"Alice\":\n        print(\"Welcome back Alice!\")\n    else:\n        print(\"Who are you?\")"
          },
          {
            "name": "Module import",
            "description": "Import a standard-library module.",
            "code": "import math\nprint(math.sqrt(81))"
          },
          {
            "name": "Module alias",
            "description": "Use a shorter module name.",
            "code": "import datetime as dt\nprint(dt.date.today())"
          }
        ],
        "sandbox": [
          {
            "command": "def my_func():\n    print(\"Indented!\")\nmy_func()",
            "output": "Indented!"
          },
          {
            "command": "import math\nprint(math.sqrt(16))",
            "output": "4.0"
          },
          {
            "command": "import datetime as dt\nprint(dt.date(2026, 1, 1).year)",
            "output": "2026"
          }
        ]
      },
      {
        "id": "b1c4",
        "title": "Chapter 4: Building Your First Python App",
        "learn": [
          {
            "title": "Variables and Data Types",
            "content": "## Core Data Types\n\n- **Integers**: Whole numbers (e.g., `10`)\n- **Floats**: Decimal numbers (e.g., `3.14`)\n- **Strings**: Text enclosed in quotes (e.g., `\"Python\"`)\n- **Booleans**: `True` or `False` (case-sensitive)\n\nAssign values using `=`."
          },
          {
            "title": "Operators",
            "content": "## Operators\n\nPython supports arithmetic operators (`+`, `-`, `*`, `/`, `//` for floor division, `%` for modulo, `**` for exponent) and comparison operators (`==`, `!=`, `>`, `<`).\n\n> **Tip:** Use `//` when you want to divide numbers and discard the fractional part."
          },
          {
            "title": "Opening the Python App File",
            "content": "## Opening the Python App File\n\nThis section focuses on **Opening the Python App File** as part of the chapter’s practical progression. Treat the idea as a small concept to understand, then reinforce it by writing and modifying a short Python example."
          },
          {
            "title": "Typing and Using Python Comments",
            "content": "## Typing and Using Python Comments\n\nComments document intent and clarify code for people. A single-line comment begins with `#` and is ignored by the Python interpreter."
          },
          {
            "title": "Understanding Python Data Types",
            "content": "## Understanding Python Data Types\n\nPython values have types that determine what operations make sense. The early building blocks include numbers, strings, and Boolean values."
          },
          {
            "title": "Numbers",
            "content": "## Numbers\n\nPython distinguishes numeric values such as integers and floating-point numbers. Arithmetic operators work directly on numeric objects."
          },
          {
            "title": "Words (strings)",
            "content": "## Words (strings)\n\nStrings represent text and are written using quotation marks. They can be combined, measured, searched, and transformed with string operations and methods."
          },
          {
            "title": "Booleans",
            "content": "## Booleans\n\nBoolean values are `True` and `False`. They are central to decisions because comparisons and logical expressions produce Boolean results."
          },
          {
            "title": "Working with Python Operators",
            "content": "## Working with Python Operators\n\nOperators combine values or compare them. Arithmetic, comparison, and Boolean operators form much of the expression language used by Python programs."
          },
          {
            "title": "Arithmetic operators",
            "content": "## Arithmetic operators\n\nArithmetic includes addition, subtraction, multiplication, division, floor division, modulo, and exponentiation. Choose the operator according to the result you need."
          },
          {
            "title": "Comparison operators",
            "content": "## Comparison operators\n\nComparison operators such as `==`, `!=`, `<`, and `>` test relationships and produce Boolean values that can drive program decisions."
          },
          {
            "title": "Boolean operators",
            "content": "## Boolean operators\n\n`and`, `or`, and `not` combine or invert Boolean conditions. They let a program express more than one requirement in a single decision."
          },
          {
            "title": "Creating and Using Variables",
            "content": "## Creating and Using Variables\n\nAssignment binds a name to a value. Variables let a program remember data and use the same value in later expressions."
          },
          {
            "title": "Creating valid variable names",
            "content": "## Creating valid variable names\n\nVariable names must follow Python identifier rules and should communicate what the value represents. Clear names make programs easier to understand."
          },
          {
            "title": "Creating variables in code",
            "content": "## Creating variables in code\n\nUse `name = value` to assign a value to a variable. The value may be a literal, an expression, or the result returned by a function."
          },
          {
            "title": "Manipulating variables",
            "content": "## Manipulating variables\n\nVariables can be reassigned or used to compute new values. Assignment changes what value a name refers to at that point in the program."
          },
          {
            "title": "Saving your work",
            "content": "## Saving your work\n\nThis section focuses on **Saving your work** as part of the chapter’s practical progression. Treat the idea as a small concept to understand, then reinforce it by writing and modifying a short Python example."
          },
          {
            "title": "Running your Python app in VS Code",
            "content": "## Running your Python app in VS Code\n\nThis section focuses on **Running your Python app in VS Code** as part of the chapter’s practical progression. Treat the idea as a small concept to understand, then reinforce it by writing and modifying a short Python example."
          },
          {
            "title": "Understanding What Syntax Is and Why It Matters",
            "content": "## Understanding What Syntax Is and Why It Matters\n\nSyntax is the grammar Python expects. A syntactically invalid program cannot be executed, so learning punctuation, keywords, and indentation is foundational."
          },
          {
            "title": "Putting Code Together",
            "content": "## Putting Code Together\n\nA useful Python program combines variables, expressions, control flow, functions, and modules into a readable sequence. The book encourages building this structure incrementally."
          }
        ],
        "syntax": [
          {
            "name": "Variables & Math",
            "description": "Basic arithmetic operations.",
            "code": "apples = 10\noranges = 5\ntotal = apples + oranges\n\n# Floor division\npacks = total // 3\nprint(packs)"
          },
          {
            "name": "Core values",
            "description": "Create variables of common basic types.",
            "code": "count = 12\nprice = 4.5\nlabel = \"widget\"\nready = True\nprint(count, price, label, ready)"
          },
          {
            "name": "Boolean expression",
            "description": "Combine comparison and Boolean operators.",
            "code": "temperature = 28\nprint(temperature > 25 and temperature < 35)"
          }
        ],
        "sandbox": [
          {
            "command": "x = 10\ny = 3\nprint(x // y)",
            "output": "3"
          },
          {
            "command": "print(5 ** 2)",
            "output": "25"
          },
          {
            "command": "x = 8\ny = 3\nprint(x % y)",
            "output": "2"
          },
          {
            "command": "print(5 > 2 and 2 > 1)",
            "output": "True"
          }
        ]
      }
    ],
    "quiz": [
      {
        "question": "What symbol is used for single-line comments in Python?",
        "options": [
          "//",
          "/*",
          "#",
          "--"
        ],
        "answer": 2,
        "explanation": "Python uses the hash symbol (#) for single-line comments."
      },
      {
        "question": "How does Python define code blocks?",
        "options": [
          "Curly braces {}",
          "Parentheses ()",
          "Indentation",
          "Begin/End keywords"
        ],
        "answer": 2,
        "explanation": "Python strictly uses indentation to define blocks of code."
      },
      {
        "question": "What is the output of 10 // 3?",
        "options": [
          "3.333",
          "3",
          "1",
          "0"
        ],
        "answer": 1,
        "explanation": "The // operator performs floor division, truncating the decimal part."
      },
      {
        "question": "Which component executes Python code?",
        "options": [
          "The interpreter",
          "The keyboard",
          "The browser",
          "The file extension"
        ],
        "answer": 0,
        "explanation": "The Python interpreter executes Python statements."
      },
      {
        "question": "Which tool in the book is used for notebook-based coding?",
        "options": [
          "Jupyter Notebook",
          "Paint",
          "PowerPoint",
          "FTP"
        ],
        "answer": 0,
        "explanation": "Jupyter Notebook is the notebook environment used in the book."
      },
      {
        "question": "Why is an isolated environment useful?",
        "options": [
          "To manage project dependencies",
          "To make code invisible",
          "To replace Python",
          "To remove files"
        ],
        "answer": 0,
        "explanation": "An environment helps keep project packages and versions organized."
      },
      {
        "question": "What prompt indicates interactive Python is ready?",
        "options": [
          ">>>",
          "###",
          "...html",
          "$$$"
        ],
        "answer": 0,
        "explanation": "The standard interactive interpreter prompt is >>>."
      },
      {
        "question": "What is a useful first debugging step?",
        "options": [
          "Read the error message",
          "Delete the program",
          "Restart the computer",
          "Ignore the traceback"
        ],
        "answer": 0,
        "explanation": "Error messages and tracebacks often identify the failing line and exception type."
      },
      {
        "question": "What does a Jupyter notebook combine?",
        "options": [
          "Code and explanatory text",
          "Only images",
          "Only terminal commands",
          "Only databases"
        ],
        "answer": 0,
        "explanation": "Notebook cells can contain executable code and Markdown explanations."
      },
      {
        "question": "What does indentation define in Python?",
        "options": [
          "Code blocks",
          "Variable types",
          "File names",
          "Packages"
        ],
        "answer": 0,
        "explanation": "Indentation is part of Python block syntax."
      },
      {
        "question": "How do you import the math module?",
        "options": [
          "import math",
          "use math",
          "include math",
          "load math"
        ],
        "answer": 0,
        "explanation": "Python uses the import statement."
      },
      {
        "question": "What does an import alias provide?",
        "options": [
          "A local alternate name",
          "A new data type",
          "A loop",
          "A file copy"
        ],
        "answer": 0,
        "explanation": "An alias gives the imported module a shorter local name."
      },
      {
        "question": "Which value is Boolean?",
        "options": [
          "True",
          "\"True\"",
          "1.0",
          "true"
        ],
        "answer": 0,
        "explanation": "True is the Boolean literal; capitalization matters."
      },
      {
        "question": "Which operator performs exponentiation?",
        "options": [
          "**",
          "//",
          "%",
          "=="
        ],
        "answer": 0,
        "explanation": "Python uses ** for exponentiation."
      },
      {
        "question": "What does = do in assignment?",
        "options": [
          "Binds a value to a name",
          "Compares two values",
          "Ends a loop",
          "Imports a module"
        ],
        "answer": 0,
        "explanation": "Assignment associates the expression on the right with the name on the left."
      }
    ]
  },
  {
    "id": "book2",
    "title": "Book 2: Understanding Python Building Blocks",
    "chapters": [
      {
        "id": "b2c1",
        "title": "Chapter 1: Working with Numbers, Text, and Dates",
        "learn": [
          {
            "title": "Calculating Numbers with Functions",
            "content": "## Calculating Numbers with Functions\n\nPython provides built-in and library functions for common numeric work. Functions such as `abs()`, `round()`, `min()`, and `max()` turn common calculations into reusable operations."
          },
          {
            "title": "Still More Math Functions",
            "content": "## Still More Math Functions\n\nThe `math` module extends basic arithmetic with functions for roots, powers, trigonometry, logarithms, and related calculations."
          },
          {
            "title": "Formatting Numbers",
            "content": "## Formatting Numbers\n\nFormatting separates a numeric value from how it should be displayed. Python format specifications can control precision, separators, width, and alignment."
          },
          {
            "title": "Formatting with f-strings",
            "content": "## Formatting with f-strings\n\nF-strings place expressions inside `{}` within a string and can include formatting instructions after a colon. They are convenient for readable output."
          },
          {
            "title": "Showing dollar amounts",
            "content": "## Showing dollar amounts\n\nCurrency output is a formatting problem: retain the numeric value for calculations and apply a display format only when presenting it."
          },
          {
            "title": "Formatting percent numbers",
            "content": "## Formatting percent numbers\n\nPercentages are often stored as a fractional value and displayed by multiplying the presentation by 100 with percent formatting."
          },
          {
            "title": "Making multiline format strings",
            "content": "## Making multiline format strings\n\nTriple-quoted strings allow text to span multiple lines. They are useful for reports and messages where preserving line breaks improves readability."
          },
          {
            "title": "Formatting width and alignment",
            "content": "## Formatting width and alignment\n\nFormat specifications can reserve a fixed field width and align text or numbers. This is useful for simple console tables and reports."
          },
          {
            "title": "Grappling with Weirder Numbers",
            "content": "## Grappling with Weirder Numbers\n\nThis section focuses on **Grappling with Weirder Numbers** as part of the chapter’s practical progression. Treat the idea as a small concept to understand, then reinforce it by writing and modifying a short Python example."
          },
          {
            "title": "Binary, octal, and hexadecimal numbers",
            "content": "## Binary, octal, and hexadecimal numbers\n\nPython can represent integers in bases other than decimal. Prefixes such as `0b`, `0o`, and `0x` make the intended base explicit."
          },
          {
            "title": "Complex numbers",
            "content": "## Complex numbers\n\nPython has a built-in complex-number type using a real part plus an imaginary part. The `j` suffix denotes the imaginary component."
          },
          {
            "title": "Manipulating Strings",
            "content": "## Manipulating Strings\n\nThis section focuses on **Manipulating Strings** as part of the chapter’s practical progression. Treat the idea as a small concept to understand, then reinforce it by writing and modifying a short Python example."
          },
          {
            "title": "Concatenating strings",
            "content": "## Concatenating strings\n\nString concatenation joins text values, commonly with `+`. For many pieces of text, f-strings or `join()` can make the intent clearer."
          },
          {
            "title": "Getting the length of a string",
            "content": "## Getting the length of a string\n\nThe built-in `len()` function returns the number of characters in a string. Indexing can then access individual characters by position."
          },
          {
            "title": "Working with common string operators",
            "content": "## Working with common string operators\n\nStrings support operations such as concatenation, repetition, membership tests, indexing, and slicing. These operators provide compact ways to work with text."
          },
          {
            "title": "Manipulating strings with methods",
            "content": "## Manipulating strings with methods\n\nString methods perform common transformations and searches, including case conversion, trimming, replacement, splitting, and joining."
          },
          {
            "title": "Uncovering Dates and Times",
            "content": "## Uncovering Dates and Times\n\nThis section focuses on **Uncovering Dates and Times** as part of the chapter’s practical progression. Treat the idea as a small concept to understand, then reinforce it by writing and modifying a short Python example."
          },
          {
            "title": "Working with dates",
            "content": "## Working with dates\n\nThe `datetime` module provides date objects for calendar-aware work. Using actual date values is safer than treating dates as arbitrary text when sorting or calculating."
          },
          {
            "title": "Working with times",
            "content": "## Working with times\n\nTime values represent clock information separately from calendar dates. The `datetime` family of types provides structured representations for time-related work."
          },
          {
            "title": "Calculating timespans",
            "content": "## Calculating timespans\n\n`timedelta` represents a duration and can be used to add or subtract intervals from dates and times."
          },
          {
            "title": "Accounting for Time Zones",
            "content": "## Accounting for Time Zones\n\nA clock time is incomplete when the time zone is unknown. Time-zone-aware values help distinguish the same instant across different regions."
          },
          {
            "title": "Working with Time Zones",
            "content": "## Working with Time Zones\n\nThe book introduces time-zone handling as an extension of date/time work. Keep the time-zone context attached when converting or comparing regional times."
          }
        ],
        "syntax": [
          {
            "name": "Number formatting",
            "description": "Format a numeric value for display.",
            "code": "value = 12345.6789\nprint(f\"{value:,.2f}\")"
          },
          {
            "name": "Date arithmetic",
            "description": "Work with a date and a duration.",
            "code": "from datetime import date, timedelta\nstart = date(2026, 1, 1)\nprint(start + timedelta(days=10))"
          }
        ],
        "sandbox": [
          {
            "command": "print(f\"{12.3456:.2f}\")",
            "output": "12.35"
          },
          {
            "command": "from datetime import date\nprint(date(2026, 8, 27).weekday())",
            "output": "3"
          }
        ]
      },
      {
        "id": "b2c2",
        "title": "Chapter 2: Controlling the Action",
        "learn": [
          {
            "title": "Making Decisions with If",
            "content": "## Making Decisions\n\nThe `if` statement executes code only if a condition is true. Use `elif` for multiple conditions and `else` as a catch-all.\n\n```python\nif x > 10:\n    print(\"Large\")\nelif x > 5:\n    print(\"Medium\")\nelse:\n    print(\"Small\")\n```"
          },
          {
            "title": "Loops",
            "content": "## Looping\n\n- **for loops**: Iterate over a sequence (like a list or a range of numbers).\n- **while loops**: Repeat as long as a condition is true.\n\n> **Tip:** Use `break` to exit a loop early, and `continue` to skip to the next iteration."
          },
          {
            "title": "Main Operators for Controlling the Action",
            "content": "## Main Operators for Controlling the Action\n\nControl flow relies on Boolean conditions and operators to decide which statements execute and how often they repeat."
          },
          {
            "title": "Making Decisions with if",
            "content": "## Making Decisions with if\n\nAn `if` block executes when its condition is true. Indentation identifies the statements belonging to that branch."
          },
          {
            "title": "Adding else to your if logic",
            "content": "## Adding else to your if logic\n\n`else` supplies a fallback branch when the preceding `if` condition is false. It is useful when exactly two broad outcomes are required."
          },
          {
            "title": "Handling multiple else statements with elif",
            "content": "## Handling multiple else statements with elif\n\n`elif` lets a program test additional conditions in sequence. Once one condition succeeds, the remaining branches are skipped."
          },
          {
            "title": "Ternary operations",
            "content": "## Ternary operations\n\nA conditional expression selects one of two values in a single expression. It is useful for short, simple choices where a full `if` block would be excessive."
          },
          {
            "title": "Repeating a Process with for",
            "content": "## Repeating a Process with for\n\nA `for` loop processes items from an iterable one at a time. It is the natural choice when the values to visit are already represented by a sequence or range."
          },
          {
            "title": "Looping through numbers in a range",
            "content": "## Looping through numbers in a range\n\n`range()` produces a sequence of integer positions without first building a list. Its stop value is excluded."
          },
          {
            "title": "Looping through a string",
            "content": "## Looping through a string\n\nStrings are iterable, so a `for` loop can process their characters one by one."
          },
          {
            "title": "Looping through a list",
            "content": "## Looping through a list\n\nA list can be traversed directly with `for`, allowing the code to operate on each item in order."
          },
          {
            "title": "Bailing out of a loop",
            "content": "## Bailing out of a loop\n\n`break` ends the nearest loop immediately. It is useful when the program has found what it needs and further iterations are unnecessary."
          },
          {
            "title": "Looping with continue",
            "content": "## Looping with continue\n\n`continue` skips the rest of the current iteration and starts the next one. It is useful for ignoring selected items without ending the loop."
          },
          {
            "title": "Nesting loops",
            "content": "## Nesting loops\n\nA loop can contain another loop. The inner loop completes its iterations for each iteration of the outer loop, so nesting should be used with care when the data is large."
          },
          {
            "title": "Looping with while",
            "content": "## Looping with while\n\nA `while` loop repeats while its condition remains true. The body normally changes state so that the loop can eventually terminate."
          },
          {
            "title": "Starting while loops over with continue",
            "content": "## Starting while loops over with continue\n\n`continue` can restart a `while` loop at its condition check. Make sure the state needed for termination is still updated."
          },
          {
            "title": "Breaking while loops with break",
            "content": "## Breaking while loops with break\n\n`break` provides an immediate exit from a `while` loop, including cases where the normal condition is not the only stopping rule."
          }
        ],
        "syntax": [
          {
            "name": "For Loop with Range",
            "description": "Looping a specific number of times.",
            "code": "for i in range(5):\n    # i will be 0, 1, 2, 3, 4\n    if i == 3:\n        continue\n    print(i)"
          },
          {
            "name": "While Loop",
            "description": "Executing while a condition holds.",
            "code": "x = 0\nwhile x < 3:\n    print(x)\n    x += 1"
          },
          {
            "name": "Branching",
            "description": "Choose an action from conditions.",
            "code": "score = 72\nif score >= 80:\n    print(\"excellent\")\nelif score >= 60:\n    print(\"pass\")\nelse:\n    print(\"retry\")"
          },
          {
            "name": "Loop control",
            "description": "Skip one value and stop at another.",
            "code": "for n in range(10):\n    if n == 2:\n        continue\n    if n == 6:\n        break\n    print(n)"
          }
        ],
        "sandbox": [
          {
            "command": "for i in range(3):\n    print(f\"Number {i}\")",
            "output": "Number 0\nNumber 1\nNumber 2"
          },
          {
            "command": "x = 0\nwhile x < 2:\n    print(x)\n    x += 1",
            "output": "0\n1"
          },
          {
            "command": "for i in range(3):\n    print(i)",
            "output": "0\n1\n2"
          },
          {
            "command": "x = 0\nwhile x < 2:\n    x += 1\nprint(x)",
            "output": "2"
          }
        ]
      },
      {
        "id": "b2c3",
        "title": "Chapter 3: Lists, Tuples, and Sets",
        "learn": [
          {
            "title": "Lists",
            "content": "## Lists\n\nLists are ordered, mutable collections of items enclosed in `[]`.\n- **Indexing**: Access items starting from 0.\n- **Methods**: `.append()`, `.insert()`, `.remove()`, `.pop()`, `.sort()`."
          },
          {
            "title": "Tuples and Sets",
            "content": "## Tuples\n\nTuples are like lists but **immutable** (cannot be changed after creation). They use `()`.\n\n## Sets\n\nSets are unordered collections of unique elements, enclosed in `{}`."
          },
          {
            "title": "Defining and Using Lists",
            "content": "## Defining and Using Lists\n\nLists are ordered, mutable collections. Square brackets create them, and indexing starts at zero."
          },
          {
            "title": "Referencing list items by position",
            "content": "## Referencing list items by position\n\nList indexing retrieves an element by position, while negative indexes count backward from the end."
          },
          {
            "title": "Looping through a list",
            "content": "## Looping through a list\n\nA list can be traversed directly with `for`, allowing the code to operate on each item in order."
          },
          {
            "title": "Seeing whether a list contains an item",
            "content": "## Seeing whether a list contains an item\n\nThe `in` operator tests membership. It returns a Boolean indicating whether the requested value occurs in the list."
          },
          {
            "title": "Getting the length of a list",
            "content": "## Getting the length of a list\n\n`len()` reports how many items a list contains. This is different from the largest index, because indexes start at zero."
          },
          {
            "title": "Adding an item to the end of a list",
            "content": "## Adding an item to the end of a list\n\n`append()` adds one item after the current last item. It changes the existing list rather than creating a separate result."
          },
          {
            "title": "Inserting an item into a list",
            "content": "## Inserting an item into a list\n\n`insert(index, value)` places a value at a chosen position and shifts later items to the right."
          },
          {
            "title": "Changing an item in a list",
            "content": "## Changing an item in a list\n\nBecause lists are mutable, assigning to an index replaces the value stored at that position."
          },
          {
            "title": "Combining lists",
            "content": "## Combining lists\n\nLists can be combined with `+` to create a new list. `extend()` adds multiple items to an existing list."
          },
          {
            "title": "Removing list items",
            "content": "## Removing list items\n\nMethods such as `remove()` and `pop()` delete items in different ways: one by value and one by position, with `pop()` also returning the removed item."
          },
          {
            "title": "Clearing out a list",
            "content": "## Clearing out a list\n\n`clear()` removes all items from a list while keeping the list object available for reuse."
          },
          {
            "title": "Counting how many times an item appears in a list",
            "content": "## Counting how many times an item appears in a list\n\nThe `count()` method returns the number of occurrences of a value in a list."
          },
          {
            "title": "Finding an list item’s index",
            "content": "## Finding an list item’s index\n\n`index()` finds the first position where a requested value occurs. It raises an exception if the value is absent, so membership checks can be useful first."
          },
          {
            "title": "Alphabetizing and sorting lists",
            "content": "## Alphabetizing and sorting lists\n\n`sort()` orders a list in place. The book also discusses reverse ordering and custom keys for cases such as mixed-case strings."
          },
          {
            "title": "Reversing a list",
            "content": "## Reversing a list\n\n`reverse()` flips the current order; it is not the same as sorting from largest to smallest or Z to A."
          },
          {
            "title": "Copying a list",
            "content": "## Copying a list\n\nAssignment can make two names refer to the same list. Use a copying operation when an independent list is required."
          },
          {
            "title": "What’s a Tuple and Who Cares?",
            "content": "## What’s a Tuple and Who Cares?\n\nTuples are ordered collections that cannot be changed after creation. Their immutability makes them useful for fixed groups of values."
          },
          {
            "title": "Working with Sets",
            "content": "## Working with Sets\n\nSets hold unique elements without relying on positional indexing. They are useful for membership and removing duplicates."
          }
        ],
        "syntax": [
          {
            "name": "List Operations",
            "description": "Common list manipulations.",
            "code": "fruits = ['apple', 'banana']\nfruits.append('cherry')\nfruits[0] = 'mango'\nprint(fruits)"
          },
          {
            "name": "Set Operations",
            "description": "Using sets for uniqueness.",
            "code": "my_list = [1, 2, 2, 3, 3]\nunique_items = set(my_list)\nprint(unique_items)"
          },
          {
            "name": "List workflow",
            "description": "Modify a mutable list.",
            "code": "items = [\"a\", \"b\"]\nitems.append(\"c\")\nitems[0] = \"z\"\nprint(items)"
          },
          {
            "name": "Tuple and set",
            "description": "Use fixed values and uniqueness.",
            "code": "point = (10, 20)\nvalues = {1, 1, 2, 3}\nprint(point)\nprint(values)"
          }
        ],
        "sandbox": [
          {
            "command": "fruits = [\"apple\", \"banana\"]\nfruits.append(\"cherry\")\nprint(fruits)",
            "output": "['apple', 'banana', 'cherry']"
          },
          {
            "command": "my_set = {1, 2, 2, 3}\nprint(my_set)",
            "output": "{1, 2, 3}"
          },
          {
            "command": "a = [1, 2]\na.append(3)\nprint(a)",
            "output": "[1, 2, 3]"
          },
          {
            "command": "print(set([1, 1, 2, 3]))",
            "output": "{1, 2, 3}"
          }
        ]
      },
      {
        "id": "b2c4",
        "title": "Chapter 4: Cruising Massive Data with Dictionaries",
        "learn": [
          {
            "title": "Understanding Data Dictionaries",
            "content": "## Understanding Data Dictionaries\n\nDictionaries store values under keys, making them suitable for records where names are more meaningful than numeric positions."
          },
          {
            "title": "Creating a Data Dictionary",
            "content": "## Creating a Data Dictionary\n\nCurly braces with key-value pairs create a dictionary. Keys identify values and should be suitable as dictionary keys."
          },
          {
            "title": "Accessing dictionary data",
            "content": "## Accessing dictionary data\n\nUse `dictionary[key]` when the key is expected to exist. Use `get()` when a missing key should be handled gracefully."
          },
          {
            "title": "Getting the length of a dictionary",
            "content": "## Getting the length of a dictionary\n\n`len()` counts key-value pairs in a dictionary."
          },
          {
            "title": "Seeing whether a key exists in a dictionary",
            "content": "## Seeing whether a key exists in a dictionary\n\nThe `in` operator checks dictionary keys. It does not search the dictionary values by default."
          },
          {
            "title": "Getting dictionary data with get()",
            "content": "## Getting dictionary data with get()\n\n`get()` retrieves a value while allowing a default result when the key is absent, avoiding a `KeyError`."
          },
          {
            "title": "Changing the value of a key",
            "content": "## Changing the value of a key\n\nAssigning to an existing dictionary key replaces its value. The key remains the same while its associated data changes."
          },
          {
            "title": "Adding or changing dictionary data",
            "content": "## Adding or changing dictionary data\n\nAssigning to `d[key]` adds a new pair if the key is new or updates the existing pair if it already exists."
          },
          {
            "title": "Looping through a Dictionary",
            "content": "## Looping through a Dictionary\n\nDictionary loops can visit keys, values, or key-value pairs. `items()` is useful when both key and value are needed."
          },
          {
            "title": "Data Dictionary Methods",
            "content": "## Data Dictionary Methods\n\nDictionary methods provide common operations for inspecting, retrieving, updating, copying, and removing key-value data."
          },
          {
            "title": "Copying a Dictionary",
            "content": "## Copying a Dictionary\n\nLike lists, dictionaries can have multiple names referring to one object. Use `copy()` when you need an independent shallow copy."
          },
          {
            "title": "Deleting Dictionary Items",
            "content": "## Deleting Dictionary Items\n\n`del`, `pop()`, and `popitem()` remove dictionary data in different ways. Choose the operation based on whether you know the key and whether you need the removed value."
          },
          {
            "title": "Having Fun with Multi-Key Dictionaries",
            "content": "## Having Fun with Multi-Key Dictionaries\n\nA dictionary can contain many related keys, allowing one object to model a richer record than a single value."
          },
          {
            "title": "Using the mysterious fromkeys and setdefault methods",
            "content": "## Using the mysterious fromkeys and setdefault methods\n\n`fromkeys()` creates a dictionary from a collection of keys, while `setdefault()` retrieves a key and can create it with a default value when absent."
          },
          {
            "title": "Nesting dictionaries",
            "content": "## Nesting dictionaries\n\nDictionaries can contain other dictionaries, creating hierarchical data structures. Access nested values by following the keys level by level."
          }
        ],
        "syntax": [
          {
            "name": "Dictionary workflow",
            "description": "Create, update, and iterate through key-value data.",
            "code": "person = {\"name\": \"Amina\", \"age\": 24}\nperson[\"age\"] += 1\nfor key, value in person.items():\n    print(key, value)"
          },
          {
            "name": "Nested dictionary",
            "description": "Represent a small record hierarchy.",
            "code": "city = {\"name\": \"Addis Ababa\", \"weather\": {\"temp\": 22}}\nprint(city[\"weather\"][\"temp\"])"
          }
        ],
        "sandbox": [
          {
            "command": "d = {\"a\": 1}\nd[\"b\"] = 2\nprint(d[\"b\"])",
            "output": "2"
          },
          {
            "command": "d = {\"x\": 5}\nprint(d.get(\"y\", 0))",
            "output": "0"
          }
        ]
      },
      {
        "id": "b2c5",
        "title": "Chapter 5: Wrangling Bigger Chunks of Code",
        "learn": [
          {
            "title": "Functions",
            "content": "## Functions\n\nFunctions allow you to reuse blocks of code. Define them using the `def` keyword.\nYou can pass data into functions via parameters. Functions can return data using the `return` keyword."
          },
          {
            "title": "Variable Arguments",
            "content": "## *args and **kwargs\n\nUse `*args` to pass a variable number of positional arguments as a tuple.\nUse `**kwargs` to pass a variable number of keyword arguments as a dictionary.\n\n## Lambda Functions\n\nAnonymous, single-line functions created with the `lambda` keyword."
          },
          {
            "title": "Creating a Function",
            "content": "## Creating a Function\n\nFunctions package reusable behavior behind a name. Define them with `def` and call them whenever that behavior is needed."
          },
          {
            "title": "Commenting a Function",
            "content": "## Commenting a Function\n\nGood function comments explain purpose, inputs, outputs, or assumptions. Comments should help a future reader understand why the function exists."
          },
          {
            "title": "Passing Information to a Function",
            "content": "## Passing Information to a Function\n\nParameters let callers provide data to a function. Arguments are the concrete values supplied during a call."
          },
          {
            "title": "Defining optional parameters with defaults",
            "content": "## Defining optional parameters with defaults\n\nA default parameter value is used when the caller omits that argument. This makes a function flexible without requiring every option to be specified."
          },
          {
            "title": "Passing multiple values to a function",
            "content": "## Passing multiple values to a function\n\nA function can accept several parameters. Positional arguments are matched by order unless keyword arguments are used."
          },
          {
            "title": "Using keyword arguments (kwargs)",
            "content": "## Using keyword arguments (kwargs)\n\nKeyword arguments identify parameters by name, making calls more explicit. `**kwargs` also refers to collecting arbitrary keyword arguments into a dictionary."
          },
          {
            "title": "Passing multiple values in a list",
            "content": "## Passing multiple values in a list\n\nA list can be passed as one argument, or unpacked with `*` when a function expects separate positional arguments."
          },
          {
            "title": "Passing in an arbitrary number of arguments",
            "content": "## Passing in an arbitrary number of arguments\n\n`*args` collects an arbitrary number of positional arguments into a tuple, allowing a function to accept a variable-length call."
          },
          {
            "title": "Returning Values from Functions",
            "content": "## Returning Values from Functions\n\n`return` sends a result back to the caller. A returned value can be stored, printed, or passed into another operation."
          },
          {
            "title": "Unmasking Anonymous Functions",
            "content": "## Unmasking Anonymous Functions\n\nA `lambda` expression creates a small anonymous function. It is most useful for short operations passed directly to functions such as sorting."
          }
        ],
        "syntax": [
          {
            "name": "Defining Functions",
            "description": "Function with default arguments.",
            "code": "def greet(name=\"Guest\", greeting=\"Hello\"):\n    return f\"{greeting}, {name}!\"\n\nprint(greet())\nprint(greet(\"Alice\"))"
          },
          {
            "name": "Lambda Function",
            "description": "Inline anonymous function.",
            "code": "square = lambda x: x ** 2\nprint(square(5))"
          },
          {
            "name": "Reusable function",
            "description": "Define a function with a return value.",
            "code": "def area(width, height):\n    return width * height\n\nprint(area(5, 3))"
          },
          {
            "name": "Variable arguments",
            "description": "Accept any number of positional values.",
            "code": "def total(*numbers):\n    return sum(numbers)\n\nprint(total(2, 4, 6, 8))"
          }
        ],
        "sandbox": [
          {
            "command": "def add(a, b=5):\n    return a + b\nprint(add(10))",
            "output": "15"
          },
          {
            "command": "nums = [1, 4, 2]\nnums.sort(key=lambda x: -x)\nprint(nums)",
            "output": "[4, 2, 1]"
          },
          {
            "command": "def add(a, b):\n    return a + b\nprint(add(2, 3))",
            "output": "5"
          },
          {
            "command": "f = lambda x: x * 2\nprint(f(6))",
            "output": "12"
          }
        ]
      },
      {
        "id": "b2c6",
        "title": "Chapter 6: Doing Python with Class",
        "learn": [
          {
            "title": "Mastering Classes and Objects",
            "content": "## Mastering Classes and Objects\n\nClasses define the structure and behavior of objects. Objects are instances that hold their own state while sharing the class definition."
          },
          {
            "title": "Creating a Class",
            "content": "## Creating a Class\n\nUse the `class` keyword to define a new object type. The class body can contain attributes and methods."
          },
          {
            "title": "Creating an Instance from a Class",
            "content": "## Creating an Instance from a Class\n\nCalling a class creates an instance. The instance is the concrete object that stores state and can use the class behavior."
          },
          {
            "title": "Giving an Object Its Attributes",
            "content": "## Giving an Object Its Attributes\n\nAttributes store data associated with an object. Instance attributes are commonly assigned through `self` inside an initializer or method."
          },
          {
            "title": "Creating an instance from a class",
            "content": "## Creating an instance from a class\n\nCalling a class creates an instance. The instance is the concrete object that stores state and can use the class behavior."
          },
          {
            "title": "Changing the value of an attribute",
            "content": "## Changing the value of an attribute\n\nAn attribute can be reassigned after an object is created. This changes that particular instance unless the attribute is supplied by the class instead."
          },
          {
            "title": "Defining attributes with default values",
            "content": "## Defining attributes with default values\n\nDefault attribute values can establish initial object state. The design should distinguish values shared by all instances from values unique to each instance."
          },
          {
            "title": "Giving a Class Methods",
            "content": "## Giving a Class Methods\n\nMethods are functions defined inside a class and are called through objects or the class depending on their type."
          },
          {
            "title": "Passing parameters to methods",
            "content": "## Passing parameters to methods\n\nInstance methods normally receive `self` first, followed by any additional parameters needed for the operation."
          },
          {
            "title": "Calling a class method by class name",
            "content": "## Calling a class method by class name\n\nMethods can sometimes be invoked through the class itself. The calling form must supply the arguments expected by the method."
          },
          {
            "title": "Using class variables",
            "content": "## Using class variables\n\nA class variable belongs to the class rather than one particular instance. It can represent state shared by instances."
          },
          {
            "title": "Using class methods",
            "content": "## Using class methods\n\nA `classmethod` receives the class as its first argument, conventionally named `cls`, and can operate on class-level state."
          },
          {
            "title": "Using static methods",
            "content": "## Using static methods\n\nA `staticmethod` is a function placed in the class namespace without automatic `self` or `cls` binding."
          },
          {
            "title": "Understanding Class Inheritance",
            "content": "## Understanding Class Inheritance\n\nInheritance lets a subclass reuse and specialize behavior from a base class. It is useful when types share a clear conceptual relationship."
          },
          {
            "title": "Creating the base (main) class",
            "content": "## Creating the base (main) class\n\nThe base class contains behavior common to the family of related objects. Subclasses can then add or specialize details."
          },
          {
            "title": "Defining a subclass",
            "content": "## Defining a subclass\n\nA subclass names its base class in parentheses and inherits its accessible behavior. The subclass can add new methods or override existing ones."
          },
          {
            "title": "Overriding a default value from a subclass",
            "content": "## Overriding a default value from a subclass\n\nA subclass can replace inherited class behavior or default data when the specialized type needs different behavior."
          },
          {
            "title": "Adding extra parameters from a subclass",
            "content": "## Adding extra parameters from a subclass\n\nA subclass initializer can accept additional information while still initializing the inherited part of the object."
          },
          {
            "title": "Calling a base class method",
            "content": "## Calling a base class method\n\nA subclass can explicitly invoke inherited behavior, often through `super()`, before or after adding its own logic."
          },
          {
            "title": "Using the same name twice",
            "content": "## Using the same name twice\n\nNames can refer to different things depending on scope and object context. Understanding attribute and method lookup prevents confusing collisions."
          }
        ],
        "syntax": [
          {
            "name": "Class and instance",
            "description": "Create an object with instance state.",
            "code": "class Sensor:\n    def __init__(self, name):\n        self.name = name\n\ns = Sensor(\"temperature\")\nprint(s.name)"
          },
          {
            "name": "Inheritance",
            "description": "Extend a base class.",
            "code": "class Vehicle:\n    def move(self):\n        print(\"moving\")\n\nclass Robot(Vehicle):\n    pass\n\nRobot().move()"
          }
        ],
        "sandbox": [
          {
            "command": "class Box:\n    pass\nb = Box()\nprint(type(b).__name__)",
            "output": "Box"
          },
          {
            "command": "class Animal:\n    def speak(self): print(\"sound\")\nAnimal().speak()",
            "output": "sound"
          }
        ]
      },
      {
        "id": "b2c7",
        "title": "Chapter 7: Sidestepping Errors",
        "learn": [
          {
            "title": "Understanding Exceptions",
            "content": "## Understanding Exceptions\n\nExceptions are Python’s mechanism for reporting unusual conditions during execution, such as invalid conversions or missing files."
          },
          {
            "title": "Handling Errors Gracefully",
            "content": "## Handling Errors Gracefully\n\nUse `try` and `except` to intercept expected failures and choose a controlled response instead of allowing the whole program to stop."
          },
          {
            "title": "Being Specific about Exceptions",
            "content": "## Being Specific about Exceptions\n\nCatching a specific exception documents what failure is expected and avoids accidentally hiding unrelated programming errors."
          },
          {
            "title": "Keeping Your App from Crashing",
            "content": "## Keeping Your App from Crashing\n\nA robust program anticipates likely failures and handles them at an appropriate boundary. Error handling should still leave the program in a sensible state."
          },
          {
            "title": "Adding an else to the Mix",
            "content": "## Adding an else to the Mix\n\nA `try` block can have an `else` section that runs only when no exception occurred. This separates successful-path work from error handling."
          },
          {
            "title": "Using try . . . except . . . else . . . finally",
            "content": "## Using try . . . except . . . else . . . finally\n\nThe full pattern separates attempted work, exception handling, success-only work, and cleanup. `finally` runs whether an exception occurred or not."
          },
          {
            "title": "Raising Your Own Exceptions",
            "content": "## Raising Your Own Exceptions\n\n`raise` lets a program deliberately signal an invalid condition. Custom exceptions can make application-specific failures clearer."
          }
        ],
        "syntax": [
          {
            "name": "Specific exception handling",
            "description": "Handle a conversion error explicitly.",
            "code": "text = \"not-a-number\"\ntry:\n    value = int(text)\nexcept ValueError:\n    value = 0\nprint(value)"
          },
          {
            "name": "Raise an exception",
            "description": "Validate an input and signal failure.",
            "code": "def set_speed(speed):\n    if not 0 <= speed <= 100:\n        raise ValueError(\"speed must be 0..100\")\n    return speed\n\nprint(set_speed(60))"
          }
        ],
        "sandbox": [
          {
            "command": "try:\n    print(10 / 0)\nexcept ZeroDivisionError:\n    print(\"cannot divide\")",
            "output": "cannot divide"
          },
          {
            "command": "raise ValueError(\"bad input\")",
            "output": "ValueError: bad input"
          }
        ]
      }
    ],
    "quiz": [
      {
        "question": "Which brackets are used to define a Python dictionary?",
        "options": [
          "[]",
          "()",
          "{}",
          "<>"
        ],
        "answer": 2,
        "explanation": "Dictionaries use curly braces {}."
      },
      {
        "question": "What keyword is used to define a function in Python?",
        "options": [
          "func",
          "def",
          "function",
          "lambda"
        ],
        "answer": 1,
        "explanation": "The 'def' keyword defines a standard function."
      },
      {
        "question": "Which method adds an item to the end of a list?",
        "options": [
          ".insert()",
          ".add()",
          ".push()",
          ".append()"
        ],
        "answer": 3,
        "explanation": ".append() adds a single item to the end of a list."
      },
      {
        "question": "Which formatting form embeds expressions inside strings?",
        "options": [
          "f-strings",
          "CSV",
          "JSON",
          "comments"
        ],
        "answer": 0,
        "explanation": "F-strings use braces to embed expressions."
      },
      {
        "question": "What type represents a duration?",
        "options": [
          "timedelta",
          "tuple",
          "set",
          "bytes"
        ],
        "answer": 0,
        "explanation": "datetime.timedelta represents a duration."
      },
      {
        "question": "Which prefix denotes hexadecimal integer literals?",
        "options": [
          "0x",
          "0b",
          "0o",
          "0h"
        ],
        "answer": 0,
        "explanation": "0x introduces a hexadecimal integer literal."
      },
      {
        "question": "Which keyword exits a loop?",
        "options": [
          "break",
          "skip",
          "exitloop",
          "stop"
        ],
        "answer": 0,
        "explanation": "break immediately exits the nearest loop."
      },
      {
        "question": "Which loop is natural for iterating over a list?",
        "options": [
          "for",
          "switch",
          "repeat-until",
          "goto"
        ],
        "answer": 0,
        "explanation": "A for loop iterates over an iterable such as a list."
      },
      {
        "question": "What does continue do?",
        "options": [
          "Skips to the next iteration",
          "Ends the program",
          "Defines a function",
          "Returns a value"
        ],
        "answer": 0,
        "explanation": "continue skips the rest of the current iteration."
      },
      {
        "question": "Are Python lists mutable?",
        "options": [
          "Yes",
          "No",
          "Only when empty",
          "Only in notebooks"
        ],
        "answer": 0,
        "explanation": "Lists can be changed after creation."
      },
      {
        "question": "Which method adds one item to the end of a list?",
        "options": [
          "append",
          "push",
          "addlast",
          "attach"
        ],
        "answer": 0,
        "explanation": "append() adds one item at the end."
      },
      {
        "question": "What collection keeps only unique elements?",
        "options": [
          "set",
          "list",
          "tuple",
          "string"
        ],
        "answer": 0,
        "explanation": "Sets contain unique elements."
      },
      {
        "question": "What does a dictionary store?",
        "options": [
          "Key-value pairs",
          "Only numbers",
          "Only strings",
          "Ordered instructions"
        ],
        "answer": 0,
        "explanation": "Dictionaries map keys to values."
      },
      {
        "question": "What does get() help avoid?",
        "options": [
          "KeyError for a missing key",
          "SyntaxError",
          "ImportError",
          "IndentationError"
        ],
        "answer": 0,
        "explanation": "get() can return a default when a key is absent."
      },
      {
        "question": "Which method iterates over keys and values together?",
        "options": [
          "items()",
          "pairs()",
          "both()",
          "entries()"
        ],
        "answer": 0,
        "explanation": "items() returns key-value pairs for iteration."
      },
      {
        "question": "Which keyword defines a function?",
        "options": [
          "def",
          "func",
          "define",
          "lambda"
        ],
        "answer": 0,
        "explanation": "def defines a named function."
      },
      {
        "question": "What does *args collect?",
        "options": [
          "Positional arguments",
          "Keyword names",
          "Modules",
          "Exceptions"
        ],
        "answer": 0,
        "explanation": "*args collects extra positional arguments into a tuple."
      },
      {
        "question": "What does lambda create?",
        "options": [
          "A small anonymous function",
          "A class",
          "A file",
          "A loop"
        ],
        "answer": 0,
        "explanation": "lambda creates an anonymous function expression."
      },
      {
        "question": "What is an instance?",
        "options": [
          "An object created from a class",
          "A module",
          "A loop",
          "An exception"
        ],
        "answer": 0,
        "explanation": "An instance is a concrete object created from a class."
      },
      {
        "question": "What does inheritance allow?",
        "options": [
          "Reuse and specialization of class behavior",
          "Automatic file saving",
          "Network access",
          "JSON parsing"
        ],
        "answer": 0,
        "explanation": "A subclass can inherit and specialize a base class."
      },
      {
        "question": "Which decorator creates a class method?",
        "options": [
          "@classmethod",
          "@method",
          "@class",
          "@staticclass"
        ],
        "answer": 0,
        "explanation": "@classmethod changes the method binding to receive the class."
      },
      {
        "question": "What handles an expected runtime exception?",
        "options": [
          "try/except",
          "if/import",
          "for/else",
          "class/def"
        ],
        "answer": 0,
        "explanation": "try/except is the standard exception-handling structure."
      },
      {
        "question": "Which block always runs for cleanup?",
        "options": [
          "finally",
          "else",
          "catch",
          "cleanup"
        ],
        "answer": 0,
        "explanation": "finally executes whether an exception occurs or not."
      },
      {
        "question": "Which keyword deliberately raises an exception?",
        "options": [
          "raise",
          "throw",
          "error",
          "fail"
        ],
        "answer": 0,
        "explanation": "raise signals an exception explicitly."
      }
    ]
  },
  {
    "id": "book3",
    "title": "Book 3: Working with Libraries",
    "chapters": [
      {
        "id": "b3c1",
        "title": "Chapter 1: Working with External Files",
        "learn": [
          {
            "title": "File Operations",
            "content": "## Opening and Closing Files\n\nUse the `open()` function to open a file. Always remember to close it, or better yet, use the `with` statement (context manager) to handle closing automatically.\nModes: `'r'` (read), `'w'` (write/overwrite), `'a'` (append)."
          },
          {
            "title": "Reading and Writing",
            "content": "## Reading and Writing\n\n- `.read()`: Reads the entire file.\n- `.readlines()`: Reads all lines into a list.\n- `.write()`: Writes a string to the file.\n\n> **Tip:** Use the `csv` module to easily parse and write Comma-Separated Values files."
          },
          {
            "title": "Understanding Text and Binary Files",
            "content": "## Understanding Text and Binary Files\n\nText files are interpreted as characters, while binary files contain raw bytes. The correct mode and handling depend on the kind of data stored."
          },
          {
            "title": "Opening and Closing Files",
            "content": "## Opening and Closing Files\n\n`open()` creates a file object. The `with` statement is the preferred pattern because it ensures the file is closed when the block ends."
          },
          {
            "title": "Reading a File’s Contents",
            "content": "## Reading a File’s Contents\n\nMethods such as `read()` retrieve file content as text or bytes depending on the mode. Read only what the program needs when files are large."
          },
          {
            "title": "Looping through a File",
            "content": "## Looping through a File\n\nFile objects are iterable, so a `for` loop can process one line at a time without loading the entire file into memory."
          },
          {
            "title": "Looping with readlines()",
            "content": "## Looping with readlines()\n\n`readlines()` returns the file’s lines as a list. It is convenient when the collection of lines itself needs to be retained."
          },
          {
            "title": "Looping with readline()",
            "content": "## Looping with readline()\n\n`readline()` retrieves one line at a time. Repeated calls advance through the file."
          },
          {
            "title": "Appending versus overwriting files",
            "content": "## Appending versus overwriting files\n\nWrite mode replaces existing content, while append mode adds new content at the end. Choosing the wrong mode can destroy previous data."
          },
          {
            "title": "Using tell() to determine the pointer location",
            "content": "## Using tell() to determine the pointer location\n\n`tell()` reports the current position of the file pointer. It is useful when inspecting or managing sequential file access."
          },
          {
            "title": "Moving the pointer with seek()",
            "content": "## Moving the pointer with seek()\n\n`seek()` moves the file pointer to a specified position, allowing later reads or writes to begin from a different location."
          },
          {
            "title": "Reading and Copying a Binary File",
            "content": "## Reading and Copying a Binary File\n\nBinary data should be opened with a binary mode such as `rb` and written with a corresponding binary mode such as `wb`."
          },
          {
            "title": "Conquering CSV Files",
            "content": "## Conquering CSV Files\n\nCSV files represent tabular data as rows and separators. Python’s `csv` module handles quoting and delimiter details more safely than manual string splitting."
          },
          {
            "title": "Opening a CSV file",
            "content": "## Opening a CSV file\n\nOpen a CSV file with appropriate newline handling and pass the file object to a CSV reader or writer."
          },
          {
            "title": "Converting strings",
            "content": "## Converting strings\n\nCSV fields arrive as text, so programs often convert them into numbers, dates, or Boolean values before analysis."
          },
          {
            "title": "Converting to integers",
            "content": "## Converting to integers\n\nUse `int()` when a textual field represents a whole number. Validate or catch conversion errors when input may be dirty."
          },
          {
            "title": "Converting to date",
            "content": "## Converting to date\n\nDate text must be parsed into a date representation before date comparisons and calculations behave like calendar operations."
          },
          {
            "title": "Converting to Boolean",
            "content": "## Converting to Boolean\n\nBoolean conversion depends on the input representation. Text such as `\"False\"` is not the same as the Boolean value `False`, so explicit parsing may be needed."
          },
          {
            "title": "Converting to floats",
            "content": "## Converting to floats\n\nUse `float()` for decimal numeric fields stored as text. Be mindful of malformed or missing values in real-world data."
          },
          {
            "title": "Converting from CSV to Objects and Dictionaries",
            "content": "## Converting from CSV to Objects and Dictionaries\n\nCSV rows can be represented as dictionaries keyed by column names or transformed into custom objects for richer program behavior."
          },
          {
            "title": "Importing CSV to Python objects",
            "content": "## Importing CSV to Python objects\n\nMapping columns to object attributes creates records that can carry both data and methods."
          },
          {
            "title": "Importing CSV to Python dictionaries",
            "content": "## Importing CSV to Python dictionaries\n\nDictionary-based CSV readers make each row easy to access by its column heading, which is convenient for data-oriented code."
          }
        ],
        "syntax": [
          {
            "name": "With Open",
            "description": "Safely open a file.",
            "code": "with open('file.txt', 'r') as f:\n    data = f.read()\n    print(data)\n\n# The file is automatically closed here."
          },
          {
            "name": "Safe text file access",
            "description": "Read a text file using a context manager.",
            "code": "with open(\"notes.txt\", \"r\", encoding=\"utf-8\") as file:\n    for line in file:\n        print(line.rstrip())"
          },
          {
            "name": "CSV reader",
            "description": "Read rows by column name.",
            "code": "import csv\nwith open(\"people.csv\", newline=\"\", encoding=\"utf-8\") as f:\n    for row in csv.DictReader(f):\n        print(row[\"name\"])"
          }
        ],
        "sandbox": [
          {
            "command": "import csv\nprint(\"Name,Age\\nAlice,25\")",
            "output": "Name,Age\nAlice,25"
          },
          {
            "command": "from io import StringIO\nf = StringIO(\"a\\nb\\n\")\nprint(f.readline().strip())",
            "output": "a"
          },
          {
            "command": "import csv\nprint(list(csv.reader([\"a,b\", \"1,2\"])))",
            "output": "[['a', 'b'], ['1', '2']]"
          }
        ]
      },
      {
        "id": "b3c2",
        "title": "Chapter 2: Juggling JSON Data",
        "learn": [
          {
            "title": "What is JSON?",
            "content": "## What is JSON?\n\nJSON (JavaScript Object Notation) is a standard format for data exchange. It looks very similar to Python dictionaries and lists."
          },
          {
            "title": "The JSON Module",
            "content": "## The json Module\n\n- `json.loads()`: Parses a JSON string into a Python dictionary.\n- `json.dumps()`: Converts a Python dictionary into a JSON string.\n- `json.load()` / `json.dump()`: For reading from / writing to files directly."
          },
          {
            "title": "Organizing JSON Data",
            "content": "## Organizing JSON Data\n\nJSON organizes data with objects, arrays, and primitive values. Its structure maps naturally to Python dictionaries, lists, strings, numbers, and Booleans."
          },
          {
            "title": "Understanding Serialization",
            "content": "## Understanding Serialization\n\nSerialization converts an in-memory structure into a format that can be stored or transmitted. Deserialization reverses that process."
          },
          {
            "title": "Loading Data from JSON Files",
            "content": "## Loading Data from JSON Files\n\n`json.load()` reads JSON from a file and converts it into Python data structures."
          },
          {
            "title": "Converting an Excel date to a JSON date",
            "content": "## Converting an Excel date to a JSON date\n\nDates do not have a single universal JSON representation. Conversion requires choosing a textual representation that preserves the intended date information."
          },
          {
            "title": "Looping through a keyed JSON file",
            "content": "## Looping through a keyed JSON file\n\nAfter loading keyed JSON into a dictionary, normal dictionary iteration can process keys and values one record at a time."
          },
          {
            "title": "Converting Firebase timestamps to Python dates",
            "content": "## Converting Firebase timestamps to Python dates\n\nExternal systems may encode time as timestamps rather than ordinary date strings. Convert the representation before using Python date/time operations."
          },
          {
            "title": "Loading unkeyed JSON from a Python string",
            "content": "## Loading unkeyed JSON from a Python string\n\n`json.loads()` parses JSON text held in a Python string, returning the corresponding Python structure."
          },
          {
            "title": "Loading keyed JSON from a Python string",
            "content": "## Loading keyed JSON from a Python string\n\nWhen JSON text represents an object with named fields, `json.loads()` produces a Python dictionary whose keys can be accessed normally."
          },
          {
            "title": "Changing JSON data",
            "content": "## Changing JSON data\n\nOnce JSON has been loaded, modify the Python dictionary or list and serialize it again when the updated data needs to be stored."
          },
          {
            "title": "Removing data from a dictionary",
            "content": "## Removing data from a dictionary\n\nJSON objects become Python dictionaries, so normal dictionary operations such as `del` and `pop()` can remove fields before saving."
          },
          {
            "title": "Dumping Python Data to JSON",
            "content": "## Dumping Python Data to JSON\n\n`json.dump()` writes Python data to a JSON file, while `json.dumps()` produces JSON text in memory."
          }
        ],
        "syntax": [
          {
            "name": "JSON Parsing",
            "description": "Convert JSON to Dict and back.",
            "code": "import json\n\n# String to dict\ndata_str = '{\"key\": \"value\"}'\ndata_dict = json.loads(data_str)\n\n# Dict to string\nprint(json.dumps(data_dict, indent=2))"
          },
          {
            "name": "JSON round trip",
            "description": "Convert between Python data and JSON text.",
            "code": "import json\ndata = {\"name\": \"Mekdes\", \"age\": 30}\ntext = json.dumps(data)\nprint(json.loads(text)[\"name\"])"
          },
          {
            "name": "JSON file",
            "description": "Write structured data to a file.",
            "code": "import json\nrecord = {\"id\": 7, \"active\": True}\nwith open(\"record.json\", \"w\", encoding=\"utf-8\") as f:\n    json.dump(record, f, indent=2)"
          }
        ],
        "sandbox": [
          {
            "command": "import json\ndata = '{\"name\": \"Bob\", \"age\": 30}'\nobj = json.loads(data)\nprint(obj[\"name\"])",
            "output": "Bob"
          },
          {
            "command": "import json\nprint(json.loads('{\"x\": 3}')[\"x\"])",
            "output": "3"
          },
          {
            "command": "import json\nprint(json.dumps({\"ok\": True}))",
            "output": "{\"ok\": true}"
          }
        ]
      },
      {
        "id": "b3c3",
        "title": "Chapter 3: Interacting with the Internet",
        "learn": [
          {
            "title": "Fetching Web Pages",
            "content": "## How the Web Works\n\nWeb browsers use HTTP requests (GET, POST) to fetch data from URLs.\n\nThe `urllib` module is built-in for fetching URLs. However, the third-party `requests` library is vastly preferred for its simplicity."
          },
          {
            "title": "Web Scraping",
            "content": "## Web Scraping\n\nWeb scraping involves fetching a webpage's HTML and extracting data. `BeautifulSoup` (bs4) is the go-to library for parsing HTML structure and extracting tags."
          },
          {
            "title": "Seeing How the Web Works",
            "content": "## Seeing How the Web Works\n\nWeb clients request resources from servers using protocols such as HTTP. Python can act as a client to retrieve or send web data."
          },
          {
            "title": "Understanding the mysterious URL",
            "content": "## Understanding the mysterious URL\n\nA URL identifies a resource and can include a scheme, host, path, and query information. Each part helps locate or describe the requested resource."
          },
          {
            "title": "Exposing the HTTP headers",
            "content": "## Exposing the HTTP headers\n\nHTTP headers carry metadata about a request or response, such as content type and other protocol information. Inspecting them helps explain web interactions."
          },
          {
            "title": "Opening a URL from Python",
            "content": "## Opening a URL from Python\n\nPython’s libraries can make HTTP requests and read the returned content. The book introduces built-in URL handling before using more convenient third-party tools."
          },
          {
            "title": "Posting to the web with Python",
            "content": "## Posting to the web with Python\n\nA POST request sends data to a web service rather than simply retrieving a resource. The server determines how the submitted data is processed."
          },
          {
            "title": "Scraping the web with Python",
            "content": "## Scraping the web with Python\n\nWeb scraping retrieves HTML and extracts useful information from its structure. Libraries such as BeautifulSoup simplify parsing the page tree."
          },
          {
            "title": "Parsing part of a page",
            "content": "## Parsing part of a page\n\nA parser can locate selected tags or attributes instead of treating the entire HTML document as one string."
          },
          {
            "title": "Storing the parsed content",
            "content": "## Storing the parsed content\n\nScraped values can be collected in Python structures such as lists of dictionaries before being saved or analyzed."
          },
          {
            "title": "Saving scraped data to a JSON file",
            "content": "## Saving scraped data to a JSON file\n\nA list or dictionary of scraped records can be serialized with the `json` module so another program can consume the data later."
          },
          {
            "title": "Saving scraped data to a CSV file",
            "content": "## Saving scraped data to a CSV file\n\nTabular scraped records can be written through Python’s `csv` module when interoperability with spreadsheet-style tools is useful."
          }
        ],
        "syntax": [
          {
            "name": "Requests Library",
            "description": "Fetching a page easily.",
            "code": "import requests\n\nres = requests.get('https://example.com')\nif res.status_code == 200:\n    print(res.text[:100])"
          },
          {
            "name": "HTTP request",
            "description": "Retrieve a web resource with requests.",
            "code": "import requests\nresponse = requests.get(\"https://example.com\", timeout=10)\nprint(response.status_code)"
          },
          {
            "name": "HTML parsing",
            "description": "Find elements in returned HTML.",
            "code": "from bs4 import BeautifulSoup\nhtml = \"<p>Hello</p>\"\nsoup = BeautifulSoup(html, \"html.parser\")\nprint(soup.find(\"p\").text)"
          }
        ],
        "sandbox": [
          {
            "command": "print(\"Simulating HTTP GET status: 200 OK\")",
            "output": "Simulating HTTP GET status: 200 OK"
          },
          {
            "command": "from urllib.parse import urlparse\nprint(urlparse(\"https://example.com/a\").netloc)",
            "output": "example.com"
          },
          {
            "command": "html = \"<h1>Hello</h1>\"\nfrom bs4 import BeautifulSoup\nprint(BeautifulSoup(html, \"html.parser\").h1.text)",
            "output": "Hello"
          }
        ]
      },
      {
        "id": "b3c4",
        "title": "Chapter 4: Libraries, Packages, and Modules",
        "learn": [
          {
            "title": "Understanding the Python Standard Library",
            "content": "## Understanding the Python Standard Library\n\nThe standard library supplies many capabilities without separate installation. Learning to look there first can reduce unnecessary dependencies."
          },
          {
            "title": "Using the dir() function",
            "content": "## Using the dir() function\n\n`dir()` lists names available on an object or module. It is a quick discovery tool when learning what an object provides."
          },
          {
            "title": "Using the help() function",
            "content": "## Using the help() function\n\n`help()` displays documentation for many Python objects. It complements experimentation and source-level exploration."
          },
          {
            "title": "Exploring built-in functions",
            "content": "## Exploring built-in functions\n\nBuilt-in functions such as `len`, `print`, `type`, and numeric conversion functions are available without importing a module."
          },
          {
            "title": "Exploring Python Packages",
            "content": "## Exploring Python Packages\n\nPackages group reusable Python modules into larger libraries. Package managers make installing and maintaining third-party libraries practical."
          },
          {
            "title": "Importing Python Modules",
            "content": "## Importing Python Modules\n\nImports load reusable code into the current program. Python supports both standard-library modules and third-party packages."
          },
          {
            "title": "Making Your Own Modules",
            "content": "## Making Your Own Modules\n\nAny Python file can become a reusable module when another program imports it. Keep reusable definitions separate from code that should run only as a script."
          }
        ],
        "syntax": [
          {
            "name": "Explore an object",
            "description": "Inspect names available on an object.",
            "code": "import math\nprint([name for name in dir(math) if not name.startswith(\"_\")][:8])"
          },
          {
            "name": "Own module pattern",
            "description": "Separate reusable code from the script entry point.",
            "code": "def greet(name):\n    return f\"Hello, {name}\"\n\nif __name__ == \"__main__\":\n    print(greet(\"Python\"))"
          }
        ],
        "sandbox": [
          {
            "command": "print(len([10, 20, 30]))",
            "output": "3"
          },
          {
            "command": "import math\nprint(\"sqrt\" in dir(math))",
            "output": "True"
          }
        ]
      }
    ],
    "quiz": [
      {
        "question": "Which statement ensures a file is properly closed after operations are finished?",
        "options": [
          "try",
          "close",
          "with",
          "finally"
        ],
        "answer": 2,
        "explanation": "The 'with' statement acts as a context manager and safely closes files."
      },
      {
        "question": "What does json.loads() do?",
        "options": [
          "Writes JSON to a file",
          "Converts a JSON string to a Python dictionary",
          "Converts a Python dictionary to a JSON string",
          "Downloads a JSON file from the web"
        ],
        "answer": 1,
        "explanation": "json.loads() parses a JSON formatted string into a Python object."
      },
      {
        "question": "What does with open(...) provide?",
        "options": [
          "Automatic resource cleanup",
          "A loop",
          "A dictionary",
          "A web request"
        ],
        "answer": 0,
        "explanation": "The with statement ensures the file is closed when the block ends."
      },
      {
        "question": "Which mode appends to a file?",
        "options": [
          "a",
          "r",
          "x",
          "b"
        ],
        "answer": 0,
        "explanation": "a opens a file for appending."
      },
      {
        "question": "Which module handles CSV data?",
        "options": [
          "csv",
          "json",
          "html",
          "time"
        ],
        "answer": 0,
        "explanation": "Python’s csv module supports CSV reading and writing."
      },
      {
        "question": "What does json.loads() do?",
        "options": [
          "Parses JSON text",
          "Writes a JSON file",
          "Deletes JSON",
          "Downloads JSON"
        ],
        "answer": 0,
        "explanation": "loads parses a JSON string into Python objects."
      },
      {
        "question": "What does json.dump() do?",
        "options": [
          "Writes Python data as JSON to a file",
          "Reads CSV",
          "Runs SQL",
          "Opens a URL"
        ],
        "answer": 0,
        "explanation": "dump serializes Python data to a file-like object."
      },
      {
        "question": "JSON objects map naturally to which Python type?",
        "options": [
          "dict",
          "set",
          "tuple",
          "bytes"
        ],
        "answer": 0,
        "explanation": "JSON objects correspond naturally to Python dictionaries."
      },
      {
        "question": "What protocol is central to web requests?",
        "options": [
          "HTTP",
          "GPIO",
          "I2C",
          "UART"
        ],
        "answer": 0,
        "explanation": "HTTP is the main application protocol used by web browsers and servers."
      },
      {
        "question": "Which library is used in the book for convenient HTTP requests?",
        "options": [
          "requests",
          "random",
          "pickle",
          "math"
        ],
        "answer": 0,
        "explanation": "The book uses requests for simpler HTTP interactions."
      },
      {
        "question": "What is BeautifulSoup used for?",
        "options": [
          "Parsing HTML",
          "Driving motors",
          "Training models",
          "Writing CSV"
        ],
        "answer": 0,
        "explanation": "BeautifulSoup parses HTML structures for web scraping."
      },
      {
        "question": "What does dir() help you discover?",
        "options": [
          "Names available on an object",
          "A file’s size",
          "CPU temperature",
          "A URL’s password"
        ],
        "answer": 0,
        "explanation": "dir() lists attributes and names associated with an object."
      },
      {
        "question": "Where do many common Python capabilities come from without installation?",
        "options": [
          "The standard library",
          "A browser extension",
          "A database",
          "A spreadsheet"
        ],
        "answer": 0,
        "explanation": "Python ships with a substantial standard library."
      },
      {
        "question": "What is a Python module?",
        "options": [
          "A reusable Python file",
          "A loop variable",
          "A CPU core",
          "A URL"
        ],
        "answer": 0,
        "explanation": "A module is a Python source file containing reusable definitions."
      }
    ]
  },
  {
    "id": "book4",
    "title": "Book 4: Using Artificial Intelligence",
    "chapters": [
      {
        "id": "b4c1",
        "title": "Overview of AI Concepts",
        "learn": [
          {
            "title": "What is AI?",
            "content": "## What is AI?\n\nArtificial Intelligence encompasses techniques to make computers perform tasks requiring human-like logic.\n\nInspired by biological neurons, artificial neural networks consist of an input layer, hidden layers, and an output layer. Neurons connect via weights and biases."
          },
          {
            "title": "Machine Learning Types",
            "content": "## Machine Learning Types\n\n- **Supervised Learning**: Training on labeled data (inputs and expected outputs).\n- **Unsupervised Learning**: Finding patterns in unlabeled data.\n- **Reinforcement Learning**: Software takes actions based on cumulative rewards."
          },
          {
            "title": "AI Is a Collection of Techniques",
            "content": "## AI Is a Collection of Techniques\n\nThe book treats AI as a broad collection of techniques rather than one algorithm. Neural networks and machine learning are important examples, not the whole field."
          },
          {
            "title": "Neural networks",
            "content": "## Neural networks\n\nNeural networks use layers of connected units with adjustable weights and biases. They learn useful relationships by changing these parameters during training."
          },
          {
            "title": "Machine learning",
            "content": "## Machine learning\n\nMachine learning systems learn patterns from data instead of being given every decision as an explicit rule. Training and evaluation are central parts of the workflow."
          },
          {
            "title": "TensorFlow — A framework for deep learning",
            "content": "## TensorFlow — A framework for deep learning\n\nTensorFlow provides tools for representing numerical data as tensors and building, training, and evaluating neural-network models."
          },
          {
            "title": "Current Limitations of AI",
            "content": "## Current Limitations of AI\n\nAI systems can be powerful without being universally reliable. The book emphasizes limitations such as data dependence, computational cost, and the difficulty of understanding why a trained model makes a particular mistake."
          }
        ],
        "syntax": [
          {
            "name": "AI Principles",
            "description": "There is no built-in AI syntax, it is a conceptual framework.",
            "code": "# The process involves:\n# 1. Preparing Data\n# 2. Building Model\n# 3. Training\n# 4. Evaluation"
          },
          {
            "name": "Conceptual AI pipeline",
            "description": "Represent the model workflow as code comments.",
            "code": "# 1. collect data\n# 2. prepare data\n# 3. train model\n# 4. evaluate model\n# 5. use model for predictions"
          },
          {
            "name": "Simple prediction rule",
            "description": "A hand-written rule illustrates the difference between rules and learned models.",
            "code": "temperature = 31\nprediction = \"hot\" if temperature > 30 else \"mild\"\nprint(prediction)"
          }
        ],
        "sandbox": [
          {
            "command": "print(\"AI concepts loaded: Supervised, Unsupervised, Reinforcement\")",
            "output": "AI concepts loaded: Supervised, Unsupervised, Reinforcement"
          },
          {
            "command": "x = 0.7\nprint(\"yes\" if x > 0.5 else \"no\")",
            "output": "yes"
          },
          {
            "command": "print([\"supervised\", \"unsupervised\", \"reinforcement\"])",
            "output": "['supervised', 'unsupervised', 'reinforcement']"
          }
        ]
      },
      {
        "id": "b4c2",
        "title": "Guided Breakdown of Neural Networks",
        "learn": [
          {
            "title": "TensorFlow and Keras",
            "content": "## Building with TensorFlow and Keras\n\nTensorFlow is a powerful framework based on multidimensional matrices (tensors). Keras is its high-level API."
          },
          {
            "title": "5 Steps of Keras",
            "content": "## 5 Steps of Keras\n\n1. **Load data**: e.g., Fashion-MNIST.\n2. **Define model**: Stack layers (Dense, Conv2D, Dropout).\n3. **Compile model**: Choose an optimizer (like 'adam') and loss function.\n4. **Fit/Train**: Run the model through epochs using training data.\n5. **Evaluate**: Test against validation data to check accuracy."
          },
          {
            "title": "Understanding Neural Networks",
            "content": "## Understanding Neural Networks\n\nA neural network maps inputs through layers of weighted computations to produce outputs. Training adjusts the parameters so predictions better match the desired results."
          },
          {
            "title": "Layers of neurons",
            "content": "## Layers of neurons\n\nLayers organize neural-network computation into input, hidden, and output stages. Adding layers can let a model represent more complex transformations."
          },
          {
            "title": "Weights and biases",
            "content": "## Weights and biases\n\nWeights control how strongly inputs contribute to a neuron, while a bias shifts the neuron’s activation. Training adjusts these parameters."
          },
          {
            "title": "The activation function",
            "content": "## The activation function\n\nActivation functions transform a neuron’s weighted input into its output. Nonlinear activations allow networks to learn relationships that a purely linear model cannot represent."
          },
          {
            "title": "Loss function",
            "content": "## Loss function\n\nA loss function measures how far predictions are from the desired outputs. Training seeks parameter values that reduce this loss."
          },
          {
            "title": "Building a Simple Neural Network in Python",
            "content": "## Building a Simple Neural Network in Python\n\nA small neural network can be expressed with numerical operations, weights, biases, and an activation step. Building one from simple pieces makes the later framework abstraction easier to understand."
          },
          {
            "title": "The neural-net Python code",
            "content": "## The neural-net Python code\n\nThe example code demonstrates the flow of data through a small network and the calculations needed to turn inputs into predictions."
          },
          {
            "title": "Using TensorFlow for the same neural network",
            "content": "## Using TensorFlow for the same neural network\n\nTensorFlow expresses the same core ideas with tensor operations and framework-managed training tools, reducing the amount of low-level code."
          },
          {
            "title": "Installing the TensorFlow Python library",
            "content": "## Installing the TensorFlow Python library\n\nTensorFlow must be installed in the Python environment used by the project. Installation and interpreter selection need to refer to the same environment."
          },
          {
            "title": "Building a Python Neural Network in TensorFlow",
            "content": "## Building a Python Neural Network in TensorFlow\n\nA TensorFlow model is assembled from layers, configured with an optimizer and loss function, trained on data, and then evaluated."
          },
          {
            "title": "Loading your data",
            "content": "## Loading your data\n\nTraining begins by loading input examples and their labels into a form the model can process."
          },
          {
            "title": "Defining your neural-network model and layers",
            "content": "## Defining your neural-network model and layers\n\nThe model definition specifies the sequence and type of layers. The architecture determines how inputs are transformed toward the output."
          },
          {
            "title": "Compiling your model",
            "content": "## Compiling your model\n\nCompilation connects the model to an optimization strategy, a loss function, and selected metrics before training."
          },
          {
            "title": "Fitting and training your model",
            "content": "## Fitting and training your model\n\nFitting runs the model through training data for one or more epochs and updates learned parameters according to the optimizer."
          },
          {
            "title": "Evaluating the model",
            "content": "## Evaluating the model\n\nEvaluation measures the trained model on data held aside for checking performance. This provides a better estimate of how the model behaves on unseen examples."
          },
          {
            "title": "Breaking down the code",
            "content": "## Breaking down the code\n\nCloud data code can be understood as setup, query construction, execution, result retrieval, and analysis."
          },
          {
            "title": "Checking the results",
            "content": "## Checking the results\n\nTraining history and evaluation metrics reveal whether the model learned useful patterns. Results should be interpreted rather than assumed to be correct."
          },
          {
            "title": "TensorFlow and Keras",
            "content": "## TensorFlow and Keras\n\nKeras provides a high-level interface for constructing neural networks, while TensorFlow supplies the underlying computational framework used by the examples."
          }
        ],
        "syntax": [
          {
            "name": "Keras Sequential Model",
            "description": "Create a layered deep learning model.",
            "code": "import tensorflow as tf\n\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Dense(128, activation='relu'),\n    tf.keras.layers.Dense(10, activation='softmax')\n])\n\nmodel.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])"
          },
          {
            "name": "Keras model skeleton",
            "description": "Build a small dense neural network.",
            "code": "import tensorflow as tf\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Dense(16, activation=\"relu\"),\n    tf.keras.layers.Dense(3, activation=\"softmax\")\n])"
          },
          {
            "name": "Compile a model",
            "description": "Configure learning choices.",
            "code": "model.compile(optimizer=\"adam\",\n              loss=\"sparse_categorical_crossentropy\",\n              metrics=[\"accuracy\"])"
          }
        ],
        "sandbox": [
          {
            "command": "print(\"Epoch 1/5\\nloss: 0.5009 - acc: 0.8244\")",
            "output": "Epoch 1/5\nloss: 0.5009 - acc: 0.8244"
          },
          {
            "command": "print(\"input -> hidden -> output\")",
            "output": "input -> hidden -> output"
          },
          {
            "command": "print(\"compile -> fit -> evaluate\")",
            "output": "compile -> fit -> evaluate"
          }
        ]
      },
      {
        "id": "b4c3",
        "title": "Chapter 3: Doing Machine Learning",
        "learn": [
          {
            "title": "Learning by Looking for Solutions in All the Wrong Places",
            "content": "## Learning by Looking for Solutions in All the Wrong Places\n\nThis section focuses on **Learning by Looking for Solutions in All the Wrong Places** as part of the chapter’s practical progression. Treat the idea as a small concept to understand, then reinforce it by writing and modifying a short Python example."
          },
          {
            "title": "Clothes Types",
            "content": "## Clothes Types\n\nThe Fashion-MNIST example uses labeled images of clothing categories as a concrete classification problem for machine learning."
          },
          {
            "title": "Setting up the software environment",
            "content": "## Setting up the software environment\n\nA repeatable machine-learning environment needs the required Python packages and a consistent interpreter. Setup errors often come from installing packages into a different environment than the one running the code."
          },
          {
            "title": "Getting the data from the Fashion-MNIST dataset",
            "content": "## Getting the data from the Fashion-MNIST dataset\n\nFashion-MNIST supplies training and test images with labels. Separating these datasets supports both learning and later evaluation."
          },
          {
            "title": "Training the network",
            "content": "## Training the network\n\nTraining repeatedly presents examples to the model and adjusts parameters to reduce the chosen loss."
          },
          {
            "title": "Testing our network",
            "content": "## Testing our network\n\nTesting uses held-out examples to see how well the trained model generalizes beyond the examples used for learning."
          },
          {
            "title": "Breaking down the code",
            "content": "## Breaking down the code\n\nCloud data code can be understood as setup, query construction, execution, result retrieval, and analysis."
          },
          {
            "title": "Results of the training and evaluation",
            "content": "## Results of the training and evaluation\n\nAccuracy and loss summarize model behavior, but a single score does not explain every prediction or error."
          },
          {
            "title": "Testing a single test image",
            "content": "## Testing a single test image\n\nA single image can be prepared in the same shape and numeric format expected by the model, then passed through prediction to inspect one result."
          },
          {
            "title": "Testing on external pictures",
            "content": "## Testing on external pictures\n\nExternal images must be transformed to match the model’s expected dimensions and representation before prediction."
          },
          {
            "title": "The results, round 1",
            "content": "## The results, round 1\n\nThe first experiment provides a baseline for examining which clothing images the model recognizes and which it confuses."
          },
          {
            "title": "The CNN model code",
            "content": "## The CNN model code\n\nA convolutional neural network adds layers designed to extract spatial patterns from images, making it more suitable for image classification than a simple dense-only network."
          },
          {
            "title": "The results, round 2",
            "content": "## The results, round 2\n\nThe second model configuration can be compared with the first using the same evaluation process, showing how architecture changes affect results."
          },
          {
            "title": "Visualizing with MatPlotLib",
            "content": "## Visualizing with MatPlotLib\n\nMatplotlib can plot training history and display images, helping connect numeric metrics with visible examples."
          },
          {
            "title": "Learning More Machine Learning",
            "content": "## Learning More Machine Learning\n\nThe book treats its project as an introduction: the next step is deeper study of model architectures, data preparation, evaluation, and machine-learning practice."
          }
        ],
        "syntax": [
          {
            "name": "Prediction from a model",
            "description": "Prepare a single input for prediction.",
            "code": "import numpy as np\nsample = np.zeros((1, 28, 28), dtype=np.float32)\n# prediction = model.predict(sample)\nprint(sample.shape)"
          },
          {
            "name": "Plot training history",
            "description": "Visualize values recorded during training.",
            "code": "import matplotlib.pyplot as plt\nloss = [0.9, 0.6, 0.4]\nplt.plot(loss)\nplt.xlabel(\"epoch\")\nplt.ylabel(\"loss\")\nplt.show()"
          }
        ],
        "sandbox": [
          {
            "command": "import numpy as np\nx = np.zeros((1, 28, 28))\nprint(x.shape)",
            "output": "(1, 28, 28)"
          },
          {
            "command": "loss = [0.8, 0.5, 0.3]\nprint(loss[-1])",
            "output": "0.3"
          }
        ]
      },
      {
        "id": "b4c4",
        "title": "Chapter 4: Exploring AI",
        "learn": [
          {
            "title": "Limitations of the Raspberry Pi and AI",
            "content": "## Limitations of the Raspberry Pi and AI\n\nThe Raspberry Pi is useful for experimentation but has limited compute compared with desktop GPUs or cloud infrastructure, especially for large training workloads."
          },
          {
            "title": "Adding Hardware AI to the Raspberry Pi",
            "content": "## Adding Hardware AI to the Raspberry Pi\n\nSpecialized accelerators can move inference work away from the general-purpose processor. The book distinguishes running trained models from training them."
          },
          {
            "title": "AI in the Cloud",
            "content": "## AI in the Cloud\n\nCloud platforms provide scalable compute that can be used when local hardware is too limited for demanding AI workloads."
          },
          {
            "title": "Google Cloud",
            "content": "## Google Cloud\n\nThe book presents Google Cloud as one possible provider of cloud infrastructure and AI-related services."
          },
          {
            "title": "Amazon Web Services",
            "content": "## Amazon Web Services\n\nAWS is presented as another cloud option for deploying or accelerating computational workloads."
          },
          {
            "title": "IBM Cloud",
            "content": "## IBM Cloud\n\nIBM Cloud is included among cloud platforms that can provide infrastructure and services relevant to AI applications."
          },
          {
            "title": "Microsoft Azure",
            "content": "## Microsoft Azure\n\nAzure is discussed as a cloud platform with infrastructure intended to support machine-learning and AI workloads."
          },
          {
            "title": "AI on a Graphics Card",
            "content": "## AI on a Graphics Card\n\nGPUs contain many simpler parallel processing cores, making them well suited to the numerical workloads common in machine learning."
          },
          {
            "title": "Where to Go for More AI Fun in Python",
            "content": "## Where to Go for More AI Fun in Python\n\nThis section focuses on **Where to Go for More AI Fun in Python** as part of the chapter’s practical progression. Treat the idea as a small concept to understand, then reinforce it by writing and modifying a short Python example."
          }
        ],
        "syntax": [
          {
            "name": "Hardware inference idea",
            "description": "Separate inference from training in an architecture.",
            "code": "# training: desktop/cloud\n# inference: edge device\n# input -> trained model -> prediction"
          },
          {
            "name": "GPU-friendly array work",
            "description": "Show the kind of parallel numerical data AI workloads use.",
            "code": "import numpy as np\na = np.arange(12).reshape(3, 4)\nprint(a * 2)"
          }
        ],
        "sandbox": [
          {
            "command": "cores = 4\nprint(cores * 2)",
            "output": "8"
          },
          {
            "command": "print(\"edge inference\")",
            "output": "edge inference"
          }
        ]
      }
    ],
    "quiz": [
      {
        "question": "Which machine learning type relies on labeled training data?",
        "options": [
          "Unsupervised",
          "Supervised",
          "Reinforcement",
          "Evolutionary"
        ],
        "answer": 1,
        "explanation": "Supervised learning uses inputs paired with their known correct outputs."
      },
      {
        "question": "What is a 'Tensor' in TensorFlow?",
        "options": [
          "A mathematical algorithm",
          "A multidimensional matrix of data",
          "A neural network layer",
          "An activation function"
        ],
        "answer": 1,
        "explanation": "A tensor is essentially a multi-dimensional array/matrix of data."
      },
      {
        "question": "Which Keras step connects the model to an optimizer and loss function?",
        "options": [
          "Define",
          "Fit",
          "Compile",
          "Evaluate"
        ],
        "answer": 2,
        "explanation": "The compile() step configures the learning process."
      },
      {
        "question": "Which learning type uses labeled examples?",
        "options": [
          "Supervised",
          "Unsupervised",
          "Reinforcement",
          "Random"
        ],
        "answer": 0,
        "explanation": "Supervised learning trains on inputs paired with known targets."
      },
      {
        "question": "What is a neural network made of?",
        "options": [
          "Connected computational units and parameters",
          "Only rules",
          "Only databases",
          "Only images"
        ],
        "answer": 0,
        "explanation": "Neural networks use layers of connected units with learned parameters."
      },
      {
        "question": "What is TensorFlow?",
        "options": [
          "A machine-learning framework",
          "A text editor",
          "A database",
          "An operating system"
        ],
        "answer": 0,
        "explanation": "TensorFlow provides tools for numerical computation and machine learning."
      },
      {
        "question": "What does a loss function measure?",
        "options": [
          "Prediction error",
          "CPU speed",
          "File size",
          "Number of layers only"
        ],
        "answer": 0,
        "explanation": "Loss quantifies how far predictions are from desired outputs."
      },
      {
        "question": "What happens during fit/train?",
        "options": [
          "Model parameters are adjusted from training data",
          "Files are renamed",
          "The model is deleted",
          "A URL is opened"
        ],
        "answer": 0,
        "explanation": "Training updates weights and biases using the chosen optimization process."
      },
      {
        "question": "What is Keras?",
        "options": [
          "A high-level neural-network API",
          "A database language",
          "A Raspberry Pi OS",
          "A CSV format"
        ],
        "answer": 0,
        "explanation": "Keras provides a high-level interface for constructing and training neural networks."
      },
      {
        "question": "What dataset is used for clothing classification?",
        "options": [
          "Fashion-MNIST",
          "Iris",
          "Titanic",
          "MNIST Letters"
        ],
        "answer": 0,
        "explanation": "The book uses Fashion-MNIST for clothing image classification."
      },
      {
        "question": "Why keep test data separate?",
        "options": [
          "To evaluate generalization",
          "To increase indentation",
          "To install packages",
          "To make images larger"
        ],
        "answer": 0,
        "explanation": "Held-out data provides an evaluation of performance on unseen examples."
      },
      {
        "question": "What does a CNN add for image tasks?",
        "options": [
          "Convolutional feature extraction",
          "Only text parsing",
          "File compression",
          "Network routing"
        ],
        "answer": 0,
        "explanation": "Convolutional layers are designed to learn spatial patterns in images."
      },
      {
        "question": "Why use GPUs for machine learning?",
        "options": [
          "Many parallel numerical operations",
          "They replace all CPUs",
          "They store passwords",
          "They are keyboards"
        ],
        "answer": 0,
        "explanation": "GPUs provide many processing cores suited to parallel numerical workloads."
      },
      {
        "question": "What does an AI accelerator typically do in the book’s context?",
        "options": [
          "Speed inference",
          "Write Python comments",
          "Replace training data",
          "Create URLs"
        ],
        "answer": 0,
        "explanation": "Hardware accelerators can speed execution of trained models."
      },
      {
        "question": "Why use cloud AI resources?",
        "options": [
          "Access more scalable compute",
          "Avoid all data",
          "Remove models",
          "Disable networking"
        ],
        "answer": 0,
        "explanation": "Cloud platforms can provide compute beyond the limits of small local devices."
      }
    ]
  },
  {
    "id": "book5",
    "title": "Book 5: Doing Data Science",
    "chapters": [
      {
        "id": "b5c1",
        "title": "Core Concepts of Big Data",
        "learn": [
          {
            "title": "The 3 V's",
            "content": "## The 3 V's of Big Data\n\n1. **Volume**: Massive amounts of data (terabytes, petabytes).\n2. **Variety**: Different formats (text, images, audio, sensors).\n3. **Velocity**: Speed of data generation and processing."
          },
          {
            "title": "Data Science Process",
            "content": "## 5-Step Data Science Process\n\n1. Capture the data.\n2. Process/clean the data.\n3. Analyze the data.\n4. Communicate results (visualizations).\n5. Maintain the data."
          },
          {
            "title": "Working with Big, Big Data",
            "content": "## Working with Big, Big Data\n\nBig data is characterized by challenges of scale and complexity. The book organizes the discussion around volume, variety, and velocity."
          },
          {
            "title": "Volume",
            "content": "## Volume\n\nVolume refers to the amount of data being handled. Large datasets create storage, processing, and management challenges."
          },
          {
            "title": "Variety",
            "content": "## Variety\n\nVariety describes the different forms data can take, including structured records, text, images, audio, and sensor information."
          },
          {
            "title": "Velocity",
            "content": "## Velocity\n\nVelocity describes how quickly data is generated, moved, and processed. Fast streams can require systems that react continuously."
          },
          {
            "title": "Managing volume, variety, and velocity",
            "content": "## Managing volume, variety, and velocity\n\nHandling big data requires coordinated storage, processing, and analysis strategies rather than focusing on only one dimension of scale."
          },
          {
            "title": "Cooking with Gas: The Five-Step Process of Data Science",
            "content": "## Cooking with Gas: The Five-Step Process of Data Science\n\nThe book presents a practical five-stage data-science flow: capture, process, analyze, communicate, and maintain."
          },
          {
            "title": "Capturing the data",
            "content": "## Capturing the data\n\nCapture is the point where raw information enters the data-science workflow. Sources can include files, databases, sensors, or public datasets."
          },
          {
            "title": "Processing the data",
            "content": "## Processing the data\n\nProcessing cleans and transforms raw data into a form suitable for analysis. This stage often includes conversion, filtering, and preparation."
          },
          {
            "title": "Analyzing the data",
            "content": "## Analyzing the data\n\nAnalysis applies calculations and methods that reveal patterns, relationships, or useful summaries in the prepared data."
          },
          {
            "title": "Communicating the results",
            "content": "## Communicating the results\n\nA useful analysis must be understandable to its audience. Tables, charts, and clear explanations help turn results into decisions."
          },
          {
            "title": "Maintaining the data",
            "content": "## Maintaining the data\n\nData work does not end after analysis. Maintaining datasets includes keeping them usable, current, and available for later work."
          }
        ],
        "syntax": [
          {
            "name": "Data Flow Concept",
            "description": "The data science pipeline.",
            "code": "# Data Science Pipeline:\n# df = capture_data()\n# clean_df = process(df)\n# results = analyze(clean_df)\n# visualize(results)"
          },
          {
            "name": "Data pipeline",
            "description": "Represent the five stages as functions.",
            "code": "def capture(): return []\ndef process(data): return data\ndef analyze(data): return {}\ndef communicate(result): print(result)\ndef maintain(data): return data"
          },
          {
            "name": "Three dimensions",
            "description": "Label the big-data dimensions.",
            "code": "volume = \"how much\"\nvariety = \"how many forms\"\nvelocity = \"how fast\"\nprint(volume, variety, velocity)"
          }
        ],
        "sandbox": [
          {
            "command": "print(\"Data Science Process: Capture -> Process -> Analyze -> Communicate -> Maintain\")",
            "output": "Data Science Process: Capture -> Process -> Analyze -> Communicate -> Maintain"
          },
          {
            "command": "stages = [\"capture\", \"process\", \"analyze\", \"communicate\", \"maintain\"]\nprint(\" -> \".join(stages))",
            "output": "capture -> process -> analyze -> communicate -> maintain"
          },
          {
            "command": "print(\"Volume / Variety / Velocity\")",
            "output": "Volume / Variety / Velocity"
          }
        ]
      },
      {
        "id": "b5c2",
        "title": "Toolkits: NumPy, Pandas, Matplotlib",
        "learn": [
          {
            "title": "NumPy & Pandas",
            "content": "## NumPy & Pandas\n\n- **NumPy**: Used for high-performance multidimensional array processing and math.\n- **Pandas**: Built on top of NumPy, Pandas uses **DataFrames** (like Excel tables) to manipulate, clean, and analyze relational data efficiently."
          },
          {
            "title": "Matplotlib",
            "content": "## Matplotlib / Seaborn\n\nUsed to plot data visually. You can create scatter plots, bar charts, and heatmaps to find correlations in your Big Data."
          },
          {
            "title": "Introducing NumPy, Pandas, and MatPlotLib",
            "content": "## Introducing NumPy, Pandas, and MatPlotLib\n\nThe book uses NumPy for numerical arrays, Pandas for tabular data, and Matplotlib for visualization. Together they form a practical Python data-science toolkit."
          },
          {
            "title": "NumPy",
            "content": "## NumPy\n\nNumPy provides efficient multidimensional arrays and numerical operations, making it a foundation for many scientific Python workflows."
          },
          {
            "title": "Pandas",
            "content": "## Pandas\n\nPandas provides structures such as DataFrames for working with labeled tabular data, including filtering, transformation, and summary operations."
          },
          {
            "title": "MatPlotLib",
            "content": "## MatPlotLib\n\nMatplotlib creates plots and charts from Python data. Visualizations can reveal distributions, comparisons, and relationships that are harder to see in raw tables."
          },
          {
            "title": "Doing Your First Data Science Project",
            "content": "## Doing Your First Data Science Project\n\nA complete project connects loading data, inspecting it, transforming it, analyzing it, and visualizing the results rather than treating each operation in isolation."
          },
          {
            "title": "Diamonds are a data scientist’s best friend",
            "content": "## Diamonds are a data scientist’s best friend\n\nThe diamonds project gives a concrete tabular dataset for practicing data loading, inspection, analysis, and visualization."
          },
          {
            "title": "Breaking down the code",
            "content": "## Breaking down the code\n\nCloud data code can be understood as setup, query construction, execution, result retrieval, and analysis."
          },
          {
            "title": "Visualizing the data with MatPlotLib",
            "content": "## Visualizing the data with MatPlotLib\n\nPlots turn columns of data into visual patterns. Choose a chart type that matches the question you are asking."
          }
        ],
        "syntax": [
          {
            "name": "Pandas DataFrame",
            "description": "Load and inspect data.",
            "code": "import pandas as pd\n\ndf = pd.read_csv('data.csv')\n\n# View the first 5 rows\nprint(df.head())\n\n# Summarize the data statistics\nprint(df.describe())"
          },
          {
            "name": "DataFrame inspection",
            "description": "Load and inspect tabular data.",
            "code": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"A\", \"B\"], \"value\": [10, 20]})\nprint(df.head())\nprint(df.describe())"
          },
          {
            "name": "Simple plot",
            "description": "Visualize a column.",
            "code": "import matplotlib.pyplot as plt\nvalues = [10, 14, 12, 19]\nplt.plot(values)\nplt.ylabel(\"value\")\nplt.show()"
          }
        ],
        "sandbox": [
          {
            "command": "import pandas as pd\nprint(\"DataFrame loaded with shape (1000, 5)\")",
            "output": "DataFrame loaded with shape (1000, 5)"
          },
          {
            "command": "import pandas as pd\ndf = pd.DataFrame({\"x\": [1, 2, 3]})\nprint(df.shape)",
            "output": "(3, 1)"
          },
          {
            "command": "print(sum([3, 5, 7]))",
            "output": "15"
          }
        ]
      },
      {
        "id": "b5c3",
        "title": "Chapter 3: Using Big Data from Google Cloud",
        "learn": [
          {
            "title": "What Is Big Data?",
            "content": "## What Is Big Data?\n\nBig data refers to datasets whose scale, diversity, or processing speed creates challenges beyond ordinary small-file workflows."
          },
          {
            "title": "Understanding Google Cloud and BigQuery",
            "content": "## Understanding Google Cloud and BigQuery\n\nBigQuery is a cloud data warehouse designed for querying large datasets. The book uses it as a concrete way to work with public big data."
          },
          {
            "title": "Google Cloud Platform",
            "content": "## Google Cloud Platform\n\nGoogle Cloud Platform provides hosted computing and data services. Cloud projects organize access to those resources."
          },
          {
            "title": "BigQuery from Google",
            "content": "## BigQuery from Google\n\nBigQuery lets SQL queries operate on large datasets without requiring the learner to manage the underlying database servers."
          },
          {
            "title": "Computer security on the cloud",
            "content": "## Computer security on the cloud\n\nCloud work requires attention to authentication, permissions, credentials, and least-privilege access so data and services are not exposed unnecessarily."
          },
          {
            "title": "Signing up for BigQuery",
            "content": "## Signing up for BigQuery\n\nThe setup process establishes an account and project context before queries can be run against cloud data."
          },
          {
            "title": "Reading the Medicare Big Data",
            "content": "## Reading the Medicare Big Data\n\nThe Medicare example demonstrates how a large public dataset can become a practical analysis problem when queried and summarized."
          },
          {
            "title": "Setting up your project and authentication",
            "content": "## Setting up your project and authentication\n\nCloud APIs need a project identity and credentials. Correct authentication is part of the data pipeline, not an afterthought."
          },
          {
            "title": "The first big-data code",
            "content": "## The first big-data code\n\nThe first query establishes the pattern of connecting to BigQuery, selecting data, and retrieving results into Python for further analysis."
          },
          {
            "title": "Breaking down the code",
            "content": "## Breaking down the code\n\nCloud data code can be understood as setup, query construction, execution, result retrieval, and analysis."
          },
          {
            "title": "Doing a bit of analysis",
            "content": "## Doing a bit of analysis\n\nOnce query results are available as tabular data, familiar Python tools can calculate summaries and compare groups."
          },
          {
            "title": "Payment percent by state",
            "content": "## Payment percent by state\n\nGrouping Medicare-related records by state provides an example of turning raw rows into a comparative percentage statistic."
          },
          {
            "title": "Now some visualization",
            "content": "## Now some visualization\n\nVisualization adds another layer of interpretation to the cloud-data analysis by displaying comparisons instead of only listing numbers."
          }
        ],
        "syntax": [
          {
            "name": "Query workflow",
            "description": "Represent a cloud query workflow.",
            "code": "# client = bigquery.Client()\n# query = \"SELECT state, COUNT(*) AS n FROM table GROUP BY state\"\n# df = client.query(query).to_dataframe()"
          },
          {
            "name": "Group and summarize",
            "description": "Analyze a table after retrieval.",
            "code": "import pandas as pd\ndf = pd.DataFrame({\"state\": [\"A\", \"A\", \"B\"], \"payment\": [10, 20, 40]})\nprint(df.groupby(\"state\")[\"payment\"].mean())"
          }
        ],
        "sandbox": [
          {
            "command": "import pandas as pd\ndf = pd.DataFrame({\"state\": [\"A\", \"A\", \"B\"], \"payment\": [10, 20, 30]})\nprint(df.groupby(\"state\").payment.sum().to_dict())",
            "output": "{'A': 30, 'B': 30}"
          },
          {
            "command": "print(\"query -> dataframe -> analysis\")",
            "output": "query -> dataframe -> analysis"
          }
        ]
      }
    ],
    "quiz": [
      {
        "question": "Which of the following is NOT one of the 3 V's of Big Data?",
        "options": [
          "Volume",
          "Velocity",
          "Validity",
          "Variety"
        ],
        "answer": 2,
        "explanation": "The 3 V's are Volume, Velocity, and Variety."
      },
      {
        "question": "Which Python library provides the DataFrame structure?",
        "options": [
          "NumPy",
          "Matplotlib",
          "Pandas",
          "Scikit-Learn"
        ],
        "answer": 2,
        "explanation": "Pandas introduces the DataFrame for tabular data."
      },
      {
        "question": "What is Matplotlib primarily used for?",
        "options": [
          "Data cleaning",
          "Machine learning",
          "Data visualization",
          "Database hosting"
        ],
        "answer": 2,
        "explanation": "Matplotlib is used to plot charts and graphs."
      },
      {
        "question": "Which is one of the three Vs?",
        "options": [
          "Velocity",
          "Validity",
          "Visibility",
          "Version"
        ],
        "answer": 0,
        "explanation": "The book uses Volume, Variety, and Velocity."
      },
      {
        "question": "What comes after processing in the five-step workflow?",
        "options": [
          "Analyzing",
          "Capturing",
          "Maintaining",
          "Installing"
        ],
        "answer": 0,
        "explanation": "The sequence is capture, process, analyze, communicate, maintain."
      },
      {
        "question": "Why communicate results?",
        "options": [
          "To make findings understandable and useful",
          "To delete the dataset",
          "To change Python syntax",
          "To stop analysis"
        ],
        "answer": 0,
        "explanation": "Communication turns analysis into information people can interpret and use."
      },
      {
        "question": "Which library provides DataFrames?",
        "options": [
          "Pandas",
          "NumPy",
          "Matplotlib",
          "TensorFlow"
        ],
        "answer": 0,
        "explanation": "Pandas provides the DataFrame structure."
      },
      {
        "question": "What is NumPy mainly for?",
        "options": [
          "Numerical arrays and operations",
          "HTML parsing",
          "Robot motors",
          "HTTP headers"
        ],
        "answer": 0,
        "explanation": "NumPy provides efficient multidimensional arrays and numerical functions."
      },
      {
        "question": "What does Matplotlib provide?",
        "options": [
          "Data visualization",
          "File encryption",
          "Package installation",
          "GPIO drivers"
        ],
        "answer": 0,
        "explanation": "Matplotlib creates plots and charts."
      },
      {
        "question": "What is BigQuery?",
        "options": [
          "A cloud data warehouse/query service",
          "A Python loop",
          "A motor driver",
          "A text editor"
        ],
        "answer": 0,
        "explanation": "BigQuery is used to query large datasets in Google Cloud."
      },
      {
        "question": "What must cloud code handle before querying protected resources?",
        "options": [
          "Authentication",
          "Indentation only",
          "Servo calibration",
          "HTML parsing"
        ],
        "answer": 0,
        "explanation": "Cloud APIs require project identity and appropriate credentials."
      },
      {
        "question": "Why group Medicare data by state?",
        "options": [
          "To compare aggregated results",
          "To train a servo",
          "To parse HTML",
          "To install TensorFlow"
        ],
        "answer": 0,
        "explanation": "Grouping creates state-level summaries that can be compared and visualized."
      }
    ]
  },
  {
    "id": "book6",
    "title": "Book 6: Talking to Hardware (Physical Computing)",
    "chapters": [
      {
        "id": "b6c1",
        "title": "Embedded Systems and GPIO",
        "learn": [
          {
            "title": "Physical Computing",
            "content": "## Physical Computing\n\nConnecting computers to the physical world using sensors (inputs) and actuators/motors (outputs)."
          },
          {
            "title": "Raspberry Pi GPIO",
            "content": "## Raspberry Pi GPIO\n\nGeneral Purpose Input/Output pins allow the Pi to read voltages and send voltages (3.3V or 5V). \nUsing the `gpiozero` library, you can easily control LEDs and buttons."
          },
          {
            "title": "Physical Computing Is Fun",
            "content": "## Physical Computing Is Fun\n\nPhysical computing connects software to the real world through sensors and actuators. Python can become the control logic between inputs and outputs."
          },
          {
            "title": "What Is a Raspberry Pi?",
            "content": "## What Is a Raspberry Pi?\n\nA Raspberry Pi is a small, general-purpose computer used in the book as the platform for physical-computing experiments and robotics."
          },
          {
            "title": "Building Projects That Move and Sense the Environment",
            "content": "## Building Projects That Move and Sense the Environment\n\nPhysical projects combine a computing board, sensors for inputs, and actuators for outputs. The interesting behavior comes from connecting these pieces with software."
          },
          {
            "title": "Sensing the Environment with the Raspberry Pi",
            "content": "## Sensing the Environment with the Raspberry Pi\n\nThe Pi can read external sensors through interfaces such as GPIO and buses. Python programs can turn those readings into decisions or displays."
          },
          {
            "title": "GPIO pins",
            "content": "## GPIO pins\n\nGPIO pins provide digital input and output connections between the Raspberry Pi and external electronics."
          },
          {
            "title": "GPIO libraries",
            "content": "## GPIO libraries\n\nPython libraries such as `gpiozero` simplify common GPIO tasks by providing higher-level objects for devices such as LEDs and buttons."
          },
          {
            "title": "Buying and assembling the hardware for “Hello World”",
            "content": "## Buying and assembling the hardware for “Hello World”\n\nA physical “Hello World” experiment replaces a console-only result with a visible hardware response. Wiring and power must be correct before software can control the device."
          },
          {
            "title": "Controlling an LED with Python",
            "content": "## Controlling an LED with Python\n\nAn LED can be controlled by configuring a GPIO output and setting it on or off from Python. Timing functions can create visible patterns."
          },
          {
            "title": "But Wait, There’s More",
            "content": "## But Wait, There’s More\n\nThe chapter uses the simple LED project as a starting point for broader physical-computing experiments and additional interfaces."
          }
        ],
        "syntax": [
          {
            "name": "GPIO Zero LED",
            "description": "Turn on a physical LED using Python.",
            "code": "from gpiozero import LED\nfrom time import sleep\n\nred_led = LED(17)\nred_led.on()\nsleep(1)\nred_led.off()"
          },
          {
            "name": "GPIO LED",
            "description": "Control an LED through gpiozero.",
            "code": "from gpiozero import LED\nfrom time import sleep\nled = LED(17)\nled.on()\nsleep(1)\nled.off()"
          },
          {
            "name": "Button input",
            "description": "Read a GPIO button.",
            "code": "from gpiozero import Button\nbutton = Button(2)\nprint(button.is_pressed)"
          }
        ],
        "sandbox": [
          {
            "command": "print(\"LED on GPIO 17 is ON\")",
            "output": "LED on GPIO 17 is ON"
          },
          {
            "command": "print(\"GPIO HIGH\")",
            "output": "GPIO HIGH"
          },
          {
            "command": "print(\"LED -> ON -> OFF\")",
            "output": "LED -> ON -> OFF"
          }
        ]
      },
      {
        "id": "b6c2",
        "title": "Chapter 2: No Soldering! Using Grove Connectors for Building",
        "learn": [
          {
            "title": "Working with the Grove System",
            "content": "## Working with the Grove System\n\nGrove provides modular sensor and actuator connections that reduce wiring complexity and make hardware experiments easier to assemble."
          },
          {
            "title": "Selecting a Grove base unit",
            "content": "## Selecting a Grove base unit\n\nThe base/interface board determines how Grove modules connect to the Raspberry Pi and which communication methods are available."
          },
          {
            "title": "Error-proofing with a Grove connector",
            "content": "## Error-proofing with a Grove connector\n\nGrove connectors standardize connections and reduce the chance of swapping individual wires incorrectly during experimentation."
          },
          {
            "title": "Grove Connectors",
            "content": "## Grove Connectors\n\nThe Grove system organizes modules around standardized cables and interfaces, making it easier to combine hardware components."
          },
          {
            "title": "Grove digital — All about those 1s and 0s",
            "content": "## Grove digital — All about those 1s and 0s\n\nDigital Grove modules communicate discrete states, commonly represented as high/low or one/zero signals."
          },
          {
            "title": "Grove analog: When 1s and 0s aren’t enough",
            "content": "## Grove analog: When 1s and 0s aren’t enough\n\nAnalog sensors represent a range of values rather than only two states. An analog-to-digital conversion step is needed before a digital computer can process the reading."
          },
          {
            "title": "Grove UART (or serial) — bit-by-bit transmission",
            "content": "## Grove UART (or serial) — bit-by-bit transmission\n\nUART/serial communication sends information sequentially between devices. Configuration must match on both ends for reliable communication."
          },
          {
            "title": "Grove I2C — Using I2C to make sense of the world",
            "content": "## Grove I2C — Using I2C to make sense of the world\n\nI2C allows a controller to communicate with multiple devices over a shared bus using device addresses. It is common for sensors and other peripherals."
          },
          {
            "title": "Connecting with Grove Cables",
            "content": "## Connecting with Grove Cables\n\nGrove cables make module connections repeatable and reduce loose-wire mistakes. The cable must still be connected to the appropriate interface."
          },
          {
            "title": "An example of the power of the patch!",
            "content": "## An example of the power of the patch!\n\nThe chapter demonstrates how changing a modular hardware connection can extend an experiment without redesigning the whole project."
          },
          {
            "title": "Second example: The Adafruit Ultimate GPS",
            "content": "## Second example: The Adafruit Ultimate GPS\n\nThe GPS example shows how a serial-style peripheral can provide location/time information to a Python physical-computing project."
          }
        ],
        "syntax": [
          {
            "name": "Serial concept",
            "description": "Represent a serial data stream.",
            "code": "message = \"GPS: 9.12, 38.76\"\nfor char in message:\n    print(char, end=\" \")"
          },
          {
            "name": "I2C concept",
            "description": "A device address identifies a peripheral on a shared bus.",
            "code": "devices = {0x40: \"temperature sensor\", 0x68: \"clock\"}\nfor address, name in devices.items():\n    print(hex(address), name)"
          }
        ],
        "sandbox": [
          {
            "command": "print(hex(0x40))",
            "output": "0x40"
          },
          {
            "command": "print(\"UART: 9600 baud\")",
            "output": "UART: 9600 baud"
          }
        ]
      },
      {
        "id": "b6c3",
        "title": "Chapter 3: Sensing the World",
        "learn": [
          {
            "title": "Understanding I2C",
            "content": "## Understanding I2C\n\nI2C is a two-wire bus commonly used for sensor and peripheral communication. Devices share the bus but are distinguished by addresses."
          },
          {
            "title": "Enabling I2C on the Raspberry Pi",
            "content": "## Enabling I2C on the Raspberry Pi\n\nBefore an I2C sensor can be used, the Raspberry Pi’s interface must be enabled and the connected device must be detectable on the bus."
          },
          {
            "title": "The hardware for reading temperature and humidity",
            "content": "## The hardware for reading temperature and humidity\n\nA temperature/humidity sensor provides environmental measurements that can be read by the Pi through an interface such as I2C."
          },
          {
            "title": "Breaking down the program",
            "content": "## Breaking down the program\n\nHardware-reading programs can be understood as setup, sensor initialization, repeated measurement, and output of the readings."
          },
          {
            "title": "Measuring Oxygen and a Flame",
            "content": "## Measuring Oxygen and a Flame\n\nThe chapter combines sensors and analog measurements to show how physical quantities can be observed and interpreted by software."
          },
          {
            "title": "Analog-to-digital converters (ADC)",
            "content": "## Analog-to-digital converters (ADC)\n\nAn ADC converts a continuous electrical signal into numeric digital samples that software can read and process."
          },
          {
            "title": "The Grove oxygen sensor",
            "content": "## The Grove oxygen sensor\n\nThe oxygen-sensor example illustrates how a physical measurement becomes an electrical signal that must be sampled and interpreted."
          },
          {
            "title": "Hooking up the oxygen experiment",
            "content": "## Hooking up the oxygen experiment\n\nSensor experiments require correct power, signal, and interface connections. Verify wiring before diagnosing the Python code."
          },
          {
            "title": "Breaking down the code",
            "content": "## Breaking down the code\n\nCloud data code can be understood as setup, query construction, execution, result retrieval, and analysis."
          },
          {
            "title": "Interpreting the results",
            "content": "## Interpreting the results\n\nSensor values are measurements, not automatically meaningful conclusions. Calibration, units, ranges, and environmental conditions affect interpretation."
          },
          {
            "title": "Building a Dashboard on Your Phone with Blynk",
            "content": "## Building a Dashboard on Your Phone with Blynk\n\nA mobile dashboard can turn sensor readings into a remote monitoring interface. The physical device sends measurements while the dashboard presents them."
          },
          {
            "title": "HDC1080 temperature and humidity sensor redux",
            "content": "## HDC1080 temperature and humidity sensor redux\n\nThe HDC1080 example revisits environmental sensing and connects the measurement workflow to a more interactive presentation."
          },
          {
            "title": "Adding the Blynk dashboard",
            "content": "## Adding the Blynk dashboard\n\nA dashboard maps incoming device data to widgets that can be monitored from a phone. The software must publish the right values to the expected channels."
          },
          {
            "title": "Breaking down the code",
            "content": "## Breaking down the code\n\nCloud data code can be understood as setup, query construction, execution, result retrieval, and analysis."
          },
          {
            "title": "Where to Go from Here",
            "content": "## Where to Go from Here\n\nThis section focuses on **Where to Go from Here** as part of the chapter’s practical progression. Treat the idea as a small concept to understand, then reinforce it by writing and modifying a short Python example."
          }
        ],
        "syntax": [
          {
            "name": "Sensor read loop",
            "description": "Poll a sensor and display measurements.",
            "code": "from time import sleep\nfor _ in range(3):\n    temperature = 22.5\n    humidity = 48.0\n    print(temperature, humidity)\n    sleep(1)"
          },
          {
            "name": "Analog conversion",
            "description": "Map a raw ADC value to a simple ratio.",
            "code": "raw = 512\nmaximum = 1023\nratio = raw / maximum\nprint(ratio)"
          }
        ],
        "sandbox": [
          {
            "command": "temperature = 22.5\nprint(f\"{temperature:.1f} C\")",
            "output": "22.5 C"
          },
          {
            "command": "raw = 512\nprint(round(raw / 1023, 3))",
            "output": "0.5"
          }
        ]
      },
      {
        "id": "b6c4",
        "title": "Making Things Move",
        "learn": [
          {
            "title": "DC and Servo Motors",
            "content": "## DC Motors\nSpin continuously. Speed is controlled via PWM (Pulse Width Modulation) — pulsing power rapidly.\n\n## Servo Motors\nHold a specific angle (usually 0 to 180 degrees). Controlled via specific PWM timings."
          },
          {
            "title": "Stepper Motors",
            "content": "## Stepper Motors\nMove in highly precise, small steps. Great for 3D printers or exact positioning."
          },
          {
            "title": "Exploring Electric Motors",
            "content": "## Exploring Electric Motors\n\nMotors turn electrical energy into mechanical motion. Different motor types provide different control characteristics."
          },
          {
            "title": "Small DC motors",
            "content": "## Small DC motors\n\nDC motors rotate continuously and can be driven in ways that control direction and speed. They are common for wheels and simple mechanical motion."
          },
          {
            "title": "Servo motors",
            "content": "## Servo motors\n\nServos are designed for controlled angular positioning. The control signal selects a target position rather than simply spinning continuously."
          },
          {
            "title": "Stepper motors",
            "content": "## Stepper motors\n\nStepper motors move in discrete steps, making them useful when repeatable positioning is more important than simple continuous rotation."
          },
          {
            "title": "Controlling a DC Motor",
            "content": "## Controlling a DC Motor\n\nA motor driver sits between the Pi and the motor because the GPIO cannot directly supply the motor’s required current. Software controls the driver."
          },
          {
            "title": "Grove I2C motor driver",
            "content": "## Grove I2C motor driver\n\nAn I2C motor driver provides a communication interface through which Python can command motor behavior while the driver handles the electrical load."
          },
          {
            "title": "Python DC motor software",
            "content": "## Python DC motor software\n\nThe software sends commands to the motor interface and can sequence forward, reverse, stop, or speed-related behavior."
          },
          {
            "title": "Running a Servo Motor",
            "content": "## Running a Servo Motor\n\nServo control requires a suitable signal and careful power arrangements. The desired angle is translated into the control signal expected by the servo."
          },
          {
            "title": "Python servo software",
            "content": "## Python servo software\n\nPython can wrap servo positioning in functions so higher-level code can request an angle without repeating low-level timing details."
          },
          {
            "title": "Breaking down the code",
            "content": "## Breaking down the code\n\nCloud data code can be understood as setup, query construction, execution, result retrieval, and analysis."
          },
          {
            "title": "Making a Stepper Motor Step",
            "content": "## Making a Stepper Motor Step\n\nStepper control sequences electrical states so the motor advances through its discrete positions."
          },
          {
            "title": "Python stepper software",
            "content": "## Python stepper software\n\nPython typically defines a sequence of outputs, timing between steps, and the number or direction of steps to perform."
          },
          {
            "title": "Breaking down the code",
            "content": "## Breaking down the code\n\nCloud data code can be understood as setup, query construction, execution, result retrieval, and analysis."
          }
        ],
        "syntax": [
          {
            "name": "PWM Motor Control",
            "description": "Control speed or angle.",
            "code": "import RPi.GPIO as GPIO\n\np = GPIO.PWM(SERVO_PIN, 50)\np.start(7.5)  # 90 degrees\n\n# Change angle\np.ChangeDutyCycle(12.5)"
          },
          {
            "name": "DC motor control idea",
            "description": "Express motor commands at a high level.",
            "code": "def motor_forward(speed):\n    print(f\"forward at {speed}%\")\n\nmotor_forward(60)"
          },
          {
            "name": "Servo position",
            "description": "Represent a target servo angle.",
            "code": "def move_servo(angle):\n    if not 0 <= angle <= 180:\n        raise ValueError(\"angle out of range\")\n    print(f\"servo -> {angle} degrees\")\n\nmove_servo(90)"
          }
        ],
        "sandbox": [
          {
            "command": "print(\"Servo moved to 90 degrees\")",
            "output": "Servo moved to 90 degrees"
          },
          {
            "command": "print(\"DC -> forward\")",
            "output": "DC -> forward"
          },
          {
            "command": "print(\"servo -> 90 degrees\")",
            "output": "servo -> 90 degrees"
          }
        ]
      }
    ],
    "quiz": [
      {
        "question": "What does GPIO stand for?",
        "options": [
          "General Purpose Input/Output",
          "Global Positioning Internal Output",
          "Graphic Processing Interface Object",
          "Google Python Integrated Operations"
        ],
        "answer": 0,
        "explanation": "GPIO pins are the physical interface between the Pi and electronics."
      },
      {
        "question": "How does the Raspberry Pi control the speed of a DC motor?",
        "options": [
          "Lowering the raw voltage",
          "PWM (Pulse Width Modulation)",
          "Using a stepper driver",
          "It cannot control speed"
        ],
        "answer": 1,
        "explanation": "PWM pulses the power rapidly to simulate lower voltages and slow the motor."
      },
      {
        "question": "What does GPIO stand for?",
        "options": [
          "General Purpose Input/Output",
          "Global Program Input Object",
          "Graphical Port Interface",
          "General Python Internet Output"
        ],
        "answer": 0,
        "explanation": "GPIO means General Purpose Input/Output."
      },
      {
        "question": "Which library is used for simple GPIO device control?",
        "options": [
          "gpiozero",
          "pandas",
          "requests",
          "json"
        ],
        "answer": 0,
        "explanation": "gpiozero provides high-level Raspberry Pi GPIO device classes."
      },
      {
        "question": "What is an actuator?",
        "options": [
          "A device that produces physical action",
          "A file format",
          "A database",
          "A Python keyword"
        ],
        "answer": 0,
        "explanation": "Actuators turn control signals into physical effects such as light or motion."
      },
      {
        "question": "What does UART describe?",
        "options": [
          "Serial communication",
          "Image classification",
          "File compression",
          "Database indexing"
        ],
        "answer": 0,
        "explanation": "UART is a serial communication interface."
      },
      {
        "question": "What does I2C use to distinguish devices?",
        "options": [
          "Addresses",
          "File names",
          "Colors",
          "Passwords"
        ],
        "answer": 0,
        "explanation": "I2C devices on a shared bus are selected by address."
      },
      {
        "question": "Why use Grove connectors?",
        "options": [
          "To simplify modular hardware connections",
          "To speed Python syntax",
          "To replace sensors",
          "To train neural networks"
        ],
        "answer": 0,
        "explanation": "Grove connectors reduce wiring complexity and connection mistakes."
      },
      {
        "question": "What does an ADC do?",
        "options": [
          "Converts analog signals to digital values",
          "Converts Python to Java",
          "Controls a servo directly",
          "Stores JSON"
        ],
        "answer": 0,
        "explanation": "An analog-to-digital converter produces numeric digital samples from analog signals."
      },
      {
        "question": "What kind of sensor measures temperature and humidity?",
        "options": [
          "An environmental sensor",
          "A motor driver",
          "A GPIO output",
          "A compiler"
        ],
        "answer": 0,
        "explanation": "The chapter uses an HDC1080 temperature/humidity sensor example."
      },
      {
        "question": "Why interpret sensor readings carefully?",
        "options": [
          "Measurements depend on calibration and context",
          "All readings are automatically true",
          "Units never matter",
          "Sensors never vary"
        ],
        "answer": 0,
        "explanation": "Raw measurements need units, calibration, and context before conclusions are drawn."
      },
      {
        "question": "Which motor is designed for precise angular positioning?",
        "options": [
          "Servo",
          "DC",
          "Induction only",
          "Fan"
        ],
        "answer": 0,
        "explanation": "Servo motors are designed for controlled angular positioning."
      },
      {
        "question": "Which motor moves in discrete steps?",
        "options": [
          "Stepper",
          "DC",
          "Servo only",
          "Relay"
        ],
        "answer": 0,
        "explanation": "Stepper motors move through discrete steps."
      },
      {
        "question": "Why use a motor driver?",
        "options": [
          "GPIO pins cannot directly supply motor power",
          "It makes Python faster",
          "It replaces the OS",
          "It parses HTML"
        ],
        "answer": 0,
        "explanation": "A driver handles the electrical load while the Pi provides control signals."
      }
    ]
  },
  {
    "id": "book7",
    "title": "Book 7: Building Robots",
    "chapters": [
      {
        "id": "b7c1",
        "title": "Robot Paradigms",
        "learn": [
          {
            "title": "What is a Robot?",
            "content": "## What is a Robot?\n\nA robot is a machine combining a computer (brain) with an actuator (motor/movement) and sensors. \nRobots don't have to look human! A smart toaster or an autonomous car are both robots."
          },
          {
            "title": "Sub-systems",
            "content": "## Sub-systems\n\n- **Computers**: The brain, often embedded systems.\n- **Actuators**: The muscles (DC, Servo, Steppers).\n- **Sensors**: The senses (Ultrasonic, cameras, LIDAR)."
          },
          {
            "title": "A Robot Is Not Always Like a Human",
            "content": "## A Robot Is Not Always Like a Human\n\nThe book defines robots functionally rather than by appearance. A robot combines computation, sensing, and actuation to interact with its environment."
          },
          {
            "title": "Not Every Robot Has Arms or Wheels",
            "content": "## Not Every Robot Has Arms or Wheels\n\nRobotic systems can take many forms, including machines that manipulate, monitor, move, or perform a specialized physical task without looking humanoid."
          },
          {
            "title": "The Wilkinson bread-making robot",
            "content": "## The Wilkinson bread-making robot\n\nThe example illustrates robotics as automation of a physical process, where software and mechanisms cooperate to perform repeatable tasks."
          },
          {
            "title": "Baxter, the coffee-making robot",
            "content": "## Baxter, the coffee-making robot\n\nBaxter demonstrates how a robot can coordinate sensing, computation, and actuators to carry out a service-oriented physical task."
          },
          {
            "title": "The Griffin Bluetooth-enabled toaster",
            "content": "## The Griffin Bluetooth-enabled toaster\n\nThe toaster example broadens the idea of robotics to connected appliances whose behavior is controlled by computation and communication."
          },
          {
            "title": "Understanding the Main Parts of a Robot",
            "content": "## Understanding the Main Parts of a Robot\n\nA practical robot can be decomposed into a computer, actuators, sensors, and communications. These subsystems cooperate in a control loop."
          },
          {
            "title": "Computers",
            "content": "## Computers\n\nThe computer provides the robot’s processing and control logic. It interprets sensor information and decides which actions to command."
          },
          {
            "title": "Motors and actuators",
            "content": "## Motors and actuators\n\nActuators are the robot’s means of changing the physical world. Motors are common examples, including DC, servo, and stepper types."
          },
          {
            "title": "Communications",
            "content": "## Communications\n\nRobots may communicate with other devices through Wi-Fi, Bluetooth, TCP/IP, or other interfaces. Communication can coordinate actions or offload computation."
          },
          {
            "title": "Sensors",
            "content": "## Sensors\n\nSensors provide measurements about the robot and its environment, including distance, temperature, orientation, pressure, touch, and images."
          },
          {
            "title": "Programming Robots",
            "content": "## Programming Robots\n\nPython can provide high-level robot control through libraries and APIs. A typical program reads sensors, makes decisions, and commands actuators."
          }
        ],
        "syntax": [
          {
            "name": "Robotics Architecture",
            "description": "The Sense -> Think -> Act loop.",
            "code": "while True:\n    data = sensor.read()   # SENSE\n    action = ai.decide(data) # THINK\n    motor.execute(action)  # ACT"
          },
          {
            "name": "Sense-think-act loop",
            "description": "Model the basic robot control cycle.",
            "code": "while True:\n    sensor_data = \"clear\"\n    if sensor_data == \"clear\":\n        action = \"forward\"\n    else:\n        action = \"stop\"\n    print(action)\n    break"
          },
          {
            "name": "Robot subsystems",
            "description": "Represent a robot as cooperating components.",
            "code": "robot = {\"computer\": True, \"sensors\": [\"camera\", \"distance\"], \"actuators\": [\"motor\"]}\nprint(robot.keys())"
          }
        ],
        "sandbox": [
          {
            "command": "print(\"Robot initialized. Systems nominal.\")",
            "output": "Robot initialized. Systems nominal."
          },
          {
            "command": "print(\"SENSE -> THINK -> ACT\")",
            "output": "SENSE -> THINK -> ACT"
          },
          {
            "command": "print([\"computer\", \"sensor\", \"actuator\"])",
            "output": "['computer', 'sensor', 'actuator']"
          }
        ]
      },
      {
        "id": "b7c2",
        "title": "Chapter 2: Building Your First Python Robot",
        "learn": [
          {
            "title": "Introducing the Mars Rover PiCar-B",
            "content": "## Introducing the Mars Rover PiCar-B\n\nThe PiCar-B project gives the book a concrete Raspberry Pi robot platform for learning how software, motors, sensors, and a camera fit together."
          },
          {
            "title": "What you need for the build",
            "content": "## What you need for the build\n\nA robot build depends on the controller, chassis, motors, sensors, power, wiring, and software needed to coordinate the parts."
          },
          {
            "title": "Understanding the robot components",
            "content": "## Understanding the robot components\n\nBefore programming, identify what each component does and how it connects. This turns a collection of parts into an understandable system."
          },
          {
            "title": "Assembling the Robot",
            "content": "## Assembling the Robot\n\nMechanical assembly establishes the physical structure and correct placement of components. Good assembly makes later software testing much easier."
          },
          {
            "title": "Testing Your Robot",
            "content": "## Testing Your Robot\n\nTest individual functions before combining them. Start with simple movement and sensor checks so faults are easier to isolate."
          },
          {
            "title": "Calibrating your servos",
            "content": "## Calibrating your servos\n\nServo calibration establishes control values that correspond to the intended mechanical positions. Calibration prevents software angles from producing unexpected physical motion."
          },
          {
            "title": "Preparing for running tests on your rover in Python",
            "content": "## Preparing for running tests on your rover in Python\n\nThe testing workflow prepares the Raspberry Pi environment, verifies the libraries, and checks that the robot can execute basic commands."
          },
          {
            "title": "Installing software for the PiCar-B Python test",
            "content": "## Installing software for the PiCar-B Python test\n\nThe required software packages and project code must be installed in the same environment used to run the test program."
          },
          {
            "title": "The PiCar-B Python test code",
            "content": "## The PiCar-B Python test code\n\nThe test program exercises the robot’s main hardware interfaces so that motors, servos, and other components can be verified before higher-level behavior is added."
          },
          {
            "title": "Pi camera video testing",
            "content": "## Pi camera video testing\n\nThe Pi camera provides visual input that can be previewed or processed by Python. Camera testing confirms that the robot can obtain usable frames."
          }
        ],
        "syntax": [
          {
            "name": "Robot test sequence",
            "description": "Test simple actions before autonomous behavior.",
            "code": "tests = [\"camera\", \"left motor\", \"right motor\", \"servo\"]\nfor test in tests:\n    print(\"testing\", test)"
          },
          {
            "name": "Camera preview concept",
            "description": "A camera loop typically acquires and processes frames.",
            "code": "# while True:\n#     frame = camera.read()\n#     display(frame)\n#     if stop_requested: break"
          }
        ],
        "sandbox": [
          {
            "command": "for part in [\"camera\", \"motor\", \"servo\"]:\n    print(\"OK:\", part)",
            "output": "OK: camera\nOK: motor\nOK: servo"
          },
          {
            "command": "print(\"PiCar-B test\")",
            "output": "PiCar-B test"
          }
        ]
      },
      {
        "id": "b7c3",
        "title": "Chapter 3: Programming Your Robot Rover",
        "learn": [
          {
            "title": "Building a Simple, High-Level Python Interface",
            "content": "## Building a Simple, High-Level Python Interface\n\nA high-level interface hides low-level motor details behind meaningful functions. This lets robot behavior be described in terms such as forward, left, or stop."
          },
          {
            "title": "The motorForward() function",
            "content": "## The motorForward() function\n\nA forward-motion function packages the motor commands needed to drive the rover ahead, making movement reusable from higher-level code."
          },
          {
            "title": "The wheelsLeft function()",
            "content": "## The wheelsLeft function()\n\nA turning helper can coordinate wheel speeds or directions so the rover turns left without requiring every caller to manipulate motors directly."
          },
          {
            "title": "The wheelsPercent function()",
            "content": "## The wheelsPercent function()\n\nA percentage-style wheel command expresses motor output at a higher level, making it easier to scale movement without exposing driver details."
          },
          {
            "title": "Making a Single Move with Python",
            "content": "## Making a Single Move with Python\n\nA simple robot action can be represented by a short sequence: command the motors, wait for the desired duration or condition, then stop or change direction."
          },
          {
            "title": "Functions of the RobotInterface Class",
            "content": "## Functions of the RobotInterface Class\n\nA robot-interface class groups the rover’s movement, lighting, sensing, and servo operations behind a coherent Python API."
          },
          {
            "title": "Front LED functions",
            "content": "## Front LED functions\n\nLED helper functions provide visual status feedback without requiring the rest of the program to know the electrical details of the LEDs."
          },
          {
            "title": "Pixel strip functions",
            "content": "## Pixel strip functions\n\nA programmable pixel strip can provide richer status or effect displays. Higher-level functions can encapsulate color and animation commands."
          },
          {
            "title": "Ultrasonic distance sensor function",
            "content": "## Ultrasonic distance sensor function\n\nAn ultrasonic sensor estimates distance by measuring the timing of emitted and returned sound. The robot can use the result for obstacle awareness."
          },
          {
            "title": "Main motor functions",
            "content": "## Main motor functions\n\nMotor functions provide commands for starting, stopping, reversing, and adjusting the rover’s drive motors."
          },
          {
            "title": "Servo functions",
            "content": "## Servo functions\n\nServo functions expose steering or camera-position controls in terms of target positions rather than low-level pulse timing."
          },
          {
            "title": "General servo function",
            "content": "## General servo function\n\nA generalized servo function can accept a requested position and apply the appropriate control values, reducing duplicated servo code."
          },
          {
            "title": "The Python Robot Interface Test",
            "content": "## The Python Robot Interface Test\n\nAn interface test verifies that the high-level functions actually reach the underlying hardware. It is a bridge between unit-like checks and full robot behavior."
          },
          {
            "title": "Coordinating Motor Movements with Sensors",
            "content": "## Coordinating Motor Movements with Sensors\n\nUseful robot behavior combines sensing with actuation: read the environment, decide what it means, and change motor commands accordingly."
          },
          {
            "title": "Making a Python Brain for Our Robot",
            "content": "## Making a Python Brain for Our Robot\n\nThe robot’s “brain” is the decision-making layer that combines sensor readings and movement commands. Separating this logic from hardware drivers improves clarity."
          },
          {
            "title": "Overview of the Included Adeept Software",
            "content": "## Overview of the Included Adeept Software\n\nThe included software demonstrates how a vendor can package low-level hardware control into reusable modules and interfaces."
          },
          {
            "title": "Where to Go from Here",
            "content": "## Where to Go from Here\n\nThis section focuses on **Where to Go from Here** as part of the chapter’s practical progression. Treat the idea as a small concept to understand, then reinforce it by writing and modifying a short Python example."
          }
        ],
        "syntax": [
          {
            "name": "High-level robot interface",
            "description": "Hide low-level details behind methods.",
            "code": "class RobotInterface:\n    def forward(self, speed=50):\n        print(f\"forward {speed}%\")\n    def stop(self):\n        print(\"stop\")\n\nrobot = RobotInterface()\nrobot.forward(40)\nrobot.stop()"
          },
          {
            "name": "Sensor-guided movement",
            "description": "Use distance to decide whether to move.",
            "code": "distance_cm = 35\nif distance_cm > 20:\n    action = \"forward\"\nelse:\n    action = \"turn\"\nprint(action)"
          }
        ],
        "sandbox": [
          {
            "command": "distance = 15\nprint(\"turn\" if distance < 20 else \"forward\")",
            "output": "turn"
          },
          {
            "command": "print(\"motorForward()\")",
            "output": "motorForward()"
          }
        ]
      },
      {
        "id": "b7c4",
        "title": "Computer Vision with OpenCV",
        "learn": [
          {
            "title": "Machine Vision",
            "content": "## Machine Vision\n\nOpenCV allows the robot to analyze camera frames. \nYou can define a color range in HSV space, create a \"mask\" to isolate a blue ball, find its contours, and calculate its center (moment)."
          },
          {
            "title": "AI Integration",
            "content": "## AI Integration\n\nBy feeding the camera images into our previously trained Keras Neural Network, the robot can determine if it is looking at a Cat or a Dog, and act accordingly!"
          },
          {
            "title": "This Chapter’s Projects: Going to the Dogs",
            "content": "## This Chapter’s Projects: Going to the Dogs\n\nThe robotics AI project uses a trained image classifier to distinguish cats and dogs, connecting computer vision, machine learning, and robot behavior."
          },
          {
            "title": "Setting Up the First Project",
            "content": "## Setting Up the First Project\n\nThe project requires the Python environment, TensorFlow-related software, image data, and the robot-side components to be prepared consistently."
          },
          {
            "title": "Machine Learning Using TensorFlow",
            "content": "## Machine Learning Using TensorFlow\n\nTensorFlow provides the model-building and inference tools needed to train an image classifier and later use it on the robot."
          },
          {
            "title": "The code",
            "content": "## The code\n\nThe project code loads image data, prepares it for the network, defines a model, trains it, and saves or uses the resulting classifier."
          },
          {
            "title": "How the code works",
            "content": "## How the code works\n\nThe important flow is data preparation followed by model inference or training. Each stage must preserve the shape and representation expected by the next."
          },
          {
            "title": "The results",
            "content": "## The results\n\nModel results are predictions with confidence-like numeric outputs. They should be checked against known examples rather than treated as infallible."
          },
          {
            "title": "Testing the Trained Network",
            "content": "## Testing the Trained Network\n\nAfter training, the network is evaluated on new images to see whether it generalizes beyond the examples used during training."
          },
          {
            "title": "The code",
            "content": "## The code\n\nThe project code loads image data, prepares it for the network, defines a model, trains it, and saves or uses the resulting classifier."
          },
          {
            "title": "How the code works",
            "content": "## How the code works\n\nThe important flow is data preparation followed by model inference or training. Each stage must preserve the shape and representation expected by the next."
          },
          {
            "title": "The results",
            "content": "## The results\n\nModel results are predictions with confidence-like numeric outputs. They should be checked against known examples rather than treated as infallible."
          }
        ],
        "syntax": [
          {
            "name": "OpenCV Color Mask",
            "description": "Filter colors to find objects.",
            "code": "import cv2\n\n# Convert BGR to HSV\nhsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)\n\n# Create mask for blue\nmask = cv2.inRange(hsv, blueLower, blueUpper)\n\n# Find contours\ncnts, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)"
          },
          {
            "name": "Binary classifier output",
            "description": "Interpret a two-class prediction.",
            "code": "prediction = [0.12, 0.88]\nlabels = [\"cat\", \"dog\"]\nindex = max(range(len(prediction)), key=prediction.__getitem__)\nprint(labels[index])"
          },
          {
            "name": "Robot vision decision",
            "description": "Connect classification to an action.",
            "code": "label = \"cat\"\nif label == \"cat\":\n    action = \"look_closer\"\nelse:\n    action = \"continue\"\nprint(action)"
          }
        ],
        "sandbox": [
          {
            "command": "print(\"Object identified: BLUE BALL at Coordinates X:320 Y:240\")",
            "output": "Object identified: BLUE BALL at Coordinates X:320 Y:240"
          },
          {
            "command": "scores = [0.1, 0.9]\nprint(max(scores))",
            "output": "0.9"
          },
          {
            "command": "print(\"classify -> decide -> act\")",
            "output": "classify -> decide -> act"
          }
        ]
      }
    ],
    "quiz": [
      {
        "question": "What are the core components of a robot?",
        "options": [
          "Legs, arms, head",
          "Computer, Actuator, Sensors",
          "Wi-Fi, Bluetooth, 5G",
          "Python, C++, Java"
        ],
        "answer": 1,
        "explanation": "A robot fundamentally consists of a computer brain, actuators for movement, and sensors to perceive the world."
      },
      {
        "question": "What is OpenCV primarily used for?",
        "options": [
          "Controlling DC motors",
          "Connecting to Wi-Fi",
          "Computer Vision and image processing",
          "Creating web servers"
        ],
        "answer": 2,
        "explanation": "OpenCV is an open-source library specifically for computer vision."
      },
      {
        "question": "What are the main robot subsystems emphasized?",
        "options": [
          "Computer, actuators, sensors, communications",
          "Keyboard, monitor, printer",
          "Database, browser, spreadsheet",
          "Only motors"
        ],
        "answer": 0,
        "explanation": "The chapter describes computers, actuators, sensors, and communications as key parts."
      },
      {
        "question": "What do sensors provide?",
        "options": [
          "Information about the environment",
          "Only power",
          "Only movement",
          "Source code"
        ],
        "answer": 0,
        "explanation": "Sensors provide measurements used by the robot’s control logic."
      },
      {
        "question": "What does Python commonly provide in robotics?",
        "options": [
          "High-level control and coordination",
          "Motor electricity directly",
          "Mechanical structure",
          "Battery chemistry"
        ],
        "answer": 0,
        "explanation": "Python can coordinate robot functions through APIs and libraries."
      },
      {
        "question": "Why calibrate robot servos?",
        "options": [
          "To map control values to intended positions",
          "To train a CNN",
          "To format JSON",
          "To install Python"
        ],
        "answer": 0,
        "explanation": "Calibration aligns commanded values with actual mechanical positions."
      },
      {
        "question": "What should be tested before complex autonomy?",
        "options": [
          "Basic hardware functions",
          "Only the final AI",
          "Nothing",
          "The book index"
        ],
        "answer": 0,
        "explanation": "Basic component tests isolate hardware problems early."
      },
      {
        "question": "What is the Pi camera used for?",
        "options": [
          "Visual input",
          "Motor power",
          "I2C addressing only",
          "Battery charging"
        ],
        "answer": 0,
        "explanation": "The Pi camera supplies images that can be displayed or processed."
      },
      {
        "question": "Why build a high-level robot interface?",
        "options": [
          "To hide low-level hardware details",
          "To remove sensors",
          "To replace Python",
          "To disable motors"
        ],
        "answer": 0,
        "explanation": "An interface makes robot behavior easier to express and reuse."
      },
      {
        "question": "What can an ultrasonic sensor provide?",
        "options": [
          "Distance information",
          "Color labels",
          "File paths",
          "Python versions"
        ],
        "answer": 0,
        "explanation": "Ultrasonic sensing estimates distance to nearby objects."
      },
      {
        "question": "What is the robot “brain” in this context?",
        "options": [
          "Decision logic combining sensors and actions",
          "The battery",
          "The chassis",
          "The LED strip"
        ],
        "answer": 0,
        "explanation": "The brain layer decides what actions to take from sensor information."
      },
      {
        "question": "What is the classification task in the chapter?",
        "options": [
          "Cats versus dogs",
          "Cars versus trucks",
          "Red versus blue LEDs",
          "Hot versus cold motors"
        ],
        "answer": 0,
        "explanation": "The project trains a model to distinguish cats from dogs."
      },
      {
        "question": "What is required before inference?",
        "options": [
          "A trained model",
          "A new Python language",
          "A spreadsheet only",
          "A motor driver only"
        ],
        "answer": 0,
        "explanation": "Inference uses a model that has already been trained."
      },
      {
        "question": "Why can lighting affect vision results?",
        "options": [
          "Image appearance changes with illumination",
          "TensorFlow stops working",
          "Motors reverse",
          "JSON changes type"
        ],
        "answer": 0,
        "explanation": "Lighting changes visual features and can affect image classification."
      }
    ]
  }
];
