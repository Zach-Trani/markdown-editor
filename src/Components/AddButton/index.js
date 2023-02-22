/**
 * Add Button Component is used to add new markdown sytax to the editor.
 *
 * @param {*} { title, content, handleClick }
 * @return {*} 
 */
const AddButton = ({ title, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>Add {title}</button>
    </div>
  );
};

export default AddButton;
