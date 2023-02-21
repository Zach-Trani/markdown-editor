/**
 * Add Button Component is used to add new markdown sytax to the editor.
 *
 * @param {*} { title, content, handleClick }
 * @return {*} 
 */
const AddButton = ({ title, content, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick} className="btn btn-secondary">Add {title}</button>
    </div>
  );
};

export default AddButton;