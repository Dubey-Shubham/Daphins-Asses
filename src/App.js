import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/sidebar'
import Topbar from './components/Topbar'


function App() {
  return (
    <div className="relative sm:-8 p-4 bg-[#7942a1] min-h-screen flex flex-row">
      <div className="sm:flex hidden relative">
        <Sidebar />
      </div>
      <div className='flex-1 max-sm:w-[92vw] bg-[#e8e2e2] mt-1 rounded-r-[18px]'>
        <div className='flex-1 max-sm:w-full max-w-[94vw]'>
          <Topbar />
        </div>
        <div className='flex-1 max-sm:w-full max-w-[94vw] sm:pr-1 rounded-br-[18px]'>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
