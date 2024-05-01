<template>
    <div class="form-container">
        <form action="action_page.php">
            <label for="fname">First Name</label><br>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."><br>

            <label for="lname">Last Name</label><br>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."><br>

            <label for="reason">Reason</label><br>
            <select id="reason" name="reason"><br>
                <option value="inquiry">Inquiry</option>
                <option value="issue">Issue</option>
                <option value="complaint">Complaint</option>
                <option value="other">other</option>
            </select>

            <label for="subject">Subject</label><br>
            <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea><br>

            <input type="submit" value="Submit">
        </form>
    </div> 
</template>

<style scoped>
.form-container {
    text-align: center;
}
</style>