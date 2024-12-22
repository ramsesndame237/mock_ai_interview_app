import {ReactNode} from "react";
import Header from "./_Components/Header";

const DashboardLayout =({children}:{children:ReactNode}) => {

    return(
        <section className={'p-5'}>
            <Header />
            {children}
        </section>
    )
}
export default DashboardLayout;