import React from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

class App extends React.Component {

    

    /** ONE WAY TO DO THIS NOT PERFECT

    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers:{
                Authorization: 'Client-ID p5aANboX_y4OdI8KZOvAo2IdY5DXBkkUaLPWGWACxNg'
            }
        }).then(response => {
            console.log(response.data.results);
        })
    }
*/



/** ONE WAY TO DO THIS with async 
async onSearchSubmit(term){
  const response = await  axios.get('https://api.unsplash.com/search/photos', {
        params: {query: term},
        headers:{
            Authorization: 'Client-ID p5aANboX_y4OdI8KZOvAo2IdY5DXBkkUaLPWGWACxNg'
        }
    })
    console.log(response.data.results);
}
*/



/* repair to avoid the this. error 
onSearchSubmit = async  (term) => {
    const response = await  axios.get('https://api.unsplash.com/search/photos', {
          params: {query: term},
          headers:{
              Authorization: 'Client-ID p5aANboX_y4OdI8KZOvAo2IdY5DXBkkUaLPWGWACxNg'
          }
      })
      this.setState({ images: response.data.results});
  }
*/

state = { images: [] };

onSearchSubmit = async (term) =>{
    //console.log(term);
    const response = await  unsplash.get("/search/photos", {
        params: {query: term},
    });

    //console.log(response.data.results);
    this.setState({ images: response.data.results });
}

    render(){
        return(
            <div className='ui container' style={{ marginTop: '10px'}}>
                <SearchBar onSubmitTerm={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>         
        )
    }
}

export default App;