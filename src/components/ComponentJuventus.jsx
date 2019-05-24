import React from 'react';
import PropTypes from 'prop-types'

// ComponentJuventus

class ComponentJuventus extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        console.log( this.props);
        const { juventusObject, juventusIsLoaded, juventusError } = this.props;
        console.log(juventusObject);

        if (!juventusObject) {
            return <h2 class='juventus__header'>Information about FC Juventus</h2>
        } else {
            return <>
                <h2 class='juventus__header'>Information about FC Juventus</h2>
                <div class='juventus'>
                    <select name="" id="team-select">
                        <option value="juventus">Juventus</option>
                        <option value="ajax">Ajax</option>
                        <option value="arsenal">Arsenal</option>
                        <option value="cska">CSKA</option>
                    </select>
                    <div class='juventus__content'>
                        <div class='juventus__team'>
                            <h3 class='juventus__header3'>Team: {juventusObject[0].teams[0].strTeam}</h3>
                            <img class='juventus__badge' src={juventusObject[0].teams[0].strTeamBadge} />
                            <img class='juventus__logo' src={juventusObject[0].teams[0].strTeamLogo} />
                            <img class='juventus__jersey' src={juventusObject[0].teams[0].strTeamJersey} />
                            <p class='juventus__paragraph'>Location: {juventusObject[0].teams[0].strStadiumLocation}</p>
                            <p class='juventus__paragraph'>Tornament: {juventusObject[0].teams[0].strLeague}</p>
                            <p class='juventus__paragraph'>Manager: {juventusObject[0].teams[0].strManager}</p>
                        </div>

                        <div class='juventus__stadium'>
                            <div class='juventus__stadium'>
                                <h3 class='juventus__header3'>Stadium: {juventusObject[0].teams[0].strStadium}</h3>
                                <img class='juventus__stadium-photo' src={juventusObject[0].teams[0].strStadiumThumb} />
                                <p class='juventus__paragraph'>Location: {juventusObject[0].teams[0].strStadiumLocation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }

    }

}

export { ComponentJuventus };