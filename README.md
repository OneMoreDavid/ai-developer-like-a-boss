# OpenAI Playground

to start, we will use; [openAI Playground](https://platform.openai.com/playground)

``` 
The OpenAI Playground is a tool that anyone can use to have more control over their prompting, such as using different types of AI models and adjusting hyperparameters like Temperature. The Playground is particularly useful for developers and researchers to test different AI models using the API.

A platform that allows you to use the GPT-3.5 and GPT-4 models in a way that lets you have more control over them.

In short, the Playground gives you more control than you have in ChatGPT. 
```

# Multi-Modality

LLM's can do more than answer text questions with text answers. 

- more than just text
- give it things like images 
- example, give it a photo, then in text, give it a persona and ask it a question 
- not only can it look at images, it can gerenate images
- can also execute python code 

Important to remember that **LLMs are NOT calculators, they are word guessing machines**

# Non-Deterministic

**LLMs are non-deterministic**. 

That means that even if we use the same LLM multiple times, and provide it with the same prompt, we'll get at least *slightly* different responses! 

---

# LLM Choices (some of)

**ChatGPT Plus (GPT-4)**. Costs $20/month. Includes multi-modality (accepts text, images, documents in the prompt). Includes web access.
How To Setup: go to the next section in this course titled "Option A (Recommended Option): ChatGPT Setup" where I'll walk through the setup process.

## BEST FREE OPTION:
**Claude 3 Sonnet** (not available to Canadian or EU residents due to AI laws in those countries): Free. Includes multi-modality (accepts text, images, and documents in the prompt).
How To Setup: go to the next section in this course titled "Option B (Free Option): Claude Setup" where I'll walk you through the setup process.

Note: If you are a Canadian or EU resident and are looking for a free option, I recommend using an open source model (see below for instructions) or GPT-3.5 (you do not need to create an account to use GPT-3.5, so you can simply go to https://chat.openai.com/ and proceed to Section 3 of this course).

## BEST OPEN-SOURCE (ALSO FREE) OPTION:
You also have the option to use your own open-source LLM that you can download and run on your computer! This is actually a great option and is free, but you'll need a relatively modern & powerful computer in order to do it.

**Llama 3**. Free. Includes multi-modality (accepts texts and images in the prompt).
How To Setup: to "Section 13: Using Open Source Models" in this course where I'll walk you through the setup process.

---

# Prompting often requires iteration. 

That means prompting, seeing what the output is (and testing it out if it's code), and then prompting again. Sometimes it even means starting over again because you realized you went down the wrong path. Learning prompt engineering skills will help avoid the need for constant iteration because it'll help ensure the output is the best it can be the first time. But you haven't really learned any prompt engineering skills yet - and that's okay, we're just getting started!