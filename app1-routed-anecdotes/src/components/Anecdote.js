import React from "react";


const Anecdote = ({anecdote}) => {

    return !anecdote.notFound ? (<div>
        <h3>{anecdote.content} by {anecdote.author}</h3>
    <p>has {anecdote.votes} votes</p>
    <p>for more info, click <a href={anecdote.info}>here</a></p>
    </div>) : (<div>Anecdote not found</div>);
}


export default Anecdote