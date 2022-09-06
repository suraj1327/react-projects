import React, { Component } from 'react'
import Hobby from './Hobby'


export default class ClassDemo extends Component{    
    state={open:false,data:[],loading:false};

    static defaultProps = {
        books:[{
            name:"abc",
            author:"hij"
        }]
    }
    
    toggleStateValues(){
        this.setState(prevState=>({
           open: !prevState.open
        }))
    }

    componentDidMount(){
        this.state.loading=true;
        fetch('https://api.github.com/users')
        .then(res=>res.json())
        .then(res=>{
        this.setState({
            data:res,
            loading:false
        })
    })
    }

    componentDidUpdate(){
        console.log("Component is updated");
    }
    render(){
        return(
            <div>
              {this.state.loading?"Loading..": this.state.data.map(user=>{
                return <div className="userNames" key={user.id}>{user.login}</div>
               })}
              <button onClick={this.toggleStateValues}>ToggleState</button>
            </div>
           /*  this.props.hobbies.map(hobby=>{
                    return <Hobby key={hobby.name} name={hobby.likesTo}/>
                }) */
        )
    }
}
