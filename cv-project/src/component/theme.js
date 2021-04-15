import { createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    
    overrides: {
        MuiTextField: {
            root: {
                margin: "20px",
            },
            
        },
        
        
    },
    props: {
        MuiTextField:{
            variant:"outlined",
            InputLabelProps: {
                shrink: true
            },
            
        }
    }
});

export default theme;