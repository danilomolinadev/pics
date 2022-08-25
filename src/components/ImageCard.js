import React from "react";

class ImageCard extends React.Component{

    constructor (props){
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);

        //accesing the references for this image
        //console.log(this.imagRef);

        //accessing each image height
       // console.log(this.imagRef.current.clientHeight);

       //add an event addEventListener to waith until the image is load
       
    }

    setSpans = () => {
        const height =  this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 );
 
        this.setState({spans: spans});
     }



    render(){

        const {description, urls} = this.props.image;

        return(
            <div style={{gridRowEnd: `${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular}  />
            </div>
        )
    }
}



export default ImageCard;