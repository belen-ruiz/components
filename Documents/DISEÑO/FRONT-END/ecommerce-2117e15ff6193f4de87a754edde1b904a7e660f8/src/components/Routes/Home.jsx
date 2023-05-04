import 'bootstrap/dist/css/bootstrap.min.css';
import { Announcement } from '../Announcement/Announcement';
import { CarrouselContainer } from '../Carrousel/CarrouselContainer';
import { Dropdown } from '../Dropdowns/DropdownMyApps/Dropdown';
import { ModalsContainer } from '../Modal2/ModalsContainer';
import { Search } from '../SearchBar/Search';

export const Home = () => {
  return (
    <>
        <Announcement />
        <Dropdown />
        <ModalsContainer />
        
        <CarrouselContainer/>
    </>
  )
}
