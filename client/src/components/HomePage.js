import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewForm from './NewForm.js';
import styled from 'styled-components';
import axios from 'axios';

const PageStyle = styled.div`
    background: #33ccff;
    text-align: center;
    color: #333;
    padding: 5px;
`;
const QuestionList = styled.ul`
    list-style-type: none;
    margin: 0 auto;
`;
const ListItem = styled.li`
    background-color: #ffffcc;
    border: 1px solid #0000ff;
    padding: 10px;
    width: 50%;
    margin: 0 auto;
`;

class HomePage extends Component {
    state = {
        cards: [{}]
    };
    componentDidMount = () => {
        axios.get(`/cards`)
            .then(res => {
                this.setState({
                    cards: res.data
                });
            });
    }
    render() {
        return (
            <div>
                <PageStyle>
                    <h1>Musi-Cards!</h1>
                    <Link to="/new">Create New Card</Link>
                        <ul>
                            <QuestionList>
                                {this.state.cards.map((card) => (
                                    <li><ListItem>
                                        <Link to={`/${card._id}`}>{card.question}</Link>
                                        <br/>Skill Level {card.skillLevel}
                                    </ListItem></li>
                                ))}
                            </QuestionList>
                        </ul>
                    <p>Copyright 2019 Baxter Smith</p>
                </PageStyle>
            </div>
        );
    }
}

export default HomePage;