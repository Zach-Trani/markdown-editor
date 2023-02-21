const AddButton = ({title, content, handleClick}) => {
    
    return(
        <div>
            <button
            onClick={handleClick}
            >Add {title}</button>
        </div>
    );
};

export default AddButton;