import styled from "@emotion/styled";
import { Box, Stack, Button, TextField, Typography, TableHead, TableRow, TableCell, tableCellClasses } from "@mui/material";
import { Colors } from "../../layout/themeColors";
import { Link } from "react-router-dom";

export const MainBoxContainer = styled(Box, {
    shouldForwardProp: (props) => props !== 'direction' && props !== 'topMargin' && props !== 'formWidth'
})(({ theme, direction, topMargin, formWidth }) => ({
    position:'relative',
    zIndex:'100',
    width: formWidth || '90%',
    maxWidth:'900px',
    maxHeight: '90vh',
    overflow:'auto',
    display: 'flex',
    justifyContent:'flex-start',
    flexDirection: direction || 'column',
    /* alignItems: 'center', */
    background: 'rgb(0,0,0,0.5)',
    overflowX: 'hidden',
    margin: '0 auto',
    marginTop: topMargin || '0',
    /* border: `1px solid ${Colors.border}`, */
    borderRadius:'.8rem',
    padding:'40px 30px',
    boxShadow:`5px 5px 5px ${Colors.dark}`,
    [theme.breakpoints.down('md')]: {
        flexDirection:'column',
        gap:'30px'
    }
}))

// FORMS
export const FormContainer = styled(Stack)(({ theme }) => ({
    width: '320px',
    minHeight: '300px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '25px',
    borderRadius: '10px',
    /* padding: '30px', */
    background: '',
    [theme.breakpoints.down('sm')]: {
        width: '80vw',
        padding: '20px'
    }
}))

export const FormSubmitButton = styled(Button)(({ theme }) => ({
    width: '100%',
    height: '40px',
    fontSize: '16px',
    padding: '0 15px',
    background: Colors.primary[500],
    //'linear-gradient(to right bottom, #430089, #82ffa1)'
    color: Colors.light,
    borderRadius:'8px',
    transition: '.8s all',
    ':hover': {
        background: Colors.input,
    }
}))

export const FormTitle = styled(Typography)(({ theme }) => ({
    fontSize: '28px',
    color: Colors.light,
    textAlign: 'center',
    /* marginBottom: '0px' */
}))

export const FormInputText = styled(TextField)(({ theme }) => ({
    width: '100%',
    borderRadius:'10px',
    color: Colors.primary[500],
    input: { color: Colors.light },
    border:'none !important',
    // Root class for the input field
    "& .MuiOutlinedInput-root": {
        outline:`none !important`,
        backgroundColor: Colors.input,
        // Class for the border around the input field
        "& .MuiOutlinedInput-notchedOutline": {
          color: `Colors.primary[500] !important`,
          outline:`none !important`,
          border: `1px solid ${Colors.border} !important`,
        },
      },
      // Class for the label of the input field
      "& .MuiInputLabel-outlined": {
        color: `${Colors.primary[500]} !important`,
      },
}))

export const FormLink = styled(Link)(({ theme }) => ({
    fontSize:'14px',
    color: Colors.border,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: '.8s all',
    ":hover": {
        color: Colors.link,
        textDecoration:'none'
    },
}))

export const FormShowPasswordIcon = styled(Box)(({ theme }) => ({
    position: 'absolute', 
    right: '10px',
    top: '15px',
    cursor: 'pointer',
    ":hover": {
        fill: Colors.primary,
        color: Colors.primary,
    }
}))
// END FORMS

// TYPOGRAPHY
export const TitleText = styled(Typography, {
    shouldForwardProp: (props) => props !== 'wantedColor'
})(({ theme, wantedColor }) => ({
    fontSize: '2rem',
    fontWeight: 'bold',
    color: wantedColor || Colors.white
}));

export const SubtitleText = styled(Typography, {
    shouldForwardProp: (props) => props !== 'wantedColor'
})(({ theme, wantedColor }) => ({
    fontWeight: 'bold',
    color: wantedColor
}));

export const CaptionText = styled(Typography)(({ theme }) => ({
    fontWeight: '500',
}));


export const BodyTextTitle = styled(Typography, {
    shouldForwardProp: (props) => props !== 'wantedColor'
})(({ theme, wantedColor }) => ({
    fontWeight: 'bold',
    fontSize:'0.9rem',
    /* textShadow: `1px 1px 2px ${Colors.dark}`, */
    color: wantedColor || '#ededed'
}));

export const BodyText = styled(Typography, {
    shouldForwardProp: (props) => props !== 'wantedColor'
})(({ theme, wantedColor }) => ({
    fontWeight: '500',
    color: wantedColor || Colors.primary[300],
}));

export const TypographySpan = styled(Typography)(({ theme }) => ({
    color: Colors.primary
}))

