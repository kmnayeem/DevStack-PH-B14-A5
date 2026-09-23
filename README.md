## Name of project:
**DevStack-PH-B14-A5**

## A little description:
DevStack is a web application that helps developers explore different technologies and build their own development stack. Users can browse technologies by category, select the tools they want to use, and manage their selected technologies in a personal stack.

## Technology that use:

- **React.js** – Building the user interface and managing components.
- **TypeScript** – Providing type safety and better code structure.
- **Tailwind CSS** – Styling and creating the responsive UI.
- **React Icons** – Adding icons throughout the application.
- **React Toastify** – Showing success and error notifications.
- **JSON / Fetch API** – Loading technology data from `data.json`.
- **React Suspense & use()** – Handling asynchronous technology data.

## 3 features about this project:

1. **Explore Technologies** – Users can view different technologies with their name, category, difficulty, rating, and description.

2. **Add to Stack** – Users can select their preferred technologies and add them to “Your Stack” to build their own development stack.

3. **Manage Your Stack** – Users can remove individual technologies or use “Clear Stack” to remove all selected technologies at once.

---


### 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript. I use JSX in my React components to create the UI, like buttons, headings, cards, and other elements.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. And state is used to store data that can change.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update changing data.

In my project, I used it in the `App` component for the saved technologies. When I add or remove a technology, I update the `saved` state using `setSaved`.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

I didn't use `useEffect` in this project.

I used `fetch()` to get the JSON data, and then I used React's `use()` with `Suspense` to handle the data. `Suspense` shows the loading message while the data is being loaded.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list.

For example, I used `key={singleTech.id}` when displaying the technologies. This helps React understand which item was changed, added, or removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition.

In my project, I used it in the Stack component. If there are no technologies selected, I show **"Your stack is empty."**

If there are technologies, I show the selected technologies instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We pass data from the parent component to the child using props.

In my project, the `App` component passes functions like `handleAddTech` and `handleRemoveTech` to the child components.

When the user clicks a button in the child component, the child calls the function, and then the parent updates the state.
