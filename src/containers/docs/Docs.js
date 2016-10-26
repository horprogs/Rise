import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {List, ListItem} from 'material-ui/List';
import Book from 'material-ui/svg-icons/action/book';
import Divider from 'material-ui/Divider';

class Docs extends Component {

    render() {
        const docs = this.props.docs;

        return (
            <div>
                <h1>Полезные статьи</h1>
                <List>
                    {
                        docs.map(el =>
                            <div>
                                <ListItem
                                    key={el.id}
                                    primaryText={el.title}
                                    href={el.url}
                                    target="_blank"
                                    leftIcon={<Book />}
                                />
                                <Divider />
                            </div>
                        )
                    }
                </List>
            </div>

        )
    }
}

const DocsContainer = connect(state => state.docs)(Docs);

export default DocsContainer;
