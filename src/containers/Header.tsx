import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddTodo from '../components/Header';
import { addTodo } from '../redux/actions/index'
// import { setVisibilityFilter } from '../redux/actions/index';
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
  }
  
const mapStateToProps = state => ({
    todos: state.todos
})
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(addTodo, dispatch)
})
const Header = connect()(AddTodo);
export default Header