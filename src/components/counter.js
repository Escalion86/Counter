import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, reset, rnd}) => {
    return (
        <div className="background">
            <div className="counter-block">
                <h1 id="counter" className="counter">{counter}</h1>
            </div>
            <div className="blocks">
                <div onClick={inc} id="inc" className="block plus-block">
                    <img src="img/Plus.svg" alt="plus" width="40px" height="40px" />
                </div>
                <div onClick={dec} id="dec" className="block minus-block">
                    <img src="img/Minus.svg" alt="minus" width="40px" height="40px" />
                </div>
                <div onClick={reset} id="reset" className="block reset-block">
                    <img src="img/Reset.svg" alt="reset" width="40px" height="40px" />
                </div>
                <div onClick={rnd} id="rnd" className="block reset-block">
                    <img src="img/Rnd.svg" alt="rnd" width="40px" height="40px" />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);