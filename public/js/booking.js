$('window').ready(()=>{
    $('#bookingForm').submit(e =>{
        e.preventDefault();
        let bookingForm = document.querySelector('#bookingForm')
        let jobTitle = bookingForm.jobTitle.value;
        let description = bookingForm.description.value;
        let amount = bookingForm.budget.value;
        let duration = bookingForm.duration.value;
        let category = bookingForm.category.value;
        let user = localStorage.getItem('userId');
        let freelancer = localStorage.getItem('freelancerId');
        let userId = user ? user: 0;
        let freelancerId = freelancer ? freelancer : 0;
        let username = localStorage.getItem('username');

        $.ajax({
            url: "http://localhost:3000/bookings",
            method: "post",
            data: {
                jobTitle,
                description,
                amount,
                category,
                duration,
                userId,
                username,
                freelancerId
            }
        }).done( response => {
            console.log(response)
        }).catch(err => console.log(err))
    })


//     // freelancer seeing the users that have booked him and the details of the booking
        let freelancer = localStorage.getItem('freelancerId');

        let freelancerId = freelancer ? freelancer : 0;

     $.ajax({
            url: `http://localhost:3000/bookings?freelanceid=${freelancerId}`,
            method: "get",
            
        }).done( response => {
            
           
            response.forEach(resp =>{
                 `
         
            <div class="card  md-4">
                <div class="card-title">
                    ${resp.jobTitle}
                </div>
                <div class="card-body">
                    <label for="description"> Job description</label>
                    <p>${resp.description}</p>
                    <label for="amount"> Amount</label>
                    <p>${resp.amount}</p>
                    <label for="duration"> duration</label>
                    <p>${resp.duration}</p>
                    <label for="description">Name of the username</label>
                    <p>${resp.username}</p>
                </div>
            </div>
            `
            })
            
        }).catch(err => console.log(err))
})