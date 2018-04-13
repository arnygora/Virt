import React from 'react';
import {withRouter} from 'react-router-dom';
import {Route, Redirect} from 'react-router-dom';
import TopBar from "../modules/TopBar";
import LeftBar from "../modules/LeftBar";

const PrivateLayout = ({component: Component, ...rest}) => {

    return (
        <Route {...rest} render={matchProps => {
            if (JSON.parse(localStorage.getItem('check')) === true) {
                return (
                    <div className='container-fluid'>
                        <TopBar/>
                        <div className="row">
                            <div className="col-1">
                                <LeftBar/>
                            </div>
                            <div className="col-11">
                                <Component {...matchProps} />
                            </div>
                        </div>
                    </div>
                );
            }
            else {
                return  <Redirect to="./login" />
            }
        }}/>
    )
};

export default withRouter(PrivateLayout);