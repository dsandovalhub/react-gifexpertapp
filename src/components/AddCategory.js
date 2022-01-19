import React, {useState} from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); //undefined!

    const handleInputChange = (e) =>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handletSubmit = (e) =>{
        e.preventDefault();
       // console.log('Submit hecho!'); 
       
       if (inputValue.trim().length > 2) {
           setCategories(cats => [inputValue, ...cats ]);
           setInputValue('');
           
       }
       

    }

    return (
        <form onSubmit={handletSubmit}>            
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            
        </form>
    )
}

AddCategory.protoType = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
