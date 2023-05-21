import { Flip, ToastContainer } from "react-toastify"

const Toast = () => {
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}         // progress bar
        newestOnTop={false}             // apparition vers le bas
        closeOnClick
        rtl={false}                     // de gauche à droite
        pauseOnFocusLoss={false}        // pause la notif au changement de fenêtre
        draggable                       // peut être fermé à la main
        pauseOnHover
        className="toast-container"
        transition={Flip}
      />
}

export default Toast