# What can learners expect from Automation Explorer?

This plan covers the essentials needed to get you started as quickly as possible with reading the code, building and running simple automations with Studio. It's also the first step towards becoming an automation professional.

# Where does Automation Explorer fit in the developer’s journey?

Explorer is the first stage. You are not yet a developer after this, but it’s a necessary step.
Let's look closer at how the journey towards becoming an automation developer looks like:


1. Become an Associate Automation Developer

This stage means you're able to create effective processes or workflows to be integrated in larger projects by senior Automation Developers. To reach this stage, you must complete the Automation Explorer and Automation Developer Associate learning path, gain some experience by working on a few implementation projects, then pass the Associate Certification exam.


2. Become a Professional Automation Developer

This stage means that you can create complex projects on your own using the Robotic Enterprise Framework. To reach this stage, you must complete the Automation Explorer, Automation Developer Associate, and Automation Developer Professional learning plans. Next, you should gain some experience by implementing a few projects. Lastly, take the Advanced Automation Developer exam to certify your skills.


3. Be a continuous learner. The purpose of continuous education can be to gain a better understanding of different features or products and to become specialized in them.

There are several areas of specialization you can explore at this level of knowledge. For example, you can focus on Document Understanding with AI Center and become an Automation Developer Document Understanding specialist, or focus on the UiPath testing capabilities and become an Automation Developer Application Testing specialist. 

---

# What is automation?

Automation, in its essence, involves **leveraging technology, software, or machinery to carry out tasks that would typically require human effort**. The beauty of automation lies in its ability to minimize or eliminate the need for constant human intervention, allowing processes to run smoothly and efficiently.

# Types of Robot

|               	|                                                                                                Attended                                                                                                	|                                                                                              Unattended                                                                                              	|
|:-------------:	|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|
|   What it is  	| This type of robot operates on your computer, becoming your trusted ally, enhancing both quality and productivity. It takes charge of repetitive tasks, enabling you to accelerate processes promptly. 	| This type of robot operates with minimal human intervention, executing fully automated processes that involve high-volume transactions. It's typically used in task-intensive back-end environments. 	|
|     Where     	| On your PC, laptop, or departmental server.                                                                                                                                                            	| Unattended robots are deployed on dedicated workstations, servers, mainframes, or web services.                                                                                                      	|
| Trigger types 	| Attended robots can be triggered: By the user. By certain events on the user's machine.                                                                                                                	| Unattended robots are triggered: Via an automation management tool (UiPath Orchestrator). Based on a set schedule. By any activity or event. By another robot.                                       	|

---

# Process Assessment tool

Helps you score the feasibility of automating a process 

# Studio-Robot-Orchestrator ecosystem

Studio, Orchestrator and Robots are what we call the core RPA components of the UiPath Platform.

We call them the core components because RPA can't work without developing automations, running them, and managing the entire ecosystem. 

# Studio

UiPath Studio is an integrated development environment for Automation Developers to design, develop, and debug automation projects. 

Studio can be connected to Orchestrator, making it easy to publish automation projects as NuGet packages, via the dedicated feeds. From there, they're distributed to robots to be executed.

When we say Studio, we can think of two profiles, namely Studio and StudioX. 

These are meant to match different coding skills that developers may have:

- **StudioX** is meant for business users looking to automate tasks for themselves and their immediate teams.
- **Studio** is meant for Automation developers looking to build complex unattended or attended process automations.

Depending on the type of Studio license an enterprise may purchase, Studio users can switch between Studio and StudioX profiles as they need.

# Robots

A software robot is an execution agent that runs automations built with the Studio family and then published as packages either locally, or to Orchestrator.

There are two types of UiPath robots and they differ both in the way they work and in the way they're licensed:

## Attended robots

- They're digital helpers for human users. They work on the same machines as us humans, during the same hours. They're triggered directly by humans (usually through UiPath Assistant) or by an event related to what the human user does. For example, opening an application or receiving an email. 
- **UiPath Assistant** is the component that provides a friendly interface to interact with attended robots. It is the tool that we use to easily access, manage, and run automations. 

## Unattended robots

- These are meant to work non-stop, with as little input from human users as possible. They're deployed on separate machines and their jobs are triggered exclusively from Orchestrator.
- Their interactions with human users are typically handled with as little disruption as possible, by creating and sending requests for human input or validation as tasks.
While these await to be processed, unattended robots can continue their work by picking up other jobs.
When human input is finally provided, unattended robots can resume their work on the process.

## Test Robots

These robots can be deployed to execute tests on-demand, continuously, and at scale. Here are some of the characteristics of a test robot:

- Purpose built for testing workflows, activities, and applications. 
- Provides flexibility in managing and reusing test cases across projects. 
- Enables activity level unit testing out-of-the-box.

# Orchestrator

Orchestrator, the heart of automation management, is a web application that allows managing, controlling, and monitoring the robots and the automations. 

With Orchestrator we can deploy, trigger, measure, provision, track, and ensure the security of every robot in the organization.

Orchestrator also functions as a repository for libraries, reusable components, assets, and processes used by robots or by developers.

The main capabilities of Orchestrator are:

- Provisioning: creates and maintains the connection with robots.
- Control and license distribution: enables the creation, assignment and maintenance of licenses, roles, permissions, groups, and folder hierarchies.
- Automation storage and distribution: allows the controlled storage and distribution of automation projects, assets, and credentials, as well as large files used in automations.
- Running automation jobs in unattended mode: enables the creation and distribution of automation jobs in various ways, including through queues and triggers.
- Monitoring: allows monitoring of jobs and robots and stores logs for auditing and analytics.

---

Studio is an integrated development environment for Automation Developers to design, develop, and debug automation projects. Studio can be connected to Orchestrator, making it easy to publish automation projects. From there, they're distributed to robots to be executed.

Human users can trigger robots, through the UiPath Assistant tool to execute processes on their machines. We call these robots attended robots. 

The robots deployed on separate machines, working without direct human intervention, are called unattended robots. 

With Orchestrator we can deploy, trigger, measure, provision, track, and ensure the security of every robot in the organization.

---

An Automation Cloud account allows a user or robot to authenticate on your UiPath Platform and to receive authorization to access the resources of your various UiPath products. In Orchestrator, on the Manage Access page we can define and assign roles. We use roles to control the level of access an account should have.
In Studio, access the Design tab and click Publish to publish a process to Orchestrator.
To Run a process published to Orchestrator, we can open UiPath Assistant, select the process from the list, then click Run.

---

