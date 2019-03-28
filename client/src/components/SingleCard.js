import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const PageStyle = styled.div`
    background: #33ccff;
    text-align: center;
    color: #333;
    padding: 5px;
`;
const CardStyle = styled.div`
    background-color: #ffffcc;
    border: 1px solid #0000ff;
    padding: 10px;
    width: 50%;
    margin: 0 auto;
`;

class SingleCard extends Component {
    state = {
        card: {}
    };
    componentDidMount = () => {
        axios.get(`/${this.props.match.params.cardId}`)
            .then(res => {
                this.setState({
                    card: res.data
                });
            });
    }
    render() {
        return (
            <div>
                <PageStyle>
                    <h1>Musi-Cards!</h1>
                    <div>
                        <CardStyle>
                            <p>Skill Level: {this.state.card.skillLevel}</p>
                            <p>Category: {this.state.card.category}</p>
                            <p>Question: {this.state.card.question}</p>
                            <p>Answer: {this.state.card.answer}</p>
                        </CardStyle>
                    </div>
                    <a href={`/${this.state.card._id}/edit`}>Edit Card</a>
                    <form action={`/${this.state.card._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete Card"/>
                    </form>
                    <Link to="/">Back to Home</Link>
                    <p>Copyright 2019 Baxter Smith</p>
                </PageStyle>
            </div>
        );
    }
}

export default SingleCard;