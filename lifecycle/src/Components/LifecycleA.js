import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifecycleA extends Component {
    constructor(props) {
        super();

        this.state = {
            name: 'Name'
        }

        console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>LifecycleA</div>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifecycleA;