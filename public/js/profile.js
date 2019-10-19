$('window').ready(() =>{
    // creating the freelancer profile details
    let freelancer = window.localStorage.getItem('freelancerId');
    let freelancer_id = freelancer ? freelancer : 0;
    let profileId = window.localStorage.getItem('profileid')

    // $('freelancerProfile').submit(e => {
    //     e.preventDefault();
    //     let profileForm = $('form');
    //     let bio = profileForm.bio.value;
    //     let primarySkills = profileForm.primarySkills.value;
    //     let secondarySkills = profileForm.secondarySkills.value;
    //     // using tenary statement 
        

    //     $.ajax({
    //         url: "http://localhost:3000/profiles",
    //         method: "post",
    //         data:{
    //             bio,
    //             primarySkills,
    //             secondarySkills,
    //             freelancer_id
    //         }
    //     }).done( response =>{
    //         console.log(response);
    //     }).catch(err => console.log(err))
    // })

    // getting the response data from the json-server 
   


    // updating the list for the project

    


    // deleting the profile details

    $('#deleteProfile').submit(e =>{
        e.preventDefault()
        $.ajax({
            url: `http://localhost:3000/profiles/${profileId}`,
            method: "delete",
        }).done(() => {
            localStorage.removeItem('profileId');
        })
    })
    })

    