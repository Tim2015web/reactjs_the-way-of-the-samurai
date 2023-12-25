import { sendMessageCreator } from '../../redux/messagesReducer.js';
import { Messages } from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect.js';
import { compose } from 'redux';

function mapStateToProps(state) { return { messagesPage: state.messagesPage } };

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: (newMessageBody) => { dispatch(sendMessageCreator(newMessageBody)); }
  }
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages);