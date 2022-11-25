import Link from 'next/link';

/**
 * It's just a link.
 */
export default function NextLink({ href, children, ...props }) {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
