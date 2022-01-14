import NewMeetupForm from "../Components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetUpPage(){
    const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch('https://react-getting-started-dfb05-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'appplication/json'
            }
        }).then(() => {
            history.replace('/');
        });

    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm  onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetUpPage; 