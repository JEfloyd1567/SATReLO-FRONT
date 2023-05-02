import { FC } from "react";
import { Toast } from "react-bootstrap"

interface Props {
  msg: string;
  handleCloseBtnClick: () => void;
}

export const ErrorToast: FC<Props> = ({msg ,handleCloseBtnClick}) => {
  return (
    <div className="col col-12 d-inline-flex px-3 align-items-center rounded justify-content-between shadow bg-danger mb-4 py-2" style={{maxWidth: '400px'}}>
      <p className="m-0 text-white toast-body">{msg}</p>
      <button type="button" className="btn-close btn-close-white" onClick={() => handleCloseBtnClick()}></button>
    </div>
  )
}
