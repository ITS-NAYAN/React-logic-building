# ⚛️ React Logic Building Series — Projects 1–75

> A hands-on journey from **static rendering** to **collection management** in React — one small project at a time. Each project isolates one core idea so logic becomes second nature.

---

## 🧠 Core Mental Model

```
User Action → Event → State Change → Re-render → UI Change
```

---

## 🗺️ Roadmap at a Glance

| Level | Theme | Projects | Core Skill |
|:--:|:--|:--:|:--|
| 🟢 1 | Static Data Thinking | 1–8 | Props, conditionals, `map()`, derived values |
| 🔵 2 | State Thinking | 9–16 | `useState`, events, toggles, selection |
| 🟡 3 | Input & Interaction Logic | 17–24 | Controlled inputs, validation, calculations |
| 🔴 4 | Collection Logic | 25–28 | Arrays of objects, add/delete/update, filtering, stats |

---

# 🟢 Level 1 — Static Data Thinking (Projects 1–8)

---

## 🪪 Project 1 — Profile Card

### 📖 Introduction
A card that displays a person's profile information — name, role, and details — rendered from data defined in the component.

### 🎯 Objective
Learn how to build a component and render data inside JSX.

### ✨ Features
| | Feature |
|:--:|:--|
| 🧩 | Profile card built as a React component |
| 📝 | Data displayed using JSX expressions `{}` |
| 🎨 | Styled card layout with plain CSS |

### 💡 Key Learning
**JSX and components** — UI is a function of data. Values inside `{}` render dynamically.

### 🏷️ Hashtags
`#React` `#JSX` `#Components` `#ReactLogicBuilding` `#100DaysOfCode`

---

## 🏅 Project 2 — Reusable Badge

### 📖 Introduction
A small badge component that can be reused with different text and styles by passing props.

### 🎯 Objective
Understand how one component can serve many use cases.

### ✨ Features
| | Feature |
|:--:|:--|
| 📦 | Badge component accepting props |
| 🔁 | Same component reused multiple times with different values |
| 🎨 | Appearance driven by the props passed in |

### 💡 Key Learning
**Props and reusability** — write a component once, configure it from outside.

### 🏷️ Hashtags
`#React` `#Props` `#ReusableComponents` `#ReactLogicBuilding` `#Frontend`

---

## 🌅 Project 3 — Time-of-Day Greeting

### 📖 Introduction
Displays a greeting that changes based on the time of day (e.g., morning, afternoon, evening).

### 🎯 Objective
Practice rendering different output depending on a condition.

### ✨ Features
| | Feature |
|:--:|:--|
| 🕐 | Greeting chosen from the hour value |
| 🔀 | Conditional logic (`if / else` or ternary) |
| 🖥️ | Result rendered directly in the UI |

### 💡 Key Learning
**Conditional rendering** — the UI changes based on a value, not by hand.

### 🏷️ Hashtags
`#React` `#ConditionalRendering` `#JavaScript` `#ReactLogicBuilding` `#LearnInPublic`

---

## 📦 Project 4 — Order Status Label

### 📖 Introduction
Shows a readable label (and style) for an order based on its status value.

### 🎯 Objective
Map multiple possible values to different outputs cleanly.

### ✨ Features
| | Feature |
|:--:|:--|
| 🏷️ | Status text mapped from a status value |
| 🎨 | Different look per status |
| 🔀 | Multi-branch logic (`switch` / object lookup) |

### 💡 Key Learning
**Multi-condition logic** — handle many cases without messy nested ternaries.

### 🏷️ Hashtags
`#React` `#SwitchCase` `#ConditionalRendering` `#ReactLogicBuilding` `#WebDev`

---

## 🛍️ Project 5 — Product List (Hardcoded)

### 📖 Introduction
Renders a list of products from a hardcoded array of objects.

### 🎯 Objective
Learn to display repeated UI from data.

### ✨ Features
| | Feature |
|:--:|:--|
| 📚 | Array of product objects |
| 🔁 | List rendered with `map()` |
| 🔑 | `key` prop used for list items |

