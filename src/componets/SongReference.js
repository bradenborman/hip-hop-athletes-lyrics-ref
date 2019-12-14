import React, { Component } from 'react';


class SongReference extends Component {
  
    render() {
        return (
            <div className="song">
                <h2 className="title">{this.props.title}</h2>
                <p className="artist">- {this.props.artist}</p>  
                <p className="lyric">"{this.props.lyric}"</p>  
                <div className="athlete">{this.props.athlete}</div>  
            </div>
    )
}

}


export default SongReference;