'use client';

import Link from 'next/link';
import React from 'react';

type QuestionsBoxType = React.AnchorHTMLAttributes<HTMLAnchorElement>
const QuestionsBox = ({...props}: QuestionsBoxType) => {
  return (
    <div className="px-4 my-4">
      <strong>Questions ?</strong>

      <ul className="space-y-1 mt-3">
        <li>
          <Link {...props} href="/policies/help">Need Help?</Link>
        </li>

        <li>
          <Link {...props} href="/policies/returns">Return Policy</Link>
        </li>
      </ul>
    </div>
  );
};

export default QuestionsBox;
