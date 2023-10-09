import Sidebar from "../component/Sidebar";
import User from "../component/User";
import Map from "../component/map";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
            <User />
        </div>
    );
};
export default AppLayout;
