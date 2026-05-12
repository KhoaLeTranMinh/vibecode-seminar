# Presentation Outline — After Feedback Ver. 1

## Presentation 1: The Theory of AI and Vibe Coding

### Part 1: Demystifying Artificial Intelligence (AI)

**What is AI?**
Use easy-to-understand language to explain that AI is simply giving computers the ability to perform tasks that typically require human intelligence, like recognizing patterns or making decisions.

**The AI Family Tree (Elaborated with Examples):**

- **Machine Learning (ML):** Teaching computers to learn from data rather than giving them strict, explicit rules.
  - *Example:* Email spam filters that learn what spam looks like over time based on what you mark as junk.
- **Deep Learning:** A subset of ML inspired by the human brain (neural networks) that handles complex, layered patterns.
  - *Example:* Facial recognition on your smartphone or the vision systems in self-driving cars.
- **Natural Language Processing (NLP):** The bridge between computers and human language, allowing machines to read, understand, and generate text.
  - *Example:* Voice assistants like Siri or translation apps.

**What is a Large Language Model (LLM)?**
LLMs are the powerful intersection of Deep Learning and NLP.
- *Why is it called "Large"?* It refers to the massive datasets (almost the entire internet) the model was trained on and the billions of "parameters" (neural connections) it uses to make decisions.

**Under the Hood:**
LLMs don't actually "think"; instead, they use mathematical context and probabilities to predict the most likely next word in a sequence to generate human-like responses.

---

### Part 2: Modern Software Development & Vibe Coding

**Software Development Life Cycle (SDLC):**
- Introduce the traditional phases: Planning, Designing, Building, Testing, Deploying.
- *The Waterfall V-model:* Traditional sequential, step-by-step method widely implemented by Japanese companies.
- *Agile & Scrum:* A modern, iterative approach where teams work in short sprints (Scrum) to build software incrementally. Waterfall is rigid and requires full planning upfront, while Agile is flexible and adapts to changes quickly.

**What is "Vibe Coding"?**
A modern programming approach where AI tools (like GitHub Copilot Agent) generate software based on your natural language descriptions.
- *Why is it called that?* You are coding based on the "vibe" or intent of what you want to achieve, rather than getting bogged down in manual syntax. Your role shifts from typing code to **guiding, testing, and refining AI-generated output**.

**Spec-Driven Development (SDD):**
Emphasize the importance of exploring requirements before coding by drafting a Product Requirements Document (PRD). Collaborative SDD flow:
> Human intent → Agent writes specs → Human review → Agent makes plans → Human review → Agent breaks down to tasks → Human review

**Test-Driven Development (TDD) Flow:**
> Agent writes test cases (Unit Tests, Integration Tests, End-to-End Tests) → Code is generated → Test → Fix Code → Test again → Review Code → CI/CD

**AI-Driven Development & Best Practices for Vibe Coding:**
- **Clarity from the Start:** Avoid vague specifications, which lead the AI off-track.
- **Choose the Right Model:** Different tasks require different AI strengths.
  - *Planning phases:* Use models like Opus or GPT-5.5.
  - *Task Execution (Agent mode):* Use models like Sonnet or Codex.

---

## Presentation 2: Actual Implementation & Tutorial Walkthrough

### Part 1: The Tools and Technologies

- **Visual Studio Code (VSCode):** The software environment where the project will live.
- **GitHub Copilot (Elaborated):** An AI pair programmer powered by your subscription.
  - **Ask mode:** For asking questions to understand existing code.
  - **Edit mode:** For highlighting code to refactor it or add specific new features.
  - **Agent mode:** For giving the AI autonomy to perform complex, multi-file coding tasks.

**The Building Blocks of the Web (Deep Dive):**
- **HTML (The Skeleton):** Sets up the basic structural elements (e.g., the `index.html` file creates headers, buttons, and image placeholders).
- **CSS (The Clothing/Makeup):** Provides the visual layout, colors, and responsive design (e.g., `styles.css` makes the app look good on both phones and desktops).
- **JavaScript (The Muscles/Brain):** Adds interactivity and logic (e.g., `app.js` manages adding items to the shopping cart, calculating totals, and navigating pages).

---

### Part 2: Step-by-Step Tutorial Walkthrough

Build an online shopping prototype app (products, details, cart, checkout).

**Step 1: Setup and Define Product Requirements**
- Create an empty folder named **ShoppingApp** as the AI agent's workspace.
- Prompt GitHub Copilot to evaluate your ideas and generate a detailed **Product Requirements Document (PRD)**.

**Step 2: Generate UI Wireframes**
- Ask the AI to map out user interface and interactions using low-fidelity, text-based wireframe diagrams.

**Step 3: Create the Initial Prototype**
- Add the PRD and wireframe files to the AI's "chat context" to set the rules.
- Prompt the **GitHub Copilot Agent** to autonomously build the HTML, CSS, and JavaScript files.

**Step 4: Test and Refine**
- Run the app in the browser.
- **Test functionality:** Browse products, adjust cart quantities, navigate.
- **Test responsiveness:** Resize the window to see design adaptations.
- **Refine:** Issue iterative updates via Agent chat (e.g., fixing collapsed navbars or adding emojis).

**Step 5: Collaborating on the Task**
- Show students how they can collaborate with each other. For example:
  - One student acts as the **"Product Manager"** — focusing on the SDD flow and reviewing specs.
  - Another acts as the **"QA Tester"** — focusing on the TDD flow and prompting the AI to fix bugs.
