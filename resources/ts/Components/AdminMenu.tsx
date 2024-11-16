import { Link } from '@inertiajs/react';
import React from 'react';

interface AdminMenuProps {
routes: string[] ;
}

const AdminMenu = ({ routes }: AdminMenuProps) => {

    const routesLinks = routes.map(el => <Link className='m-auto w-24 text-yellow-400 font-bold' as='button' href={el}>{el }</Link>)

        return (
            <>
                <div className=''> {routesLinks} </div>
            </>
        )
};
export default AdminMenu;
8
