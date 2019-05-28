// ContainerAddTaskToList

import { connect } from 'react-redux'
import { ComponentAddTaskToList } from '../components/ComponentAddTaskToList'
import { actionToggleAddTaskModal } from '../actions'

const mapStateToProps = (state) => {
    const {
        modalCalendarVision
    } = state.reducerCalendar;

    return {
        modalCalendarVision
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleModal: modalCalendarVision => {
            let action = {
                modalCalendarVision: modalCalendarVision ? false : true,
                modalTextariaValue: '',
            }
            dispatch(actionToggleAddTaskModal(action))
        }
    }
}

const ContainerAddTaskToList = connect(mapStateToProps, mapDispatchToProps)(ComponentAddTaskToList);

export { ContainerAddTaskToList }