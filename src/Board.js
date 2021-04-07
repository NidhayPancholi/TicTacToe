import React,{Component} from 'react'
import Square from './square'
class Board extends Component{
    constructor(){
        super()
        this.state={
            turn_x:true,
            game:[[null,null,null],[null,null,null],[null,null,null]],
            winner:null
        }
        this.row_style={
            width:'450px',
            height:'150px'
        }
        this.change_turn=this.change_turn.bind(this)
    }
    change_turn(row,col){
        if (this.state.turn_x==true){
            const g=this.state.game
            g[row][col]='X'
            this.setState({
                turn_x:false,
                game:g
            })
        }
        else{
            const g=this.state.game
            g[row][col]='O'
            this.setState({
                turn_x:true,
                game:g
            })
        }
        for(var i=0;i<3;i++){
            if(this.state.game[i][0]==this.state.game[i][1] && this.state.game[i][1]==this.state.game[i][2] && this.state.game[i][0]!=null){
            this.setState({
                winner:this.state.game[i][0]
                })   
            }
        }
        for(var i=0;i<3;i++){
            if(this.state.game[0][i]==this.state.game[1][i] && this.state.game[1][i]==this.state.game[2][i] && this.state.game[0][i]!=null){
            this.setState({
                winner:this.state.game[0][i]
                })   
            }
        }
        console.log(this.state.game)
        if (this.state.game[1][1]==this.state.game[2][2] && this.state.game[0][0]==this.state.game[1][1] ){
            this.setState({
                winner:this.state.game[0][0]
                })
                
        }
        if (this.state.game[0][2]==this.state.game[1][1] && this.state.game[0][2]==this.state.game[2][0] ){
            this.setState({
                winner:this.state.game[0][2]
                })
                
        }
       console.log(this.state.winner)  
           
    }
    render(){
        if (this.state.turn_x==true){
            const place_x=true
        }
        else{
            const place_x=false
        }
        if (this.state.winner!=null){
            return (
                <h1>Winner : {this.state.winner}</h1>
            )
        }
        return (
            <div>
            <div >
            <Square place_x={this.state.turn_x} turn_change={this.change_turn} row='0' column='0' status={this.state.game[0][0]}></Square>
            <Square place_x={this.state.turn_x} turn_change={this.change_turn} row='0' column='1' status={this.state.game[0][1]}></Square>
            <Square place_x={this.state.turn_x} turn_change={this.change_turn} row='0' column='2' status={this.state.game[0][2]}></Square>
            </div>
            <div >
            <Square place_x={this.state.turn_x} turn_change={this.change_turn} row='1' column='0' status={this.state.game[1][0]}></Square>
            <Square place_x={this.state.turn_x} turn_change={this.change_turn} row='1' column='1' status={this.state.game[1][1]}></Square>
            <Square place_x={this.state.turn_x} turn_change={this.change_turn} row='1' column='2' status={this.state.game[1][2]}></Square>
            </div>
            <div >
            <Square place_x={this.state.turn_x} turn_change={this.change_turn} row='2' column='0' status={this.state.game[2][0]}></Square>
            <Square place_x={this.state.turn_x} turn_change={this.change_turn} row='2' column='1' status={this.state.game[2][1]}></Square>
            <Square place_x={this.state.turn_x} turn_change={this.change_turn} row='2' column='2' status={this.state.game[2][2]}></Square>
            </div>
            </div>
        )
    }

}

export default Board