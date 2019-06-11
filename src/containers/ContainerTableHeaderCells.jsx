import { connect } from 'react-redux'
import ComponentTableHeaderCells from '../components/ComponentTableHeaderCells'
import { actionFillCalendar } from '../actions'

const mapStateToProps = (state, props) => {
  const { currentDate, cells } = state.reducerCalendar;
  const content = props.content;

  return {
    currentDate,
    cells,
    content
  }
}

const mergeProps = (stateProps, dispatchProps) => {
  const { cells, content } = stateProps;
  let { currentDate } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    content,

    onClick: e => {
      console.log(e.target.textContent)
      let data = e.target.textContent;

      switch (data) {
        case 'left':
          currentDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth())
          break;
        case 'right':
          currentDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth())
          break;
        case 'l':
          currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
          break;
        default:
          currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
          break;
      }
      let action = {
        currentDate: currentDate,
        currentDayInTheCalendar: 1,
        cells: cells,
        modalCalendarVision: false,
        modalTextariaValue: '',
      }
      dispatch(actionFillCalendar(action))
    }
  }
}

const ContainerTableHeaderCells = connect(mapStateToProps, null, mergeProps)(ComponentTableHeaderCells)
// const ContainerTableHeaderCells = connect(mapStateToProps)(ComponentTableHeaderCells)


export default ContainerTableHeaderCells