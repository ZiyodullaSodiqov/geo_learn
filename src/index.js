import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/css/main.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "video-react/dist/video-react.css"; 

import Hero from "./components/hero/Hero";

import Category from './components/category/Category';

import Materiks from './components/pages/materiks/Category';

import Second_Materiks from './components/pages/materiks/Second_category';

import Afrika_texts from './components/pages/materiks/texts/Afrika_text';
import Antarktida_texts from './components/pages/materiks/texts/Antarktida_text';
import Avstraliya_texts from './components/pages/materiks/texts/Avstraliya_tex';
import Janubiy_america_text from './components/pages/materiks/texts/Janubiy_america_text';
import Okeaniya_text from './components/pages/materiks/texts/Okeaniya_text';
import Shimoliy_america_texts from './components/pages/materiks/texts/Shimoliy_america_text';
import Yevrosiya_texts from './components/pages/materiks/texts/Yevrosiya_text';
import Oceans from './components/pages/oceans/Category';
import Atlantika_text from './components/pages/oceans/texts/Atlantika_text';
import Hind_text from './components/pages/oceans/texts/Hind_text';
import Shimoliy_muz_text from './components/pages/oceans/texts/Shimoliy_muz_text';
import Tinch_text from './components/pages/oceans/texts/Tinch_text';
import Taqdimot from './components/pages/taqdimots/Category';

import TaqdimotMaterics from './components/pages/taqdimots/materics/Category';

import AfMaterics from './components/pages/taqdimots/materics/Afrika';
import AfAntarktida from './components/pages/taqdimots/materics/Antarktida';
import AfAvstraliya from './components/pages/taqdimots/materics/Avstraliya';
import AfJanubiyAmerika from './components/pages/taqdimots/materics/JanubiyAmerika';
import AfShimoliyAmerika from './components/pages/taqdimots/materics/ShimoliyAmerika';
import AfYevrosiyo from './components/pages/taqdimots/materics/Yevrosiyo';

import TDoceans from './components/pages/taqdimots/oceans/Category';
import TDAtlantika from './components/pages/taqdimots/oceans/TDAtlantika';
import TDOkeaniya from './components/pages/taqdimots/oceans/Okeaniya';
import TDHind from './components/pages/taqdimots/oceans/TDHind';
import TdShimoliMuz from './components/pages/taqdimots/oceans/TdShimoliMuz';
import TdTinch from './components/pages/taqdimots/oceans/TdTinch';

import VideoCategory from './components/pages/video/Category';
import AvstraliyaVD from './components/pages/video/AvstraliyaVD';
import AntarktidaVD from './components/pages/video/AntarktidaVD';
import AfrikaVD from './components/pages/video/AfrikaVD';
import JanubiyVD from './components/pages/video/JanubiyVD';
import ShimoliyVD from './components/pages/video/ShimoliyVD';
import YevrosiyoVD from './components/pages/video/YevrosiyoVD';

import WorldCategory from './components/pages/world_/Category';
import Ajibdunyo from './components/pages/world_/Ajibdunyo';
import Bilasizmi from './components/pages/world_/Bilasizmi';    
import DunyoAjoyibotlari from './components/pages/world_/DunyoAjoyibotlari';    
import TopFaktlar from './components/pages/world_/TopFaktlar';    
import ZakovatSavollari from './components/pages/world_/ZakovatSavollari';   

import QiziqGeo from './components/pages/qiziq_geo/Category';
import BuyuklarLife from './components/pages/qiziq_geo/Buyuklar';
import Eng from './components/pages/qiziq_geo/Eng';
import GeografikKashfiyot from './components/pages/qiziq_geo/GeografikKashfiyot';
import GeografikMalumot from './components/pages/qiziq_geo/GeografikMalumot';
import QiziqarliGeo from './components/pages/qiziq_geo/QiziqGeo';

import AppMaps from './components/pages/maps/Category';
import Atlas6 from './components/pages/maps/Atlas6';
import Atlas7 from './components/pages/maps/Atlas7';
import Atlas8 from './components/pages/maps/Atlas8';
import Atlas9 from './components/pages/maps/Atlas9';

