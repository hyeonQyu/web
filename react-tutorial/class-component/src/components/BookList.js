import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core';

class BookList extends Component {
    render() {
        return (
            <List>
                <ListItem>Item01</ListItem>
                <ListItem>Item02</ListItem>
                <ListItem>Item03</ListItem>
            </List>
        );
    }
}

export default BookList;
