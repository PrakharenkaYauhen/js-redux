import { connect } from 'react-redux'
import { ComponentTableCells } from '../components/ComponentTableCells'
import { actionChangeDay } from '../actions'
import { actionCalendarModal } from '../actions'

const mapStateToProps = (state, props) => {
    const {
        currentDate,
        weatherObject
    } = state.reducerCalendar;

    const content = props.content,
        // key = props.key,
        game = props.game,
        addStyle = props.addStyle || '';

    return {
        currentDate,
        weatherObject,
        content,
        game,
        addStyle,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: e => {
            if (!parseFloat(e.target.textContent)) return;
            let currentDayInTheCalendar = +e.target.textContent;
            let action = {
                currentDayInTheCalendar: currentDayInTheCalendar,
            }
            dispatch(actionChangeDay(action))
        },

        onDoubleClick: e => {
            if (!parseFloat(e.target.textContent)) return;
            let action = {
                modalCalendarVision: true,
                modalTextariaValue: '',
            }
            dispatch(actionCalendarModal(action))
        }
    }
}

const ContainerTableCells = connect(mapStateToProps, mapDispatchToProps)(ComponentTableCells)

export default ContainerTableCells