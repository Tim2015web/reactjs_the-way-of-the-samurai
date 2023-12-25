import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

function mapStateToPropsRedirect(state) { return { isAuth: state.auth.isAuth } };

export function withAuthRedirect(Component) {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Navigate to="/auth" />;
    return <Component {...props} />;
  };
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);
  return ConnectedAuthRedirectComponent;
};

// Вызов - let AuthRedirectComponent = withAuthRedirect(Messages);