// END TYPOGRAPHY

// TABS FULL WIDTH
export const TabsFullWidthContainer = styled(Box)(({ theme }) => ({
    display:'flex',
    width: '100%',
    justifyContent:'space-around',
    overflowX:'auto',
}))
// END TABS FULL WIDTH

// SUBTABS
export const SubTabsContainer = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '30px',
    marginBottom: '40px'
}))

export const SubTabBtn = styled(Button, {
    shouldForwardProp: (props) => props !== 'size'
})(({ theme, size }) => ({
    width: size || 'auto',
    backgroundColor: 'transparent',
    border: `1px solid ${Colors.primary}`,
    color: 'inherit',
    fontSize: '14px',
    textTransform: 'capitalize',
    transition: '.8s all',
    ':hover': {
        backgroundColor: Colors.primary,
        color: Colors.white
    },
    /* '& .subtab-active': {
        backgroundColor: Colors.secondary
    }, */
}))
// END SUBTABS

export const LoadingBox = styled(Box, {
    shouldForwardProp: (props) => props !== 'customHeight'
})(({ theme, customHeight }) => ({
    display:'flex',
    width: '100%',
    justifyContent:'center',
    height: customHeight || '50px'
}))

export const RateBox = styled(Box, {
    shouldForwardProp: (props) => props !== 'score'
})(({ theme, score }) => ({
    paddingBottom: '5px',
    paddingTop: '5px',
    borderRadius: '5px',
    maxWidth: '60%',
    marginLeft:'20%',
    marginRight:'20%',
    textShadow: `1px 1px 2px ${Colors.black}`,
    backgroundColor: score == 1 ? Colors.success : score == 0.75 ? Colors.success_light : score == 0.5 ? Colors.warning : score == 0.25 ? Colors.danger_light : Colors.danger,
    color: Colors.white
}))

export const TrueFalseBox = styled(Box, {
    shouldForwardProp: (props) => props !== 'trueFalse'
})(({ theme, trueFalse }) => ({
    paddingBottom: '5px',
    paddingTop: '5px',
    borderRadius: '5px',
    maxWidth: '60%',
    marginLeft:'20%',
    marginRight:'20%',
    textShadow: `1px 1px 2px ${Colors.black}`,
    backgroundColor: trueFalse === 'True' ? Colors.success : Colors.danger,
    color: Colors.white
}))

//TABLES
export const CustomTableHead = styled(TableHead)(({ theme }) => ({
    background: Colors.primary,
}));

export const CustomTableRow = styled(TableRow, {
    shouldForwardProp: (props) => props !== 'clickable' && props !== 'txtStyle'
})(({ theme, clickable, txtStyle }) => ({
    /* borderBottom: `1px solid ${Colors.border}`, */
    backgroundColor: theme.palette.mode === 'light' ? Colors.secondaryBG : Colors.secondaryBGdark,
    cursor: clickable || 'inherit',
    transition: '.6s all',

    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.mode === 'light' ? Colors.primaryBG : Colors.primaryBGdark,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
      '&:last-child td, &:last-child th': {
        border: 0,
      },

      ':hover': {
        backgroundColor: clickable === 'pointer' ? Colors.secondary : '',
        color: clickable === 'pointer' ? Colors.white : 'inherit'
    },
}));

export const CustomTableCell = styled(TableCell, {
    shouldForwardProp: (props) => (props !== 'bgColor' && props !== 'txtColor')
    })(({ theme, bgColor, txtColor }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: bgColor || Colors.primary,
            color: txtColor || Colors.white,
            fontWeight: 'bold',
            textShadow: `1px 1px 2px ${Colors.black}`,
            fontSize: '.8rem',
        },
        [`&.${tableCellClasses.body}`]: {
            backgroundColor: bgColor || 'inherit',
            color: txtColor || 'inherit',
            /* textShadow: theme.palette.mode === 'light' ? '' : `1px 1px 2px ${Colors.black}`, */
            fontSize: '.8rem',
        },
        fontWeight: '500',
    }
));

//END TABLES

//COMMON BUTTONS
export const FormPrimaryActionBtn = styled(Button, {
    shouldForwardProp: (props) => props !== 'size'
})(({ theme, size }) => ({
    textTransform:'capitalize', 
    /* marginTop:'10px',  */
    height:'40px',
    flexGrow:1,
    transition: '.8s all',
    ':hover': {
        /* backgroundColor: Colors.primary,
        color: Colors.white */
    },
}))
//END COMMON BUTTONS

//LINKS
export const DefaultColoredLink = styled(Link)(({ theme }) => ({
    color: Colors.primary,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: '.7s all',
    ":hover": {
        color: Colors.secondary
    }
}))
//END LINKS