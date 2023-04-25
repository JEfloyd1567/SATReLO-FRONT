import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';

export const TherapistPatientsFooter = () => {
  const [page, setPage] = useState(1)

  return <PaginationControl
    page={page}
    total={50}
    limit={6}
    changePage={(page) => {
      setPage(page); 
      console.log(page)
    }}
    ellipsis={1}
    last = {true}
  />
}
