import React from 'react'
import './Form.scss'

const Form = () => {
    return (
        <div className="form-contianer">
            <div className="form">
                <div className="form-header">
                    <h1>Sign in</h1>
                </div>
                <div className="form-body">
                    <div className="form-input">
                        <label htmlFor="email">Enter email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="form-input">
                        <label htmlFor="password">Enter password</label>
                        <input type="password" id="password" />
                    </div>
                    <input type="submit" value="Sign in" className="form-submit" />
                </div>
            </div>
        </div>
    )
}

export default Form
