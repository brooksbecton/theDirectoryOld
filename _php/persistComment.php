<?php
      $file = "../_js/comments.json";

if (isset($_POST['user'])){
	  $user = $_POST['user'];
	  $comment = $_POST['comment'];
	  $date = $_POST['date'];
	  
	  $comments = json_decode(file_get_contents($file));
	  
	  $newComments = array('user'=> $user, 'comment'=>$comment, 'date'=>$date);
	  
	  arrary_unshift($comments, $newComments);
		
	  // Putting new comment
  file_put_contents($file, $comments);
} 
else {

  $comments = json_decode(file_get_contents($file));
  echo $comments;
	
}



?>