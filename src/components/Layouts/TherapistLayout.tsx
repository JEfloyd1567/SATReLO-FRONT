import { FC } from "react"

interface Props {
  children: JSX.Element | JSX.Element[];
  header?: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
}

export const TherapistLayout: FC<Props> = ({children, header, footer}) => {
  return (
    <div className="h-100 bg-white w-50 w-sm-50 rounded-3 shadow my-5 mx-auto px-4 pt-4 pb-3 " style={{minHeight: '512px'}}>

      {/* Box Header */}
        <div className="d-flex flex-row justify-content-between w-100 mb-4 align-items-center">
          {header}
        </div>

      {/* Box Content */}
        <div className="container justify-content-center h-auto">
          {children}
        </div>

      {/* Box Footer */}
      {/* <div className="d-flex justify-content-end mt-4 me-4">
        {footer}
      </div> */}

    </div>
  )
}
