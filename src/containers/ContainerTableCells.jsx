import { connect } from 'react-redux'
import { ComponentTableCells } from '../components/ComponentTableCells'
import { actionFillCalendar } from '../actions'

const mapStateToProps = (state, props) => {
    const {
        currentDate,
        currentDayInTheCalendar,
        cells,
        modalCalendarVision,
        modalTextariaValue,
        weatherObject
    } = state.reducerCalendar;

    const content = props.content,
        key = props.key,
        game = props.game,
        addStyle = props.addStyle || '';

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;

    return {
        currentDate,
        currentDayInTheCalendar,
        cells,
        modalCalendarVision,
        modalTextariaValue,
        weatherObject,
        content,
        key,
        game,
        addStyle,
        currentLocalStorageKey,
    }
}

const mergeProps = (stateProps, dispatchProps) => {
    const {
        currentDate,
        currentDayInTheCalendar,
        cells,
        modalTextariaValue,
        weatherObject,
        content,
        key,
        addStyle,
        game,
    } = stateProps;

    const { dispatch } = dispatchProps;

    return {
        currentDate,
        content,
        key,
        addStyle,
        game,
        weatherObject,

        onClick: e => {
            if (!parseFloat(e.target.textContent)) return;
            let currentDayInTheCalendar = +e.target.textContent;
            let action = {
                currentDate: currentDate,
                currentDayInTheCalendar: currentDayInTheCalendar,
                cells: cells,
                modalCalendarVision: false,
                modalTextariaValue: '',
            }
            dispatch(actionFillCalendar(action))
        },

        onDoubleClick: e => {
            if (!parseFloat(e.target.textContent)) return;
            let action = {
                currentDate: currentDate,
                currentDayInTheCalendar: currentDayInTheCalendar,
                cells: cells,
                modalCalendarVision: true,
                modalTextariaValue: modalTextariaValue,
            }
            dispatch(actionFillCalendar(action))
        }
    }
}

const ContainerTableCells = connect(mapStateToProps, null, mergeProps)(ComponentTableCells)

export default ContainerTableCells