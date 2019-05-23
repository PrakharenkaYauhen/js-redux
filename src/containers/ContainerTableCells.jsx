import { connect } from 'react-redux'
import { ComponentTableCells } from '../components/ComponentTableCells'
import { actionFillCalendar } from '../actions'

const mapStateToProps = (state, props) => {
    const { currentDate, currentDayInTheCalendar, cells, modalCalendarVision, modalTextariaValue } = state.reducerCalendar;
    const content = props.content,
        key = props.key,
        addStyle = props.addStyle || '';

    return {
        currentDate,
        currentDayInTheCalendar,
        cells, 
        modalCalendarVision, 
        modalTextariaValue,
        content,
        key,
        addStyle
    }
}

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         onClick: e => {
//             // console.log(e.target);
//             // console.log(e.target.classList.contains('todo__table__data_tasks'));
//             console.log(parseFloat(e.target.textContent));
//             // console.log(state);
//             if (!parseFloat(e.target.textContent)) return;
//             let currentDayInTheCalendar = +e.target.textContent;
//             let action = {
//                 // currentDate: state.reducerCalendar.currentDate,
//                 currentDayInTheCalendar: currentDayInTheCalendar,
//                 // cells: state.reducerCalendar.cells,
//             }
//             dispatch(actionFillCalendar(action))
//         }
//     }
// }

const mergeProps = (stateProps, dispatchProps) => {
    const { currentDate, currentDayInTheCalendar, cells, modalTextariaValue, content, key, addStyle } = stateProps;
    const { dispatch } = dispatchProps;

    return {
        content,
        key,
        addStyle,

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

// const ContainerTableCells = connect(mapStateToProps, mapDispatchToProps)(ComponentTableCells)
const ContainerTableCells = connect(mapStateToProps, null, mergeProps)(ComponentTableCells)

export default ContainerTableCells