# Part 7

## Exercise 7.1

First of all, all the components given in the starting repo were thrown into one `App.js` file, so had to refactor all of those to their own respective files. Then I could proceed with simply importing the necessary components form `react-router-dom`, implementing it in the desired way.

## Exercise 7.2

In trying to do this, I realised that `useRouteMatch` cannot be used in the same component that contains the router, so I decided to use the `useRouteMatch` hook in the `AnecdoteList` component itself, which would receive all the anecdotes, and then the desired anecdote could be filtered there, which would in turn render the `Anecdote` component.

**Note:** There is an edge case here that was not mentioned - the user may try to manually change the path, and add some id in the URL param that does not exist, which will end up breaking the app. To handle this, I have passed a flag in the `anecdote` object in props of the `Anecdote` component, and if that is true (signifying some invalid id) then some simple text will be shown stating that the anecdote was not found.

## Exercise 7.3

Used the `useHistory` hook to change the path and render notification.

## Exercise 7.4

First step was to make the actual hook, which I did in a new `hooks` directory and an `index.js` file with named exports as suggested in the course, then I simply imported it in the `CreateNew` component that contains the form to create new anecdotes, and used it for each of the fields.

## Exercise 7.5

Simply made a `reset` function in the `useFields` hook, then made a `resetAll` function triggered by a new button which calls `reset` for all fields.

## Exercise 7.6

The warning was avoided, and according to the course, this exercise is already complete.

## Exercise 7.7

The exercise was to implement the `useEffect` hook within the `useCountry`custom hook. I implemented the same, making the required API call if a non-empty name is present passed, and if a result is found, put the first result in the `data` property with a `found` boolean (this seemed to be the format accepted by the existing `Country` component). If no result was found, the API would respond with a status code of 404 and the `found` boolean would be set to false with `data` set to null.

## Exercise 7.8

First I implemented the `useEffect` callback in the `useResource` hook to fetch all the resources via a simple GET request, to then update the `resources` state with the result. Then I implemented the `create` function to make a POST request to create a new resouce, and since this request would return the new resource as created on the backend, I could just update the `resources` state by appending the new resouce to it.


----