import React from 'react';
import {TextField, IconButton} from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search';

import './search.css'


class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }

    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        const baseStyles = {
            open: {
                width: 200,
            },
            closed: {
                width: 0,
            },
            smallIcon: {
                width: 30,
                height: 30
            },
            icon: {
                width: 40,
                height: 40,
                padding: 5,
                top: 10
            },
        };

        const textStyle = this.state.isOpen ? baseStyles.open : baseStyles.closed;
        const divStyle = Object.assign({}, textStyle);
        divStyle.width += baseStyles.icon.width + 10;
        return (
            <div style={divStyle}>
                <IconButton iconStyle={baseStyles.smallIcon} style={baseStyles.icon} onClick={this.handleClick}>
                    <SearchIcon/>
                </IconButton>
                <TextField className='White' name='search' style={textStyle}/>
            </div>
        );
    }
}


export default SearchBox;