// ContainerJuventusModal

import { connect } from 'react-redux'
import { ComponentJuventusModal } from '../components/ComponentJuventusModal'
import { actionJuventusStuffModal } from '../actions'

const mapStateToProps = (state) => {
    const {
        juventusStuffObject,
        juventusStuffIsLoaded,
        juventusStuffModal 
    } = state.reducerCalendar;

    return {
        juventusStuffObject,
        juventusStuffIsLoaded,
        juventusStuffModal,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickStuff: () => {
            let action = {
                juventusStuffModal: false,
            }
            dispatch(actionJuventusStuffModal(action))
        },
    }
}

const ContainerJuventusModal = connect(mapStateToProps, mapDispatchToProps)(ComponentJuventusModal);

export { ContainerJuventusModal }