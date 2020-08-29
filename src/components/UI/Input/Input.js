import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {

    let inputElememnt = null;
    let inputClasses = [classes.InputElement]

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid)
    }

    switch (props.elementtype){
        case ('input'):
            inputElememnt = <input
                                className={inputClasses.join(' ')}
                                value={props.value}
                                {...props.elementconfig}
                                onChange={props.changed}
                            />
            break;
        case ('textarea'):
            inputElememnt = <textarea
                                    className={inputClasses.join(' ')}
                                    value={props.value}
                                    {...props.elementconfig}
                                    onChange={props.changed}
                            />
            break;
        case ('select'):
            inputElememnt = (
                            <select
                                className={inputClasses.join(' ')}
                                value={props.value}
                                onChange={props.changed}>
                                {props.elementconfig.options.map(option => (
                                    <option
                                        key={option.value}
                                        value={option.value}>
                                        {option.displayValue}
                                    </option>
                                ))}
                            </select>
            )
            break;
        default:
            inputElememnt = <input className={inputClasses.join(' ')} {...props}/>
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElememnt}
        </div>
    );
};

export default Input;