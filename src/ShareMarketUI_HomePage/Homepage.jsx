import { Link } from 'react-router-dom'
import './market.css'
import { useState } from 'react'
import Login_SignUpPages from './Login_SignUpPages'
import { useDisclosure } from '@chakra-ui/react'
const Homepage = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLogin, setIsLogin] = useState(false)
    const clickHandler = () => {
        setIsLogin(true)
        onClose();
    }
    return (
        <section className='overflow-hidden'>
            <article className='bg-dark p-2 header-bar'>
                <div className='row text-white my-2'>
                    <div className='col-md-9'>
                        Welcome Stocks
                    </div>
                    <div className='col-md-3'>
                        <div className='d-flex justify-content-evenly text-white text-end'>
                            <div className='col-md-2 me-2'>
                                <button className="btn border text-white" type='button' onClick={clickHandler}>Login</button>
                            </div>
                            <div className='col-md-2'>
                                <button className="btn border text-white" type='button' onClick={onOpen}>SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <>
                <div className="body-content">
                    <div className='d-flex justify-content-between'>
                        <div />
                        <div className='content-box text-white m-5'>
                            <h1 className='text-content'>
                                Screen stocks like a pro with 
                            </h1>
                            <h1 className='text-color'>sharpely Screener</h1>
                            <h4>Build almost any screen -
                                <span className='text-color'> Work with multiple timeframes...</span>
                            </h4>
                            <div className='mt-3'>
                                <button
                                    className='p-2  btn text-dark bg-white '
                                    type='button'
                                    onClick={onOpen}
                                >
                                    <b> Create your first screen for free --{">>"}</b>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='content-box-2 row'>
                    <div className='box-content m-auto col-md-6'>
                        <h1 className='fs-1'>Screen and backtest with
                            <span className='text-color'> Super Stock</span>  Screener
                        </h1>
                        <span>
                            With Super Screener, build almost any screen – fundamental, technical, or a mix of both.
                            You can work with multiple timeframes, view history, and backtest your screen.
                        </span>
                    </div>
                </div>
            </>
            <Login_SignUpPages
                open={isOpen}
                onClose={onClose}
                onOpen={onOpen}
                // ---------------FOR LOGIN 
                isLogin={isLogin}
                clickHandler={clickHandler}
                setIsLogin={setIsLogin}
            />
        </section>
    )
}

export default Homepage