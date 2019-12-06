import { connect } from 'react-redux';
import { deleteNoteAction } from '../../redux/notes/notesActions';
import { getFilteredNotesArr } from '../../redux/notes/notesSelectors';
import NoteList from './NoteList';

const mapStateToProps = store => ({
  notes: getFilteredNotesArr(store),
});

const mapDispatchToProps = dispatch => ({
  onDeleteNote: id => dispatch(deleteNoteAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
