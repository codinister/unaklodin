'use client';

import useGetQuery from "@/state/query/useGetQuery";

const DesktopNav = () => {

const sett = useGetQuery('settings','/settings') || []
const men = useGetQuery('men','/men') || []


console.log(men)

  return (
    <nav>
      <div className="flex container mx-auto">
        <div className="flex-1">

        </div>
        <div className="flex-5"></div>
        <div className="flex-3"></div>
        <div className="flex-1"></div>
      </div>
    </nav>
  );
};

export default DesktopNav;
