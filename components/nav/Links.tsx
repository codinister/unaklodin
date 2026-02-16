import Link from 'next/link';

const Links = ({name,url, setOpen}: {name: string; url: string; setOpen: Function}) => {
  return (
    <li>
      <Link href={`/${url}`} onClick={()=> setOpen(false)}>{name}</Link>
    </li>
  );
};

export default Links;
