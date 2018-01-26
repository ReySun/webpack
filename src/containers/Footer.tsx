import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import footer from '../components/Footer';
import { addTodo } from '../redux/actions/index';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};
export const Footer = connect(mapStateToProps, null)(footer);