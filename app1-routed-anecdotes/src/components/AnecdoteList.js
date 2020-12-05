import React from "react";
import {
    Link,
    useRouteMatch
} from "react-router-dom";
import Anecdote from "./Anecdote";

const AnecdoteList = ({ anecdotes }) => {
    const anecdotePathMatch = useRouteMatch("/anecdote/:id");
    const anecdote = anecdotePathMatch ? (anecdotes.find((obj) => obj.id===anecdotePathMatch.params.id) || { notFound: true }) : null;

    return anecdote ? (<>
        <Anecdote anecdote={anecdote} />
    </>) : (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote => (<li><Link key={anecdote.id} exact to={`/anecdote/${anecdote.id}`}>{anecdote.content}</Link></li>))}
      </ul>
    </div>
  )
}

export default AnecdoteList;