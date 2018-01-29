import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import footer from '../components/Footer';
import { addTodo } from '../redux/actions/index';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    }
};
export const Footer = withRouter(connect(mapStateToProps, null)(footer));