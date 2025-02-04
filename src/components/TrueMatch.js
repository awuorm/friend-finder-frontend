import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { StyledMatches, StyledButtons } from "../styles";
import cancel_icon_2 from "../imgs/cancel_icon_2.png";
import { NavLink } from "react-router-dom";

export const TrueMatch = props => {
  console.log("props from true matches", props);
  const { matchedTrue, getTrueMatches } = props;
  useEffect(() => {
    getTrueMatches();
  }, [getTrueMatches, matchedTrue]);
  console.log(matchedTrue);

  const submitMatch = (match, e) => {
    e.preventDefault();
    let matchedToTrue = {
      id: match.id,
      loggedin: match.loggedin,
      potentialmatches: match.potentialmatches,
      matched: true,
      probability: match.probability
    };
    props.postMatch(matchedToTrue);
  };

  const messageMatch = (match, e) => {
    e.preventDefault();
    props.history.push("/messages");
  }
  return (
    <StyledMatches>
      <h5>Start the conversation</h5>
      <h6>Here are your matches</h6>
      {matchedTrue.trueMatch.map(match => {
        return (
          <div key={match.id}>
            <h5>Name: {match.potentialmatchesname}</h5>
            <h6>
              Match probability: {Math.round((match.probability / 12) * 100)}
            </h6>
            <div>
              <button onClick={e => submitMatch(match, e)}>unmatch</button>
              <button>
                <NavLink
                  style={{
                    textDecoration: "none",
                    padding: "0.5em",
                    color: "white"
                  }}
                  to="/dash/messages"
                >
                  Message
                </NavLink>
              </button>
            </div>
          </div>
        );
      })}
    </StyledMatches>
  );
};

export default connect(state => state, actionCreators)(TrueMatch);
