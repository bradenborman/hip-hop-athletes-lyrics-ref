import React, { Component } from 'react';
import './Songs.scss';

class SongReference extends Component {
    
    render() {
        return (
            <div className="song" style={
                {
                    width: this.props.width,
                    marginLeft: this.props.margin,
                    marginTop: this.props.margin,
                    minHeight: this.props.height
                }
            }>
                <h2 className="title">{this.props.title}</h2>
                <p className="artist">- {this.props.artist}</p>  
                <p className="lyric">"{this.props.lyric}"</p>  
                <div className="athlete">{this.props.athlete}</div>  
            </div>
        )
        
}

}


export default SongReference;