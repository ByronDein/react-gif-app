import { useState } from 'react'

const AddCategory = ({ onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onsubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) {
                return;
        }
        // props.setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
}

    return (
        <form  onSubmit={ onsubmit}>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange}
            />  
        </form>

    )
}

export default AddCategory