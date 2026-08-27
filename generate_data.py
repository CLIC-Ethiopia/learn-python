import json

data = """
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
    id: "book1",
    title: "Book 1: Getting Started",
    chapters: [
      {
        id: "b1c1",
        title: "Chapter 1: Starting with Python",
        learn: [
          {
            title: "Why Python Is Hot",
            content: "## Why Python Is Hot\\n\\nPython has become the world's most popular programming language due to its simplified syntax, natural-language flow, and incredible user community. It is the language of choice for machine learning, data science, artificial intelligence, and robotics.\\n\\nBecause of its massive ecosystem, Python saves you from reinventing the wheel."
          },
          {
            title: "Choosing the Right Python",
            content: "## Choosing the Right Python\\n\\nThere are different versions of Python, but the rule of thumb is simple: use the most current version (Python 3.9+). Older versions like Python 2.7 are obsolete.\\n\\n> **Warning:** Do not mix Python 2 and Python 3 syntax, they are fundamentally different!"
          },
          {
            title: "Tools for Success",
            content: "## Tools for Success\\n\\nTo write Python, you need a good editor and an interpreter. We recommend **Visual Studio Code (VS Code)** and **Anaconda**.\\n\\n- **Anaconda**: A complete Python data-science platform, including Jupyter Notebooks.\\n- **VS Code**: A lightweight but powerful source code editor.\\n\\n> **Tip:** Always use an environment like Anaconda to manage your dependencies easily!"
          }
        ],
        syntax: [
          {
            name: "Print Statement",
            description: "Outputs text to the console.",
            code: "print(\\"Hello, World!\\")\\n\\n# You can also use single quotes\\nprint('Hello again!')"
          },
          {
            name: "Importing Zen",
            description: "View the Zen of Python.",
            code: "import this\\n\\n# Executing this prints out the 19 principles of Python design."
          }
        ],
        sandbox: [
          {
            command: "print(\\"Hello, World!\\")",
            output: "Hello, World!"
          },
          {
            command: "import this",
            output: "The Zen of Python, by Tim Peters\\n\\nBeautiful is better than ugly.\\nExplicit is better than implicit..."
          }
        ]
      },
      {
        id: "b1c3",
        title: "Chapter 3: Python Elements and Syntax",
        learn: [
          {
            title: "The Zen of Python",
            content: "## The Zen of Python\\n\\nPEP 20, the Zen of Python, dictates the guiding principles of the language. \\"Readability counts\\" is a core tenet. Code should be clean and explicit."
          },
          {
            title: "Indentations",
            content: "## Indentations Count, Big Time\\n\\nUnlike JavaScript or C++, which use curly braces `{}` to define blocks of code, Python uses **indentations**. A block of code must be consistently indented (usually 4 spaces).\\n\\n> **Warning:** Mixing tabs and spaces will cause an IndentationError!"
          }
        ],
        syntax: [
          {
            name: "Indentation Example",
            description: "How Python blocks are structured.",
            code: "def greet(name):\\n    # This block is indented 4 spaces\\n    if name == \\"Alice\\":\\n        print(\\"Welcome back Alice!\\")\\n    else:\\n        print(\\"Who are you?\\")"
          }
        ],
        sandbox: [
          {
            command: "def my_func():\\n    print(\\"Indented!\\")\\nmy_func()",
            output: "Indented!"
          }
        ]
      },
      {
        id: "b1c4",
        title: "Chapter 4: Building Your First Python App",
        learn: [
          {
            title: "Variables and Data Types",
            content: "## Core Data Types\\n\\n- **Integers**: Whole numbers (e.g., `10`)\\n- **Floats**: Decimal numbers (e.g., `3.14`)\\n- **Strings**: Text enclosed in quotes (e.g., `\\"Python\\"`)\\n- **Booleans**: `True` or `False` (case-sensitive)\\n\\nAssign values using `=`."
          },
          {
            title: "Operators",
            content: "## Operators\\n\\nPython supports arithmetic operators (`+`, `-`, `*`, `/`, `//` for floor division, `%` for modulo, `**` for exponent) and comparison operators (`==`, `!=`, `>`, `<`).\\n\\n> **Tip:** Use `//` when you want to divide numbers and discard the fractional part."
          }
        ],
        syntax: [
          {
            name: "Variables & Math",
            description: "Basic arithmetic operations.",
            code: "apples = 10\\noranges = 5\\ntotal = apples + oranges\\n\\n# Floor division\\npacks = total // 3\\nprint(packs)"
          }
        ],
        sandbox: [
          {
            command: "x = 10\\ny = 3\\nprint(x // y)",
            output: "3"
          },
          {
            command: "print(5 ** 2)",
            output: "25"
          }
        ]
      }
    ],
    quiz: [
      {
        question: "What symbol is used for single-line comments in Python?",
        options: ["//", "/*", "#", "--"],
        answer: 2,
        explanation: "Python uses the hash symbol (#) for single-line comments."
      },
      {
        question: "How does Python define code blocks?",
        options: ["Curly braces {}", "Parentheses ()", "Indentation", "Begin/End keywords"],
        answer: 2,
        explanation: "Python strictly uses indentation to define blocks of code."
      },
      {
        question: "What is the output of 10 // 3?",
        options: ["3.333", "3", "1", "0"],
        answer: 1,
        explanation: "The // operator performs floor division, truncating the decimal part."
      }
    ]
  },
  {
    id: "book2",
    title: "Book 2: Understanding Python Building Blocks",
    chapters: [
      {
        id: "b2c2",
        title: "Chapter 2: Controlling the Action",
        learn: [
          {
            title: "Making Decisions with If",
            content: "## Making Decisions\\n\\nThe `if` statement executes code only if a condition is true. Use `elif` for multiple conditions and `else` as a catch-all.\\n\\n```python\\nif x > 10:\\n    print(\\"Large\\")\\nelif x > 5:\\n    print(\\"Medium\\")\\nelse:\\n    print(\\"Small\\")\\n```"
          },
          {
            title: "Loops",
            content: "## Looping\\n\\n- **for loops**: Iterate over a sequence (like a list or a range of numbers).\\n- **while loops**: Repeat as long as a condition is true.\\n\\n> **Tip:** Use `break` to exit a loop early, and `continue` to skip to the next iteration."
          }
        ],
        syntax: [
          {
            name: "For Loop with Range",
            description: "Looping a specific number of times.",
            code: "for i in range(5):\\n    # i will be 0, 1, 2, 3, 4\\n    if i == 3:\\n        continue\\n    print(i)"
          },
          {
            name: "While Loop",
            description: "Executing while a condition holds.",
            code: "x = 0\\nwhile x < 3:\\n    print(x)\\n    x += 1"
          }
        ],
        sandbox: [
          {
            command: "for i in range(3):\\n    print(f\\"Number {i}\\")",
            output: "Number 0\\nNumber 1\\nNumber 2"
          },
          {
            command: "x = 0\\nwhile x < 2:\\n    print(x)\\n    x += 1",
            output: "0\\n1"
          }
        ]
      },
      {
        id: "b2c3",
        title: "Chapter 3: Lists, Tuples, and Sets",
        learn: [
          {
            title: "Lists",
            content: "## Lists\\n\\nLists are ordered, mutable collections of items enclosed in `[]`.\\n- **Indexing**: Access items starting from 0.\\n- **Methods**: `.append()`, `.insert()`, `.remove()`, `.pop()`, `.sort()`."
          },
          {
            title: "Tuples and Sets",
            content: "## Tuples\\n\\nTuples are like lists but **immutable** (cannot be changed after creation). They use `()`.\\n\\n## Sets\\n\\nSets are unordered collections of unique elements, enclosed in `{}`."
          }
        ],
        syntax: [
          {
            name: "List Operations",
            description: "Common list manipulations.",
            code: "fruits = ['apple', 'banana']\\nfruits.append('cherry')\\nfruits[0] = 'mango'\\nprint(fruits)"
          },
          {
            name: "Set Operations",
            description: "Using sets for uniqueness.",
            code: "my_list = [1, 2, 2, 3, 3]\\nunique_items = set(my_list)\\nprint(unique_items)"
          }
        ],
        sandbox: [
          {
            command: "fruits = [\\"apple\\", \\"banana\\"]\\nfruits.append(\\"cherry\\")\\nprint(fruits)",
            output: "['apple', 'banana', 'cherry']"
          },
          {
            command: "my_set = {1, 2, 2, 3}\\nprint(my_set)",
            output: "{1, 2, 3}"
          }
        ]
      },
      {
        id: "b2c5",
        title: "Chapter 5: Wrangling Bigger Chunks of Code",
        learn: [
          {
            title: "Functions",
            content: "## Functions\\n\\nFunctions allow you to reuse blocks of code. Define them using the `def` keyword.\\nYou can pass data into functions via parameters. Functions can return data using the `return` keyword."
          },
          {
            title: "Variable Arguments",
            content: "## *args and **kwargs\\n\\nUse `*args` to pass a variable number of positional arguments as a tuple.\\nUse `**kwargs` to pass a variable number of keyword arguments as a dictionary.\\n\\n## Lambda Functions\\n\\nAnonymous, single-line functions created with the `lambda` keyword."
          }
        ],
        syntax: [
          {
            name: "Defining Functions",
            description: "Function with default arguments.",
            code: "def greet(name=\\"Guest\\", greeting=\\"Hello\\"):\\n    return f\\"{greeting}, {name}!\\"\\n\\nprint(greet())\\nprint(greet(\\"Alice\\"))"
          },
          {
            name: "Lambda Function",
            description: "Inline anonymous function.",
            code: "square = lambda x: x ** 2\\nprint(square(5))"
          }
        ],
        sandbox: [
          {
            command: "def add(a, b=5):\\n    return a + b\\nprint(add(10))",
            output: "15"
          },
          {
            command: "nums = [1, 4, 2]\\nnums.sort(key=lambda x: -x)\\nprint(nums)",
            output: "[4, 2, 1]"
          }
        ]
      }
    ],
    quiz: [
      {
        question: "Which brackets are used to define a Python dictionary?",
        options: ["[]", "()", "{}", "<>"],
        answer: 2,
        explanation: "Dictionaries use curly braces {}."
      },
      {
        question: "What keyword is used to define a function in Python?",
        options: ["func", "def", "function", "lambda"],
        answer: 1,
        explanation: "The 'def' keyword defines a standard function."
      },
      {
        question: "Which method adds an item to the end of a list?",
        options: [".insert()", ".add()", ".push()", ".append()"],
        answer: 3,
        explanation: ".append() adds a single item to the end of a list."
      }
    ]
  },
  {
    id: "book3",
    title: "Book 3: Working with Libraries",
    chapters: [
      {
        id: "b3c1",
        title: "Chapter 1: Working with External Files",
        learn: [
          {
            title: "File Operations",
            content: "## Opening and Closing Files\\n\\nUse the `open()` function to open a file. Always remember to close it, or better yet, use the `with` statement (context manager) to handle closing automatically.\\nModes: `'r'` (read), `'w'` (write/overwrite), `'a'` (append)."
          },
          {
            title: "Reading and Writing",
            content: "## Reading and Writing\\n\\n- `.read()`: Reads the entire file.\\n- `.readlines()`: Reads all lines into a list.\\n- `.write()`: Writes a string to the file.\\n\\n> **Tip:** Use the `csv` module to easily parse and write Comma-Separated Values files."
          }
        ],
        syntax: [
          {
            name: "With Open",
            description: "Safely open a file.",
            code: "with open('file.txt', 'r') as f:\\n    data = f.read()\\n    print(data)\\n\\n# The file is automatically closed here."
          }
        ],
        sandbox: [
          {
            command: "import csv\\nprint(\\"Name,Age\\\\nAlice,25\\")",
            output: "Name,Age\\nAlice,25"
          }
        ]
      },
      {
        id: "b3c2",
        title: "Chapter 2: Juggling JSON Data",
        learn: [
          {
            title: "What is JSON?",
            content: "## What is JSON?\\n\\nJSON (JavaScript Object Notation) is a standard format for data exchange. It looks very similar to Python dictionaries and lists."
          },
          {
            title: "The JSON Module",
            content: "## The json Module\\n\\n- `json.loads()`: Parses a JSON string into a Python dictionary.\\n- `json.dumps()`: Converts a Python dictionary into a JSON string.\\n- `json.load()` / `json.dump()`: For reading from / writing to files directly."
          }
        ],
        syntax: [
          {
            name: "JSON Parsing",
            description: "Convert JSON to Dict and back.",
            code: "import json\\n\\n# String to dict\\ndata_str = '{\\"key\\": \\"value\\"}'\\ndata_dict = json.loads(data_str)\\n\\n# Dict to string\\nprint(json.dumps(data_dict, indent=2))"
          }
        ],
        sandbox: [
          {
            command: "import json\\ndata = '{\\"name\\": \\"Bob\\", \\"age\\": 30}'\\nobj = json.loads(data)\\nprint(obj[\\"name\\"])",
            output: "Bob"
          }
        ]
      },
      {
        id: "b3c3",
        title: "Chapter 3: Interacting with the Internet",
        learn: [
          {
            title: "Fetching Web Pages",
            content: "## How the Web Works\\n\\nWeb browsers use HTTP requests (GET, POST) to fetch data from URLs.\\n\\nThe `urllib` module is built-in for fetching URLs. However, the third-party `requests` library is vastly preferred for its simplicity."
          },
          {
            title: "Web Scraping",
            content: "## Web Scraping\\n\\nWeb scraping involves fetching a webpage's HTML and extracting data. `BeautifulSoup` (bs4) is the go-to library for parsing HTML structure and extracting tags."
          }
        ],
        syntax: [
          {
            name: "Requests Library",
            description: "Fetching a page easily.",
            code: "import requests\\n\\nres = requests.get('https://example.com')\\nif res.status_code == 200:\\n    print(res.text[:100])"
          }
        ],
        sandbox: [
          {
            command: "print(\\"Simulating HTTP GET status: 200 OK\\")",
            output: "Simulating HTTP GET status: 200 OK"
          }
        ]
      }
    ],
    quiz: [
      {
        question: "Which statement ensures a file is properly closed after operations are finished?",
        options: ["try", "close", "with", "finally"],
        answer: 2,
        explanation: "The 'with' statement acts as a context manager and safely closes files."
      },
      {
        question: "What does json.loads() do?",
        options: ["Writes JSON to a file", "Converts a JSON string to a Python dictionary", "Converts a Python dictionary to a JSON string", "Downloads a JSON file from the web"],
        answer: 1,
        explanation: "json.loads() parses a JSON formatted string into a Python object."
      }
    ]
  },
  {
    id: "book4",
    title: "Book 4: Using Artificial Intelligence",
    chapters: [
      {
        id: "b4c1",
        title: "Overview of AI Concepts",
        learn: [
          {
            title: "What is AI?",
            content: "## What is AI?\\n\\nArtificial Intelligence encompasses techniques to make computers perform tasks requiring human-like logic.\\n\\nInspired by biological neurons, artificial neural networks consist of an input layer, hidden layers, and an output layer. Neurons connect via weights and biases."
          },
          {
            title: "Machine Learning Types",
            content: "## Machine Learning Types\\n\\n- **Supervised Learning**: Training on labeled data (inputs and expected outputs).\\n- **Unsupervised Learning**: Finding patterns in unlabeled data.\\n- **Reinforcement Learning**: Software takes actions based on cumulative rewards."
          }
        ],
        syntax: [
          {
            name: "AI Principles",
            description: "There is no built-in AI syntax, it is a conceptual framework.",
            code: "# The process involves:\\n# 1. Preparing Data\\n# 2. Building Model\\n# 3. Training\\n# 4. Evaluation"
          }
        ],
        sandbox: [
          {
            command: "print(\\"AI concepts loaded: Supervised, Unsupervised, Reinforcement\\")",
            output: "AI concepts loaded: Supervised, Unsupervised, Reinforcement"
          }
        ]
      },
      {
        id: "b4c2",
        title: "Guided Breakdown of Neural Networks",
        learn: [
          {
            title: "TensorFlow and Keras",
            content: "## Building with TensorFlow and Keras\\n\\nTensorFlow is a powerful framework based on multidimensional matrices (tensors). Keras is its high-level API."
          },
          {
            title: "5 Steps of Keras",
            content: "## 5 Steps of Keras\\n\\n1. **Load data**: e.g., Fashion-MNIST.\\n2. **Define model**: Stack layers (Dense, Conv2D, Dropout).\\n3. **Compile model**: Choose an optimizer (like 'adam') and loss function.\\n4. **Fit/Train**: Run the model through epochs using training data.\\n5. **Evaluate**: Test against validation data to check accuracy."
          }
        ],
        syntax: [
          {
            name: "Keras Sequential Model",
            description: "Create a layered deep learning model.",
            code: "import tensorflow as tf\\n\\nmodel = tf.keras.Sequential([\\n    tf.keras.layers.Dense(128, activation='relu'),\\n    tf.keras.layers.Dense(10, activation='softmax')\\n])\\n\\nmodel.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])"
          }
        ],
        sandbox: [
          {
            command: "print(\\"Epoch 1/5\\\\nloss: 0.5009 - acc: 0.8244\\")",
            output: "Epoch 1/5\\nloss: 0.5009 - acc: 0.8244"
          }
        ]
      }
    ],
    quiz: [
      {
        question: "Which machine learning type relies on labeled training data?",
        options: ["Unsupervised", "Supervised", "Reinforcement", "Evolutionary"],
        answer: 1,
        explanation: "Supervised learning uses inputs paired with their known correct outputs."
      },
      {
        question: "What is a 'Tensor' in TensorFlow?",
        options: ["A mathematical algorithm", "A multidimensional matrix of data", "A neural network layer", "An activation function"],
        answer: 1,
        explanation: "A tensor is essentially a multi-dimensional array/matrix of data."
      },
      {
        question: "Which Keras step connects the model to an optimizer and loss function?",
        options: ["Define", "Fit", "Compile", "Evaluate"],
        answer: 2,
        explanation: "The compile() step configures the learning process."
      }
    ]
  },
  {
    id: "book5",
    title: "Book 5: Doing Data Science",
    chapters: [
      {
        id: "b5c1",
        title: "Core Concepts of Big Data",
        learn: [
          {
            title: "The 3 V's",
            content: "## The 3 V's of Big Data\\n\\n1. **Volume**: Massive amounts of data (terabytes, petabytes).\\n2. **Variety**: Different formats (text, images, audio, sensors).\\n3. **Velocity**: Speed of data generation and processing."
          },
          {
            title: "Data Science Process",
            content: "## 5-Step Data Science Process\\n\\n1. Capture the data.\\n2. Process/clean the data.\\n3. Analyze the data.\\n4. Communicate results (visualizations).\\n5. Maintain the data."
          }
        ],
        syntax: [
          {
            name: "Data Flow Concept",
            description: "The data science pipeline.",
            code: "# Data Science Pipeline:\\n# df = capture_data()\\n# clean_df = process(df)\\n# results = analyze(clean_df)\\n# visualize(results)"
          }
        ],
        sandbox: [
          {
            command: "print(\\"Data Science Process: Capture -> Process -> Analyze -> Communicate -> Maintain\\")",
            output: "Data Science Process: Capture -> Process -> Analyze -> Communicate -> Maintain"
          }
        ]
      },
      {
        id: "b5c2",
        title: "Toolkits: NumPy, Pandas, Matplotlib",
        learn: [
          {
            title: "NumPy & Pandas",
            content: "## NumPy & Pandas\\n\\n- **NumPy**: Used for high-performance multidimensional array processing and math.\\n- **Pandas**: Built on top of NumPy, Pandas uses **DataFrames** (like Excel tables) to manipulate, clean, and analyze relational data efficiently."
          },
          {
            title: "Matplotlib",
            content: "## Matplotlib / Seaborn\\n\\nUsed to plot data visually. You can create scatter plots, bar charts, and heatmaps to find correlations in your Big Data."
          }
        ],
        syntax: [
          {
            name: "Pandas DataFrame",
            description: "Load and inspect data.",
            code: "import pandas as pd\\n\\ndf = pd.read_csv('data.csv')\\n\\n# View the first 5 rows\\nprint(df.head())\\n\\n# Summarize the data statistics\\nprint(df.describe())"
          }
        ],
        sandbox: [
          {
            command: "import pandas as pd\\nprint(\\"DataFrame loaded with shape (1000, 5)\\")",
            output: "DataFrame loaded with shape (1000, 5)"
          }
        ]
      }
    ],
    quiz: [
      {
        question: "Which of the following is NOT one of the 3 V's of Big Data?",
        options: ["Volume", "Velocity", "Validity", "Variety"],
        answer: 2,
        explanation: "The 3 V's are Volume, Velocity, and Variety."
      },
      {
        question: "Which Python library provides the DataFrame structure?",
        options: ["NumPy", "Matplotlib", "Pandas", "Scikit-Learn"],
        answer: 2,
        explanation: "Pandas introduces the DataFrame for tabular data."
      },
      {
        question: "What is Matplotlib primarily used for?",
        options: ["Data cleaning", "Machine learning", "Data visualization", "Database hosting"],
        answer: 2,
        explanation: "Matplotlib is used to plot charts and graphs."
      }
    ]
  },
  {
    id: "book6",
    title: "Book 6: Talking to Hardware (Physical Computing)",
    chapters: [
      {
        id: "b6c1",
        title: "Embedded Systems and GPIO",
        learn: [
          {
            title: "Physical Computing",
            content: "## Physical Computing\\n\\nConnecting computers to the physical world using sensors (inputs) and actuators/motors (outputs)."
          },
          {
            title: "Raspberry Pi GPIO",
            content: "## Raspberry Pi GPIO\\n\\nGeneral Purpose Input/Output pins allow the Pi to read voltages and send voltages (3.3V or 5V). \\nUsing the `gpiozero` library, you can easily control LEDs and buttons."
          }
        ],
        syntax: [
          {
            name: "GPIO Zero LED",
            description: "Turn on a physical LED using Python.",
            code: "from gpiozero import LED\\nfrom time import sleep\\n\\nred_led = LED(17)\\nred_led.on()\\nsleep(1)\\nred_led.off()"
          }
        ],
        sandbox: [
          {
            command: "print(\\"LED on GPIO 17 is ON\\")",
            output: "LED on GPIO 17 is ON"
          }
        ]
      },
      {
        id: "b6c4",
        title: "Making Things Move",
        learn: [
          {
            title: "DC and Servo Motors",
            content: "## DC Motors\\nSpin continuously. Speed is controlled via PWM (Pulse Width Modulation) — pulsing power rapidly.\\n\\n## Servo Motors\\nHold a specific angle (usually 0 to 180 degrees). Controlled via specific PWM timings."
          },
          {
            title: "Stepper Motors",
            content: "## Stepper Motors\\nMove in highly precise, small steps. Great for 3D printers or exact positioning."
          }
        ],
        syntax: [
          {
            name: "PWM Motor Control",
            description: "Control speed or angle.",
            code: "import RPi.GPIO as GPIO\\n\\np = GPIO.PWM(SERVO_PIN, 50)\\np.start(7.5)  # 90 degrees\\n\\n# Change angle\\np.ChangeDutyCycle(12.5)"
          }
        ],
        sandbox: [
          {
            command: "print(\\"Servo moved to 90 degrees\\")",
            output: "Servo moved to 90 degrees"
          }
        ]
      }
    ],
    quiz: [
      {
        question: "What does GPIO stand for?",
        options: ["General Purpose Input/Output", "Global Positioning Internal Output", "Graphic Processing Interface Object", "Google Python Integrated Operations"],
        answer: 0,
        explanation: "GPIO pins are the physical interface between the Pi and electronics."
      },
      {
        question: "How does the Raspberry Pi control the speed of a DC motor?",
        options: ["Lowering the raw voltage", "PWM (Pulse Width Modulation)", "Using a stepper driver", "It cannot control speed"],
        answer: 1,
        explanation: "PWM pulses the power rapidly to simulate lower voltages and slow the motor."
      }
    ]
  },
  {
    id: "book7",
    title: "Book 7: Building Robots",
    chapters: [
      {
        id: "b7c1",
        title: "Robot Paradigms",
        learn: [
          {
            title: "What is a Robot?",
            content: "## What is a Robot?\\n\\nA robot is a machine combining a computer (brain) with an actuator (motor/movement) and sensors. \\nRobots don't have to look human! A smart toaster or an autonomous car are both robots."
          },
          {
            title: "Sub-systems",
            content: "## Sub-systems\\n\\n- **Computers**: The brain, often embedded systems.\\n- **Actuators**: The muscles (DC, Servo, Steppers).\\n- **Sensors**: The senses (Ultrasonic, cameras, LIDAR)."
          }
        ],
        syntax: [
          {
            name: "Robotics Architecture",
            description: "The Sense -> Think -> Act loop.",
            code: "while True:\\n    data = sensor.read()   # SENSE\\n    action = ai.decide(data) # THINK\\n    motor.execute(action)  # ACT"
          }
        ],
        sandbox: [
          {
            command: "print(\\"Robot initialized. Systems nominal.\\")",
            output: "Robot initialized. Systems nominal."
          }
        ]
      },
      {
        id: "b7c4",
        title: "Computer Vision with OpenCV",
        learn: [
          {
            title: "Machine Vision",
            content: "## Machine Vision\\n\\nOpenCV allows the robot to analyze camera frames. \\nYou can define a color range in HSV space, create a \\"mask\\" to isolate a blue ball, find its contours, and calculate its center (moment)."
          },
          {
            title: "AI Integration",
            content: "## AI Integration\\n\\nBy feeding the camera images into our previously trained Keras Neural Network, the robot can determine if it is looking at a Cat or a Dog, and act accordingly!"
          }
        ],
        syntax: [
          {
            name: "OpenCV Color Mask",
            description: "Filter colors to find objects.",
            code: "import cv2\\n\\n# Convert BGR to HSV\\nhsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)\\n\\n# Create mask for blue\\nmask = cv2.inRange(hsv, blueLower, blueUpper)\\n\\n# Find contours\\ncnts, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)"
          }
        ],
        sandbox: [
          {
            command: "print(\\"Object identified: BLUE BALL at Coordinates X:320 Y:240\\")",
            output: "Object identified: BLUE BALL at Coordinates X:320 Y:240"
          }
        ]
      }
    ],
    quiz: [
      {
        question: "What are the core components of a robot?",
        options: ["Legs, arms, head", "Computer, Actuator, Sensors", "Wi-Fi, Bluetooth, 5G", "Python, C++, Java"],
        answer: 1,
        explanation: "A robot fundamentally consists of a computer brain, actuators for movement, and sensors to perceive the world."
      },
      {
        question: "What is OpenCV primarily used for?",
        options: ["Controlling DC motors", "Connecting to Wi-Fi", "Computer Vision and image processing", "Creating web servers"],
        answer: 2,
        explanation: "OpenCV is an open-source library specifically for computer vision."
      }
    ]
  }
];
"""

with open('src/data.ts', 'w') as f:
    f.write(data)

print("Data file successfully generated!")
