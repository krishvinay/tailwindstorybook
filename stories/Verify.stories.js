import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import '../styles/globals.css'
import './verifyotp.css';
import img1 from './assets/login_image.png';
const images1 = {
    src:img1,
    alt:'product1',
    };
const styles = (theme) => ({});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className="login_closeButton" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(0),
    },
}))(MuiDialogContent);

export default {
  title: 'Example/Login',
  component: Verifyotp,
  
};

export const Verifyotp = () =>
 {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState("sm");

    const [state, setState] = React.useState({});
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" className="exchange_offer" onClick={handleClickOpen}>
                Verifyotp
            </Button>
            <Dialog onClose={handleClose} fullWidth={fullWidth} maxWidth={maxWidth} aria-labelledby="customized-dialog-titles" open={open}>
                <DialogTitle id="customized-dialog-titles" onClose={handleClose}></DialogTitle>
                <DialogContent dividers className="login_modal h-full">
                    <div className="flex   ">
                        <div className="max-w-3xl">
                            <div>
                                <img className="mx-auto  w-full " src={images1.src} alt={images1.alt} />
                                
                                <h2 className="mt-2 text-lg md:text-2xl text-center lg:text-2xl font-extrabold text-gray-900">Verify with OTP</h2>
                                 <h6 className="mt-2  text-xs md:text-sm text-center lg:text-base font-extrabold text-gray-500">Sent to 963369680</h6>
                            </div>
                            <form className="mt-0 space-y-6" action="#" method="POST">
                               
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div className="grid grid-cols-3 gap-5  pb-3 sm:pl-24 sm:pr-24 md:pl-24 md:pr-24 lg:pl-24 lg:pr-24 pl-6 pr-6">
                                        <div className="col-span-3 ">
                                            
                                            <div className="flex px-2 mt-5 mb-5">
            <input type="text" className="w-1/4 h-16 text-center border-2 mr-3 md:mr-3 lg:mr-4" />
            <input type="text" className="w-1/4 h-16 text-center border-2 mr-3 md:mr-3 lg:mr-4" />
            <input type="text" className="w-1/4 h-16 text-center border-2 mr-3 md:mr-3 lg:mr-4" />
            <input type="text" className="w-1/4 h-16 text-center border-2 mr-3 md:mr-3 lg:mr-4" />
        </div>
                                            <h2 className=" text-center text-lg pb-6 sm:pb-4 lg:pb-4">
                                                 <span className="login_password underline">Resend OTP</span>
                                            </h2>
                                            <h2 className=" text-center text-base md:text-lg lg:text-lg">
                                                Wrong Number ? <span className="login_password underline">Change Number</span>
                                            </h2>
                                           <div>
                                                <button type="submit" className="group relative w-full flex justify-center px-2 py-2 border border-transparent text-sm font-medium rounded-md text-white login_back mt-2 mb-1  text-xl text-center">
                                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                                                    Confirm
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}