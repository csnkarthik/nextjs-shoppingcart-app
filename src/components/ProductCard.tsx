
import Product from '@/interfaces/product'
import Image from 'next/image';
import AddToCartBtn from './AddToCartBtn';

interface Props {
    product: Product
}

export default function ProductCard(props: Props) {
    const { id, name, price, imagePath } = props.product;

    return (

        <div className='border rounded-md shadow hover:shadow-lg transition overflow-hidden'>
            <Image src={imagePath} height='300' width='400' alt={name}></Image>
            <div className="p-2">
                <h6 className="text-center text-slate-600">
                    {name}
                </h6>
                <p className="text-center text-slate-600">
                    {price} $
                </p>
                <AddToCartBtn product={props.product} />
            </div>
        </div>
    )
}
