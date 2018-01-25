import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import todoListss from '../components/TodoLists';
import { toggleTodo, removeTodo } from '../redux/actions/index';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({toggleTodo, removeTodo}, dispatch)
});

export const TodoLists = connect(mapStateToProps, mapDispatchToProps)(todoListss);