// ContainerJuventusButtonStuff

import { connect } from 'react-redux'
import ComponentJuventusButtonStuff from '../components/ComponentJuventusButtonStuff'
import { actionJuventusStuffModal } from '../actions'

const mapStateToProps = (state) => {
    const {
        juventusStuffIsLoaded,
    } = state.reducerCalendar;

    return {
        juventusStuffIsLoaded,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickStuff: (juventusStuffIsLoaded) => {
            if (!juventusStuffIsLoaded) return;
            let action = {
                juventusStuffModal: true,
            }
            dispatch(actionJuventusStuffModal(action))
        },
    }
}

const ContainerJuventusButtonStuff = connect(mapStateToProps, mapDispatchToProps)(ComponentJuventusButtonStuff);

export { ContainerJuventusButtonStuff }