import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { RxHamburgerMenu } from "react-icons/rx";
export default function Nav({ showSideBar, setShowSideBar }) {

    return (
        <>
            <nav>
                <div className='wrapper'>
                    <RxHamburgerMenu className='show-btn' onClick={() => setShowSideBar(!showSideBar)} />

                    <h1>Clothify</h1>

                    <div className="search">
                        <input type="search" placeholder='Search... ' className='search_input'></input>
                        <SearchOutlinedIcon className="icon" />
                    </div>

                 
                </div>
            </nav>




        </>
    )
}