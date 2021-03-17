import React from 'react';
import { connect } from 'react-redux';
import ConsoleComponent from '../components/ConsoleComponent';
import ControlComponent from '../components/ControlComponent';
import { getAllCapsules, getLandingPadByID } from '../redux/space/action';

const Dashboard = (props) => {

  const handleCapsulesSubmit = (event) => {
    const { getAllCapsules } = props;
    getAllCapsules();
  }

  const handleLandingPadSubmit = (padID) => {
    const { getLandingPadByID } = props;
    getLandingPadByID(padID);
  }

  return (
      <React.Fragment>
          <ConsoleComponent content={props.spaces} />
          <ControlComponent handleCapsulesSubmit={handleCapsulesSubmit} handleLandingPadSubmit={handleLandingPadSubmit} />
      </React.Fragment>
  );
};

const mapStateToProps = ({ spaces }) => {
  return {
    spaces,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCapsules: () => {
      dispatch(getAllCapsules());
    },
    getLandingPadByID: (id) => {
      dispatch(getLandingPadByID(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
