import React,{
    useState
} from "react";
import {
  useToasts
} from "react-toast-notifications";
import {
  useHistory
} from "react-router-dom";
import {
  useField
} from "../hooks";


const CreateNew = (props) => {
    // const [content, setContent] = useState('')
    const content = useField("text");
    const author = useField("text");
    const info = useField("text");

    const history = useHistory();
    const {addToast} = useToasts();
  
    const handleSubmit = (e) => {
      e.preventDefault()

      props.addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })

      addToast(`Anecdote "${content.value}" added`,{
        autoDismiss: true,
        appearance: "success"
      })

      history.push("/");

    }

    const resetAll = (e) => {
      e.preventDefault();
      //7.6 already completed
      content.reset();
      author.reset();
      info.reset();
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input name='content' value={content.value} onChange={content.onChange} />
          </div>
          <div>
            author
            <input name='author' value={author.value} onChange={author.onChange} />
          </div>
          <div>
            url for more info
            <input name='info' value={info.value} onChange={info.onChange} />
          </div>
          <button>create</button>
          <button onClick={resetAll}>reset</button>
        </form>
      </div>
    )
  
  }

export default CreateNew;