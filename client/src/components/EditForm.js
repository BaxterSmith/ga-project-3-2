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

class EditForm extends Component {
    state = {
        formData: {
            skillLevel: '',
            category: '',
            question: '',
            answer: '',
            name: '',
            age: ''
        },
        card: {},
        redirectToCard: false
    };
    componentDidMount = () => {
        axios.get(`/${this.props.match.params.cardId}`)
            .then(res => {
                this.setState({
                    formData: res.data
                });
            });
    }
    handleChange = (evt) => {
        const clonedFormData = {...this.state.formData}
        clonedFormData[evt.target.name] = evt.target.value
        this.setState({formData: clonedFormData});
    }
    handleSubmit = async (evt) => {
        evt.preventDefault();
        await axios.put(`/${this.state.formData._id}`, this.state.formData);
        this.setState({redirectToCard: true});
    }
    render() {
        if (this.state.redirectToCard) {
            return (<Redirect to={`/${this.state.formData._id}`}/>)
        }
        return (
            <div>
                <PageStyle>
                <h1>Musi-Cards!</h1>
                <h2>Edit Flash Card</h2>
                <form onSubmit={this.handleSubmit}>
                   <div>
                       <label for="skillLevel">Skill Level</label>
                       <input type="text" name="skillLevel" id="skillLevel" value={this.state.formData.skillLevel} onChange={this.handleChange}/>
                   </div>
                   <div>
                       <label for="category">Category</label>
                       <input type="text" name="category" id="category" value={this.state.formData.category} onChange={this.handleChange}/>
                   </div>
                   <div>
                       <label for="question">Question</label>
                       <textarea rows="10" cols="30" name="question" id="question" value={this.state.formData.question} onChange={this.handleChange}></textarea>
                   </div>
                   <div>
                       <label for="answer">Answer</label>
                       <input type="text" name="answer" id="answer" value={this.state.formData.answer} onChange={this.handleChange}/>
                   </div>
                   <input type="submit" value="Update Card"/>
               </form>
               <Link to="/">Back to Home</Link>
               <p>Copyright 2019 Baxter Smith</p>
               </PageStyle>
            </div>
        );
    }
}

export default EditForm;