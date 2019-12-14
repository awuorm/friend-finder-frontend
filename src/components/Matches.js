import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { StyledMatch } from "../styles";
import tick_icon_2 from "../imgs/tick_icon_2.png";

export const Matches = props => {
  console.log("props from matches", props);
  const { matched, getMatches } = props;
  useEffect(() => {
    getMatches();
  }, [getMatches, matched.matches]);
  console.log(matched);

  const submitMatch = (match,e) => {
      e.preventDefault();
      let matchedToTrue = {
          id: match.id,
          loggedin: match.loggedin,
          potentialmatches: match.potentialmatches,
          matched: 1,
          probability: match.probability,
      }
      props.postMatch(matchedToTrue);


  }
  return (
    <StyledMatch>
     <h5>The possibilities are endless!</h5>
     <h6>Here are the people you matched with</h6> 
     {matched.matches.length === 0 ? <div>You do not have any matches</div> :
      matched.matches.map(match => {
        return (
          <div key={match.id}>
            <h5>Name: {match.potentialmatchesname}</h5>
            <h6>Match probability: {Math.round((match.probability / 12) * 100)}</h6>
            <button onClick={(e) => submitMatch(match, e)}>
              {/* <img alt="tick icon" src={tick_icon_2} /> */}
              Match
            </button>
          </div>
        );
      })}
    </StyledMatch>
  );
};

export default connect(state => state, actionCreators)(Matches);
