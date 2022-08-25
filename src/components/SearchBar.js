import React from "react";

class SearchBar extends React.Component {


    // initializing state
    state = {term: ''};

    onFormSubmit = event => {
        event.preventDefault();
       // this.props.onSubmitWhenUserSubmit(this.state.term);
       this.props.onSubmitTerm(this.state.term);

       // console.log(this.state.term);
    }

    //method onInputChange always named second worl uppercase and making sense to what  call
    /*onInputChange(event){
        console.log(event.target.value);
    }*/

    /** {this.state.term.length < 4 ? 'Password must be at least 4 characters' : ''} */

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label className="">Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value})}  
                        />
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;