### 💡 Key Learning
**List rendering with `map()` and `key`** — data in, repeated UI out.

### 🏷️ Hashtags
`#React` `#MapMethod` `#ListRendering` `#ReactLogicBuilding` `#JavaScript`

---

## 🏷️ Project 6 — Sale Price Tags

### 📖 Introduction
Displays product prices, showing a sale price when an item is on sale.

### 🎯 Objective
Combine list rendering with conditional display and simple calculations.

### ✨ Features
| | Feature |
|:--:|:--|
| 💸 | Sale price shown for items on sale |
| 🔀 | Conditional rendering inside a mapped list |
| 🧮 | Price value derived from product data |

### 💡 Key Learning
**Derived values** — compute what you display instead of storing it twice.

### 🏷️ Hashtags
`#React` `#DerivedData` `#ConditionalRendering` `#ReactLogicBuilding` `#Frontend`

---

## 📭 Project 7 — Empty vs Filled List

### 📖 Introduction
Renders a list when items exist and a friendly message when the list is empty.

### 🎯 Objective
Handle both the "has data" and "no data" cases properly.

### ✨ Features
| | Feature |
|:--:|:--|
| 📋 | List shown when items exist |
| 🫥 | Empty-state message when the array is empty |
| 📏 | Decision based on array length |

### 💡 Key Learning
**Empty states** — good UI always plans for "nothing to show."

### 🏷️ Hashtags
`#React` `#EmptyState` `#ConditionalRendering` `#ReactLogicBuilding` `#UIDesign`

---

## 🧾 Project 8 — Receipt Summary

### 📖 Introduction
Shows a receipt-style summary of items with calculated totals.

### 🎯 Objective
Calculate totals from an array and present them clearly.

### ✨ Features
| | Feature |
|:--:|:--|
| 🧮 | Totals calculated from item data |
| 🔁 | Items rendered line by line |
| 🧾 | Summary section for the final amount |

### 💡 Key Learning
**Array calculations (`reduce`)** — turn a collection into a single useful value.

### 🏷️ Hashtags
`#React` `#ArrayReduce` `#JavaScript` `#ReactLogicBuilding` `#Level1Complete`

---

# 🔵 Level 2 — State Thinking (Projects 9–16)

---

## ➕ Project 9 — Click Counter

### 📖 Introduction
A counter that increases each time a button is clicked.

### 🎯 Objective
Understand how state changes cause the UI to update.

### ✨ Features
| | Feature |
|:--:|:--|
| 🔢 | Count stored in state with `useState` |
| 🖱️ | Button click updates the count |
| 🔄 | UI re-renders on every change |

### 💡 Key Learning
**`useState` and re-rendering** — change state, and React updates the UI for you.

### 🏷️ Hashtags
`#React` `#useState` `#State` `#ReactLogicBuilding` `#Level2`

---

## 🚧 Project 10 — Bounded Counter

### 📖 Introduction
A counter with limits, so the value cannot go below a minimum or above a maximum.

### 🎯 Objective
Protect state with rules.

### ✨ Features
| | Feature |
|:--:|:--|
| ⬆️⬇️ | Increment and decrement controls |
| 🛑 | Minimum and maximum limits enforced |
| 🔒 | Buttons guarded at the boundaries |

### 💡 Key Learning
**Guarding state updates** — validate before you change state.

### 🏷️ Hashtags
`#React` `#StateLogic` `#Validation` `#ReactLogicBuilding` `#JavaScript`

---

## 🔌 Project 11 — On/Off Switch

### 📖 Introduction
A switch that toggles between ON and OFF when clicked.

### 🎯 Objective
Model two-state UI using a boolean.

### ✨ Features
| | Feature |
|:--:|:--|
| 🔘 | Boolean state (`true` / `false`) |
| 🔁 | Click toggles the value |
| 🎨 | Label/appearance reflects current state |

### 💡 Key Learning
**Boolean toggle** — `setValue(prev => !prev)` is the foundation of many UI controls.

