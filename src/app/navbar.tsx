export default function Navbar() {
    return (
        <div className='fixed z-50 flex w-screen pt-4 text-3xl font-bold text-lime-500'>
            <div className='ml-10 mr-auto'>logo</div>
            <div className='flex gap-7'>
                <div>shop</div>
                <div>commissions</div>
                <div>portfolio</div>
                <div>about the artist</div>
            </div>
            <div className='ml-auto mr-10'>cart</div>
        </div>
    );
}
