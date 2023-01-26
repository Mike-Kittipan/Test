// icon
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function App() {
  return (
    <div className="App">
      <header className="sticky top-0 z-50 grid grid-col-3 md:grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* left */}
        <div className="relative flex item-center h-10 cursor-pointer my-auto">
          <img className="flex" src="imgbin_airbnb-logo-png.png" alt="" />
        </div>
        {/* middle-search */}
        <div className="flex justify-center item-center relative md:border-2 rounded-full py-2 mx-6 hover:shadow-md duration-100 ease-out">
          <input
            className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-800 shadow-gray-400"
            type="search"
            placeholder=""
          />
          <div className="flex justify-between absolute w-full px-10 pt-0.5 text-sm cursor-pointer text-gray-800">
            <button className="">ที่ไหนก็ได้</button>
            <button className="border-1 border-x px-6">สัปดาห์ ทุกเวลา</button>
            <button className="text-gray-600/60 pr-1">เพิ่มผู้เข้าพัก</button>
          </div>
          <SearchIcon className="hidden md:inline bg-red-500 text-white rounded-full p-1 cursor-pointer md:mx-2" />
        </div>
        {/* right */}
        <div className="flex items-center space-x-6 justify-end text-gray-800">
          <p className="text-sm hidden md:inline cursor-pointer">
            ให้เช่าที่พักกับ Airbnb
          </p>
          <LanguageIcon className="h-6 cursor-pointer" />
          <div className="flex items-center space-x-2 border p-2 rounded-full hover:shadow-md duration-100 ease-out cursor-pointer">
            <MenuIcon className="h-6" />
            <AccountCircleIcon className="h-6" />
          </div>
        </div>
      </header>
      <body></body>
    </div>
  );
}

export default App;
