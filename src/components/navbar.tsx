import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='fixed z-50 flex w-screen pt-4 text-3xl font-bold text-lime-500'>
            <div className='ml-10 mr-auto'>
                <Link href='/'>logo</Link>
            </div>
            <div className='flex gap-7'>
                <div>
                    <Link href='/shop'>shop</Link>
                </div>
                <div>
                    <Link href='/commissions'>commissions</Link>
                </div>
                <div>
                    <Link href='/portfolio'>portfolio</Link>
                </div>
                <div>
                    <Link href='/about'>about the artist</Link>
                </div>
            </div>
            <div className='ml-auto mr-10'>
                <Link href='/cart'>cart</Link>
            </div>
        </div>
    );
}