import Exercises from './components/pages/exercises/Exercises1'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hero />}></Route>
                <Route path="/category" element={<Category />} />
                <Route path="/materiks" element={<Materiks />} />
                <Route path="/second/ctg" element={<Second_Materiks />} />

                <Route path="/texts-afrika" element={<Afrika_texts />} />
                <Route path="/texts-antarktida" element={<Antarktida_texts />} />
                <Route path="/texts-avstraliya" element={<Avstraliya_texts />} />
                <Route path="/texts-america_janubiy" element={<Janubiy_america_text />} />
                <Route path="/texts-okeaniya" element={<Okeaniya_text />} />
                <Route path="/texts-america_shimoliy" element={<Shimoliy_america_texts />} />
                <Route path="/texts-yevrosiyo" element={<Yevrosiya_texts />} />
                
                <Route path="/oceans" element={<Oceans />} />
                <Route path="/atlantika-text" element={<Atlantika_text />} />
                <Route path="/hind-text" element={<Hind_text />} />
                <Route path="/shimoliy-text" element={<Shimoliy_muz_text />} />
                <Route path="/tinch-text" element={<Tinch_text />} />

                <Route path="/taqdimot" element={<Taqdimot />} />
                <Route path="/taqdimot-materics" element={<TaqdimotMaterics />} />
                <Route path="/taqdimot-afrika" element={<AfMaterics />} />
                <Route path="/taqdimot-antarktida" element={<AfAntarktida />} />
                <Route path="/taqdimot-avstraliya" element={<AfAvstraliya />} />
                <Route path="/taqdimot-janubiy-amerika" element={<AfJanubiyAmerika />} />
                <Route path="/taqdimot-shimoliy-amerika" element={<AfShimoliyAmerika />} />
                <Route path="/taqdimot-yevrosiyo" element={<AfYevrosiyo />} />
                <Route path="/taqdimot-oceans" element={<TDoceans />} />
                <Route path="/taqdimot-oceans-atlantika" element={<TDAtlantika />} />
                <Route path="/taqdimot-oceans-okeaniya" element={<TDOkeaniya />} />
                <Route path="/taqdimot-oceans-hind" element={<TDHind />} />
                <Route path="/taqdimot-oceans-shimoliy-muz" element={<TdShimoliMuz />} />
                <Route path="/taqdimot-oceans-tinch" element={<TdTinch />} />

                <Route path="/video-category" element={<VideoCategory />} />
                <Route path="/video-avstraliya-video" element={<AvstraliyaVD />} />
                <Route path="/video-antarktida-video" element={<AntarktidaVD />} />
                <Route path="/video-afrika-video" element={<AfrikaVD />} />
                <Route path="/video-janubiy-amrica-video" element={<JanubiyVD />} />
                <Route path="/video-shimoliy-america-video" element={<ShimoliyVD />} />
                <Route path="/video-yevrosiyo-video" element={<YevrosiyoVD />} />

                <Route path="/world-category" element={<WorldCategory />} />
                <Route path="/ajibdunyo" element={<Ajibdunyo />} />
                <Route path="/bilasizmi" element={<Bilasizmi />} />
                <Route path="/DunyoAjoyibotlari" element={<DunyoAjoyibotlari />} />
                <Route path="/TopFaktlar" element={<TopFaktlar />} />
                <Route path="/ZakovatSavollari" element={<ZakovatSavollari />} />

                <Route path="/qiziq_geografiya" element={<QiziqGeo />} />
                <Route path="/buyuklar-hayoti" element={<BuyuklarLife />} />
                <Route path="/eng-eng" element={<Eng />} />
                <Route path="/geo-kashfiyot" element={<GeografikKashfiyot />} />
                <Route path="/geo-malumot" element={<GeografikMalumot />} />
                <Route path="/qiziqarli-geografiya" element={<QiziqarliGeo />} />
                
                <Route path="/maps" element={<AppMaps />} />
                <Route path="/atlas-6" element={<Atlas6 />} />
                <Route path="/atlas-7" element={<Atlas7 />} />
                <Route path="/atlas-8" element={<Atlas8 />} />
                <Route path="/atlas-9" element={<Atlas9 />} />

                <Route path="/exercises" element={<Exercises />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);