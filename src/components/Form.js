
export default function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask('Oh what a beautiful morning!')
  }
  
    return (
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What did I accomplish?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>

    )
}

