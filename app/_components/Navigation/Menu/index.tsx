import { Navbar, NavbarBrand } from '@nextui-org/navbar'
import Image from 'next/image'


const Menu = () => {
    return (
        <Navbar className='flex justify-between'>
          <NavbarBrand className='flex items-center'>
            <Image
              src='https://us-east-1-shared-usea1-02.graphassets.com/cltw9ggr70a3m07lb887p5mfv/cluhe8yedq9pb07k84kwhf0dn'
              width={50}
              height={50}
              alt='Sweet Static logo'
              className='mx-auto'
            />
            <div className='font-bold text-inherit ml-5 text-lg'>Sweet Static</div>
          </NavbarBrand>
        </Navbar>
    )
}

export default Menu