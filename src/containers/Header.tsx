import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import header from '../components/Header';
import { addTodo } from '../redux/actions/index';

const mapDispatchToProps = dispatch => ({
    addTodo: bindActionCreators(addTodo, dispatch)
});
export const Header = connect(null, mapDispatchToProps)(header);