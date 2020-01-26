import React, { Component } from 'react'
import Toolbar from '../Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'
import BackDrop from '../Backdrop/Backdrop'

export default class Layout extends Component {
    state={
        open: false
    }

    displaySidebar = () => (
        this.setState((prevstate) =>{
          return {open: !prevstate.open}
        })
    )

    backDropClick = () => (
        this.setState({open: false})
    )

    render() {
        let Sidedrawer;
        if (this.state.open)
        {
            Sidedrawer = <SideDrawer closeSide={this.backDropClick}/>
        }
        return (
            <React.Fragment>
                <Toolbar open={this.displaySidebar}/>
                    {Sidedrawer}
                    <div>
                        <BackDrop/>
                    </div>
                    <main>
                        {this.props.children}
                    </main>
            </React.Fragment>
        )
    }
}
