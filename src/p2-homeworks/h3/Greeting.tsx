import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    addUserByKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, addUserByKeyPress, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.submit // need to fix with (?:)
    const errorMessage = s.errorMessage

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={addUserByKeyPress} className={inputClass}/>
            <span className={errorMessage}>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
