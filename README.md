# The Average HTTP Response

> You know when someone makes a really good pun and everyone just sighs at it
> in a combination of frustration and approval? This is the sort of code that
> gets that reaction.
>
> --Some Bloke

As calculated from the most recent daily batch of 
[telemetry data](https://telemetry.mozilla.org/) from the Firefox nightly build.

# But y tho?

I was looking over some logs, trying to see if a new feature I had made had 
resulted in an increase of errors/non-200 responses as a quick and dirty "Did
I break something" metric. I decided to throw the data in a spreadsheet and do
stats at it before trying to do anything Python-y or whatever, but forgot to
turn the error codes into strings, so they were treated as just values, meaning
I got back things like averages and the like. I had just learn that Mozilla puts
out public telemetry data, so I threw that into a spreadsheet, texted a friend
the entire story, and he responded

> Wow! That is AGGRESSIVELY useless!

At that point I knew I must tell the world...

# FAQ

## Could this have been server-side rendered?

Yes, but that would mean finding a place to host it or using Github Actions
and I felt like seeing how fast I could make the MVP. Maybe later though...

## Does this have any useful value in?

Nope.

## Are you sure?

Yep.

## But it feels like it should tell me something...

That's what "*agressively* useless" means. You sit there and stare at it hoping
it'll get embarrassed and tell you something, but the truth is it's just got
nothing to say...

# Acknowledgement

Shoutout to the Mozilla Foundation for making some of their telemetry data 
public, without which the world would have been spared this useless fact.
