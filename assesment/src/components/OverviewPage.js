import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getBatches, addBatch} from '../actions/batches'
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'



class OverviewPage extends PureComponent {


    state = {
        edit: false
      }
    
      toggleEdit = () => {
        this.setState({
          edit: !this.state.edit
        })
      }

    componentWillMount(props) {
        this.props.getBatches(this.props.match.params.id)
    }

    createBatch = (batch) => {
        this.props.createBatch(batch)
        console.log('Created Batch')
      }


    render() {
         const {batches} = this.props
         console.log(batches)

        
         
        return (

      
            <Paper className="outer-paper">
            <h1>Overview of Batches</h1>
          
            <div>

            <button onClick={this.toggleEdit} className="new-batch-button">Create New Batch</button>
      
            
           
                <div className= "batches">
                <Link to={`/batches/${batches.id}`}><h2>Batch 
                {batches.batchId}</h2></Link>
                </div>


           </div>
            </Paper>
            
        )
        
    }
}


const mapStateToProps = (state) => ({
      batches: state.batches,
      //currentUser: state.currentUser,
      
    })

export default connect(mapStateToProps, {
    getBatches, addBatch})
    (OverviewPage)
