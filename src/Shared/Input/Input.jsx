import React from 'react';

const Input = (props) =>{
    return(
        <>      
            <input id={props.id} 
            className = {props.className}
            type={props.type} 
            name={props.name} 
            placeholder= {props.placeholder}
            value={props.value} 
            checked={props.checked} 
            onChange={props.onChange}
            />                  
        </>
    );
}

export default Input;

// // 1. Make a shallow copy of the items
// let items = [...this.state.items];
// // 2. Make a shallow copy of the item you want to mutate
// let item = {...items[1]};
// // 3. Replace the property you're intested in
// item.name = 'newName';
// // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
// items[1] = item;
// // 5. Set the state to our new copy
// this.setState({items});