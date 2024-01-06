<?php
     if (isset($_POST['submit'])) {
        $name = $_REQUEST['name'];
        $organozation = $_REQUEST['organization'];
        $email = $_REQUEST['email'];
        $phone = $_REQUEST['phone'];
        $subject_form = $_REQUEST['message'];
      // Set your email address where you want to receive emails. 
       $to = 'dheeraj@pinklemonade.in';
       $subject = $subject_form;
       $body='Name: '.$name."\n Organization: ".$organization."\n Email: ".$email."\n Phone: ".$phone."\n";
       $headers = "From: ".$name." <".$email."> \r\n";
       $send_email = mail($to,$subject,$body,$headers);
       echo ($send_email) ? 'success' : 'error';
  }?>