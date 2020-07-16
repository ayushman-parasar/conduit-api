import React from "react";
import PropTypes from "prop-types";
class Hero extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-success container-fluid">
        <div className="container text-center ">
          <h4 className="display-4 font-weight-bold text-white">
            {this.props.title}
          </h4>
          <p className="lead font-weight-light text-white">
            A place to share knowledge
          </p>
          {/* {
                    this.props.currentUser && this.props.currentUser.username !== this.props.match.params.username ? (
                        this.state.visibleUser && this.props.currentUser.followingArr.includes(this.state.visibleUser)?
                        <button onClick={()=>this.props.followFunction(this.props.title)} style={{background:'rgb(40,167,69)',border:'1px solid white',borderRadius:'4px',color:'white'}}>UnFollow</button>:<button>Follow</button>
                    ):null
                } */}
        </div>
      </div>
    );
  }
}
// }

export default Hero;