### 🏷️ Hashtags
`#React` `#Boolean` `#Toggle` `#ReactLogicBuilding` `#Frontend`

---

## 👁️ Project 12 — Show/Hide Details Panel

### 📖 Introduction
A button that shows or hides a details panel.

### 🎯 Objective
Combine a toggle state with conditional rendering.

### ✨ Features
| | Feature |
|:--:|:--|
| 👁️ | Panel visibility controlled by state |
| 🔀 | Content rendered only when visible |
| 🏷️ | Button label reflects the current state |

### 💡 Key Learning
**State-driven visibility** — UI shows or hides based on state, not manual DOM changes.

### 🏷️ Hashtags
`#React` `#ShowHide` `#ConditionalRendering` `#ReactLogicBuilding` `#UIState`

---

## 🪜 Project 13 — Variable-Step Counter

### 📖 Introduction
A counter where the amount added or subtracted can be changed.

### 🎯 Objective
Use more than one piece of state together.

### ✨ Features
| | Feature |
|:--:|:--|
| 🔢 | Separate state for count and step |
| ⚙️ | Step size can be changed |
| ➕➖ | Count updates by the chosen step |

### 💡 Key Learning
**Multiple state values** — state pieces can work together to drive behavior.

### 🏷️ Hashtags
`#React` `#MultipleState` `#useState` `#ReactLogicBuilding` `#LearnInPublic`

---

## ❤️ Project 14 — Like Button

### 📖 Introduction
A like button that toggles between liked and unliked states.

### 🎯 Objective
Build a real-world interaction using boolean state.

### ✨ Features
| | Feature |
|:--:|:--|
| ❤️ | Liked / unliked toggle |
| 🎨 | Visual change when liked |
| 🔁 | Click toggles the state |

### 💡 Key Learning
**Practical toggle logic** — small state changes make UIs feel interactive.

### 🏷️ Hashtags
`#React` `#LikeButton` `#useState` `#ReactLogicBuilding` `#UIInteraction`

---

## 🎛️ Project 15 — Option Selector (Size/Color)

### 📖 Introduction
Lets the user pick an option (such as size or color) and shows which one is selected.

### 🎯 Objective
Track a single selected value from a set of options.

### ✨ Features
| | Feature |
|:--:|:--|
| 🔘 | Options rendered from an array |
| ✅ | Selected option stored in state |
| 🎨 | Selected option highlighted |

### 💡 Key Learning
**Single selection state** — store the selected value and compare against it while rendering.

### 🏷️ Hashtags
`#React` `#Selection` `#StateManagement` `#ReactLogicBuilding` `#Frontend`

---

## ❓ Project 16 — FAQ Accordion

### 📖 Introduction
A list of questions where clicking one reveals its answer.

### 🎯 Objective
Manage which item in a list is open.

### ✨ Features
| | Feature |
|:--:|:--|
| 📋 | Questions rendered from data with `map()` |
| 📂 | Open item tracked in state |
| 🔀 | Answer shown only for the active item |

### 💡 Key Learning
**Tracking active item** — one piece of state can control a whole list's behavior.

### 🏷️ Hashtags
`#React` `#Accordion` `#FAQ` `#ReactLogicBuilding` `#Level2Complete`

---

# 🟡 Level 3 — Input and Interaction Logic (Projects 17–24)

---

## 🪞 Project 17 — Live Text Mirror

### 📖 Introduction
Text typed into an input appears instantly somewhere else on the screen.

### 🎯 Objective
Learn how controlled inputs work.

### ✨ Features
| | Feature |
|:--:|:--|
| ⌨️ | Input bound to state (`value` + `onChange`) |
| 🪞 | Typed text mirrored live in the UI |
| ⚡ | Updates on every keystroke |

### 💡 Key Learning
**Controlled components** — state is the single source of truth for the input.

### 🏷️ Hashtags
`#React` `#ControlledInputs` `#Forms` `#ReactLogicBuilding` `#Level3`

---

## 🔢 Project 18 — Character Counter

