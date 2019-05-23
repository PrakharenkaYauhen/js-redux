import { connect } from 'react-redux'
import TrainingComponent from '../components/TrainingComponent'
import { actionAddNumber } from '../actions'

const mapStateToProps = (state) => {
    return {
        number: state.addNumber
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (number) => {
            dispatch(actionAddNumber(number))
        }
    }
}

const TrainingContainer = connect(mapStateToProps, mapDispatchToProps)(TrainingComponent)

export default TrainingContainer