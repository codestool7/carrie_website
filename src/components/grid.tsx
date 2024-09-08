import ProductImage from './productImage';

export default function Grid() {
    return (
        <div className='mx-16 mt-10 grid grid-cols-2'>
            <ProductImage />
            <ProductImage />
            <ProductImage />
            <ProductImage />
        </div>
    );
}
