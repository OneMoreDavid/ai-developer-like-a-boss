# Intro to Prompt Engineering

[Course Guide (Notion)](https://half-money-bd8.notion.site/Course-Handbook-Prompt-Engineering-Working-With-LLMs-Zero-to-Mastery-6234be19ffcd4e02991fa7c5227d21b3)

- LLM = Essentially guessing machines 
- Prompt Libraries = some kind of new business model that recently popped up - this is basically a complete waste of money 
- Prompt Engineering is **not** a career, it is an **important skill**

# Basics; what is Prompt Engineering?

- Combination of Instructions and Context to be provided to an AI 
- Developing and optimizing these prompts to efficiently use AI to complete a task 
- How you construct a prompt is important as it can hugely impact the quality of the output provided 
- Kind of like *programming in natural language*

# But why? 

- One of the things that came from working with LLMs was how their intelligence increased as they grew (amount of training data grew) 
- This was not linear, as in training sample size X might produce LLM Y, but training sample size X+1 produced an LLM that was not Y+1, more like Y*Y. 
- Further to this, it transpires that even the LLM builders don't fully understand how it works, they thought they did but they were not expecting the abilities (Y*Y for example) to be the result of X+1
- Moreso, LLMs produce vastly different outputs based on suttle changes to the prompt
- hence **Prompt Engineering**

# How you Engineer a Prompt is important: 

- Constructing a prompt in the wrong order can have negative affect on outcome:
![Getting the wrong answer](./01-ztm-intro-prompt-engineering/assets/prompt-engineering-wrong-answer.png)
![Getting it right](./01-ztm-intro-prompt-engineering/assets/prompt-engineering-correct-answer.png)

- The only time they **think** is when they are outputting or *typing*
- So on the first output it needed to find the answer to C without fully knowing what it would put as it's answers for B and A

# Applied Prompt Engineering

- Applying prompt engineering principles, knowledge and skills to real-world tasks
- Prompt Engineering is **not** the same as **asking an LLM to do something** or **to give you an answer to something**

# Example of Applied Prompt Engineering with NASA

- **BIDARA**
- Bio-Inspired Design And Research Assistant
- Based on ChatGPT
- [NASA built BIDaRA using ChatGPT](https://www1.grc.nasa.gov/research-and-engineering/vine/petal/)
- This is the **very large** prompt: [github repo](https://github.com/nasa-petal)

## How did they build this prompt? 

1. Tells ChatGPT that it is an expert in this (includes a link to the website for the project) 
2. Creates an Interactive workflow (prompting the user to think about their workflow so that the user doesn't forget to build the prompt correctly)
3. Creates step-by-step process that GPTs can follow (as it is quite complex) Lists the steps in the prompt. 
4. Requires model to provide evidence in form of providing citations to peer-reviewed material (forcing it to bias to academic sources)
5. Make model to provide detailed information for each step of the explanation 

# Why is prompt engineering important? 

- Key to getting the best from an LLM
- Need to use it effectively 
- Using Natural Language to effectively program 
- Programming with English = *hottest new programming language* 

**Prompt Engineering is a Skill NOT a Job**

- Interesting Movie about [AlphaGo](https://www.youtube.com/watch?v=WXuK6gekU1Y)

---

# Chosing an LLM

to start, we will use; [openAI Playground](https://platform.openai.com/playground)

``` 
The OpenAI Playground is a tool that anyone can use to have more control over their prompting, such as using different types of AI models and adjusting hyperparameters like Temperature. The Playground is particularly useful for developers and researchers to test different AI models using the API.

In short, the Playground gives you more control than you have in ChatGPT. 
```

# Multi-Modality

- more than just text
- give it things like images 
- example, give it a photo, then in text, give it a persona and ask it a question 
- not only can it look at images, it can gerenate images
- can also execute python code 

Important to remember that **LLMs are NOT calculators, they are word guessing machines**

