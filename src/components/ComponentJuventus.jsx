// ComponentJuventus

import React from 'react';
import PropTypes from 'prop-types'
import { ContainerJuventusModal } from '../containers/ContainerJuventusModal'
import { ContainerJuventusButtonStuff } from '../containers/ContainerJuventusButtonStuff'

class ComponentJuventus extends React.Component {

    componentDidMount() {
        this.props.fetchData(this.props.clubName);
        this.props.fetchTeamsStuff(this.props.clubName);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.clubName !== this.props.clubName) {
            this.props.fetchData(this.props.clubName);
            this.props.fetchTeamsStuff(this.props.clubName);
        }
    }


    render() {
        console.log('%c%s', 'color: blue', 'Juventus');
        const {
            currentDate,
            currentDayInTheCalendar,
            juventusObject,
            juventusIsLoaded,
            juventusError,
            clubName,
            onChangeTeam,
        } = this.props;

        // console.log(juventusObject);

        let teamNameHeader = clubName === 'cska' ?
            clubName.toUpperCase() :
            clubName.charAt(0).toUpperCase() + clubName.slice(1);

        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        let eventsArray = [];
        let todayGame;

        if (juventusObject && juventusObject[1].events) {
            juventusObject[1].events.map(item => eventsArray.push(item.dateEvent));
        }

        let comparedDate = `${currentYear}-${(0 + '' + (currentMonth + 1)).slice(-2)}-${(0 + '' + currentDayInTheCalendar).slice(-2)}`;
        for (let i = 0; i < eventsArray.length; i++) {
            if (comparedDate === eventsArray[i]) {
                todayGame = juventusObject[1].events.filter(item => item.dateEvent === comparedDate).map((item, i) => {
                    return <div className='juventus__today-game' key={i}>
                        <h3 className='juventus__header3'>Today's game:</h3>
                        <p className='juventus__paragraph'>Date: {item.dateEvent}</p>
                        <p className='juventus__paragraph'>Event: {item.strEvent}</p>
                        <p className='juventus__paragraph'>Tornament: {item.strLeague}</p>
                        <p className='juventus__paragraph'>Round: {item.intRound}</p>
                        <p className='juventus__paragraph'>Time: {item.strTime}</p>
                        <ContainerJuventusButtonStuff/>
                    </div>;
                });
                break;
            } else {
                todayGame = <div className='juventus__today-game'>
                    <h3 className='juventus__header3'>Today's game:</h3>
                    <p className='juventus__paragraph'>There is no games today</p>
                    <ContainerJuventusButtonStuff/>
                </div>
            }
        }

        if (juventusError) {
            return <>
                <h2 className='juventus__header'>Information about FC {teamNameHeader}</h2>
                <div className='juventus'>
                    <p>Error: {juventusError.message}</p>
                </div>;
            </>
        } else if (!juventusIsLoaded) {
            return <>
                <h2 className='juventus__header'>Information about FC {teamNameHeader}</h2>
                <div className='juventus'>
                    <p>Loading...</p>
                </div>;
            </>
        } else {
            let teamSearchString = juventusObject[0].teams;
            let teamEventSearchString = juventusObject[1].events;
            let searchNumber = (teamSearchString[1] && teamSearchString[1].idLeague === '4355') ? 1 : 0;

            return (
                <>
                    <h2 className='juventus__header'>Information about FC {teamNameHeader}</h2>
                    <div className='juventus'>
                        <select name="" id="team-select" onChange={(e) => onChangeTeam(e)}>
                            <option value="juventus">Juventus</option>
                            <option value="ajax">Ajax</option>
                            <option value="arsenal">Arsenal</option>
                            <option value="cska">CSKA</option>
                        </select>
                        <div className='juventus__content'>
                            <div className='juventus__team'>
                                <h3 className='juventus__header3'>Team: {teamSearchString[searchNumber].strTeam}</h3>
                                <img className='juventus__badge' alt={teamNameHeader + "'s badge"} src={teamSearchString[searchNumber].strTeamBadge} />
                                <img className='juventus__logo' alt={teamNameHeader + "'s logo"} src={teamSearchString[searchNumber].strTeamLogo} />
                                <img className='juventus__jersey' alt={teamNameHeader + "'s jersey"} src={teamSearchString[searchNumber].strTeamJersey} />
                                <p className='juventus__paragraph'>Location: {teamSearchString[searchNumber].strStadiumLocation}</p>
                                <p className='juventus__paragraph'>Tornament: {teamSearchString[searchNumber].strLeague}</p>
                                <p className='juventus__paragraph'>Manager: {teamSearchString[searchNumber].strManager}</p>
                            </div>

                            <div className='juventus__stadium'>
                                <div className='juventus__stadium'>
                                    <h3 className='juventus__header3'>Stadium: {teamSearchString[searchNumber].strStadium}</h3>
                                    <img className='juventus__stadium-photo' alt={teamNameHeader + "'s stadium"} src={teamSearchString[searchNumber].strStadiumThumb} />
                                    <p className='juventus__paragraph'>Location: {teamSearchString[searchNumber].strStadiumLocation}</p>
                                </div>
                            </div>

                            {todayGame}

                            {teamEventSearchString ?
                                <div className='juventus__next-game'>
                                    <h3 className='juventus__header3'>Next game:</h3>
                                    <p className='juventus__paragraph'>Date: {teamEventSearchString[0].dateEvent}</p>
                                    <p className='juventus__paragraph'>Event: {teamEventSearchString[0].strEvent}</p>
                                    <p className='juventus__paragraph'>Tornament: {teamEventSearchString[0].strLeague}</p>
                                    <p className='juventus__paragraph'>Round: {teamEventSearchString[0].intRound}</p>
                                    <p className='juventus__paragraph'>Time: {teamEventSearchString[0].strTime}</p>
                                </div> :
                                <div className='juventus__next-game'>
                                    <h3 className='juventus__header3'>We don't have any information yet</h3>
                                    <ContainerJuventusButtonStuff/>
                                </div>
                            }
                        </div>
                    </div>

                    <ContainerJuventusModal />
                </>
            );
        }

    }

}

ComponentJuventus.propTypes = {
    currentDate: PropTypes.object,
    currentDayInTheCalendar: PropTypes.number,
    juventusObject: PropTypes.array,
    juventusIsLoaded: PropTypes.bool,
    juventusError: PropTypes.object,
    clubName: PropTypes.string,
    onChangeTeam: PropTypes.func,
}

export { ComponentJuventus };