### 📖 Introduction
Counts the characters typed in a text field in real time.

### 🎯 Objective
Derive information from input state.

### ✨ Features
| | Feature |
|:--:|:--|
| ⌨️ | Controlled text input |
| 🔢 | Live character count |
| 🧮 | Count derived from the text, not stored separately |

### 💡 Key Learning
**Derived state** — compute values from existing state instead of duplicating it.

### 🏷️ Hashtags
`#React` `#DerivedState` `#Input` `#ReactLogicBuilding` `#JavaScript`

---

## ✍️ Project 19 — Draft vs Submitted Name

### 📖 Introduction
Separates what the user is currently typing (draft) from the value they submit.

### 🎯 Objective
Understand why two pieces of state are sometimes needed.

### ✨ Features
| | Feature |
|:--:|:--|
| 📝 | Draft value updates while typing |
| ✅ | Submitted value saved only on submit |
| 🔀 | Draft and submitted values kept separate |

### 💡 Key Learning
**Draft vs committed state** — typing and submitting are different moments in the UI.

### 🏷️ Hashtags
`#React` `#FormHandling` `#useState` `#ReactLogicBuilding` `#Frontend`

---

## 🔐 Project 20 — Password Rule Checker

### 📖 Introduction
Checks a password against a set of rules and shows which rules are met.

### 🎯 Objective
Apply multiple validation rules to a single input.

### ✨ Features
| | Feature |
|:--:|:--|
| 🔑 | Controlled password input |
| ✅❌ | Each rule shown as passed or failed |
| ⚡ | Rules re-checked as the user types |

### 💡 Key Learning
**Rule-based validation** — evaluate conditions from input and reflect them in the UI.

### 🏷️ Hashtags
`#React` `#Validation` `#PasswordChecker` `#ReactLogicBuilding` `#WebDev`

---

## 🌡️ Project 21 — Temperature Converter

### 📖 Introduction
Converts a temperature value from one unit to another.

### 🎯 Objective
Apply formulas to user input.

### ✨ Features
| | Feature |
|:--:|:--|
| ⌨️ | Temperature input |
| 🧮 | Conversion calculated from the entered value |
| 🔄 | Result updates as input changes |

### 💡 Key Learning
**Input-to-output calculation** — handle string input, convert it to a number, and compute safely.

### 🏷️ Hashtags
`#React` `#Calculations` `#Input` `#ReactLogicBuilding` `#JavaScript`

---

## 💰 Project 22 — Tip Calculator

### 📖 Introduction
Calculates the tip and total for a bill amount.

### 🎯 Objective
Combine several inputs into one calculated result.

### ✨ Features
| | Feature |
|:--:|:--|
| 💵 | Bill and tip inputs |
| 🧮 | Tip and total calculated from inputs |
| 🔄 | Results update live |

### 💡 Key Learning
**Multiple inputs, one result** — derive output from several pieces of state.

### 🏷️ Hashtags
`#React` `#TipCalculator` `#DerivedState` `#ReactLogicBuilding` `#LearnInPublic`

---

## 🃏 Project 23 — Flashcard Deck

### 📖 Introduction
A deck of flashcards the user can move through and flip.

### 🎯 Objective
Manage an index and a flip state together.

### ✨ Features
| | Feature |
|:--:|:--|
| 🗂️ | Cards stored as an array |
| ➡️⬅️ | Navigate through the deck using an index |
| 🔄 | Flip a card to reveal the answer |

### 💡 Key Learning
**Index-based navigation** — an index in state selects which item to show.

### 🏷️ Hashtags
`#React` `#Flashcards` `#IndexState` `#ReactLogicBuilding` `#Frontend`

---

## 📝 Project 24 — Signup Form Validation

### 📖 Introduction
A signup form that validates its fields and shows error messages.

### 🎯 Objective
Bring input handling and validation together in a complete form.

### ✨ Features
| | Feature |
|:--:|:--|
| 📋 | Multiple controlled form fields |
| ⚠️ | Validation with error messages |
| ✅ | Submit handled after validation |

