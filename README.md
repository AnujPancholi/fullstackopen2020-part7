# Part 7

## Exercise 7.1

First of all, all the components given in the starting repo were thrown into one `App.js` file, so had to refactor all of those to their own respective files. Then I could proceed with simply importing the necessary components form `react-router-dom`, implementing it in the desired way.

## Exercise 7.2

In trying to do this, I realised that `useRouteMatch` cannot be used in the same component that contains the router, so I decided to use the `useRouteMatch` hook in the `AnecdoteList` component itself, which would receive all the anecdotes, and then the desired anecdote could be filtered there, which would in turn render the `Anecdote` component.

**Note:** There is an edge case here that was not mentioned - the user may try to manually change the path, and add some id in the URL param that does not exist, which will end up breaking the app. To handle this, I have passed a flag in the `anecdote` object in props of the `Anecdote` component, and if that is true (signifying some invalid id) then some simple text will be shown stating that the anecdote was not found. 


----