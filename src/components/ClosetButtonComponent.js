import { Button, ButtonGroup } from 'reactstrap';



const ClosetButton = (props) => {
    return (
        
            <ButtonGroup>
                <Button id="closet" text-decoration="none" >
                    <a href="/#"><i className="fa fa-tags"></i></a>
                </Button>
            </ButtonGroup>
    );
}
export default ClosetButton;