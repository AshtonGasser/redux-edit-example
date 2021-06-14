import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StudentDetail(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleClick = () => {
    dispatch({
      type: 'SET_EDIT_STUDENT',
      payload: props.student
    })
  history.push('/edit')
}
  return (
    <tr>
      <td>{props.student.github_name}</td>
      <td onClick ={handleClick}>Edit!</td>
    </tr>
  );
}

export default StudentDetail;
