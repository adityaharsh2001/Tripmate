import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {
    toast
} from 'react-hot-toast'

const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [repeatPassword, setRepeatPassword] = React.useState('')
    const [name, setName] = React.useState('')
    const [sent, setSent] = React.useState(false)
    useEffect(() => {
        console.log('Register', email, password, repeatPassword)
    }, [email, password, repeatPassword])
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (password !== repeatPassword)
                return alert('Passwords do not match')
            await axios.post('http://localhost:9000/v1/auth/register', {
                name: name,
                email: email,
                password: password
            })
            toast.success('Account created successfully')
            await axios.post('http://localhost:9000/v1/auth/verify-email', {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            })
            toast('Email verification sent to your email', {
                icon: '📧'
            })
            setSent(true)
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }
    return (
        <section className="bg-gray-50 w-full dark:bg-gray-900 h-screen flex items-center justify-center">
            {sent && <div className={'w-full flex bg-white absolute justify-center items-center gap-10 top-0 left-0'}>
                <span className={'tex-sm text-gray-500 dark:text-gray-400'}>We have sent you an email verification link.
                    Please verify your email to continue</span>
                <div className={'flex items-center justify-center'}>
                    <span className={'text-sm text-gray-500 dark:text-gray-400'}>Didn't receive the email?</span>
                    <button className={'text-sm text-blue-600 dark:text-blue-500'}>Resend</button>
                </div>
            </div>}
            <form className="w-full dark:bg-gray-900 w-full max-w-sm">
                <div className="mb-5">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Register new account
                    </h1>
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        name</label>
                    <input type="text" id="name"
                           onChange={(e) => setName(e.target.value)}
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           placeholder="John Doe" required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        email</label>
                    <input type="email" id="email"
                           onChange={(e) => setEmail(e.target.value)}
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           placeholder="name@flowbite.com" required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        password</label>
                    <input type="password" id="password"
                           onChange={(e) => setPassword(e.target.value)}
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat
                        password</label>
                    <input type="password" id="repeat-password"
                           onChange={(e) => setRepeatPassword(e.target.value)}
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           required/>
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value=""
                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                               required/>
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree
                        with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and
                            conditions</a></label>
                </div>
                <button type="button" onClick={handleSubmit}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register
                    new account
                </button>
            </form>
        </section>
    )
}
export default Register
