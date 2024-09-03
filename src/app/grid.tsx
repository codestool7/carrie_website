import Image from './image';

export default function Grid() {
    return (
        <div className='mx-16 mt-10 grid grid-cols-2'>
            <Image />
            <Image />
            <Image />
            <Image />
        </div>
    );
}
