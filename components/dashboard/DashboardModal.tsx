import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDashboardContext } from "./DashboardContext";

interface DashboardModalProps {
  children: React.ReactNode;
}

export const DashboardModal: React.FC<DashboardModalProps> = ({ children }) => {
  const { setDisplayModal } = useDashboardContext();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);  // Component has mounted in the DOM
  }, []);

  if (!isMounted) {
    return null;  // Don't render anything on the server
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
    >
      <div className="bg-white rounded-3xl p-8 max-w-[95%] min-h-[400px] max-h-full grid grid-col relative overflow-y-auto w-full lg:w-2/3">
        <span onClick={() => setDisplayModal("")} className="absolute top-0 right-0 text-5xl font-light p-4 cursor-pointer active:scale-90">&times;</span>
        {children}
      </div>
    </div>,
    document.body
  );
};