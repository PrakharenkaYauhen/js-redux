// ComponentJuventus

import React from 'react';
import PropTypes from 'prop-types'

class ComponentJuventus extends React.Component {

    componentDidMount() {
        this.props.fetchData(this.props.clubName);
        this.props.fetchTeamsStuff(this.props.clubName);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.clubName !== this.props.clubName) {
            this.props.fetchData(this.props.clubName);
        }
    }


    render() {
        console.log(this.props);
        const { currentDate,
            currentDayInTheCalendar,
            juventusObject,
            juventusIsLoaded,
            juventusError,
            clubName,
            onChangeTeam,
            juventusStuffObject,
            juventusStuffIsLoaded,
            onClickStuff,
            juventusStuffModal } = this.props;

        console.log(juventusObject);

        let teamNameHeader = clubName === 'cska' ?
            clubName.toUpperCase() :
            clubName.charAt(0).toUpperCase() + clubName.slice(1);

        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        let eventsArray = [];
        let todayGame;

        if (juventusObject && juventusObject[1].events) {
            for (let i = 0; i < juventusObject[1].events.length; i++) {
                eventsArray.push(juventusObject[1].events[i].dateEvent);
            }
        }

        let stuffButton = juventusStuffIsLoaded ?
            <div className='juventus__stuff'>
                <button className='current-stuff' id='current-stuff' onClick={(e) => onClickStuff(juventusStuffIsLoaded, juventusStuffModal, e)}>Current stuff <span className='current-stuff__available'>(is available)</span></button>
            </div> :
            <div className='juventus__stuff'>
                <button className='current-stuff' id='current-stuff' onClick={(e) => onClickStuff(juventusStuffIsLoaded, juventusStuffModal, e)}>Current stuff <span className='current-stuff__not-available'>(isn't available)</span></button>
            </div>;


        let stuff;

        if (juventusStuffIsLoaded) {

            let positionsArray = ['Manager', 'Goalkeeper', 'Left Back', 'Defender', 'Centre Back', 'Right Back', 'Midfielder', 'Defensive Midfielder', 'Centre Midfielder', 'Attacking Midfielder', 'Left Wing', 'Right Wing', 'Forward'];

            let comparePositions = (a, b) => {
                if (positionsArray.indexOf(a[1]) > positionsArray.indexOf(b[1])) return 1;
                if (positionsArray.indexOf(a[1]) < positionsArray.indexOf(b[1])) return -1;
            }
            juventusStuffObject.sort(comparePositions);

            stuff = juventusStuffObject.map((number, i) =>
                <li key={i}>{`${juventusStuffObject[i][0]} - ${juventusStuffObject[i][1]} - ${juventusStuffObject[i][2]} - ${juventusStuffObject[i][3]}`}</li>
            );
        }



        for (let i = 0; i < eventsArray.length; i++) {
            let newArray = eventsArray[i].split('-');
            if (currentYear === +newArray[0] && (currentMonth + 1) === +newArray[1] && currentDayInTheCalendar === +newArray[2]) {
                for (let i = 0; i < juventusObject[1].events.length; i++) {
                    if (juventusObject[1].events[i].dateEvent === newArray.join('-')) {
                        todayGame = <div className='juventus__today-game'>
                            <h3 className='juventus__header3'>Today's game:</h3>
                            <p className='juventus__paragraph'>Date: ${juventusObject[1].events[i].dateEvent}</p>
                            <p className='juventus__paragraph'>Event: ${juventusObject[1].events[i].strEvent}</p>
                            <p className='juventus__paragraph'>Tornament: ${juventusObject[1].events[i].strLeague}</p>
                            <p className='juventus__paragraph'>Round: ${juventusObject[1].events[i].intRound}</p>
                            <p className='juventus__paragraph'>Time: ${juventusObject[1].events[i].strTime}</p>
                            {stuffButton}
                        </div>;
                    };
                }
                break;
            } else {
                todayGame = <div className='juventus__today-game'>
                    <h3 className='juventus__header3'>Today's game:</h3>
                    <p className='juventus__paragraph'>There is no games today</p>
                    {stuffButton}
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
                        <select name="" id="team-select" onChange={onChangeTeam}>
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

                            {/* <div className='juventus__today-game'></div> */}
                            {todayGame}

                            {juventusObject[1].events ?
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
                                    <div className='juventus__stuff'>
                                        <button className='current-stuff' id='current-stuff'>Current stuff <span className='current-stuff__not-available'>(isn't available)</span></button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    {juventusStuffModal && <div className='modal__juventus-stuff'>
                        <div className='modal__juventus-stuff__stuff'><h3>Current stuff:</h3>
                            <ul>{stuff}</ul>
                        </div>
                        <button className='modal__button_exit' onClick={(e) => onClickStuff(juventusStuffIsLoaded, juventusStuffModal, e)}>x</button>
                    </div>}
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