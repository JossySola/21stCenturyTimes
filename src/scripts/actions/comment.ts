const submitComment = () => {
    const url = "https://oauth.reddit.com/api/comment";
    /*
Submit a new comment or reply to a message.

parent is the fullname of the thing being replied to. Its value changes the kind of object created by this request:

the fullname of a Link: a top-level comment in that Link's thread. (requires submit scope)
the fullname of a Comment: a comment reply to that comment. (requires submit scope)
the fullname of a Message: a message reply to that message. (requires privatemessages scope)
text should be the raw markdown body of the comment or message.

To start a new message thread, use /api/compose.

api_type	
the string json

recaptcha_token	
a string

return_rtjson	
boolean value

richtext_json	
JSON data

text	
raw markdown text

thing_id	
fullname of parent thing

uh / X-Modhash header	
a modhash
    */
}

/*
POST /api/compose

Handles message composition under /message/compose.

api_type	
the string json

from_sr	
subreddit name

g-recaptcha-response	
subject	
a string no longer than 100 characters

text	
raw markdown text

to	
the name of an existing user

uh / X-Modhash header	
a modhash
*/