### 💡 Key Learning
**Form validation flow** — object state, per-field errors, and submit handling.

### 🏷️ Hashtags
`#React` `#FormValidation` `#Forms` `#ReactLogicBuilding` `#Level3Complete`

---

# 🔴 Level 4 — Collection Logic (Projects 25–28)

---

## ➕ Project 25 — Todo List (Add Only)

### 📖 Introduction
A todo list where users can add new tasks and see them displayed.

### 🎯 Objective
Manage a list of items in state.

### ✨ Features
| | Feature |
|:--:|:--|
| 📝 | Input for a new task |
| ➕ | Add task to an array in state |
| 📋 | Tasks rendered with `map()` |

### 💡 Key Learning
**Adding to array state immutably** — create a new array (`[...todos, newTodo]`) instead of mutating.

### 🏷️ Hashtags
`#React` `#TodoApp` `#ArrayState` `#ReactLogicBuilding` `#Level4`

---

## ✅ Project 26 — Todo List (Complete & Delete)

### 📖 Introduction
Extends the todo list so tasks can be marked complete or deleted.

### 🎯 Objective
Update and remove specific items in an array of objects.

### ✨ Features
| | Feature |
|:--:|:--|
| ☑️ | Toggle a task's completed state |
| 🗑️ | Delete a task |
| 🆔 | Items identified by a unique `id` |

### 💡 Key Learning
**Update and remove by id** — `map()` to update one item, `filter()` to remove one.

### 🏷️ Hashtags
`#React` `#ArrayMethods` `#CRUD` `#ReactLogicBuilding` `#JavaScript`

---

## 🔍 Project 27 — Todo Filters (All/Active/Done)

### 📖 Introduction
Adds filters to show all tasks, only active tasks, or only completed tasks.

### 🎯 Objective
Show different views of the same data without changing it.

### ✨ Features
| | Feature |
|:--:|:--|
| 🎚️ | Filter selection stored in state |
| 📋 | All / Active / Done views |
| 🧮 | Filtered list derived from the original array |

### 💡 Key Learning
**Filtering derived data** — keep one source of truth and derive the visible list.

### 🏷️ Hashtags
`#React` `#Filtering` `#DerivedData` `#ReactLogicBuilding` `#Frontend`

---

## 📊 Project 28 — Todo Stats & Empty States

### 📖 Introduction
Adds task statistics and friendly empty-state messages to the todo app.

### 🎯 Objective
Present summary information and handle "no data" cases for a collection.

### ✨ Features
| | Feature |
|:--:|:--|
| 📊 | Stats such as total, active, and completed tasks |
| 🫥 | Empty-state messages when there is nothing to show |
| 🧮 | Stats derived from the todo array |

### 💡 Key Learning
**Collection summaries** — combine derived data with empty-state handling for polished UX.

### 🏷️ Hashtags
`#React` `#Stats` `#EmptyState` `#ReactLogicBuilding` `#Level4`

---

## 📈 Skills Progression

| Level | Concepts Mastered |
|:--|:--|
| 🟢 Static Data | JSX, props, conditionals, `map()`, `reduce()`, derived values |
| 🔵 State | `useState`, booleans, events, single selection, active item |
| 🟡 Input & Interaction | Controlled inputs, derived state, validation, calculations, forms |
| 🔴 Collections | Immutable array updates, `map` / `filter`, ids, filtering, stats |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|:--|:--|
| ⚛️ React | UI library |
| ⚡ Vite | Dev server & build tool |
| 🟨 JavaScript (ES6+) | Logic |
| 🎨 Plain CSS | Styling |

---

## 🚀 Run Any Project Locally

```bash
npm install
npm run dev
```

---

## 🏷️ Series Hashtags

`#React` `#ReactJS` `#JavaScript` `#Vite` `#ReactLogicBuilding` `#LearnInPublic` `#100DaysOfCode` `#WebDevelopment` `#Frontend` `#GitHubPortfolio`

---

⭐ *If this series helps you, consider giving the repo a star!*
