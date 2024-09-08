import Image from 'next/image';
import donut from '/public/donut.png';

export default function ProductImage() {
    return (
        <div className='m-10'>
            <Image
                src={donut}
                alt='donut'
            />
        </div>
    );
}
