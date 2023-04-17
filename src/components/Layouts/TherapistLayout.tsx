import { FC } from "react"

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
  header?: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
}

export const TherapistLayout: FC<Props> = ({title, children, header, footer}) => {
  return (
    <div className="bg-white w-50 h-auto rounded-3 shadow px-4 py-5 my-5 mx-auto">

      {/* Box Header */}
      <div className="d-flex flex-row justify-content-between w-100 mb-4 align-items-center">
        <h2 className="fw-bold">{title}</h2>
        {header}
      </div>

      {/* Box Content */}
      <div className="container">-+
        {children}
      </div>

      {/* Box Footer */}
      <div className="d-flex flex-row justify-content-end align-items-center">
        {footer}
      </div>

    </div>
  )
}
