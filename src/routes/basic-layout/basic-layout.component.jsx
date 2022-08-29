
import { Outlet } from 'react-router-dom'
import BasicFooter from '../../components/basic-footer/basic-footer.component'
import BasicHeader from '../../components/basic-header/basic-header.component'
const BasicLayout = () => {
  
    return (
        <>
            <BasicHeader/>
            <Outlet />
            <BasicFooter/>
        </>
    )
}

export default BasicLayout;