import React from 'react';

interface LogoProps {
  header?: string;
}

export default function Logo(props: LogoProps) {
  const header = props.header || 'Tyler J Grinn';

  return (
    <div className="tygr-logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="150px"
        viewBox="-230 -100 1100 800"
        preserveAspectRatio="xMinYMid"
      >
        <path
          className="cls-1"
          d="M406.34,134.12c-15.2-41.57-61-55.32-75.34-61.62-89.91-39.58-174.57,27.55-180,32-65.95,54.09-90.94,153.9-52,236,34.59,72.92,110,111.6,180,112,5.88,0,134.84-.61,142-88,0,0-.54-218-2-345.72-1-87.28-152-90.28-154,13V544.64C263.38,859-317.18,90.48,49,82.5c12.14-.26,47.84,0,47.84,0H589c70,3,143.88,7.13,118,73C685,211.5,480,335.5,406.34,134.12Z"
        />
        <path
          className="cls-2"
          d="M647,83.5l-550.16-1H39.71C-288,79.5,434,598.5,473,454.5c4.06-23.88,9-56.69,13-96,7.11-70.09,2.88-79.38,0-84-27.44-44-171.07-12.12-195,1-93,51,208.33,247.51,335,190C732.93,417,854,80.5,647,83.5Z"
        />
      </svg>
      <h3>{header}</h3>
    </div>
  );
}