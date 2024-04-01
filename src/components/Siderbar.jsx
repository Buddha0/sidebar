import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LogoutIcon from '@mui/icons-material/Logout';
export default function Siderbar() {
    return (
        <>

            <div className="sidebar-container">

                <div className='top'></div>

                <div className="center">
                    <ul>
                        <li>
                            < GridViewOutlinedIcon className="icons" />
                            <span>Dashboard</span>
                        </li>

                        <li>
                            < PeopleOutlinedIcon className="icons" />
                            <span>Users</span>
                        </li>

                        <li>
                            <  ProductionQuantityLimitsOutlinedIcon className="icons" />
                            <span>Products</span>
                        </li>

                        <li>
                            < GridViewOutlinedIcon className="icons" />
                            <span>Orders</span>
                        </li>

                        <li>
                            < LocalShippingIcon className="icons" />
                            <span>Delivery</span>
                        </li>

                        <li>
                            <CircleNotificationsIcon className="icons" />
                            <span>Notification</span>
                        </li>

                        <li>
                            < HealthAndSafetyIcon className="icons" />
                            <span>System Health</span>
                        </li>

                        <li>
                            < GridViewOutlinedIcon className="icons" />
                            <span>Logs</span>
                        </li>
                        <li>
                            < SettingsApplicationsIcon className="icons" />
                            <span>Settings</span>
                        </li>

                        <li>
                            <AccountCircleOutlinedIcon className="icons" />
                            <span>Profile</span>
                        </li>

                        <li>
                            <  LogoutIcon className='icons' />
                            <span>Logout</span>
                        </li>

                    </ul>
                </div>


            </div>

        </>
    )
}