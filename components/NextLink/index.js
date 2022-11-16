import Link from 'next/link';

export default function NextLink({ href, children, ...props }) {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
