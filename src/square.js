import React,{Component} from 'react'

class Square extends Component{
    constructor(props){
        super(props)
        this.styling={
            width:'150px',
            height:'150px',
            fontSize:'100px',
        }
        this.button_style={
            fontSize:'70px',
            width:'150px',
            height:'150px',
            background:'white'}
        this.row=this.props.row
        this.column=this.props.column
    }
 //   set_symbol(symbol){
   //     if (this.props.place_x==true){
     //       this.setState({
       //         status:'X'
         //   })
     //   }
       // else{
         //   this.setState({
           //     status:'O'
           // })
       // } 
    //}
    render(){
        const row=this.props.row
        const column=this.props.column
        if (this.props.status==null){
            return (
            
            <button onClick={()=>this.props.turn_change(row,column)} style={this.button_style}><div>
            <br></br>
            </div></button>
            
            )
        }
        else{
            return (
                <button style={this.button_style}><div>
                    {this.props.status} 
                </div></button>
            )
        }
    }
}

export default Square