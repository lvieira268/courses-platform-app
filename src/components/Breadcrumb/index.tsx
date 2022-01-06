import React from 'react';

import './styles.css';

interface IBreadcrumb {
  page: string | undefined;
}

const Breadcrumb: React.FC<IBreadcrumb> = ({ page }) => {
  return (
    <ul className="breadcrumb">
      <li>
        <a href="/">Home</a>
      </li>
      {page && <li>{page}</li>}
    </ul>
  );
};

export default Breadcrumb;
