import React, { Fragment } from 'react'
import './Modal.scss'

const Modal = () => {
    return (
        <Fragment>
            <div className="page">
                <input type="checkbox" id="checker" />
                <label htmlFor="checker">
                    <a className="opener">Open modal</a>
                </label>
                <div className="modal-container">
                    <h1 className="modal-header">Agree our policy</h1>
                    <div className="modal-body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore amet impedit officiis repellendus est, mollitia incidunt laudantium aperiam, praesentium reprehenderit molestiae eum eveniet quisquam quidem commodi sit nihil non?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore amet impedit officiis repellendus est, mollitia incidunt laudantium aperiam, praesentium reprehenderit molestiae eum eveniet quisquam quidem commodi sit nihil non?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore amet impedit officiis repellendus est, mollitia incidunt laudantium aperiam, praesentium reprehenderit molestiae eum eveniet quisquam quidem commodi sit nihil non?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore amet impedit officiis repellendus est, mollitia incidunt laudantium aperiam, praesentium reprehenderit molestiae eum eveniet quisquam quidem commodi sit nihil non?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore amet impedit officiis repellendus est, mollitia incidunt laudantium aperiam, praesentium reprehenderit molestiae eum eveniet quisquam quidem commodi sit nihil non?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore amet impedit officiis repellendus est, mollitia incidunt laudantium aperiam, praesentium reprehenderit molestiae eum eveniet quisquam quidem commodi sit nihil non?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore amet impedit officiis repellendus est, mollitia incidunt laudantium aperiam, praesentium reprehenderit molestiae eum eveniet quisquam quidem commodi sit nihil non?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempore amet impedit officiis repellendus est, mollitia incidunt laudantium aperiam, praesentium reprehenderit molestiae eum eveniet quisquam quidem commodi sit nihil non?
                        </p>
                    </div>
                    <div className="modal-actions">
                        <label htmlFor="checker">
                            <a>agree & close</a>
                        </label>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>

        </Fragment>
    )
}

export default Modal
