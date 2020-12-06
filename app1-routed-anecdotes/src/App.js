import React, { useState } from 'react'
import About from "./components/About.js";
import AnecdoteList from "./components/AnecdoteList.js";
import Footer from "./components/Footer.js";
import Menu from "./components/Menu.js";
import CreateNew from "./components/CreateNew.js";
import {
  ToastProvider
} from "react-toast-notifications";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";


const INITIAL_ANECDOTES_LIST = [
  {
    content: 'If it hurts, do it more often',
    author: 'Jez Humble',
    info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
    votes: 0,
    id: '1'
  },
  {
    content: 'Premature optimization is the root of all evil',
    author: 'Donald Knuth',
    info: 'http://wiki.c2.com/?PrematureOptimization',
    votes: 0,
    id: '2'
  }
]



const App = () => {
  const [anecdotes, setAnecdotes] = useState(INITIAL_ANECDOTES_LIST)
  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <Router>
      <h1>Software anecdotes</h1>
      <ToastProvider autoDismissTimeout={10000} placement="top-center">
      <Menu />
      <Switch>
        <Route path="/anecdote/:id">
        <AnecdoteList anecdotes={anecdotes} />
        </Route>
        <Route path="/create">
          <CreateNew addNew={addNew} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <AnecdoteList anecdotes={anecdotes} />
        </Route>
      </Switch>
      </ToastProvider>
      <Footer />
    </Router>
  )
}

export default App;
