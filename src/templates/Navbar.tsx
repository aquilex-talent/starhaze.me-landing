import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

import { Logo } from './Logo';

const Navbar = () => {
  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={
          <>
            <li>
              <Link href="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link className={buttonVariants()} href="/sign-up">
                Sign Up
              </Link>
            </li>
          </>
        }
      >
        <li>
          <Link href="/">Product</Link>
        </li>

      </CenteredMenu>
    </Section>
  );
};

export { Navbar };
