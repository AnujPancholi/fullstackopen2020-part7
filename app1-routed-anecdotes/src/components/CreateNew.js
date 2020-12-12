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
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState('')

    const history = useHistory();
    const {addToast} = useToasts();
  
    const handleSubmit = (e) => {
      e.preventDefault()

      props.addNew({
        content: content.value,
        author,
        info,
        votes: 0
      })

      addToast(`Anecdote "${content.value}" added`,{
        autoDismiss: true,
        appearance: "success"
      })

      history.push("/");

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
            <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div>
            url for more info
            <input name='info' value={info} onChange={(e)=> setInfo(e.target.value)} />
          </div>
          <button>create</button>
        </form>
      </div>
    )
  
  }

export default CreateNew;