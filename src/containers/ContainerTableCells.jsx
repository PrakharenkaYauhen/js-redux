import { connect } from 'react-redux'
import { ComponentTableCells } from '../components/ComponentTableCells'
import { actionFillCalendar } from '../actions'
// import TrainingComponent from '../components/TrainingComponent'
// import { actionAddNumber } from '../actions'

const mapStateToProps = (state, props) => {
    const { currentDate, cells } = state.reducerCalendar;
    const content = props.content,
        key = props.key,
        addStyle = props.addStyle || '';

    return {
        currentDate,
        cells,
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
    const { currentDate, cells, content, key, addStyle } = stateProps;
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
            }
            dispatch(actionFillCalendar(action))
        }
    }
}

// const ContainerTableCells = connect(mapStateToProps, mapDispatchToProps)(ComponentTableCells)
const ContainerTableCells = connect(mapStateToProps, null, mergeProps)(ComponentTableCells)
// const ContainerTableCells = connect(mapStateToProps)(ComponentTableCells)

export default ContainerTableCells