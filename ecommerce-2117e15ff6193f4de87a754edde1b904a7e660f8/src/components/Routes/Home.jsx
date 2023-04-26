import 'bootstrap/dist/css/bootstrap.min.css';
import { Announcement } from '../Announcement/Announcement';
import { CarrouselContainer } from '../Carrousel/CarrouselContainer';
import { Dropdown } from '../Dropdowns/DropdownMyApps/Dropdown';
import { Search } from '../SearchBar/Search';


export const Home = () => {
  return (
    <>
        <Announcement />
        <Dropdown />
        <CarrouselContainer/>
    </>
  )
}
