import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import appStartActions from "../../actions/appStartAction";
import addElementAction from "../../actions/addElementAction";
import removeElementAction from "../../actions/removeElementAction";
import ListOfElements from "../../../components/ListOfElements";
import ListOfElementsForm from "../../../components/ListOfElementsForm";
import { getTasks } from "../../selectors/tasks";

const propTypes = {
  addElementAction: PropTypes.func.isRequired,
  removeElementAction: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

class HomeContainer extends Component {
  componentDidMount() {}

  render() {
    const { tasks, addElementAction, removeElementAction } = this.props;
    return (
      <div>
        <h1>To Do List</h1>
        <ListOfElementsForm handleAction={addElementAction} />
        <ListOfElements rows={tasks} removeElement={removeElementAction} />
      </div>
    );
  }
}

HomeContainer.propTypes = propTypes;

const mapDispatchToProps = {
  appStartActions,
  addElementAction,
  removeElementAction
};

const mapStateToProps = state => ({
  status: state.status,
  tasks: getTasks(state)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomeContainer)
);
