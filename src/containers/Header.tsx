import { connect } from 'react-redux'
import AddTodo from '../components/Header'
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
  
function mapStateToProps(state){
    console.log(state);
}
function mapDispatchToProps(){

}
const Header = connect()(AddTodo);
export default Header