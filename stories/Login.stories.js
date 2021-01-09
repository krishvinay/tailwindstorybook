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
import './login.css';
import img1 from './assets/login_image.png';
import img2 from './assets/brand1.png';
import img3 from './assets/brand2.png';
const images1 = {
src:img1,
alt:'product1',
};
const images2 = {
src:img2,
alt:'product2',
};
const images3 = {
src:img3,
alt:'product3',
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
  component: Loginpage,
  
};

export const Loginpage = () =>
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
                Login
            </Button>
            <Dialog onClose={handleClose} fullWidth={fullWidth} maxWidth={maxWidth} aria-labelledby="customized-dialog-titles" open={open}>
                <DialogTitle id="customized-dialog-titles" onClose={handleClose}></DialogTitle>
                <DialogContent dividers className=" h-full">
                    <div className="flex   ">
                        <div className="max-w-3xl">
                            <div>
                            <img className="mx-auto  w-full " src={images1.src} alt={images1.alt} />
                                
                                <h2 className="mt-2  text-center text-base md:text-2xl lg:text-2xl font-extrabold text-gray-900">Login Or Signup</h2>
                            </div>
                            <form className="mt-0 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" value="true" />
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div className="grid grid-cols-3 gap-5  pb-3 pl-6 pr-6 sm:pl-24 sm:pr-24 md:pl-24 md:pr-24 lg:pl-24 lg:pr-24 ">
                                        <div className="col-span-3">
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">+91</span>

                                                <input
                                                    id="Mobile_Number"
                                                    name="Number"
                                                    type="text"
                                                    required
                                                    className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-500 bg-gray-50  focus:outline-none  focus:z-10 sm:text-sm"
                                                    placeholder="Mobile Number *"
                                                />
                                            </div>
                                            <div>
                                                <button type="submit" className="group relative w-full flex justify-center px-2 py-2 border border-transparent text-sm font-medium rounded-md text-white login_back mt-3 text-xl text-center">
                                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                                                    Get OTP
                                                </button>
                                            </div>
                                            <main className="login_main">
                                                <div className="login_wrappers">
                                                    <div className="login_line flex">
                                                        <span className="line-bar"></span>
                                                        <span className="line-text">Or</span>
                                                        <span className="line-bar"></span>
                                                    </div>
                                                </div>
                                            </main>
                                            <h2 className=" text-center text-lg">
                                                Login using <span className="login_password underline">Password</span>
                                            </h2>
                                            <div className="flex pb-3  pt-3  text-center">
                                                <div className="inline-block pr-3">
                                                    <a href="#" className="pr-8 pl-8 pt-3 pb-3  login_btn-action">
                                                        <i className="icons icons-google "></i>
                                                        <span className="flex">
                                                            <img className="w-5 mr-3 float-left ..." src={images2.src} alt={images2.alt} />    
                                                            Google
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="inline-block ">
                                                    <a href="#" className="pr-8 pl-8 pt-3 pb-3  login_btn-action">
                                                        <i className="icons icons-google "></i>
                                                        <span className="flex login_social">
                                                        <img className="w-5 mr-3 float-left ..." src={images3.src} alt={images3.alt} />    
                                                            facebook
                                                        </span>
                                                    </a>
                                                </div>
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