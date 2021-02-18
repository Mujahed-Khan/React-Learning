import React, { Component } from "react"
import PropsChild from './PropsChild'
class PropsParent extends Component {
    render() {
        return (
            <div>
                <PropsChild />
            </div>

        );
    }
}
export default PropsParent;