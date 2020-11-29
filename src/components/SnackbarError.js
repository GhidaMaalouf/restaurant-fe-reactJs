import Snackbar from "@material-ui/core/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import Alert from '@material-ui/lab/Alert';

import { clearErrorAction } from "../actions/errorAction";

function SnackbarError() {
  const dispatch = useDispatch();

  const stateError = useSelector(
    state => state.errorReducer
  );

  function handleClose() {
    dispatch(clearErrorAction());
  }

  return (
    <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "center"}} open={stateError.info.open} autoHideDuration={6000} onClose={handleClose} aria-describedby="client-snackbar">
           <Alert onClose={handleClose} severity="error">{stateError.info.message}</Alert>
    </Snackbar>
  );
}

export default SnackbarError;
