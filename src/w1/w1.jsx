import { render } from 'preact'
import { useState } from 'preact/hooks'
import 'virtual:windi.css';
import './w1.css'

function Icon({ fa }) {
    return (
        <a href="#" class="border border-zinc-200 rounded-full
            inline-flex justify-center items-center
            w-10 h-10 mx-1
        ">
            <i class={`fab fa-${fa}`}></i>
        </a>
    );
}

function Form({ children, class: className }) {
    return (
        <form action="#" onSubmit={ev => ev.preventDefault()} class={`
            px-12 h-full
            flex flex-col justify-center items-center
            transition-transform duration-600
            ${className}
        `}>
            {children}
        </form>
    );
}

function App() {
    const [view, setView] = useState('sign-in');
    const isSignIn = view == 'sign-in';

    globalThis.setView = setView;  /* <- debug only */
    console.log('view', view);

    return (
        <div id="container" class="bg-white
            rounded-xl min-h-[480px] w-3xl shadow-xl
            overflow-hidden relative
        ">
            <div class="absolute w-1/2 h-full transform translate-x-full overflow-hidden">
                {/* sign up */}
                <Form class={isSignIn ? `transform -translate-x-full` : ''}>
                    <h1>Create Account</h1>
                    <div class="my-5">
                        <Icon fa="facebook-f" />
                        <Icon fa="google-plus-g" />
                        <Icon fa="linkedin-in" />
                    </div>
                    <span class="text-xs">or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </Form>
            </div>
            <div class="absolute w-1/2 h-full overflow-hidden">
                {/* sign in */}
                <Form class={!isSignIn ? `transform translate-x-full` : ''}>
                    <h1>Sign in</h1>
                    <div class="my-5">
                        <Icon fa="facebook-f" />
                        <Icon fa="google-plus-g" />
                        <Icon fa="linkedin-in" />
                    </div>
                    <span class="text-xs">or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#" class="text-dark-200 text-sm my-4">Forgot your password?</a>
                    <button>Sign In</button>
                </Form>
            </div>
            <div class={`absolute w-1/2 h-full overflow-hidden left-1/2 text-center
                transition-transform duration-600
                ${!isSignIn ? `transform -translate-x-full` : ''}
            `}>
                {/* overlay */}
                <div class={`relative -left-full h-full w-[200%]
                    bg-gradient-to-r from-[#FF4B2B] to-[#FF416C]
                    text-white
                    transition-transform duration-600
                    ${!isSignIn ? `transform translate-x-1/2` : ''}
                `}>
                    {/*
                    bg-gradient-to-r from-orange-600 to-red-400 */}
                    <div class={`absolute w-1/2 h-full px-10
                        flex flex-col justify-center items-center
                        transition-transform duration-600
                        ${isSignIn ? `transform translate-x-[-20%]` : ''}
                    `}>
                        {/* left */}
                        <h1>Welcome Back!</h1>
                        <p class="mt-5 mb-7">
                            To keep connected with us please login with your personal info
                        </p>
                        <button onClick={ev => setView('sign-in')} class="
                            bg-transparent border border-white
                        ">Sign In</button>
                    </div>
                    <div class={`absolute w-1/2 h-full px-10 right-0
                        flex flex-col justify-center items-center
                        transition-transform duration-600
                        ${!isSignIn ? `transform translate-x-[20%]` : ''}
                    `}>
                        {/* right */}
                        <h1>Hello, Friend!</h1>
                        <p class="mt-5 mb-7 text-sm">
                            Enter your personal details and start journey with us
                        </p>
                        <button onClick={ev => setView('sign-up')} class="
                            bg-transparent border border-white
                        ">Sign Up</button>
                    </div>
                </div>
                overlay
            </div>
        </div>
    );
}

render(<App />, document.getElementById('app'));
