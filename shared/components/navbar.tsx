import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Menu } from 'react-feather';
import { navlinks } from '../utils/constants';
import { PersonalDetailsContext } from '../utils/context';
import { PersonalDetails } from '../utils/types';

type Props = {
    href: string;
    title: string;
}

const NavItem = ({ href, title }: Props) => {
    const router = useRouter();

    return (
        <Link href={href}>
            <a>
                <li
                    className={`px-5 py-1 md:pt-4 md:px-4 md:text-center
                    ${router.asPath === href ? 'border-b-2 bg-gray-500 md:bg-blue md:border-none' : ''}`}>
                    <p className='transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-bold md:hover:text-violet'>
                        {title}
                    </p>
                    <img
                        src="/images/vectors/nav_active.svg"
                        alt="nav-active"
                        className={`
                        hidden md:block
                        ${router.asPath === href ? 'md:opacity-100 md:w-100' : 'md:opacity-0'}
                        `}
                    />
                </li>
            </a>
        </Link>
    )
}

const Navbar = (): JSX.Element => {
    // const logo = useContext(PersonalDetailsContext);
    const [isScreenScrolled, setisScreenScrolled] = useState(false);
    const [showMobileNav, setMobileNav] = useState(false);

    const addShadowtoNav = () => {
        window.scrollY >= 100 ? setisScreenScrolled(true) : setisScreenScrolled(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowtoNav);
        return () => {
            window.removeEventListener('scroll', addShadowtoNav);
        };
    }, []);

    return (
        <div
        className={` mx-auto bg-blue w-full fixed z-30
        ${isScreenScrolled && 'shadow-2xl'}`}
        >
            <nav className="block md:flex justify-between items-center p-1 px-8">
                <div className="flex justify-between">
                    <div>
                        <Link href='/'>
                            <img src='/images/logo-light.svg' width="70%" height="70%" alt='logo'
                                className={`${isScreenScrolled ? 'w-3/24 md:3/12' : 'w-15'}
                                translate-all transform hover:scale-75 cursor-pointer`}
                            />
                        </Link>
                    </div>
                    <div className='flex md:hidden'>
                        <button
                            type='button'
                            className='text-white'
                            onClick={() => setMobileNav(!showMobileNav)}>
                            <Menu size={30} />
                        </button>   
                    </div>
                </div>
                <div className={showMobileNav ? 'block pt-3 transition-all' : 'hidden md:block'}>
                    <ul className="md:flex md:flex-row border-pink border-2 md:border-none">
                        {navlinks.map((item)=> {
                            return <NavItem title={item.title} href={item.href} key={item.href} />;
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;