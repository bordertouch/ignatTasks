import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
    }

    const addUser = () => {
        if (name.trim().length > 2) {
            addUserCallback(name)
            alert(`Hello, ${name} !`) // need to fix
            setName('')
            setError('')
        } else {
            setError('Error occurred username must be 3 letters at least!')
            setName('')
        }
    }

    const addUserByKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name.trim().length >= 2) {
            addUserCallback(name)
            alert(`Hello, ${name} !`) // need to fix
            setName('')
            setError('')
        } else if (e.key === 'Enter' && name.trim().length < 2) {
            setError('Error occurred username must be 3 letters at least!')
            setName('')
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            addUserByKeyPress={addUserByKeyPress}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
