import React from 'react'

const UserSearch = (props) => {
    return (
        <>
         <form>
             <div className='form-group'>
                 <input
                    className='form-control'
                    onChange={props.handleInputChange}
                    value={props.value}
                    type='text'
                    placeholder='Search...'
                 />
                 <button 
                    className='btn'
                    type='submit'
                    onClick={props.handleFormSubmit}
                    >
                        Search
                 </button>    
             </div> 
        </form>   
            
        </>
    )
}

export default UserSearch
